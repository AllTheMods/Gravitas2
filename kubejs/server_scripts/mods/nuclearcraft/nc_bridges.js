// priority 10

// Orchestrates all NC → GT recipe bridges.
// Individual bridges are in bridges/ and define their own functions.

let ncBridges = (/** @type {Internal.RecipesEventJS} */ event) => {
  ncToGtChemReactor(event)
  ncIngotFormerToGtSolidifier(event)
  ncMelterToGtExtractor(event)
  ncPressurizer(event)
  ncManufactoryToGtMacerator(event)
  ncFluidEnricherToGtMixer(event)
}
