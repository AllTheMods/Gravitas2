// priority 10

// =============================================================================
// NC → GT Fluid Solidifier Recipe Bridge
//
// Reads all NuclearCraft ingot_former recipes and registers equivalent
// GregTech fluid_solidifier recipes.
//
// NC ingot_former accepts a fluid and produces a solid item.
// GT fluid_solidifier does the same with a non-consumable casting mold.
//
// Skipped recipes:
//   - output is a minecraft: or gtceu: item — GT handles common/GT metals natively
//   - output is a forge tag with no matching nuclearcraft: item in the item registry
//   - output is any item whose gtceu: equivalent exists in the item registry
//
// Fluid amounts: 90 mB inputs are scaled to 144 mB (GT/TFC ingot standard).
// =============================================================================

// --- Config ------------------------------------------------------------------

// NC sometimes uses 90 mB for fluid ingot inputs; GT/TFC uses 144 mB.
const NC_IF_INGOT_MB = 90
const GT_IF_INGOT_MB = 144

// NC ingot_former recipe paths (everything after "nuclearcraft:ingot_former/") to skip.
const NC_IF_EXCLUDED_PATHS = {
  "boron_arsenide": true,  // GT handles this via chemical reactor
}

// Hardcoded overrides for NC forge-tag inputs that should resolve to a specific
// GT fluid. Used for materials that have a GT fluid but no GT ingot item, so the
// forge:molten_* tag is populated only by the NC fluid — not the GT one.
// Keys are the NC forge tag string; values are the concrete GT fluid ID.
const NC_IF_FLUID_OVERRIDES = {
  "forge:molten_lithium":  "gtceu:lithium",
  "forge:molten_magnesium": "gtceu:magnesium",
}

// --- Helpers -----------------------------------------------------------------

/**
 * Converts one NC ingot_former fluid entry to a tag- or concrete-based
 * GTCEu FluidIngredientJS, scaling 90 mB → 144 mB.
 *
 * {tag: "forge:molten_iron", amount: 144}            → "#forge:molten_iron 144"
 * {fluid: "nuclearcraft:boron_arsenide", amount: 90} → "nuclearcraft:boron_arsenide 144"
 *
 * Returns null for missing or zero-amount entries.
 */
function ncIfFJI(entry) {
  if (!entry) {
    return null
  }
  const rawAmount = Number(entry.amount) || 0
  const amount = rawAmount === NC_IF_INGOT_MB ? GT_IF_INGOT_MB : rawAmount
  if (amount <= 0) {
    return null
  }
  if (entry.tag) {
    return $FluidIngredientJS.of("#" + String(entry.tag) + " " + amount)
  }
  if (entry.fluid) {
    return $FluidIngredientJS.of(String(entry.fluid) + " " + amount)
  }
  return null
}

/**
 * Resolves an NC ingot_former output entry to a concrete item ID, or null if
 * the recipe should be skipped because another mod already covers it.
 *
 * {item: "nuclearcraft:*"} → use as-is (unless gtceu:{path} exists)
 * {item: "other_ns:*"}    → null  (other mod owns this item)
 * {tag: "forge:ingots/m"} → null if gtceu:{m}_ingot exists (GT handles it);
 *                           else nuclearcraft:{m}_ingot if registered
 * {tag: "forge:other"}    → nuclearcraft:{sanitized} if registered; else null
 *
 * Note: forge item tag membership queries are unreliable at recipe event time
 * because tags are not yet bound. Registry presence checks (containsKey) are
 * used instead — these are always populated before recipes run.
 */
function resolveNcIfOutput(output) {
  if (!output) {
    return null
  }

  if (output.item) {
    const itemId = String(output.item)
    const colon = itemId.indexOf(":")
    if (colon < 0) {
      return null
    }
    const ns = itemId.substring(0, colon)
    const path = itemId.substring(colon + 1)
    // Only create solidifier recipes for NC items — if another mod owns the item,
    // that mod (or GT natively) already provides a solidifier recipe for it.
    if (ns !== "nuclearcraft") {
      return null
    }
    if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", path))) {
      return null
    }
    return itemId
  }

  if (output.tag) {
    const tagPath = String(output.tag).replace(/^forge:/, "")

    // For forge:ingots/{material}: skip if GT has {material}_ingot — it already
    // provides a solidifier recipe for that material. NC-specific alloys
    // (ferroboron, tin_silver, thermoconducting, etc.) have no GT equivalent,
    // so they pass through to the NC item check below.
    const ingotMatch = tagPath.match(/^ingots\/(.+)$/)
    if (ingotMatch) {
      const material = ingotMatch[1]
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", material + "_ingot"))) {
        return null
      }
      const ncIngot = material + "_ingot"
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", ncIngot))) {
        return "nuclearcraft:" + ncIngot
      }
      return null
    }

    // For other tags (forge:beryllium_7, forge:cobalt_60, etc.): sanitize path directly.
    const ncItemPath = tagPath.replace(/\//g, "_")
    if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", ncItemPath))) {
      return "nuclearcraft:" + ncItemPath
    }
    return null
  }

  return null
}

