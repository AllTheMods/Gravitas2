// priority 10

// =============================================================================
// NC → GT Chemical Reactor Recipe Bridge
//
// Reads all NuclearCraft chemical_reactor recipes and registers equivalent
// GregTech chemical_reactor recipes.
//
// Tune the constants below to match nuclearcraft-common.toml [Processor]:
//   base_power * processor_power[chemical_reactor]  →  NC_CR_BASE_POWER_FE
//   processor_time[chemical_reactor]                →  NC_CR_BASE_TIME_TICKS
// =============================================================================

// --- Knobs -------------------------------------------------------------------

const NC_CR_BASE_TIME_TICKS = 200 // processor_time[19] from nuclearcraft-common.toml
const NC_CR_BASE_POWER_FE = 2000 // base_power(100) × processor_power[19](20)
const FE_TO_EU_RATIO = 4 // standard: 4 FE = 1 EU

// NC uses 90 mB as "1 ingot" for fuel synthesis outputs; Gravitas uses 144 mB.
// Any recipe whose output is exactly NC_INGOT_MB gets all its fluid amounts
// scaled so the output becomes GT_INGOT_MB, keeping ratios intact.
const NC_INGOT_MB = 90
const GT_INGOT_MB = 144

// Direct mapping of NC fuel input amounts (mB) → GT mixer input amounts (mB).
// NC's isotope ratios don't have a consistent physical basis, so these are
// agreed values that sum to GT_INGOT_MB per recipe.
const NC_FUEL_INPUT_MAP = {
  30: 16,
  90: 48,
  180: 96,
  270: 128,
}

// --- Exclusions --------------------------------------------------------------
//
// NC chemical_reactor recipe paths to skip entirely. These are already
// handled by GT machines (chemical reactor, mixer, alloy smelter)
//
// Keys are the path segment of the NC recipe ID — everything after
// "nuclearcraft:chemical_reactor/".

const NC_CR_EXCLUDED_PATHS = {
  // Gas oxidation / combustion
  "ammonia-oxygen":               true,
  "nitric_oxide-oxygen":          true,
  "sulfur_dioxide-liquid_oxygen": true,
  "sulfur-liquid_oxygen":         true,
  "hydrogen-liquid_oxygen":       true,
  // Gas synthesis
  "nitrogen-hydrogen":            true,
  "carbon_monoxide-hydrogen":     true,
  "carbon_dioxide-hydrogen":      true,
  // Hydration / aqueous
  "sulfur_trioxide-water":        true,
  "hydrogen_chloride-water":      true,
  "nitrogen_dioxide-water":       true,
  "sugar-water":                  true,
  // Acid reactions
  "nitric_acid-hydrochloric_acid": true,
  "ethene-sulfuric_acid":         true,
  // Metal alloys (GT mixer / alloy smelter handles these)
  "boron-steel":                  true,
  "iron-carbon_manganese":        true,
  "zirconium-tin":                true,
  "copper-tin":                   true,
  "molybdenum-zirconium":         true,
  "niobium-titanium":             true,
  "gold-silver":                  true,
  "tin-silver":                   true,
  "magnesium-boron":              true,
  "ferroboron-lithium":           true,
  "carbon_manganese-titanium":    true,
  "osmium-iridium":               true,
  "tough_alloy-hard_carbon":      true,
  "copper-silver":                true,
  "iron-chromium":                true,
  "lead-platinum":                true,
  // Specialty materials
  "extreme-boron_arsenide":       true,
  "lithium_manganese_dioxide":    true,
}

// --- Implementation notes ----------------------------------------------------
//
// GTCEu's inputFluids() calls validateFluids() → getStacks() which poisons the
// FluidIngredient cache when forge tags are not yet bound on fresh game start.
// outputFluids() accepts only FluidStackJS (concrete fluid IDs), not tags — it
// cannot handle NC-style forge tag outputs like "forge:fuel_curium_lecm_247".
//
// Solution: bypass both helpers. Use the lower-level input(RecipeCapability,
// Object...) and output(RecipeCapability, Object...) on GTRecipeJS directly,
// passing pre-constructed FluidIngredientJS instances. FluidIngredientJS wraps
// a FluidIngredient with a TagValue and implements both InputFluid and
// OutputFluid, so GTCEu accepts it on both sides. Creating via
// FluidIngredientJS.of("#forge:tag amount") stores the TagKey without calling
// getStacks(), so fresh-start tag binding works correctly.
//
// FluidIngredientJS is a nested record of GTRecipeComponents; its JVM class
// name uses "$" as the outer/inner separator.
//
// Some NC recipes share identical input fluid TYPES but differ in amounts,
// producing different outputs (e.g. U-235 + U-238 at different ratios → HEU
// vs LEU fuel). GTCEu would treat these as ambiguous since a machine with
// sufficient fluid of both types could match either recipe. A two-pass
// approach groups recipes by sorted input tag names; any group with more than
// one entry gets a programmed circuit (1, 2, 3 …) added as a non-consumable
// to disambiguate. Recipes within a group are sorted by GT recipe ID for
// deterministic, reload-stable circuit assignments.

