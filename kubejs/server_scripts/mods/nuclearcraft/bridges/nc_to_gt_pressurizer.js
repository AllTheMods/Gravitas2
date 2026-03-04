// priority 10

// =============================================================================
// NC Pressurizer → GT Multi-Machine Bridge
// Routing:
//   Plates → bender, extruder, fluid_solidifier, forge_hammer
//   Blocks → compressor, extruder, fluid_solidifier, alloy_smelter
//   Gems   → autoclave
//   Other  → compressor
// =============================================================================

// --- Knobs -------------------------------------------------------------------
// Plates
var NC_PR_BENDER_EUT             = 24   // matches GT bender default
var NC_PR_BENDER_DURATION        = 160

var NC_PR_EXTRUDER_PLATE_EUT     = 128  // MV - Consistent with other GT recipes
var NC_PR_EXTRUDER_PLATE_DURATION = 200

var NC_PR_FORGE_HAMMER_EUT       = 16   // matches GT forge hammer default
var NC_PR_FORGE_HAMMER_DURATION  = 160

var NC_PR_SOLIDIFIER_PLATE_EUT      = 16   // above GT's ULV baseline; NC materials aren't common metals
var NC_PR_SOLIDIFIER_PLATE_DURATION = 40

// Blocks (isotopes — treated as more involved than simple storage blocks)
var NC_PR_COMPRESSOR_EUT         = 32   // LV — bumped from GT's 2 EUt for nuclear material
var NC_PR_COMPRESSOR_DURATION    = 300  // matches GT's standard compressor duration

var NC_PR_EXTRUDER_BLOCK_EUT     = 128   // MV — consistent with plate extruder
var NC_PR_EXTRUDER_BLOCK_DURATION = 80

var NC_PR_ALLOY_SMELTER_EUT      = 32   // LV — aligned with isotope tier (NC_IF_EUT_ISO)
var NC_PR_ALLOY_SMELTER_DURATION = 200

var NC_PR_SOLIDIFIER_BLOCK_EUT      = 32   // LV — matches NC_IF_EUT_ISO from solidifier bridge
var NC_PR_SOLIDIFIER_BLOCK_DURATION = 540  // NC_IF_TIME_ISO (60t) x 9 ingots

var NC_PR_EXTRACTOR_EUT          = 512  // HV — matches NC_ME_EUT_ISO from extractor bridge
var NC_PR_EXTRACTOR_DURATION     = 360  // NC_ME_TIME_ISO (40t) x 9 ingots

// Gems
var NC_PR_AUTOCLAVE_EUT      = 24   // matches GT's water-based crystallization
var NC_PR_AUTOCLAVE_DURATION = 1200

// Other (compressor fallback)
var NC_PR_OTHER_EUT      = 2    // matches GT's default compressor
var NC_PR_OTHER_DURATION = 300

// --- Skip list ---------------------------------------------------------------

var NC_PR_SKIP_IDS = [
  "dusts_diamond", "ingots_graphite", "dusts_obsidian", "dusts_quartz", "ingots_silicon_carbide"
]

// Fluid overrides: material → concrete fluid ID (no amount suffix)
var NC_PR_FLUID_OVERRIDES = {
  "lithium":   "gtceu:lithium",
  "magnesium": "gtceu:magnesium"
}

// --- Helpers -----------------------------------------------------------------

function ncPrInputString(entry) {
  var count = entry.count || 1
  var prefix = count > 1 ? count + "x " : ""
  if (entry.tag)  return prefix + "#" + String(entry.tag)   // tag already has "forge:" prefix
  if (entry.item) return prefix + String(entry.item)
  return null
}

function ncPrMaterialFrom(itemId, suffix) {
  var path = String(itemId).replace(/^[^:]+:/, "")
  return path.endsWith(suffix) ? path.slice(0, -(suffix.length)) : null
}

function ncPrFluidForMaterial(material, fallbackNs) {
  if (NC_PR_FLUID_OVERRIDES[material]) return NC_PR_FLUID_OVERRIDES[material]
  return (fallbackNs || "gtceu") + ":" + material
}

