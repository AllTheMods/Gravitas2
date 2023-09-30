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
  event.forEachRecipe({ type: 'tfc:heating' }, (recipe) => {
    if(recipe.json.has('result_fluid')){
      let fluid = recipe.json.getAsJsonObject('result_fluid');
      let type = fluid.get('fluid').getAsString();
      if(type.indexOf('tfc:') >= 0) {
        fluid['addProperty(java.lang.String,java.lang.Number)']('amount', meltMap[fluid.get('amount').getAsInt()]);
        recipe.createRecipe();
      }
    }
  })

  let castMap = {
    100: 144,
    200: 288,
  }
  event.forEachRecipe({ type: 'tfc:casting' }, (recipe) => {
    if(recipe.json.has('fluid')){
      let fluid = recipe.json.getAsJsonObject('fluid');
      let type = fluid.get('ingredient').getAsString();
      if(type.indexOf('tfc:') >= 0) {
        fluid['addProperty(java.lang.String,java.lang.Number)']('amount', castMap[fluid.get('amount').getAsInt()]);
        recipe.createRecipe();
      }
    }
  })
}
