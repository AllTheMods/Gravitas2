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
    35: JsonIO.primitiveOf(48),
    20: JsonIO.primitiveOf(24),
    30: JsonIO.primitiveOf(48),
    90: JsonIO.primitiveOf(128),
    60: JsonIO.primitiveOf(86),
    40: JsonIO.primitiveOf(58),
    70: JsonIO.primitiveOf(96)
  }

  event.forEachRecipe({ type: "tfc:heating" }, (recipe) => {
    const fluid = recipe.json.asMap()?.result_fluid
    if (!fluid || !meltMap[fluid.get("amount")]) return
    fluid.asMap().put("amount", meltMap[fluid.get("amount")])
    recipe.save()
  })

  event.forEachRecipe({ id: /^woodencog:mixing\/.*/ }, (recipe) => {
    const ingredients = recipe.json.getAsJsonArray("ingredients")
    if (!ingredients) return
    ingredients.forEach((input) => {
      if (!input.has("amount") || !meltMap[input.get("amount")]) return
      input.asMap().put("amount", meltMap[input.get("amount")])
    })
    const results = recipe.json.getAsJsonArray("results")
    if (!results) return
    results.forEach((output) => {
      if (!output.has("amount") || !meltMap[output.get("amount")]) return
      output.asMap().put("amount", meltMap[output.get("amount")])
    })
    recipe.save()
  })
  //This is *technically* a replacement, but needs meltMap, so.
  event.forEachRecipe({ id: /^woodencog:advanced_filling\/.*/ }, (recipe) => {
    const ing = recipe.json.getAsJsonArray("ingredients")
    if (!ing) return
    ing.forEach((mayfluid) => {
      if (!mayfluid.has("amount") || !meltMap[mayfluid.get("amount")]) {
        return
      }
      mayfluid.asMap().put("amount", meltMap[mayfluid.get("amount")])
    })
    const results = recipe.json.getAsJsonArray("results")
    if (!results) return
    results.forEach((output) => {
      const nbt = output.get("nbt")
      if (!nbt) return
      const tank = nbt.get("tank")
      if (!tank || !tank.has("Amount") || !meltMap[tank.get("Amount")]) return
      var bootleg = Fluid.of(tank.get("FluidName"), meltMap[tank.get("Amount")]).toJson() //I hate this. But its the first way I could get it to not put a double in the amount...
      tank.asMap().put("Amount", bootleg.get("amount"))
    })
    recipe.save()
    console.log(recipe.json)
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
