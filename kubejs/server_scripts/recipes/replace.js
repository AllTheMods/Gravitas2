// priority 10

const itemTypes = [
  "ingots",
  "plates",
  "rods",
  "gears"
]
let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({type: "minecraft:crafting_shaped"},"minecraft:torch","tfc:torch")


}
