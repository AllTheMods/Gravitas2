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

const $ConfigHolder = Java.loadClass("com.gregtechceu.gtceu.config.ConfigHolder")

StartupEvents.postInit((event) => {
  Platform.setModName("gregitas", "Gravitas²")
  Platform.setModName("gregitas-core", "Gravitas²")
  let $ConfigHolder$INSTANCE = $ConfigHolder.INSTANCE
  if ($ConfigHolder$INSTANCE == null) $ConfigHolder.init()
  if ($ConfigHolder$INSTANCE.machines.highTierContent && $ConfigHolder$INSTANCE.compat.energy.enableFEConverters) return
  console.error("Please check your gtceu.yaml at config folder and set `highTierContent` to true and `enableFEConverters` to true!")
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
  addMoreInfoTooltips(event)
})

ForgeEvents.onEvent(
  "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent",
  (event) => {
    banIEMultiblocks(event)
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
  registerVintageImprovementsSchemas(event)
  registerCreateAdditionsSchemas(event)
  registerCreateDieselGeneratorsSchemas(event)
  registerCreateNewAgeSchemas(event)
})

// Server only
const configPath = "kubejs/config/modpack_config.json"
const config = JsonIO.read(configPath)
let bannedBlockEntities
if (config) {
  /** @type {Internal.ArrayList<string>} */
  bannedBlockEntities = config?.server.banned_block_entities

  if (bannedBlockEntities instanceof $ArrayList && !bannedBlockEntities.isEmpty()) {
    ForgeEvents.onEvent("net.minecraftforge.event.level.ChunkEvent$Load", event => {
      removeBlockEntities(event)
    })
  }
}
