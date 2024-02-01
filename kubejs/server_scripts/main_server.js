// priority 0

ServerEvents.recipes((event) => {
  recipeRemoval(event)
  replaceRecipes(event)
  recipeAdd(event)
  replaceTFCHeatingAndCasting(event)
  addCollapse(event)
  tfcGregTools(event)
  gtceuAdd(event)
  createAdd(event)
  spaceDustChain(event)
  certusSemiconductors(event)
  gregifyAE2(event)
})

LootJS.modifiers((event) => {
  // event.enableLogging()
  modifyAndRemoveChestLoot(event)
  modifyAndRemoveBlockLoot(event)
  modifyAndRemoveEntityLoot(event)
})

ServerEvents.tags("worldgen/biome", (event) => {
  addTFCBiomesToVanilla(event)
  addStargateBiomes(event)
  removeBiomesFromStructures(event)
  addBiomesToStructures(event)
})

ServerEvents.tags("worldgen/placed_feature", (event) => {
  addGregVeinsToTags(event)
})

ServerEvents.tags("item", (event) => {
  addItemTags(event)
})
ServerEvents.tags("entity", (event) => {
  entityTags(event)
})
ServerEvents.tags("block", (event) => {
  addBlockTags(event)
})

ServerEvents.tags('fluid', (event) => {
  addFluidTags(event)
})

ServerEvents.tags("worldgen/configured_feature", (event) => {
  addConfiguredFeaturesTags(event)
})

MoreJSEvents.structureLoad((event) => {
  replaceVanillaBlocks(event)
})

MoreJSEvents.structureAfterPlace((event) => {
  replaceGoldBlocksWithPiles(event)
  runErosionFeature(event)
  replaceVillagesWoodAccordingToClimate(event)
})

ServerEvents.lowPriorityData((event) => {
  addGregTechIngotsToTFC(event)
  overrideTFCArmourFinalWeld(event)
  addGregVeinData(event)
  addGenericData(event)
})

NetworkEvents.dataReceived("customTask", (event) => {
  serverObserveGtTask(event) // TODO: needs rework
})

MoreJSEvents.villagerTrades((event) => {
  replaceTrades(event)
})

EntityEvents.spawned("item", event => {
  replaceSpawnedItem(event)
})

EntityEvents.death("player", (event) => {
  addsTimeOfDeathToPlayer(event)
})

FTBQuestsEvents.customReward(event => {
  if (event.reward.tags.isEmpty()) return
  let tag = event.reward.tags.iterator().next()
  if (tag.startsWith("biome:")) {
    handleBiomeMapShop(event, tag)
  }
})

ItemEvents.dropped("immersiveengineering:toolbox", event => {
  event.player.closeMenu()
})