const $FluidRecipeCapability = Java.loadClass(
  "com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability"
)
const $FluidIngredientJS = Java.loadClass(
  "com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS"
)
const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

// --- Helpers -----------------------------------------------------------------

/**
 * Converts one NC fluid JSON entry to a tag-based GTCEu FluidIngredientJS.
 * Used for INPUTS — accepts any fluid that satisfies the forge tag (GT or NC).
 *
 * NC format:  { "tag": "forge:ammonia", "amount": 350 }
 * Creates:    FluidIngredientJS.of("#forge:ammonia 350") → TagValue (no getStacks call)
 *
 * @param {object} entry - NC fluid entry with .tag and .amount
 * @param {number} scale - per-recipe fluid scale factor
 * Returns null for invalid or zero-amount entries.
 */
function ncInputFJI(entry, scale) {
  if (!entry || !entry.tag || !entry.amount) {
    return null
  }
  const amount = Math.round(entry.amount * scale)
  if (amount <= 0) {
    return null
  }
  return $FluidIngredientJS.of("#" + String(entry.tag) + " " + amount)
}

/**
 * Converts one NC fluid JSON entry to a concrete GTCEu FluidIngredientJS for use
 * as an OUTPUT. Prefers a specific gtceu: fluid over a tag, so the machine always
 * produces the GT fluid rather than whichever fluid GTCEu happens to pick first
 * from a shared forge tag (e.g. forge:hydrogen contains both gtceu:hydrogen and
 * nuclearcraft:hydrogen).
 *
 * Resolution order:
 *   1. If the forge tag path matches a registered gtceu: fluid, use that directly.
 *   2. Otherwise fall back to tag-based (NC-specific fuels/isotopes — those tags
 *      only contain one fluid anyway, so there is no ambiguity).
 *
 * Registry lookup (not tag lookup) so this works correctly on fresh game start.
 *
 * @param {object} entry - NC fluid entry with .tag and .amount
 * @param {number} scale - per-recipe fluid scale factor
 * Returns null for invalid or zero-amount entries.
 */
function ncOutputFJI(entry, scale) {
  if (!entry || !entry.tag || !entry.amount) {
    return null
  }
  const amount = Math.round(entry.amount * scale)
  if (amount <= 0) {
    return null
  }
  const tag = String(entry.tag)
  if (tag.startsWith("forge:")) {
    const tagPath = tag.substring(6) // "forge:hydrogen" → "hydrogen"
    if ($ForgeRegistries.FLUIDS.containsKey(new $ResourceLocation("gtceu", tagPath))) {
      return $FluidIngredientJS.of("gtceu:" + tagPath + " " + amount)
    }
  }
  return $FluidIngredientJS.of("#" + tag + " " + amount)
}

/**
 * Sanitizes an NC recipe ResourceLocation into a valid GT recipe ID.
 * e.g. "nuclearcraft:chemical_reactor/ammonia-oxygen" → "gregitas:nc_chem/ammonia-oxygen"
 */
