// priority 10
let replaceTFCHeatingAndCasting = (/** @type {Internal.RecipesEventJS} */ event) => {
  let meltMap = {
    6: 9,
    25: 36,
    50: 72,
    75: 108,
    100: 144,
    200: 288,
    400: 576,
    600: 864,
    800: 1152,
    1200: 1728,
    1400: 2016,
    10: 16,
    15: 24,
    35: 48,
  }
  event.forEachRecipe({ type: "tfc:heating" }, (recipe) => {
    let fluid = recipe.json.has("result_fluid") && recipe.json.getAsJsonObject("result_fluid")
    if (!fluid || !fluid.get("fluid").asString.includes("tfc:")) return
    fluid["addProperty(java.lang.String,java.lang.Number)"]("amount", meltMap[fluid.get("amount")])
  })

  let castMap = {
    100: 144,
    200: 288,
  }
  event.forEachRecipe({ type: "tfc:casting" }, (recipe) => {
    let fluid = recipe.json.has("fluid") && recipe.json.getAsJsonObject("fluid")
    if (!fluid || !fluid.get("ingredient").asString.includes("tfc:")) return
    fluid["addProperty(java.lang.String,java.lang.Number)"]("amount", castMap[fluid.get("amount")])
  })

  event.forEachRecipe({ type: "tfc:heating" }, (recipe) => {
      let fluid = recipe.json.has("result_fluid") && recipe.json.getAsJsonObject("result_fluid")
      if (!fluid || !fluid.get("fluid").asString.includes("firmalife:")) return
      fluid["addProperty(java.lang.String,java.lang.Number)"]("amount", meltMap[fluid.get("amount")])
  })

  event.forEachRecipe({ type: "tfc:casting" }, (recipe) => {
      let fluid = recipe.json.has("fluid") && recipe.json.getAsJsonObject("fluid")
      if (!fluid || !fluid.get("ingredient").asString.includes("firmalife:")) return
      fluid["addProperty(java.lang.String,java.lang.Number)"]("amount", castMap[fluid.get("amount")])
  })

}
