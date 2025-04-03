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
    .create("plasma_centrifuge", "simple")
    .tiers(GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV, GTValues.MAX)
    .definition((tier, builder) => {
      builder
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("plasma_centrifuge")
    .workableTieredHullRenderer("gtceu:block/machines/plasma_centrifuge")
    .langValue(`${GTValues.VA[tier]} Plasma Centrifuge`)
    })
})
