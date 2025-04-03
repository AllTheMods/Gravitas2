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
    .create("gas_centrifuge", "simple")
    .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV, GTValues.MAX)
    .definition((tier, builder) => {
      builder
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("gas_centrifuge")
    .workableTieredHullRenderer("gtceu:block/machines/gas_centrifuge")
    .langValue(`${GTValues.VA[tier]} Gas Centrifuge`)
  })
})
