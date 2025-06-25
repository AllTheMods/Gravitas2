const $FuelUtil = Java.loadClass("mods.railcraft.api.fuel.FuelUtil")
const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")

StartupEvents.postInit((event) => {
  const railcraftFuels = $FuelUtil.fuelManager()
  const fluidRegistryKey = Utils.getRegistry("fluid").key
  
  global.liquidFuelsCombustion.forEach(fuel => {
    railcraftFuels.addFuel($TagKey.create(fluidRegistryKey, fuel.tag), fuel.burn_ticks)
  })
})