// priority 0
StartupEvents.init((e) => {
  if (!Platform.isClientEnvironment()) return
  $CustomClickEvent.register($UtilsJS.makeFunctionProxy("startup", $EventActor, handleFTBCustomClick))
})

StartupEvents.registry("item", (event) => {
  registerItems(event)
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

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemTooltipEvent", event => {
  addTooltipIngots(event)
})

ForgeEvents.onEvent(
  "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent",
  (event) => {
    event.getMultiblock().getUniqueName().namespace == "immersiveengineering" && event.setCanceled(true)
  }
)

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$Clone", (event) => {
  runsDeathPenalty(event)
})

StartupEvents.recipeSchemaRegistry((event) => {
  loadComponents(event)
  registerTFCHeatingSchema(event)
  registerTFCCastingSchema(event)
  registerTFCAnvilSchema(event)
  registerWoodencogFillingSchema(event)
  registerAe2ChargerSchema(event)
  registerAe2InscriberSchema(event)
})
