// priority 10

const replaceTFCHeatingAndCasting = (/** @type {Internal.RecipesEventJS} */ event) => {
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
