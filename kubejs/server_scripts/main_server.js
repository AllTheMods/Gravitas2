// priority 0

ServerEvents.recipes((event) => {
  recipeRemoval(event)
  replaceRecipes(event)
  recipeAdd(event)
  replaceTFCHeatingAndCasting(event)
})

LootJS.modifiers((event) => {
  //event.enableLogging()
  modifyAndRemoveChestLoot(event)
  modifyAndRemoveBlockLoot(event)
  modifyAndRemoveEntityLoot(event)
})

ServerEvents.tags("worldgen/biome", event => {
  addTFCBiomesToVanilla(event)
  addStargateBiomes(event)
})

MoreJSEvents.structureLoad(event => {
  replaceCollapsableBlocks(event)
})

NetworkEvents.dataReceived("customTask", (event) => {
  serverObserveGtTask(event) // TODO: needs rework
})