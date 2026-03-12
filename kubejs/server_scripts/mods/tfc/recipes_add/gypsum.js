const tfcAddGypsum = (/** @type {Internal.RecipesEventJS} */ event) => {
  // === GYPSUM ORE PROCESSING ===

  // TFC Quern: tfc:ore/gypsum → gtceu:gypsum_dust
  event.custom({
    type: 'tfc:quern',
    ingredient: {
      item: 'tfc:ore/gypsum'
    },
    result: {
      item: 'gtceu:gypsum_dust'
    }
  }).id('gregitas:quern/gypsum_ore')
}
