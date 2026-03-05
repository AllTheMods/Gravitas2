// priority 10

// Manual NC centrifuge recipes bridged to GT centrifuge with corrected ratios.

let ncCentrifugeManual = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Uranium isotope separation: 144 mB natural uranium → 128 mB U-238 + 16 mB U-235
  // NC's default recipe has wrong isotope ratios; this corrects them.
  var r = event.recipes.gtceu.centrifuge("gregitas:nc_centrifuge/uranium")
    .EUt(EV)
    .duration(900)
  r.input($FluidRecipeCapability.CAP, $FluidIngredientJS.of("#forge:uranium 144"))
  r.output($FluidRecipeCapability.CAP, $FluidIngredientJS.of("nuclearcraft:uranium_238 128"))
  r.output($FluidRecipeCapability.CAP, $FluidIngredientJS.of("nuclearcraft:uranium_235 16"))
}
