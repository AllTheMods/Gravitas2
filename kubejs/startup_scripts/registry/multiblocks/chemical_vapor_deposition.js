GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("chemical_vapor_deposition")
    .category("gregitas")
    .setEUIO("in")
    .setMaxIOSize(2, 1, 1, 0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("chemical_vapor_depositor", "simple", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)
    .rotationState(RotationState.NON_Y_AXIS)
    ["recipeType(com.gregtechceu.gtceu.api.recipe.GTRecipeType,boolean,boolean)"](
      "chemical_vapor_deposition",
      true,
      true
    )
    .tankScalingFunction((tier) => tier * 9600)
    .workableTieredHullRenderer(GTCEu.id("block/machines/chemical_vapor_depositor"))
})
