// priority 10

// =============================================================================
// NC → GT Assembler Recipe Bridge
//
// Bridges two groups of nuclearcraft:assembler recipes to GT:
//
// 1. Fuel recipes  (path starts with "fuel_")  → GT forming_press
//    NC assembler: fuel pellet + cladding materials → TRISO-coated fuel
//    GT forming_press: same inputs → same output, HV tier
//
// 2. Dust recipes  (path contains "dust", excluding fuel_ prefix)  → GT mixer
//    NC assembler: multiple dust/item inputs → alloy product
//    GT mixer: same inputs → same output, LV tier
//
// Skipped recipes:
//   - ae2_* (have native GT circuit_assembler recipes)
//   - recipes where any input cannot be resolved
//   - recipes with tag-based outputs (GT needs a concrete output item)
// =============================================================================

// --- Config ------------------------------------------------------------------

const NC_ASM_FUEL_BASE_EUT = 512 // HV
const NC_ASM_FUEL_BASE_DURATION = 200

const NC_ASM_DUST_BASE_EUT = 32 // LV
const NC_ASM_DUST_BASE_DURATION = 200

const NC_ASM_EXCLUDED_PATHS = {
  ae2_calculation_processor: true,
  ae2_engineering_processor: true,
  ae2_logic_processor: true,
}

// --- Helpers -----------------------------------------------------------------

/**
 * Converts one NC assembler input entry to a GT item ingredient string,
 * or null if the entry cannot be resolved.
 *
 * {item: "nuclearcraft:X", count: N} → "Nx nuclearcraft:X"
 * {tag: "forge:dusts/graphite"}      → "#forge:dusts/graphite"
 */
function ncAsmInputStr(entry) {
  if (!entry) {
    return null
  }
  var prefix = entry.count && entry.count > 1 ? entry.count + "x " : ""
  if (entry.item) {
    return prefix + String(entry.item)
  }
  if (entry.tag) {
    return prefix + "#" + String(entry.tag)
  }
  return null
}

/**
 * Converts one NC assembler output entry to a concrete GT item output string,
 * or null if the entry cannot be resolved.
 *
 * {item: "nuclearcraft:X", count: N} → "Nx nuclearcraft:X"
 * {tag: "forge:dusts/X"}             → "gtceu:X_dust" or "nuclearcraft:X_dust"
 * other tags                         → null
 */
function ncAsmOutputStr(entry) {
  if (!entry) {
    return null
  }
  var prefix = entry.count && entry.count > 1 ? entry.count + "x " : ""
  if (entry.item) {
    return prefix + String(entry.item)
  }
  if (entry.tag) {
    var tagStr = String(entry.tag)
    var dustMatch = tagStr.match(/^forge:dusts\/(.+)$/)
    if (dustMatch) {
      var material = dustMatch[1]
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", String(material) + "_dust"))) {
        return prefix + "gtceu:" + material + "_dust"
      }
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", String(material) + "_dust"))) {
        return prefix + "nuclearcraft:" + material + "_dust"
      }
    }
    return null // unresolvable tag
  }
  return null
}

var ncFuelPressRegisteredIds = {}
var ncAsmMixRegisteredIds = {}

// --- Fuel: NC Assembler → GT Forming Press -----------------------------------

