// priority 10

let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({type: "minecraft:crafting_shaped"},"minecraft:torch","tfc:torch")
}