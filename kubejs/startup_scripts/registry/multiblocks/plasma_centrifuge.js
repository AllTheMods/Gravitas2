GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("plasma_centrifuge")
    .category("gregitas")
    .setEUIO("in")
    .setMaxIOSize(0, 0, 1, 6)
    .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE)
})

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("plasma_centrifuge", "simple", 7, 8, 9, 10, 11, 12, 13)
    .rotationState(RotationState.NON_Y_AXIS)
    ["recipeType(com.gregtechceu.gtceu.api.recipe.GTRecipeType,boolean,boolean)"]("plasma_centrifuge", true, true)
    .tankScalingFunction((tier) => tier * 3200)
    .workableTieredHullRenderer(GTCEu.id("block/machines/plasma_centrifuge"))
})
