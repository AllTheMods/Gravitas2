// priority 10

// =============================================================================
// NC → GT Mixer Recipe Bridge (fluid_enricher)
//
// Reads all NuclearCraft fluid_enricher recipes and registers equivalent
// GregTech mixer recipes. Each NC recipe takes one solid item plus one input
// fluid and produces one output fluid (dissolution / extraction reactions).
//
// NC powerModifier and timeModifier scale from the base EUt/duration constants
// defined below.
// =============================================================================

// --- Knobs -------------------------------------------------------------------

// Mixer: LV-tier — simple dust-dissolution chemistry (cf. limewater_from_flux).
const NC_FE_BASE_EUT  = LV  // 32 EU/t
const NC_FE_BASE_TIME = 100  // 5 seconds

// --- Exclusions --------------------------------------------------------------
//
// NC fluid_enricher recipe paths to skip. Either handled elsewhere or excluded
// at user request.

const NC_FE_EXCLUDED_PATHS = {
  "glowing_mushroom-redstone_ethanol": true,  // excluded by user
  "dusts_iodine-potassium_hydroxide":  true,  // excluded by user
  "dusts_uranium-oxygen":              true,  // excluded by user
  "salt-water":                        true,  // excluded by user
}

// --- Helpers -----------------------------------------------------------------

/**
 * Sanitizes an NC fluid_enricher recipe ID into a GT recipe ID.
 * e.g. "nuclearcraft:fluid_enricher/dusts_borax-water" → "gregitas:nc_fenrich/dusts_borax-water"
 */
function sanitizeFEId(ncId) {
  var path = String(ncId)
    .replace(/^[^:]+:/, "")
    .replace(/^fluid_enricher\//, "")
  return "gregitas:nc_fenrich/" + path.replace(/[^a-z0-9_.\-]/g, "_")
}

/**
 * Resolves an NC fluid_enricher input[] entry to a KubeJS itemInputs string.
 * { "tag": "forge:dusts/borax" }                       → "#forge:dusts/borax"
 * { "item": "nuclearcraft:glowing_mushroom", "count": 3 } → "3x nuclearcraft:glowing_mushroom"
 * { "item": "nuclearcraft:glowing_mushroom" }            → "nuclearcraft:glowing_mushroom"
 * Returns null for unrecognised entries.
 */
function resolveFEItemInput(entry) {
  if (!entry) {
    return null
  }
  if (entry.tag) {
    return "#" + String(entry.tag)
  }
  if (entry.item) {
    var count = entry.count ? entry.count : 1
    return count > 1 ? count + "x " + String(entry.item) : String(entry.item)
  }
  return null
}

// --- Main function -----------------------------------------------------------

let ncFluidEnricherToGtMixer = (/** @type {Internal.RecipesEventJS} */ event) => {
  var converted = 0
  var excluded = 0
  var skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:fluid_enricher" }, (recipe) => {
    var ncPath = String(recipe.id).replace("nuclearcraft:fluid_enricher/", "")

    if (NC_FE_EXCLUDED_PATHS[ncPath]) {
      excluded++
      return
    }

    var json
    try {
      json = JSON.parse(recipe.json)
    } catch (e) {
      console.error("[NC→GT] Fluid Enricher: failed to parse JSON for " + recipe.id + " — " + e)
      skipped++
      return
    }

    // Resolve item input
    var rawInputs = Array.isArray(json.input) ? json.input : []
    if (rawInputs.length === 0) {
      console.error("[NC→GT] Fluid Enricher: no input[] for " + recipe.id)
      skipped++
      return
    }
    var itemStr = resolveFEItemInput(rawInputs[0])
    if (!itemStr) {
      console.error("[NC→GT] Fluid Enricher: unresolvable item input for " + recipe.id)
      skipped++
      return
    }

    // Resolve fluid input/output
    var rawInFluids  = Array.isArray(json.inputFluids)  ? json.inputFluids  : []
    var rawOutFluids = Array.isArray(json.outputFluids) ? json.outputFluids : []
    if (rawInFluids.length === 0 || rawOutFluids.length === 0) {
      console.error("[NC→GT] Fluid Enricher: missing fluids for " + recipe.id)
      skipped++
      return
    }

    var inputFJI  = ncInputFJI(rawInFluids[0],  1.0)
    var outputFJI = ncOutputFJI(rawOutFluids[0], 1.0)
    if (!inputFJI || !outputFJI) {
      console.error("[NC→GT] Fluid Enricher: null FJI for " + recipe.id)
      skipped++
      return
    }

    var powerModifier = json.powerModifier != null ? Number(json.powerModifier) : 1.0
    var timeModifier  = json.timeModifier  != null ? Number(json.timeModifier)  : 1.0
    var eut      = Math.max(1, Math.round(NC_FE_BASE_EUT  * powerModifier))
    var duration = Math.max(1, Math.round(NC_FE_BASE_TIME * timeModifier))

    var gtId = sanitizeFEId(recipe.id)

    try {
      var r = event.recipes.gtceu.mixer(gtId)
        .itemInputs(itemStr)
        .EUt(eut)
        .duration(duration)
      r.input($FluidRecipeCapability.CAP, inputFJI)
      r.output($FluidRecipeCapability.CAP, outputFJI)
      converted++
    } catch (e) {
      console.error("[NC→GT] Fluid Enricher: failed to register " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(`[NC→GT] Fluid Enricher: ${converted} converted, ${excluded} excluded, ${skipped} skipped`)
}
