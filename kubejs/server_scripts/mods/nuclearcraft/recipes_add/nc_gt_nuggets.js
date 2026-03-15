// GT machine nugget recipes for NC materials that lack them
// Covers: assembly (nuggets → ingot) and decomposition (ingot/fluid → nuggets)

var NC_NUGGET_MATS = [
  {
    material:   "lithium",
    ingotTag:   "#forge:ingots/lithium",
    nuggetTag:  "#forge:nuggets/lithium",
    ingotItem:  "nuclearcraft:lithium_ingot",
    nuggetItem: "nuclearcraft:lithium_nugget",
    fluid:      "gtceu:lithium",
  },
  {
    material:   "boron",
    ingotTag:   "#forge:ingots/boron",
    nuggetTag:  "#forge:nuggets/boron",
    ingotItem:  "nuclearcraft:boron_ingot",
    nuggetItem: "nuclearcraft:boron_nugget",
    fluid:      "nuclearcraft:boron",
  },
]

var ncGtNuggets = (/** @type {Internal.RecipesEventJS} */ event) => {
  NC_NUGGET_MATS.forEach(function(mat) {
    var id = mat.material

    // Assembly: nuggets → ingot
    event.recipes.gtceu.compressor("gregitas:nc_nuggets/" + id + "_nugget_compressor")
      .itemInputs("9x " + mat.nuggetTag)
      .itemOutputs(mat.ingotItem)
      .EUt(32).duration(100)

    event.recipes.gtceu.alloy_smelter("gregitas:nc_nuggets/" + id + "_nugget_to_ingot_alloy_smelter")
      .itemInputs("9x " + mat.nuggetTag).notConsumable("gtceu:ingot_casting_mold")
      .itemOutputs(mat.ingotItem)
      .EUt(32).duration(100)

    // Decomposition: ingot → nuggets
    event.recipes.gtceu.alloy_smelter("gregitas:nc_nuggets/" + id + "_ingot_to_nugget_alloy_smelter")
      .itemInputs(mat.ingotItem).notConsumable("gtceu:nugget_casting_mold")
      .itemOutputs("9x " + mat.nuggetItem)
      .EUt(32).duration(200)

    // Decomposition: fluid → nuggets
    if ($ForgeRegistries.FLUIDS.containsKey(new $ResourceLocation(String(mat.fluid)))) {
      event.recipes.gtceu.fluid_solidifier("gregitas:nc_nuggets/" + id + "_nugget_solidifier")
        .notConsumable("gtceu:nugget_casting_mold")
        .inputFluids(mat.fluid + " 144")
        .itemOutputs("9x " + mat.nuggetItem)
        .EUt(16).duration(40)
    }
  })
}
