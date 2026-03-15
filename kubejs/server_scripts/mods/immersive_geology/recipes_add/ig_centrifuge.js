// priority 10

var igCentrifuge = (/** @type {Internal.RecipesEventJS} */ event) => {
  // item_output fix: minecraft:sand → tfc:sand/brown
  event.forEachRecipe({ type: "immersivegeology:centrifuge" }, (recipe) => {
    var json = JSON.parse(recipe.json)
    if (!json.item_output) return
    if (json.item_output.item === "minecraft:sand") {
      event.remove({ id: String(recipe.id) })
      json.item_output = { item: "tfc:sand/brown" }
      event.custom(json)
    }
  })
}
