const dfcRecipesReplaceMetalBlocks = (/** @type {Internal.RecipesEventJS} */ event) => {

  // Map of metals with different naming between DFC and GregTech
  const metalNameMap = {
    "aluminum": "aluminium"
  }

  dfcReplaceableMetals.forEach((metal) => {
    const gtMetal = metalNameMap[metal] || metal

    // Replace DFC/TFC powders with GregTech dusts in DFC recipes
    event.replaceInput(
      { mod: 'dfc' },
      `dfc:metal/powder/${metal}`,
      `#forge:dusts/${gtMetal}`
    )
    event.replaceInput(
      { mod: 'dfc' },
      `tfc:metal/powder/${metal}`,
      `#forge:dusts/${gtMetal}`
    )

    // Remove original DFC metal block recipes
    event.remove({ id: `dfc:crafting/metal/bricks/${metal}` })
    event.remove({ id: `dfc:crafting/metal/cut/${metal}` })
    event.remove({ id: `dfc:crafting/metal/smooth/${metal}` })
    event.remove({ id: `dfc:crafting/metal/pillar/${metal}` })

    if (dfcCopyMetals.includes(metal)) {
      event.remove({ id: `dfc:crafting/metal/block/${metal}` })
    }

    // Recreate with plate tags
    event.custom({
      type: 'tfc:damage_inputs_shapeless_crafting',
      recipe: {
        type: 'minecraft:crafting_shapeless',
        ingredients: [
          { tag: `forge:plates/${gtMetal}` },
          { tag: 'tfc:rock/bricks' },
          { tag: 'tfc:hammers' }
        ],
        result: { item: `dfc:metal/bricks/${metal}`, count: 8 }
      }
    }).id(`kubejs:dfc/metal/bricks/${metal}`)

    event.custom({
      type: 'tfc:damage_inputs_shapeless_crafting',
      recipe: {
        type: 'minecraft:crafting_shapeless',
        ingredients: [
          { tag: `forge:plates/${gtMetal}` },
          { tag: 'dfc:rock/tiles' },
          { tag: 'tfc:hammers' }
        ],
        result: { item: `dfc:metal/cut/${metal}`, count: 8 }
      }
    }).id(`kubejs:dfc/metal/cut/${metal}`)

    event.custom({
      type: 'tfc:damage_inputs_shapeless_crafting',
      recipe: {
        type: 'minecraft:crafting_shapeless',
        ingredients: [
          { tag: `forge:plates/${gtMetal}` },
          { tag: 'minecraft:planks' },
          { tag: 'tfc:hammers' }
        ],
        result: { item: `dfc:metal/smooth/${metal}`, count: 8 }
      }
    }).id(`kubejs:dfc/metal/smooth/${metal}`)

    event.custom({
      type: 'tfc:damage_inputs_shapeless_crafting',
      recipe: {
        type: 'minecraft:crafting_shapeless',
        ingredients: [
          { tag: `forge:plates/${gtMetal}` },
          { tag: 'dfc:rock/pillars' },
          { tag: 'tfc:hammers' }
        ],
        result: { item: `dfc:metal/pillar/${metal}`, count: 8 }
      }
    }).id(`kubejs:dfc/metal/pillar/${metal}`)

    if (dfcCopyMetals.includes(metal)) {
      event.custom({
        type: 'tfc:damage_inputs_shapeless_crafting',
        recipe: {
          type: 'minecraft:crafting_shapeless',
          ingredients: [
            { tag: `forge:plates/${gtMetal}` },
            { tag: 'tfc:rock/smooth' },
            { tag: 'tfc:hammers' }
          ],
          result: { item: `dfc:metal/block/${metal}`, count: 8 }
        }
      }).id(`kubejs:dfc/metal/block/${metal}`)
    }
  })

}
