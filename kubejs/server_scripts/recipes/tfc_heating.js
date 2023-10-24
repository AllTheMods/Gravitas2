// priority 10
const replaceTFCHeatingAndCasting = (/** @type {Internal.RecipesEventJS} */ event) => {
  const meltMap = {
    6: JsonIO.primitiveOf(9),
    25: JsonIO.primitiveOf(36),
    50: JsonIO.primitiveOf(72),
    75: JsonIO.primitiveOf(108),
    100: JsonIO.primitiveOf(144),
    200: JsonIO.primitiveOf(288),
    400: JsonIO.primitiveOf(576),
    600: JsonIO.primitiveOf(864),
    800: JsonIO.primitiveOf(1152),
    1200: JsonIO.primitiveOf(1728),
    1400: JsonIO.primitiveOf(2016),
    10: JsonIO.primitiveOf(16),
    15: JsonIO.primitiveOf(24),
    35: JsonIO.primitiveOf(48)
  }

  event.forEachRecipe({ type: "tfc:heating" }, (recipe) => {
    const fluid = recipe.json.asMap()?.result_fluid
    if (!fluid || !meltMap[fluid.get("amount")]) return
    fluid.asMap().put("amount", meltMap[fluid.get("amount")])
    recipe.save()
  })

  const castMap = {
    100: JsonIO.primitiveOf(144),
    200: JsonIO.primitiveOf(288)
  }
  event.forEachRecipe({ type: "tfc:casting" }, (recipe) => {
    const fluid = recipe.json.asMap()?.fluid
    if (!fluid || !castMap[fluid.get("amount")]) return
    fluid.asMap().put("amount", castMap[fluid.get("amount")])
    recipe.save()
  })
}
