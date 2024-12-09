GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("gas_centrifuge")
    .category("gregitas")
    .setEUIO("in")
    .setMaxIOSize(0, 3, 1, 6)
    .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE)
})

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("gas_centrifuge", "simple", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)
    .rotationState(RotationState.NON_Y_AXIS)
    ["recipeType(com.gregtechceu.gtceu.api.recipe.GTRecipeType,boolean,boolean)"]("gas_centrifuge", true, true)
    .tankScalingFunction((tier) => tier * 3200)
    .workableTieredHullRenderer(GTCEu.id("block/machines/gas_centrifuge"))
})