var ncIfRegisteredIds = {}

// --- Main function -----------------------------------------------------------

let ncIngotFormerToGtSolidifier = (/** @type {Internal.RecipesEventJS} */ event) => {
  let converted = 0
  let skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:ingot_former" }, (recipe) => {
    const ncPath = String(recipe.id).replace("nuclearcraft:ingot_former/", "")
    if (NC_IF_EXCLUDED_PATHS[ncPath]) {
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

    // Fluid input — always the first (and only) entry in inputFluids
    const rawInputs = Array.isArray(json.inputFluids) ? json.inputFluids : []
    let fji = ncIfFJI(rawInputs[0])
    if (!fji) {
      skipped++
      return
    }

    const rawEntry = rawInputs[0]

    // Override: some NC forge-tag inputs (e.g. forge:molten_lithium) resolve to
    // the NC fluid because the forge tag only contains the NC fluid — GT has the
    // same material as a fluid but never added it to the forge molten tag. Use
    // the GT concrete fluid ID directly for these cases.
    if (rawEntry && rawEntry.tag) {
      var gtFluid = NC_IF_FLUID_OVERRIDES[String(rawEntry.tag)]
      if (gtFluid) {
        var rawAmt = Number(rawEntry.amount) || 0
        var amt = rawAmt === NC_IF_INGOT_MB ? GT_IF_INGOT_MB : rawAmt
        fji = $FluidIngredientJS.of(gtFluid + " " + amt)
      }
    }

    // Item output — first entry in output array (NC ingot_former always has one output)
    const rawOutputs = Array.isArray(json.output) ? json.output : (json.output != null ? [json.output] : [])
    const outputItem = resolveNcIfOutput(rawOutputs[0])
    if (!outputItem) {
      skipped++
      return
    }

    const gtId = "gregitas:nc_solid/" + String(recipe.id)
      .replace(/^[^:]+:/, "")
      .replace(/^ingot_former\//, "")
      .replace(/[^a-z0-9_.\-]/g, "_")

    if (ncIfRegisteredIds[gtId]) {
      console.warn("[NC→GT Solidifier] ID collision: " + gtId + " skipping " + recipe.id)
      skipped++
      return
    }
    ncIfRegisteredIds[gtId] = recipe.id

    // Mold, power, and time based on the input fluid/tag identifier:
    //   fluid path starts with "fuel"  → cylinder mold, HV, 8 s
    //   tag path contains "/"          → ball mold,     HV, 1 s
    //   everything else                → ingot mold,    ULV, 1 s
    const entryPath = rawEntry.fluid
      ? String(rawEntry.fluid).replace(/^[^:]+:/, "")
      : String(rawEntry.tag || "").replace(/^forge:/, "")
    let mold, eut, duration
    if (entryPath.startsWith("fuel")) {
      mold = "gtceu:cylinder_casting_mold"
      eut = HV
      duration = 160  // 8 seconds
    } else if (rawEntry.tag && entryPath.includes("/")) {
      mold = "gtceu:ball_casting_mold"
      eut = HV
      duration = 20   // 1 second
    } else {
      mold = "gtceu:ingot_casting_mold"
      eut = ULV
      duration = 20   // 1 second
    }

    try {
      var r = event.recipes.gtceu.fluid_solidifier(gtId)
        .itemOutputs(outputItem)
        .notConsumable(mold)
        .EUt(eut)
        .duration(duration)
      r.input($FluidRecipeCapability.CAP, fji)
      converted++
    } catch (e) {
      console.error("[NC→GT Solidifier] Failed: " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(`[NC→GT] Solidifier: ${converted} converted, ${skipped} skipped`)
}