let ncAssemblerFuelToGtFormingPress = (/** @type {Internal.RecipesEventJS} */ event) => {
  let converted = 0
  let skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:assembler" }, (recipe) => {
    const ncPath = String(recipe.id).replace("nuclearcraft:assembler/", "")

    if (ncPath.indexOf("fuel_") !== 0) return // only fuel recipes

    if (NC_ASM_EXCLUDED_PATHS[ncPath]) {
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

    // Unwrap forge:conditional if present
    if (json.type === "forge:conditional" && json.recipes && json.recipes[0]) {
      json = json.recipes[0].recipe
    }

    // --- Inputs ---
    const rawInputs = Array.isArray(json.input) ? json.input : json.input != null ? [json.input] : []
    if (rawInputs.length === 0) {
      skipped++
      return
    }

    var itemInputs = []
    var inputsOk = true
    for (var ii = 0; ii < rawInputs.length; ii++) {
      var inStr = ncAsmInputStr(rawInputs[ii])
      if (!inStr) {
        inputsOk = false
        break
      }
      itemInputs.push(inStr)
    }
    if (!inputsOk) {
      skipped++
      return
    }

    // --- Output ---
    const rawOutputs = Array.isArray(json.output) ? json.output : json.output != null ? [json.output] : []
    const outStr = ncAsmOutputStr(rawOutputs[0])
    if (!outStr) {
      skipped++
      return
    }

    // --- Power / time ---
    const powerModifier = Number(json.powerModifier) || 1.0
    const timeModifier = Number(json.timeModifier) || 1.0
    const eut = Math.round(NC_ASM_FUEL_BASE_EUT * powerModifier)
    const duration = Math.round(NC_ASM_FUEL_BASE_DURATION * timeModifier)

    // --- Recipe ID ---
    const gtId = "gregitas:nc_fuel_press/" + ncPath.replace(/[^a-z0-9_.\-]/g, "_")

    if (ncFuelPressRegisteredIds[gtId]) {
      console.warn("[NC→GT FormingPress] ID collision: " + gtId + " (skipping " + recipe.id + ")")
      skipped++
      return
    }
    ncFuelPressRegisteredIds[gtId] = recipe.id

    try {
      event.recipes.gtceu.forming_press(gtId).itemInputs(itemInputs).itemOutputs(outStr).EUt(eut).duration(duration)
      converted++
    } catch (e) {
      console.error("[NC→GT FormingPress] Failed: " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(`[NC→GT] FormingPress (fuel): ${converted} converted, ${skipped} skipped`)
}

// --- Dust: NC Assembler → GT Mixer -------------------------------------------

let ncAssemblerDustToGtMixer = (/** @type {Internal.RecipesEventJS} */ event) => {
  let converted = 0
  let skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:assembler" }, (recipe) => {
    const ncPath = String(recipe.id).replace("nuclearcraft:assembler/", "")

    if (ncPath.indexOf("fuel_") === 0) return // fuel recipes handled by forming_press bridge

    if (NC_ASM_EXCLUDED_PATHS[ncPath]) {
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

    // Unwrap forge:conditional if present
    if (json.type === "forge:conditional" && json.recipes && json.recipes[0]) {
      json = json.recipes[0].recipe
    }

    // --- Output (resolve early to filter by output item ID) ---
    const rawOutputs = Array.isArray(json.output) ? json.output : json.output != null ? [json.output] : []
    const outStr = ncAsmOutputStr(rawOutputs[0])
    if (!outStr || outStr.indexOf("dust") === -1) {
      skipped++
      return
    }

    // --- Inputs ---
    const rawInputs = Array.isArray(json.input) ? json.input : json.input != null ? [json.input] : []
    if (rawInputs.length === 0) {
      skipped++
      return
    }

    var itemInputs = []
    var inputsOk = true
    for (var ii = 0; ii < rawInputs.length; ii++) {
      var inStr = ncAsmInputStr(rawInputs[ii])
      if (!inStr) {
        inputsOk = false
        break
      }
      itemInputs.push(inStr)
    }
    if (!inputsOk) {
      skipped++
      return
    }

    // --- Power / time ---
    const powerModifier = Number(json.powerModifier) || 1.0
    const timeModifier = Number(json.timeModifier) || 1.0
    const eut = Math.round(NC_ASM_DUST_BASE_EUT * powerModifier)
    const duration = Math.round(NC_ASM_DUST_BASE_DURATION * timeModifier)

    // --- Recipe ID ---
    const gtId = "gregitas:nc_asm_mix/" + ncPath.replace(/[^a-z0-9_.\-]/g, "_")

    if (ncAsmMixRegisteredIds[gtId]) {
      console.warn("[NC→GT Mixer (asm)] ID collision: " + gtId + " (skipping " + recipe.id + ")")
      skipped++
      return
    }
    ncAsmMixRegisteredIds[gtId] = recipe.id

    try {
      event.recipes.gtceu.mixer(gtId).itemInputs(itemInputs).itemOutputs(outStr).EUt(eut).duration(duration)
      converted++
    } catch (e) {
      console.error("[NC→GT Mixer (asm)] Failed: " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(`[NC→GT] Mixer (asm-dust): ${converted} converted, ${skipped} skipped`)
}
