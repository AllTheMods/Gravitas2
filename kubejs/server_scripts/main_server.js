// priority 0

ServerEvents.recipes((event) => {
  recipeRemoval(event)
  replaceRecipes(event)
  recipeAdd(event)
})

LootJS.modifiers((event) => {
  //event.enableLogging()
  modifyAndRemoveChestLoot(event)
  modifyAndRemoveBlockLoot(event)
  modifyAndRemoveEntityLoot(event)
})

NetworkEvents.dataReceived("customTask", (event) => {
  serverObserveGtTask(event) // TODO: needs rework
})