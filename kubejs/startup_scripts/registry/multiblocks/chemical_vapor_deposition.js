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
    .create("chemical_vapor_depositor", "simple")
    .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV, GTValues.MAX)
    .tankScalingFunction((tier) => tier * 9600)
    .definition((tier, builder) => {
      builder
    .langValue(`${GTValues.VA[tier]} Chemical Vapor Deposition`)
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("chemical_vapor_deposition")
    .workableTieredHullRenderer("gtceu:block/machines/chemical_vapor_depositor")
})
})
