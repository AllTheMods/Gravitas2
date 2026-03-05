// priority 10

// =============================================================================
// NC → GT Macerator Recipe Bridge
//
// Reads all NuclearCraft manufactory recipes and registers equivalent
// GregTech macerator recipes.
//
// NC manufactory accepts a solid item and creates a dust.
// GT macerator does the same.
//
// Skipped recipes:
//   - explicit skip list (porkchop, salmon, cod, sugar_cane, silicon_boule)
//   - input item belongs to minecraft: namespace — GT macerator handles all vanilla
//   - input item belongs to a non-nuclearcraft, non-minecraft namespace
//   - input tag is forge:ingots/{m} and gtceu:{m}_ingot exists
//   - input tag is forge:gems/{m}  and gtceu:{m}_gem  exists
//   - output cannot be resolved to a concrete item
//
// Power: Math.round(LV * powerModifier)  EU/t
// Time:  Math.round(200 * timeModifier)  ticks
// =============================================================================

// --- Config ------------------------------------------------------------------

const NC_MA_BASE_DURATION = 200

// NC manufactory recipe paths (everything after "nuclearcraft:manufactory/") to skip.
const NC_MA_EXCLUDED_PATHS = {
  // For making NC Gelatin, GT Gelatin will be used instead
  porkchop:     true,
  salmon:       true,
  cod:          true,
  // Bioplastic, to be replace by a new GT process
  sugar_cane:   true,
  // Will be replaced by GT silicon crafting
  silicon_boule: true,
  // Already handled in GT
  gems_fluorite:    true,
  // NC Ores
  lithium_chunk:    true,
  thorium_chunk:    true,
  magnesium_chunk:  true,
  uranium_chunk:    true,
  boron_chunk:      true,
  ingots_aluminum:  true,
}

// Ingot input bypass: NC ingots for these materials are always bridged to GT macerator,
// even if a gtceu:{m}_ingot happens to be registered. The output dust is resolved by
// resolveNcMaOutput (prefers gtceu:{m}_dust). No GT ingot exists for these in practice;
// the bypass guard is a safety net against future GT material additions.
const NC_MA_INGOT_BYPASS = {
  "forge:ingots/sodium":    true,  // → gtceu:sodium_dust
  "forge:ingots/lithium":   true,  // → gtceu:lithium_dust
  "forge:ingots/magnesium": true,  // → gtceu:magnesium_dust
  "forge:ingots/calcium":   true,  // → gtceu:calcium_dust
}

// --- Helpers -----------------------------------------------------------------

/**
 * Resolves an NC manufactory input entry to a GT item ingredient string,
 * or null if the recipe should be skipped.
 *
 * {item: "nuclearcraft:X"} → "nuclearcraft:X"
 * {item: "minecraft:X"}    → null  (GT handles all vanilla grinding)
 * {item: "othermod:X"}     → null  (other mod owns it)
 * {tag: "forge:ingots/m"}  → "#forge:ingots/m" if in NC_MA_INGOT_BYPASS (bypass GT check);
 *                             null if gtceu:m_ingot exists;
 *                             "#forge:ingots/m" if nuclearcraft:m_ingot registered
 * {tag: "forge:gems/m"}    → null if gtceu:m_gem exists;
 *                             "#forge:gems/m" if nuclearcraft:m_gem registered
 * other tags               → null  (conservative)
 */
function resolveNcMaInput(input) {
  if (!input) {
    return null
  }

  if (input.item) {
    const itemId = String(input.item)
    const colon = itemId.indexOf(":")
    if (colon < 0) {
      return null
    }
    const ns = itemId.substring(0, colon)
    if (ns === "nuclearcraft") {
      return itemId
    }
    // minecraft: and all other namespaces → skip
    return null
  }

  if (input.tag) {
    const tagPath = String(input.tag).replace(/^forge:/, "")

    const ingotMatch = tagPath.match(/^ingots\/(.+)$/)
    if (ingotMatch) {
      const material = ingotMatch[1]
      const forgeTag = "forge:ingots/" + material
      // Bypass the GT-ingot check for NC-only ingots that also happen to have a GT dust counterpart.
      if (NC_MA_INGOT_BYPASS[forgeTag]) {
	return "#" + forgeTag
      }
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", String(material) + "_ingot"))) {
	return null
      }
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", String(material) + "_ingot"))) {
        return "#forge:ingots/" + material
      }
      return null
    }

    const gemMatch = tagPath.match(/^gems\/(.+)$/)
    if (gemMatch) {
      const material = gemMatch[1]
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", String(material) + "_gem"))) {
	return null
      }
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", String(material) + "_gem"))) {
        return "#forge:gems/" + material
      }
      return null
    }

    return null
  }

  return null
}

