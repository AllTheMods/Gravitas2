// priority 10

const itemTypes = ["ingots", "plates", "rods", "gears"]
let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:cobblestone_slab", "#forge:slabs/cobblestone")
}
