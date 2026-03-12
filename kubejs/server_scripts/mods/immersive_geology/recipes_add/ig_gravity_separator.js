// priority 10
// IG Gravity Separator bridge recipes

var igGravitySeparator = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Byproduct fixes: replaces minecraft:gravel → gtceu:stone_dust and minecraft:sand → tfc:sand/brown
  event.forEachRecipe({ type: "immersivegeology:gravity_separator" }, (recipe) => {
    var json = JSON.parse(recipe.json)
    if (!json.byproduct) return
    if (json.byproduct.item === "minecraft:gravel") {
      event.remove({ id: String(recipe.id) })
      json.byproduct = { item: "gtceu:stone_dust" }
      event.custom(json)
    } else if (json.byproduct.item === "minecraft:sand") {
      event.remove({ id: String(recipe.id) })
      json.byproduct = { item: "tfc:sand/brown" }
      event.custom(json)
    }
  })

  global.gtOreMaterials.forEach((entry) => {
    var inputMod = entry.mod === "minecraft" ? "gtceu" : entry.mod
    var resultMod = entry.mod === "minecraft" ? "gtceu" : entry.mod
    var resultItem = entry.result
      ? entry.result
      : resultMod + ":" + entry.material + "_dust"
    event.custom({
      type: "immersivegeology:gravity_separator",
      input: { item: inputMod + ":impure_" + entry.material + "_dust" },
      result: { item: resultItem },
      byproduct: { item: "gtceu:stone_dust" },
      byproduct_chance: 0.1,
      water: 100,
      time: 100,
    })
    event.custom({
      type: "immersivegeology:gravity_separator",
      input: { item: inputMod + ":pure_" + entry.material + "_dust" },
      result: { item: resultItem },
      byproduct: { item: "gtceu:stone_dust" },
      byproduct_chance: 0.05,
      water: 100,
      time: 100,
    })
  })
}
