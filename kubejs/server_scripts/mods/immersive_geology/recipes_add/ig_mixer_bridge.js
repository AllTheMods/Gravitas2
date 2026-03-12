// priority 10

var igMixerBridge = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Rocksalt dissolution
  event.recipes.gtceu
    .mixer("gregitas:ig/mix_cloudy_brine_rocksalt")
    .itemInputs("#forge:sediment/rocksalt")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:cloudy_slurry_brine_rocksalt", 64))
    .EUt(LV).duration(50)

  event.recipes.gtceu
    .mixer("gregitas:ig/mix_cloudy_brine_rocksalt_dust")
    .itemInputs("#forge:dusts/rock_salt")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:cloudy_slurry_brine_rocksalt", 64))
    .EUt(LV).duration(50)

  event.recipes.gtceu
    .mixer("gregitas:ig/mix_brine_rocksalt")
    .itemInputs("#forge:crystal/rocksalt")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:slurry_brine_rocksalt", 64))
    .EUt(LV).duration(50)

  // Saltpeter dissolution
  event.recipes.gtceu
    .mixer("gregitas:ig/mix_cloudy_brine_saltpeter")
    .itemInputs("#forge:sediment/saltpeter")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:cloudy_slurry_brine_saltpeter", 64))
    .EUt(LV).duration(50)

  event.recipes.gtceu
    .mixer("gregitas:ig/mix_cloudy_brine_saltpeter_dust")
    .itemInputs("#forge:dusts/saltpeter")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:cloudy_slurry_brine_saltpeter", 64))
    .EUt(LV).duration(50)

  event.recipes.gtceu
    .mixer("gregitas:ig/mix_brine_saltpeter")
    .itemInputs("#forge:crystal/saltpeter")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:slurry_brine_saltpeter", 64))
    .EUt(LV).duration(50)

  // Carnallite dissolution
  event.recipes.gtceu
    .mixer("gregitas:ig/mix_cloudy_brine_carnallite")
    .itemInputs("#forge:sediment/carnallite")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:cloudy_slurry_brine_carnallite", 64))
    .EUt(LV).duration(50)

  event.recipes.gtceu
    .mixer("gregitas:ig/mix_brine_carnallite")
    .itemInputs("#forge:crystal/carnallite")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:slurry_brine_carnallite", 64))
    .EUt(LV).duration(50)

  // Sodium oxide → sodium hydroxide
  event.recipes.gtceu
    .mixer("gregitas:ig/mix_sodium_hydroxide")
    .itemInputs("#forge:metal_oxide/sodium")
    .inputFluids(Fluid.of("minecraft:water", 64))
    .outputFluids(Fluid.of("immersivegeology:fluid_sodium_hydroxide", 64))
    .EUt(LV).duration(50)
}
