// priority 10

function igFluidOutputFix(event) {
  var IG_TO_GT = {
    "immersivegeology:fluid_hydrochloric_acid": "gtceu:hydrochloric_acid",
    "immersivegeology:fluid_sulfuric_acid":     "gtceu:sulfuric_acid",
    "immersivegeology:fluid_nitric_acid":       "gtceu:nitric_acid",
    "immersivegeology:fluid_sodium_hydroxide":  "gtceu:sodium_hydroxide",
    "immersivegeology:fluid_hydrofluoric_acid":  "gtceu:hydrofluoric_acid",
    "immersivegeology:fluid_ammonia_solution":  "gtceu:ammonia",
    "immersivegeology:fluid_phosphoric_acid":  "gtceu:phosphoric_acid",
    "immersivegeology:fluid_aqua_regia":  "gtceu:aqua_regia",
  }

  function fixFluidOutput(recipeType, fluidField) {
    event.forEachRecipe({ type: recipeType }, function(recipe) {
      var json = JSON.parse(recipe.json)
      var fluidOut = json[fluidField]
      if (!fluidOut || !fluidOut.fluid) return
      var gtFluid = IG_TO_GT[fluidOut.fluid]
      if (!gtFluid) return
      event.remove({ id: String(recipe.id) })
      fluidOut.fluid = gtFluid
      event.custom(json)
    })
  }

  fixFluidOutput("immersivegeology:crystallizer",           "fluidResult")
  fixFluidOutput("immersivegeology:chemical_reactor",       "fluidResult")
  fixFluidOutput("immersivegeology:small_chemical_reactor", "fluidResult")
  fixFluidOutput("immersiveengineering:mixer",              "result")
  fixFluidOutput("immersiveengineering:refinery",           "result")
}
