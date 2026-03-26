// GT machine recipes for IG materials remapped by AlmostUnified (magnesium, zirconium)
// Covers: block packing/unpacking, nugget assembly/decomposition

var IG_BLOCK_NUGGET_MATS = [
  {
    material:   "magnesium",
    ingotTag:   "#forge:ingots/magnesium",
    nuggetTag:  "#forge:nuggets/magnesium",
    blockItem:  "immersivegeology:storage_block_magnesium",
    ingotItem:  "immersivegeology:ingot_magnesium",
    nuggetItem: "immersivegeology:nugget_magnesium",
    blockFluid: "gtceu:magnesium",
    nuggetFluid: "gtceu:magnesium",
  },
]

var igGtBlocksNuggets = (/** @type {Internal.RecipesEventJS} */ event) => {
  IG_BLOCK_NUGGET_MATS.forEach(function(mat) {
    var id = mat.material

    // --- Block recipes ---
    if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation(String(mat.blockItem)))) {
      event.recipes.gtceu.compressor("gregitas:ig_blocks_nuggets/" + id + "_block_compressor")
        .itemInputs("9x " + mat.ingotTag)
        .itemOutputs(mat.blockItem)
        .EUt(32).duration(300)

      event.recipes.gtceu.extruder("gregitas:ig_blocks_nuggets/" + id + "_block_extruder")
        .itemInputs("9x " + mat.ingotTag).notConsumable("gtceu:block_extruder_mold")
        .itemOutputs(mat.blockItem)
        .EUt(128).duration(80)

      event.recipes.gtceu.alloy_smelter("gregitas:ig_blocks_nuggets/" + id + "_block_alloy_smelter")
        .itemInputs("9x " + mat.ingotTag).notConsumable("gtceu:block_casting_mold")
        .itemOutputs(mat.blockItem)
        .EUt(32).duration(200)

      event.recipes.gtceu.forge_hammer("gregitas:ig_blocks_nuggets/" + id + "_block_forge_hammer")
        .itemInputs(mat.blockItem)
        .itemOutputs("9x " + mat.ingotItem)
        .EUt(16).duration(160)

      if ($ForgeRegistries.FLUIDS.containsKey(new $ResourceLocation(String(mat.blockFluid)))) {
        event.recipes.gtceu.extractor("gregitas:ig_blocks_nuggets/" + id + "_block_extractor")
          .itemInputs(mat.blockItem)
          .outputFluids(mat.blockFluid + " 1296")
          .EUt(512).duration(360)

        event.recipes.gtceu.fluid_solidifier("gregitas:ig_blocks_nuggets/" + id + "_block_solidifier")
          .notConsumable("gtceu:block_casting_mold")
          .inputFluids(mat.blockFluid + " 1296")
          .itemOutputs(mat.blockItem)
          .EUt(32).duration(540)
      }
    }

    // --- Nugget recipes ---
    if ($ForgeRegistries.ITEMS.containsKey(new $ResourceLocation(String(mat.nuggetItem)))) {
      // Assembly: nuggets → ingot
      event.recipes.gtceu.compressor("gregitas:ig_blocks_nuggets/" + id + "_nugget_compressor")
        .itemInputs("9x " + mat.nuggetTag)
        .itemOutputs(mat.ingotItem)
        .EUt(32).duration(100)

      event.recipes.gtceu.alloy_smelter("gregitas:ig_blocks_nuggets/" + id + "_nugget_to_ingot_alloy_smelter")
        .itemInputs("9x " + mat.nuggetTag).notConsumable("gtceu:ingot_casting_mold")
        .itemOutputs(mat.ingotItem)
        .EUt(32).duration(100)

      // Decomposition: ingot/fluid → nuggets
      event.recipes.gtceu.alloy_smelter("gregitas:ig_blocks_nuggets/" + id + "_ingot_to_nugget_alloy_smelter")
        .itemInputs(mat.ingotItem).notConsumable("gtceu:nugget_casting_mold")
        .itemOutputs("9x " + mat.nuggetItem)
        .EUt(32).duration(200)

      if ($ForgeRegistries.FLUIDS.containsKey(new $ResourceLocation(String(mat.nuggetFluid)))) {
        event.recipes.gtceu.fluid_solidifier("gregitas:ig_blocks_nuggets/" + id + "_nugget_solidifier")
          .notConsumable("gtceu:nugget_casting_mold")
          .inputFluids(mat.nuggetFluid + " 144")
          .itemOutputs("9x " + mat.nuggetItem)
          .EUt(16).duration(40)
      }
    }
  })
}