function sanitizeId(ncId, prefix) {
  const path = String(ncId)
    .replace(/^[^:]+:/, "")
    .replace(/^chemical_reactor\//, "")
  return prefix + path.replace(/[^a-z0-9_.\-]/g, "_")
}

// Tracks registered GT IDs within this reload to catch any remaining collisions.
const ncGtRegisteredIds = {}

// --- Main function -----------------------------------------------------------

let ncToGtChemReactor = (/** @type {Internal.RecipesEventJS} */ event) => {
  let converted = 0
  let excluded = 0
  let skipped = 0

  // --- Pass 1: collect and group recipe data ----------------------------------
  //
  // Groups are keyed by the sorted set of input fluid tag names. Recipes in the
  // same group share input fluid types but may differ in amounts / outputs.

  const groups = {}

  event.forEachRecipe({ type: "nuclearcraft:chemical_reactor" }, (recipe) => {
    const ncPath = String(recipe.id).replace("nuclearcraft:chemical_reactor/", "")
    if (NC_CR_EXCLUDED_PATHS[ncPath]) {
      excluded++
      return
    }

    let json
    try {
      json = JSON.parse(recipe.json)
    } catch (e) {
      skipped++
      return
    }

    const timeModifier = json.timeModifier != null ? Number(json.timeModifier) : 1.0
    const powerModifier = json.powerModifier != null ? Number(json.powerModifier) : 1.0

    const duration = Math.max(1, Math.round(NC_CR_BASE_TIME_TICKS * timeModifier))
    const eut = Math.max(1, Math.round((NC_CR_BASE_POWER_FE * powerModifier) / FE_TO_EU_RATIO))

    const rawInputs = (Array.isArray(json.inputFluids) ? json.inputFluids : [])
      .filter(f => f && f.tag && f.amount)
    const rawOutputs = (Array.isArray(json.outputFluids) ? json.outputFluids : [])
      .filter(f => f && f.tag && f.amount)

    if (rawInputs.length === 0 || rawOutputs.length === 0) {
      skipped++
      return
    }

    const isIngotRecipe = rawOutputs.some(f => f.amount === NC_INGOT_MB)
    const outputScale = isIngotRecipe ? GT_INGOT_MB / NC_INGOT_MB : 1.0

    const machine = ncPath.includes("fuel") ? "mixer" : "chemical_reactor"

    // For fuel (mixer) recipes, remap each input amount through NC_FUEL_INPUT_MAP
    // and store the resolved amounts directly (inputScale = 1.0).
    // For all other recipes, inputs use the same scale as outputs.
    let resolvedInputs, inputScale
    if (machine === "mixer") {
      resolvedInputs = rawInputs.map(f => ({
        tag: f.tag,
        amount: NC_FUEL_INPUT_MAP[f.amount] !== undefined ? NC_FUEL_INPUT_MAP[f.amount] : f.amount,
      }))
      inputScale = 1.0
    } else {
      resolvedInputs = rawInputs
      inputScale = outputScale
    }
    const gtId = sanitizeId(recipe.id, machine === "mixer" ? "gregitas:nc_fuel/" : "gregitas:nc_chem/")
    if (ncGtRegisteredIds[gtId]) {
      console.warn(
        "[NC→GT] ID collision: " +
          gtId +
          " already registered by " +
          ncGtRegisteredIds[gtId] +
          ", skipping " +
          recipe.id
      )
      skipped++
      return
    }
    ncGtRegisteredIds[gtId] = recipe.id

    // Group key: sorted input fluid tags (ignoring amounts — same types, different
    // ratios still land in the same group).
    const groupKey = machine + "|" + rawInputs
      .map(f => String(f.tag))
      .sort()
      .join("|")

    if (!groups[groupKey]) {
      groups[groupKey] = []
    }

    groups[groupKey].push({
      gtId: gtId,
      ncId: recipe.id,
      machine: machine,
      resolvedInputs: resolvedInputs,
      rawOutputs: rawOutputs,
      inputScale: inputScale,
      outputScale: outputScale,
      duration: duration,
      eut: eut
    })
  })

  // --- Pass 2: register GT recipes -------------------------------------------
  //
  // Groups with more than one recipe get programmed circuits starting at 1.
  // Sort within each group by GT recipe ID for stable circuit assignment across
  // reloads (iteration order of forEachRecipe is not guaranteed).

  for (var groupKey in groups) {
    var group = groups[groupKey]
    group.sort((a, b) => (a.gtId < b.gtId ? -1 : a.gtId > b.gtId ? 1 : 0))
    var needsCircuit = group.length > 1

    for (var ci = 0; ci < group.length; ci++) {
      var entry = group[ci]

      var gtInputs = entry.resolvedInputs.map(e => ncInputFJI(e, entry.inputScale)).filter(Boolean)
      var gtOutputs = entry.rawOutputs.map(e => ncOutputFJI(e, entry.outputScale)).filter(Boolean)

      if (gtInputs.length === 0 || gtOutputs.length === 0) {
        console.error("[NC→GT] Empty fluids after scaling: " + entry.ncId)
        skipped++
        continue
      }

      let r
      try {
        r = event.recipes.gtceu[entry.machine](entry.gtId).EUt(entry.eut).duration(entry.duration)
        if (needsCircuit) {
	  r.circuit(ci + 1)
	}
        for (let i = 0; i < gtInputs.length; i++) {
          r.input($FluidRecipeCapability.CAP, gtInputs[i])
        }
        for (let i = 0; i < gtOutputs.length; i++) {
          r.output($FluidRecipeCapability.CAP, gtOutputs[i])
        }
        converted++
      } catch (e) {
        console.error("[NC→GT] Failed: " + entry.ncId + " — " + e)
        skipped++
      }
    }
  }

  console.log(`[NC→GT] Chemical Reactor: ${converted} converted, ${excluded} excluded, ${skipped} skipped`)
}
