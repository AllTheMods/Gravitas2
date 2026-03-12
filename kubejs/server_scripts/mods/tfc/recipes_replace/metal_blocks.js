const tfcReplaceMetalBlocks = (/** @type {Internal.RecipesEventJS} */ event) => {

  const tfcMetalBlockMetals = [
    "bismuth", "bismuth_bronze", "black_bronze", "bronze", "brass",
    "copper", "gold", "nickel", "rose_gold", "silver", "tin", "zinc",
    "sterling_silver", "wrought_iron", "steel", "black_steel",
    "blue_steel", "red_steel"
  ]

  const tfcIeAddonMetalBlockMetals = [
    "uranium", "constantan", "electrum"
  ]

  const tfcIeAddonDfcConversionMetals = [
    "lead", "aluminum"
  ]

  const firmaLifeMetalBlocksMetals = [
    "chromium", "stainless_steel"
  ]

  tfcMetalBlockMetals.forEach((metal) => {
    event.remove({ id: `tfc:crafting/metal/block/${metal}` })

    event.custom({
      type: 'tfc:damage_inputs_shapeless_crafting',
      recipe: {
        type: 'minecraft:crafting_shapeless',
        ingredients: [
          { tag: `forge:plates/${metal}` },
          { tag: 'tfc:rock/smooth' },
          { tag: 'tfc:hammers' }
        ],
        result: { item: `tfc:metal/block/${metal}`, count: 8 }
      }
    }).id(`kubejs:tfc/metal/block/${metal}`)
  })

  tfcIeAddonMetalBlockMetals.forEach((metal) => {
    event.remove({ id: `tfc_ie_addon:crafting/metal/block/${metal}` })

    event.custom({
      type: 'tfc:damage_inputs_shapeless_crafting',
      recipe: {
        type: 'minecraft:crafting_shapeless',
        ingredients: [
          { tag: `forge:plates/${metal}` },
          { tag: 'tfc:rock/smooth' },
          { tag: 'tfc:hammers' }
        ],
        result: { item: `tfc_ie_addon:metal/block/${metal}`, count: 8 }
      }
    }).id(`kubejs:tfc_ie_addon/metal/block/${metal}`)
  })

  tfcIeAddonDfcConversionMetals.forEach((metal) => {
    event.remove({ id: `tfc_ie_addon:crafting/metal/block/${metal}` })

    event.shapeless(`dfc:metal/block/${metal}`, [
      `tfc_ie_addon:metal/block/${metal}`
    ])

    event.shapeless(`tfc_ie_addon:metal/block/${metal}`, [
      `dfc:metal/block/${metal}`
    ])
  })

  firmaLifeMetalBlocksMetals.forEach((metal) => {
    event.remove({ id: `firmalife:crafting/crafting/metal/block/${metal}` })

    event.custom({
      type: 'tfc:damage_inputs_shapeless_crafting',
      recipe: {
        type: 'minecraft:crafting_shapeless',
        ingredients: [
          { tag: `forge:plates/${metal}` },
          { tag: 'tfc:rock/smooth' },
          { tag: 'tfc:hammers' }
        ],
        result: { item: `firmalife:metal/block/${metal}`, count: 8 }
      }
    }).id(`kubejs:firmalife/metal/block/${metal}`)
  })
}
