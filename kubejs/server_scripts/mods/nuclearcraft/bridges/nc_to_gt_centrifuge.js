// priority 10

// =============================================================================
// NC → GT Centrifuge Recipe Bridge (centrifuge)
//
// Reads all NuclearCraft centrifuge recipes and registers equivalent
// GregTech centrifuge recipes. NC centrifuge is used primarily for isotope
// separation: depleted fuel reprocessing, irradiated material separation,
// and nuclear waste processing.
//
// Skipped:
//   - any recipe ID containing "slurry" (handled by ore-processing chain)
//   - explicit exclusion list (carbon_dioxide)
//
// NC powerModifier and timeModifier scale from the base EUt/duration below.
// =============================================================================

// --- Knobs -------------------------------------------------------------------

// EV-tier — isotope separation is advanced nuclear work; sized to consume ~40%
// of a good-sized fission reactor (2.5A EV ≈ 5120 EU/t output).
const NC_CENT_BASE_EUT  = EV   // 2048 EU/t
const NC_CENT_BASE_TIME = 900  // 20 seconds
const NC_CENT_FLUID_SCALE = 144 / 90  // NC ingot = 90 mB, GT ingot = 144 mB

// --- Exclusions --------------------------------------------------------------

const NC_CENT_EXCLUDED_PATHS = {
  carbon_dioxide: true,  // excluded by user
  uranium:        true,  // manual recipe with corrected ratios
}

// --- Helpers -----------------------------------------------------------------

/**
 * Converts one NC centrifuge input fluid JSON entry to a FluidIngredientJS.
 *
 * NC depleted-fuel inputs use { "fluid": "nuclearcraft:depleted_fuel_..." }
 * (a direct fluid ID, not a forge tag). All other inputs use { "tag": "forge:..." }.
 * This helper handles both cases; for tag entries it delegates to ncInputFJI
 * (shared from nc_to_gt_chem_reactor.js via priority-10 shared scope).
 *
 * @param {object} entry - NC fluid entry with .fluid or .tag, and .amount
 * @param {number} scale - fluid amount scale factor (1.0 or NC_CENT_FLUID_SCALE)
 * Returns null for invalid or zero-amount entries.
 */
function resolveNcCentrifugeInput(entry, scale) {
  if (!entry || !entry.amount) {
    return null
  }
  var amount = Number(entry.amount)
  if (amount <= 0) {
    return null
  }
  if (entry.fluid) {
    return $FluidIngredientJS.of(String(entry.fluid) + " " + Math.round(amount * scale))
  }
  if (entry.tag) {
    return ncInputFJI(entry, scale)
  }
  return null
}

// --- Main function -----------------------------------------------------------

let ncCentrifugeToGtCentrifuge = (/** @type {Internal.RecipesEventJS} */ event) => {
  var converted = 0
  var slurrySkipped = 0
  var excluded = 0
  var skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:centrifuge" }, (recipe) => {
    var ncPath = String(recipe.id).replace("nuclearcraft:centrifuge/", "")

    if (ncPath.indexOf("slurry") >= 0) {
      skipped++
      return
    }

    if (NC_CENT_EXCLUDED_PATHS[ncPath]) {
      excluded++
      return
    }

    var json
    try {
      json = JSON.parse(recipe.json)
    } catch (e) {
      console.error("[NC→GT] Centrifuge: failed to parse JSON for " + recipe.id + " — " + e)
      skipped++
      return
    }

    // Resolve input fluid
    var rawInFluids = Array.isArray(json.inputFluids) ? json.inputFluids : []
    if (rawInFluids.length === 0) {
      console.error("[NC→GT] Centrifuge: no inputFluids for " + recipe.id)
      skipped++
      return
    }
    // Scale fluid amounts 90→144 mB only for depleted fuel recipes
    var isDepletedFuel = rawInFluids[0].fluid && String(rawInFluids[0].fluid).indexOf("depleted") >= 0
    var fluidScale = isDepletedFuel ? NC_CENT_FLUID_SCALE : 1.0

    var inputFJI = resolveNcCentrifugeInput(rawInFluids[0], fluidScale)
    if (!inputFJI) {
      console.error("[NC→GT] Centrifuge: null input FJI for " + recipe.id)
      skipped++
      return
    }

    // Resolve output fluids (all use forge tags)
    var rawOutFluids = Array.isArray(json.outputFluids) ? json.outputFluids : []
    if (rawOutFluids.length === 0) {
      console.error("[NC→GT] Centrifuge: no outputFluids for " + recipe.id)
      skipped++
      return
    }
    var outputFJIs = []
    for (var oi = 0; oi < rawOutFluids.length; oi++) {
      var fji = ncOutputFJI(rawOutFluids[oi], fluidScale)
      if (!fji) {
        console.error("[NC→GT] Centrifuge: null output FJI at index " + oi + " for " + recipe.id)
        skipped++
        return
      }
      outputFJIs.push(fji)
    }

    var powerModifier = json.powerModifier != null ? Number(json.powerModifier) : 1.0
    var timeModifier  = json.timeModifier  != null ? Number(json.timeModifier)  : 1.0
    var eut      = Math.max(1, Math.round(NC_CENT_BASE_EUT  * powerModifier))
    var duration = Math.max(1, Math.round(NC_CENT_BASE_TIME * timeModifier))

    var gtId = "gregitas:nc_centrifuge/" + ncPath.replace(/[^a-z0-9_.\-]/g, "_")

    try {
      var r = event.recipes.gtceu.centrifuge(gtId)
        .EUt(eut)
        .duration(duration)
      r.input($FluidRecipeCapability.CAP, inputFJI)
      for (var ri = 0; ri < outputFJIs.length; ri++) {
        r.output($FluidRecipeCapability.CAP, outputFJIs[ri])
      }
      converted++
    } catch (e) {
      console.error("[NC→GT] Centrifuge: failed to register " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(
    `[NC→GT] Centrifuge: ${converted} converted, ${excluded} excluded, ${skipped} skipped`
  )
}