function ncPrSanitizeId(ncId, suffix) {
  var path = String(ncId).replace(/^[^:]+:pressurizer\//, "")
  return "gregitas:nc_press/" + path.replace(/[-\/:]/g, "_").replace(/[^a-z0-9_]/g, "_") + "_" + suffix
}

// --- Main function -----------------------------------------------------------

var ncPressurizer = (/** @type {Internal.RecipesEventJS} */ event) => {
  var converted = 0
  var skipped = 0

  event.forEachRecipe({ type: "nuclearcraft:pressurizer" }, (recipe) => {
    var json
    try { json = JSON.parse(recipe.json) } catch (e) { skipped++; return }

    var inputArr  = Array.isArray(json.input)  ? json.input  : []
    var outputArr = Array.isArray(json.output) ? json.output : []
    if (!inputArr.length || !outputArr.length) { skipped++; return }

    var inputEntry  = inputArr[0]
    var outputEntry = outputArr[0]
    if (!outputEntry || !outputEntry.item) { skipped++; return }

    var outputId   = String(outputEntry.item)
    var outputPath = outputId.replace(/^[^:]+:/, "")
    var outputNs   = outputId.includes(":") ? outputId.split(":")[0] : "minecraft"

    // Check skip list
    var recPathSeg = String(recipe.id).replace(/^[^:]+:pressurizer\//, "")
    for (var i = 0; i < NC_PR_SKIP_IDS.length; i++) {
      if (recPathSeg === NC_PR_SKIP_IDS[i]) { skipped++; return }
    }

    var inputStr = ncPrInputString(inputEntry)
    if (!inputStr) { skipped++; return }

    try {
      if (outputPath.endsWith("_plate")) {
        // --- Plate recipes ---
        var material = ncPrMaterialFrom(outputId, "_plate")
        if (!material) { skipped++; return }

        // Skip if GT already generates this plate
        if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation(String("gtceu:" + material + "_plate")))) {
          skipped++; return
        }

        event.recipes.gtceu.bender(ncPrSanitizeId(recipe.id, "bender"))
          .itemInputs(inputStr).circuit(1)
          .itemOutputs(outputId).EUt(NC_PR_BENDER_EUT).duration(NC_PR_BENDER_DURATION)

        event.recipes.gtceu.extruder(ncPrSanitizeId(recipe.id, "extruder"))
          .itemInputs(inputStr).notConsumable("gtceu:plate_extruder_mold")
          .itemOutputs(outputId).EUt(NC_PR_EXTRUDER_PLATE_EUT).duration(NC_PR_EXTRUDER_PLATE_DURATION)

        var fhPlateInput = { tag: inputEntry.tag, item: inputEntry.item, count: (inputEntry.count || 1) * 3 }
        event.recipes.gtceu.forge_hammer(ncPrSanitizeId(recipe.id, "forge_hammer"))
          .itemInputs(ncPrInputString(fhPlateInput))
          .itemOutputs("2x " + outputId).EUt(NC_PR_FORGE_HAMMER_EUT).duration(NC_PR_FORGE_HAMMER_DURATION)

        event.recipes.create.pressing(outputId, inputStr).id(ncPrSanitizeId(recipe.id, "pressing"))

        converted++

        var plateFluid = ncPrFluidForMaterial(material, outputNs)
        if ($ForgeRegistries.FLUIDS.containsKey(new $ResourceLocation(String(plateFluid)))) {
          event.recipes.gtceu.fluid_solidifier(ncPrSanitizeId(recipe.id, "solidifier"))
            .notConsumable("gtceu:plate_casting_mold")
            .inputFluids(plateFluid + " 144")
            .itemOutputs(outputId).EUt(NC_PR_SOLIDIFIER_PLATE_EUT).duration(NC_PR_SOLIDIFIER_PLATE_DURATION)
        }

      } else if (outputPath.endsWith("_block")) {

        event.recipes.gtceu.compressor(ncPrSanitizeId(recipe.id, "compressor"))
          .itemInputs(inputStr)
          .itemOutputs(outputId).EUt(NC_PR_COMPRESSOR_EUT).duration(NC_PR_COMPRESSOR_DURATION)

        event.recipes.gtceu.extruder(ncPrSanitizeId(recipe.id, "extruder"))
          .itemInputs(inputStr).notConsumable("gtceu:block_extruder_mold")
          .itemOutputs(outputId).EUt(NC_PR_EXTRUDER_BLOCK_EUT).duration(NC_PR_EXTRUDER_BLOCK_DURATION)

        event.recipes.gtceu.alloy_smelter(ncPrSanitizeId(recipe.id, "alloy_smelter"))
          .itemInputs(inputStr).notConsumable("gtceu:block_casting_mold")
          .itemOutputs(outputId).EUt(NC_PR_ALLOY_SMELTER_EUT).duration(NC_PR_ALLOY_SMELTER_DURATION)

        // forge_hammer reversal: 1 block → N constituents
        var constituentId = null
        if (inputEntry.item) {
          constituentId = String(inputEntry.item)
        } else if (inputEntry.tag) {
          var tagStr = String(inputEntry.tag)
          if (tagStr.startsWith("forge:ingots/")) {
            constituentId = "nuclearcraft:" + tagStr.slice(13) + "_ingot"
          }
        }
        if (constituentId) {
          var constituentCount = inputEntry.count || 9
          event.recipes.gtceu.forge_hammer(ncPrSanitizeId(recipe.id, "forge_hammer"))
            .itemInputs(outputId)
            .itemOutputs(String(constituentCount) + "x " + constituentId)
            .EUt(NC_PR_FORGE_HAMMER_EUT).duration(NC_PR_FORGE_HAMMER_DURATION)
        }

        converted++

        // NC block IDs omit underscore before isotope number (e.g. californium250_block)
        // but fluid/item IDs include it (e.g. nuclearcraft:californium_250)
        var blockMaterial = String(ncPrMaterialFrom(outputId, "_block")).replace(/([a-z])(\d+)$/, "$1_$2")
        var blockFluid = ncPrFluidForMaterial(blockMaterial, outputNs)
        if ($ForgeRegistries.FLUIDS.containsKey(new $ResourceLocation(String(blockFluid)))) {
          event.recipes.gtceu.extractor(ncPrSanitizeId(recipe.id, "extractor"))
            .itemInputs(outputId)
            .outputFluids(blockFluid + " 1296")
            .EUt(NC_PR_EXTRACTOR_EUT).duration(NC_PR_EXTRACTOR_DURATION)
          event.recipes.gtceu.fluid_solidifier(ncPrSanitizeId(recipe.id, "solidifier"))
            .notConsumable("gtceu:block_casting_mold")
            .inputFluids(blockFluid + " 1296")
            .itemOutputs(outputId).EUt(NC_PR_SOLIDIFIER_BLOCK_EUT).duration(NC_PR_SOLIDIFIER_BLOCK_DURATION)
        }

      } else if (outputPath.endsWith("_gem")) {
        // --- Gem recipes ---
        event.recipes.gtceu.autoclave(ncPrSanitizeId(recipe.id, "autoclave"))
          .itemInputs(inputStr)
          .inputFluids("minecraft:water 200")
          .itemOutputs(outputId).EUt(NC_PR_AUTOCLAVE_EUT).duration(NC_PR_AUTOCLAVE_DURATION)
        converted++

      } else {
        // --- Default: compressor ---
        event.recipes.gtceu.compressor(ncPrSanitizeId(recipe.id, "compressor"))
          .itemInputs(inputStr)
          .itemOutputs(outputId).EUt(NC_PR_OTHER_EUT).duration(NC_PR_OTHER_DURATION)
        converted++
      }
    } catch (e) {
      console.error("[NC→GT] Pressurizer failed: " + recipe.id + " — " + e)
      skipped++
    }
  })

  console.log(`[NC→GT] Pressurizer: ${converted} converted, ${skipped} skipped`)
}
