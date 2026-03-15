// priority 10

var ieHopGraphiteChain = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Step 1: 2CH₄ + HCl (catalyst) → C₂H₂ + HCl
  // HCl is catalytic — equal amounts in and out
  event.recipes.gtceu.chemical_reactor("gregitas:ie/hop_graphite/acetylene")
    .inputFluids("gtceu:methane 2000", "gtceu:hydrochloric_acid 100")
    .outputFluids("gregitas:acetylene 1000", "gtceu:hydrochloric_acid 100")
    .EUt(HV).duration(200)

  // Step 2: Graphite + C₂H₂ → Pyrolitic Carbon (CVD)
  // Acetylene thermally decomposes onto graphite substrate: C₂H₂ → 2C + H₂
  event.recipes.gtceu.chemical_vapor_deposition("gregitas:ie/hop_graphite/cvd")
    .itemInputs("1x thoriumreactors:graphite_ingot")
    .inputFluids("gregitas:acetylene 1000")
    .itemOutputs("1x nuclearcraft:pyrolitic_carbon_ingot")
    .EUt(HV).duration(400)

  // Step 3: Pyrolitic Carbon + Ar → HOP Graphite (Arc Furnace)
  // High-temperature annealing in inert argon atmosphere
  event.recipes.gtceu.arc_furnace("gregitas:ie/hop_graphite/arc")
    .itemInputs("1x nuclearcraft:pyrolitic_carbon_ingot")
    .inputFluids("gtceu:argon 1000")
    .itemOutputs("1x immersiveengineering:ingot_hop_graphite")
    .EUt(EV).duration(200)
}
