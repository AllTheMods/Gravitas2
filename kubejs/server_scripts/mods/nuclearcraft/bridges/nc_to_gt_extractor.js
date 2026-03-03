// priority 10

// =============================================================================
// NC → GT Extractor Recipe Bridge
//
// Reads all NuclearCraft melter recipes and registers equivalent
// GregTech extractor recipes.
//
// NC melter accepts a solid item and produces a molten fluid.
// GT extractor does the same.
//
// Skipped recipes:
//   - input tag is forge:ores/* or forge:raw_materials/* — handled elsewhere
//   - input item belongs to a non-nuclearcraft namespace
//   - input tag is forge:ingots/{m} / forge:dusts/{m}
//     and gtceu:{m}_ingot / gtceu:{m}_dust exists
//
// Fluid amounts: 90 mB outputs are scaled to 144 mB (GT/TFC ingot standard).
// =============================================================================

// --- Config ------------------------------------------------------------------

// Power and time per recipe category (output fluid type determines tier).
const NC_ME_EUT_INGOT  = LV   // 32 EU/t  — standard alloy ingots/dusts
const NC_ME_TIME_INGOT = 100  // 5 seconds
const NC_ME_EUT_ISO    = HV   // 512 EU/t — fission isotopes
const NC_ME_TIME_ISO   = 40   // 2 seconds
const NC_ME_EUT_FUEL   = HV   // 512 EU/t — liquid fuel
const NC_ME_TIME_FUEL  = 80   // 4 seconds

// NC uses 90 mB as "1 ingot" for melted fluid outputs; GT/TFC uses 144 mB.
const NC_ME_INGOT_MB = 90
const GT_ME_INGOT_MB = 144

// NC melter recipe paths (everything after "nuclearcraft:melter/") to skip.
const NC_ME_EXCLUDED_PATHS = {}

// Hardcoded overrides for NC forge-tag outputs that should resolve to a specific
// GT fluid. Used for materials where GT registers the fluid under a different
// name than the forge:molten_* tag (e.g. gtceu:lithium not gtceu:molten_lithium).
const NC_ME_FLUID_OVERRIDES = {
  "forge:molten_lithium":   "gtceu:lithium",
  "forge:molten_magnesium": "gtceu:magnesium",
}

// --- Helpers -----------------------------------------------------------------

/**
 * Resolves an NC melter input entry to a GT item ingredient string, or null
 * if the recipe should be skipped.
 *
 * {item: "nuclearcraft:X"} → "nuclearcraft:X"
 * {item: "other_ns:X"}    → null  (other mod owns it)
 * {tag: "forge:ores/..."}           → null  (skip ore inputs)
 * {tag: "forge:raw_materials/..."}  → null  (skip raw ore inputs)
 * {tag: "forge:ingots/{m}"}         → null if gtceu:{m}_ingot exists;
 *                                      else "#forge:ingots/{m}" if nuclearcraft:{m}_ingot registered
 * {tag: "forge:dusts/{m}"}          → null if gtceu:{m}_dust exists;
 *                                      else "#forge:dusts/{m}" if nuclearcraft:{m}_dust registered
 * other tags                        → null
 *
 * Note: forge item tag membership queries are unreliable at recipe event time.
 * Registry presence checks (containsKey) are used instead.
 */
function resolveNcMeInput(input) {
  if (!input) return null

  if (input.item) {
    const itemId = String(input.item)
    const colon = itemId.indexOf(":")
    if (colon < 0) return null
    if (itemId.substring(0, colon) !== "nuclearcraft") return null
    return itemId
  }

  if (input.tag) {
    const tagPath = String(input.tag).replace(/^forge:/, "")

    if (tagPath.startsWith("ores/")) return null

    const ingotMatch = tagPath.match(/^ingots\/(.+)$/)
    if (ingotMatch) {
      const material = ingotMatch[1]
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", material + "_ingot"))) return null
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", material + "_ingot"))) {
        return "#forge:ingots/" + material
      }
      return null
    }

    const dustMatch = tagPath.match(/^dusts\/(.+)$/)
    if (dustMatch) {
      const material = dustMatch[1]
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", material + "_dust"))) return null
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", material + "_dust"))) {
        return "#forge:dusts/" + material
      }
      return null
    }

    if (tagPath.startsWith("raw_materials/")) return null

    return null
  }

  return null
}

