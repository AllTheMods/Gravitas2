// priority 10

// =============================================================================
// NC → GT Centrifuge Recipe Bridge (crystallizer)
//
// Reads all NuclearCraft crystallizer recipes and registers equivalent
// GregTech centrifuge recipes. Each NC recipe takes one input fluid
// (a solution or extract) and produces one solid item. The GT equivalent
// additionally outputs water equal to the input fluid amount, recovering
// the solvent.
//
// Skipped:
//   - any recipe ID containing "slurry" (handled by ore-processing chain)
//   - explicit exclusion list (vanilla crystallization, non-solution fluids)
//   - output cannot be resolved to a concrete item
//
// NC powerModifier and timeModifier scale from the base EUt/duration below.
// =============================================================================

// --- Knobs -------------------------------------------------------------------

// Centrifuge: LV-tier — solution separation (mirrors the LV mixer forward direction).
const NC_XTAL_BASE_EUT  = LV  // 32 EU/t
const NC_XTAL_BASE_TIME = 100  // 5 seconds

// --- Exclusions --------------------------------------------------------------

const NC_XTAL_EXCLUDED_PATHS = {
  polonium:                    true,  // output requires Mekanism (not in pack)
  uranium_oxide:               true,  // excluded by user
  water:                       true,  // excluded by user
  redstone:                    true,  // excluded by user
  potassium_iodide:            true,  // excluded by user ("potassium_iodine")
  lapis:                       true,  // excluded by user
  glowstone:                   true,  // excluded by user
  sulfur:                      true,  // excluded by user
}

// --- Helpers -----------------------------------------------------------------

/**
 * Resolves an NC crystallizer output[] entry to a concrete GT item ID string
 * (with optional count prefix), or null if unresolvable.
 *
 * { item: "any:id" }           → "any:id"  (accepts all namespaces)
 * { item: "any:id", count: 2 } → "2x any:id"
 * { tag: "forge:dusts/m" }     → "gtceu:m_dust"        if registered
 *                              → "nuclearcraft:m_dust"  if registered
 *                              → null otherwise
 * other                        → null
 */
function resolveNcXtalOutput(output) {
  if (!output) {
    return null
  }

  if (output.item) {
    var itemId = String(output.item)
    var colon = itemId.indexOf(":")
    if (colon < 0) return null
    if (!$ForgeRegistries.ITEMS.containsKey(new $ResourceLocation(itemId.substring(0, colon), itemId.substring(colon + 1)))) {
      return null
    }
    var count = output.count ? output.count : 1
    return count > 1 ? count + "x " + itemId : itemId
  }

  if (output.tag) {
    var tagPath = String(output.tag).replace(/^forge:/, "")
    var dustMatch = tagPath.match(/^dusts\/(.+)$/)
    if (dustMatch) {
      var material = dustMatch[1]
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("gtceu", String(material) + "_dust"))) {
        return "gtceu:" + material + "_dust"
      }
      if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation("nuclearcraft", String(material) + "_dust"))) {
        return "nuclearcraft:" + material + "_dust"
      }
    }
    return null
  }

  return null
}

// --- Main function -----------------------------------------------------------

let ncCrystallizerToGtCentrifuge = (/** @type {Internal.RecipesEventJS} */ event) => {
  var converted = 0
  var slurrySkipped = 0
  var excluded = 0
  var skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:crystallizer" }, (recipe) => {
    var ncPath = String(recipe.id).replace("nuclearcraft:crystallizer/", "")

    if (ncPath.indexOf("slurry") >= 0) {
      skipped++
      return
    }

    if (NC_XTAL_EXCLUDED_PATHS[ncPath]) {
      excluded++
      return
    }

    var json
    try {
      json = JSON.parse(recipe.json)
    } catch (e) {
      console.error("[NC→GT] Crystallizer: failed to parse JSON for " + recipe.id + " — " + e)
      skipped++
      return
    }

    // Resolve fluid input
    var rawInFluids = Array.isArray(json.inputFluids) ? json.inputFluids : []
    if (rawInFluids.length === 0) {
      console.error("[NC→GT] Crystallizer: no inputFluids for " + recipe.id)
      skipped++
      return
    }
    var inputFJI = ncInputFJI(rawInFluids[0], 1.0)
    if (!inputFJI) {
      console.error("[NC→GT] Crystallizer: null input FJI for " + recipe.id)
      skipped++
      return
    }

    // Resolve item output
    var rawOutputs = Array.isArray(json.output) ? json.output : []
    if (rawOutputs.length === 0) {
      console.error("[NC→GT] Crystallizer: no output[] for " + recipe.id)
      skipped++
      return
    }
    var itemStr = resolveNcXtalOutput(rawOutputs[0])
    if (!itemStr) {
      console.error("[NC→GT] Crystallizer: unresolvable output for " + recipe.id)
      skipped++
      return
    }

    // Water output: same amount as input fluid
    var waterAmount = rawInFluids[0].amount
    var waterFJI = $FluidIngredientJS.of("minecraft:water " + waterAmount)

    var powerModifier = json.powerModifier != null ? Number(json.powerModifier) : 1.0
    var timeModifier  = json.timeModifier  != null ? Number(json.timeModifier)  : 1.0
    var eut      = Math.max(1, Math.round(NC_XTAL_BASE_EUT  * powerModifier))
    var duration = Math.max(1, Math.round(NC_XTAL_BASE_TIME * timeModifier))

    var gtId = "gregitas:nc_xtal/" + ncPath.replace(/[^a-z0-9_.\-]/g, "_")

    try {
      var r = event.recipes.gtceu.centrifuge(gtId)
        .itemOutputs(itemStr)
        .EUt(eut)
        .duration(duration)
      r.input($FluidRecipeCapability.CAP, inputFJI)
      r.output($FluidRecipeCapability.CAP, waterFJI)
      converted++
    } catch (e) {
      console.error("[NC→GT] Crystallizer: failed to register " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(
    `[NC→GT] Crystallizer: ${converted} converted, ${excluded} excluded, ${skipped} skipped`
  )
}
