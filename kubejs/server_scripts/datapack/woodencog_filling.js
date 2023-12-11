// priority 10

let convertMeltValuesFromWoodencog = (/** @type {Internal.DataPackEventJS} */ event) => {
  let fillingRecipes = global.readJsonFolderFromMod("data", "woodencog", "recipes/advanced_filling")
  fillingRecipes.forEach((recipeId, json) => {
    json
      .get("ingredients")
      .asJsonArray.forEach((ingredient) =>
        ingredient.asJsonObject.asMap().computeIfPresent("amount", (key, val) => meltMap[val] || val)
      )
    json.get("results").asJsonArray.forEach((result) => {
      let tank = getJsonPath(result, "stack.nbt.tank")
      tank && tank.asMap().computeIfPresent("Amount", (key, val) => meltMap[val] || val)
    })
    event.addJson(recipeId, json)
  })
}