/**
 * Resolves an NC manufactory output entry to a concrete GT item ID string,
 * or null if the recipe should be skipped.
 *
 * {item: "nuclearcraft:X"} → "nuclearcraft:X"
 * {item: "minecraft:X"}    → "minecraft:X"
 * {item: "othermod:X"}     → null
 * {tag: "forge:dusts/m"}   → "gtceu:m_dust"   if gtceu:m_dust exists  (prefer GT)
 *                          → "nuclearcraft:m_dust" if nc:m_dust exists
 *                          → null otherwise
 * other tags               → null
 */
function resolveNcMaOutput(output) {
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
    if (ns === "nuclearcraft" || ns === "minecraft") {
      return itemId
    }
    return null
  }

  if (output.tag) {
    const tagPath = String(output.tag).replace(/^forge:/, "")

    const dustMatch = tagPath.match(/^dusts\/(.+)$/)
    if (dustMatch) {
      const material = dustMatch[1]
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", String(material) + "_dust"))) {
        return "gtceu:" + material + "_dust"
      }
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", String(material) + "_dust"))) {
        return "nuclearcraft:" + material + "_dust"
      }
      return null
    }

    return null
  }

  return null
}

var ncMaRegisteredIds = {}

// --- Main function -----------------------------------------------------------

let ncManufactoryToGtMacerator = (/** @type {Internal.RecipesEventJS} */ event) => {
  let converted = 0
  let skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:manufactory" }, (recipe) => {
    const ncPath = String(recipe.id).replace("nuclearcraft:manufactory/", "")

    if (NC_MA_EXCLUDED_PATHS[ncPath]) {
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

    // --- Input ---
    const rawInputs = Array.isArray(json.input) ? json.input : (json.input != null ? [json.input] : [])
    const inputEntry = rawInputs[0]
    const inputItem = resolveNcMaInput(inputEntry)
    if (!inputItem) {
      skipped++
      return
    }
    const inputCount = (inputEntry && inputEntry.count > 1) ? inputEntry.count : 1
    const inputStr = inputCount > 1 ? (inputCount + "x " + inputItem) : inputItem

    // --- Output ---
    const rawOutputs = Array.isArray(json.output) ? json.output : (json.output != null ? [json.output] : [])
    const outputEntry = rawOutputs[0]
    const outputItem = resolveNcMaOutput(outputEntry)
    if (!outputItem) {
      skipped++
      return
    }
    const outputCount = (outputEntry && outputEntry.count > 1) ? outputEntry.count : 1
    const outputStr = outputCount > 1 ? (outputCount + "x " + outputItem) : outputItem

    // --- Power / time ---
    const powerModifier = Number(json.powerModifier) || 1.0
    const timeModifier = Number(json.timeModifier) || 1.0
    const eut = Math.round(LV * powerModifier)
    const duration = Math.round(NC_MA_BASE_DURATION * timeModifier)

    // --- Recipe ID ---
    const gtId = "gregitas:nc_mace/" + ncPath.replace(/[^a-z0-9_.\-]/g, "_")

    if (ncMaRegisteredIds[gtId]) {
      console.warn("[NC→GT Macerator] ID collision: " + gtId + " (skipping " + recipe.id + ")")
      skipped++
      return
    }
    ncMaRegisteredIds[gtId] = recipe.id

    try {
      event.recipes.gtceu
        .macerator(gtId)
        .itemInputs(inputStr)
        .itemOutputs(outputStr)
        .EUt(eut)
        .duration(duration)
      converted++
    } catch (e) {
      console.error("[NC→GT Macerator] Failed: " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(`[NC→GT] Macerator: ${converted} converted, ${skipped} skipped`)
}
