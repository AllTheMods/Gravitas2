// priority 0


StartupEvents.registry("item", (event) => {
  //registerItems(event)
})

StartupEvents.registry("block", (event) => {

  registerBlocks(event)
})

StartupEvents.registry("fluid", (event) => {
  registerFluids(event)
})

StartupEvents.postInit((event) => {
  Platform.setModName("gregitas", "Gravitas²")
  Platform.setModName("gregitas-core", "Gravitas²")
})

StartupEvents.postInit((event) => {
  if (!Platform.isClientEnvironment()) return
  addTooltipToBlocks(event)
})

GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  registerRecipeTypes(event)
})

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  registerMachines(event)
})

GTCEuStartupEvents.registry("gtceu:element", (event) => {
    registerGTCEuElement(event)
})

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  registerGTCEuMaterialFlags(event)
})

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  registerGTCEuElementMaterial(event)
})

GTCEuStartupEvents.registry("gtceu:material", (event) => {
    registerGTCEuUnknownCompositionMaterial(event)
})

GTCEuStartupEvents.registry("gtceu:material", (event) => {
    registerGTCEuFirstDegreeMaterial(event)
})

GTCEuStartupEvents.registry("gtceu:material", (event) => {
    registerGTCEuHigherDegreeMaterial(event)
})

GTCEuStartupEvents.registry("gtceu:material", (event) => {
    registerGTCEuOrganicMaterial(event)
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemTooltipEvent", event => {
  addTooltipIngots(event)
})

ForgeEvents.onEvent("blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent", event => {
 if(event.getMultiblock().getUniqueName().namespace == "immersiveengineering") {
    event.setCanceled(true)
 }
})