/**
 * Converts one NC melter fluid output entry to a GTCEu FluidIngredientJS,
 * scaling 90 mB → 144 mB and applying GT fluid overrides where needed.
 *
 * Returns null for missing or zero-amount entries.
 */
function ncMeOutputFJI(entry) {
  if (!entry || (!entry.tag && !entry.fluid) || !entry.amount) return null
  const rawAmount = Number(entry.amount) || 0
  const amount = rawAmount === NC_ME_INGOT_MB ? GT_ME_INGOT_MB : rawAmount
  if (amount <= 0) return null
  if (entry.tag) {
    const tag = String(entry.tag)
    const override = NC_ME_FLUID_OVERRIDES[tag]
    if (override) {
      return $FluidIngredientJS.of(override + " " + amount)
    }
    return $FluidIngredientJS.of("#" + tag + " " + amount)
  }
  return $FluidIngredientJS.of(String(entry.fluid) + " " + amount)
}

var ncMeRegisteredIds = {}

// --- Main function -----------------------------------------------------------

let ncMelterToGtExtractor = (/** @type {Internal.RecipesEventJS} */ event) => {
  let converted = 0
  let skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:melter" }, (recipe) => {
    const ncPath = String(recipe.id).replace("nuclearcraft:melter/", "")
    if (NC_ME_EXCLUDED_PATHS[ncPath]) {
      skipped++
      return
    }

    let json
    try {
      json = JSON.parse(recipe.json)
    } catch (e) {
      skipped++
      return
    }

    // Item input — always the first (and only) entry in input
    const rawInputs = Array.isArray(json.input) ? json.input : (json.input != null ? [json.input] : [])
    const inputItem = resolveNcMeInput(rawInputs[0])
    if (!inputItem) {
      skipped++
      return
    }

    // Fluid output — always the first (and only) entry in outputFluids
    const rawOutputs = Array.isArray(json.outputFluids) ? json.outputFluids : []
    const fji = ncMeOutputFJI(rawOutputs[0])
    if (!fji) {
      skipped++
      return
    }

    const gtId = "gregitas:nc_melt/" + String(recipe.id)
      .replace(/^[^:]+:/, "")
      .replace(/^melter\//, "")
      .replace(/[^a-z0-9_.\-]/g, "_")

    if (ncMeRegisteredIds[gtId]) {
      console.warn("[NC→GT Extractor] ID collision: " + gtId + " skipping " + recipe.id)
      skipped++
      return
    }
    ncMeRegisteredIds[gtId] = recipe.id

    // Power and time based on the output fluid identifier:
    //   fluid path starts with "fuel"  → NC_ME_FUEL  (liquid fuel)
    //   tag path contains "/"          → NC_ME_ISO   (fission isotopes: forge:element/mass)
    //   everything else                → NC_ME_INGOT
    const outEntry = rawOutputs[0]
    const outPath = outEntry.fluid
      ? String(outEntry.fluid).replace(/^[^:]+:/, "")
      : String(outEntry.tag || "").replace(/^forge:/, "")
    let eut, duration
    if (outPath.startsWith("fuel")) {
      eut = NC_ME_EUT_FUEL
      duration = NC_ME_TIME_FUEL
    } else if (outPath.includes("/")) {
      eut = NC_ME_EUT_ISO
      duration = NC_ME_TIME_ISO
    } else {
      eut = NC_ME_EUT_INGOT
      duration = NC_ME_TIME_INGOT
    }

    try {
      var r = event.recipes.gtceu.extractor(gtId)
        .itemInputs(inputItem)
        .EUt(eut)
        .duration(duration)
      r.output($FluidRecipeCapability.CAP, fji)
      converted++
    } catch (e) {
      console.error("[NC→GT Extractor] Failed: " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(`[NC→GT] Extractor: ${converted} converted, ${skipped} skipped`)
}
