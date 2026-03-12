const dfcRecipeAddGlassBrick = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Glass brick blocks: glass brick + mortar -> 5 brick blocks
  event.shaped('5x dfc:glass/block/bricks/plain', [
    'ABA',
    'BAB',
    'ABA'
  ], {
    A: 'dfc:glass/brick/plain',
    B: 'tfc:mortar'
  }).id('gregitas:crafting/glass/block/bricks/plain')

  // Glass tile blocks: glass brick + mortar -> 5 tile blocks
  event.shaped('5x dfc:glass/block/tiles/plain', [
    'BAB',
    'AAA',
    'BAB'
  ], {
    A: 'dfc:glass/brick/plain',
    B: 'tfc:mortar'
  }).id('gregitas:crafting/glass/block/tiles/plain')

  // === GLASS BRICK PROCESSING ===

  // Alloy Smelter: glass dust -> plain glass brick (6s = 120 ticks, 1920 EU = 16 EU/t)
  event.recipes.gtceu
    .alloy_smelter("glass_brick_item_alloy_smelter")
    .itemInputs("gtceu:glass_dust")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("dfc:glass/brick/plain")
    .duration(120)
    .EUt(16)

  // Fluid Solidifier: molten glass -> plain glass brick (0.6s = 12 ticks, 48 EU = 4 EU/t)
  event.recipes.gtceu
    .fluid_solidifier("glass_brick_item_fluid_solidifier")
    .inputFluids("gtceu:glass 144")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("dfc:glass/brick/plain")
    .duration(12)
    .EUt(4)

  // Forming Press: glass dust -> plain glass brick (4s = 80 ticks, 2400 EU = 30 EU/t)
  event.recipes.gtceu
    .forming_press("glass_brick_item_forming_press")
    .itemInputs("gtceu:glass_dust")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("dfc:glass/brick/plain")
    .duration(80)
    .EUt(30)

  // Extractor: glass brick -> molten glass (1s = 20 ticks, 600 EU = 30 EU/t)
  event.recipes.gtceu
    .extractor("glass_brick_item_extract")
    .itemInputs("dfc:glass/brick/plain")
    .outputFluids("gtceu:glass 144")
    .duration(20)
    .EUt(30)

  // === PANE CUTTING ===

  dfcTileColors.forEach(color => {
    const block = `dfc:glass/block/bricks/${color}`
    const pane = `dfc:glass/pane/bricks/${color}`
    const tile = `dfc:glass/block/tiles/${color}`
    const tile_pane = `dfc:glass/pane/tiles/${color}`

    // Blocks -> Panes
    // Cutter with lubricant: 3 blocks -> 8 panes (2.5s = 50 ticks, 250 EU = 5 EU/t)
    event.recipes.gtceu
      .cutter(`glass_brick_pane_${color}_lubricant`)
      .itemInputs(`3x ${block}`)
      .inputFluids(Fluid.of('gtceu:lubricant', 1))
      .itemOutputs(`8x ${pane}`)
      .duration(50)
      .EUt(5)

    // Cutter with distilled water: 3 blocks -> 8 panes (3.75s = 75 ticks, 525 EU = 7 EU/t)
    event.recipes.gtceu
      .cutter(`glass_brick_pane_${color}_distilled_water`)
      .itemInputs(`3x ${block}`)
      .inputFluids(Fluid.of('gtceu:distilled_water', 3))
      .itemOutputs(`8x ${pane}`)
      .duration(75)
      .EUt(7)

    // Saw recipe: block -> 2 panes
    event.shapeless(`2x ${pane}`, [block, '#forge:tools/saws']).damageIngredient('#forge:tools/saws')

    // Tiles -> Tile Panes
    // Cutter with lubricant: 3 tiles -> 8 tile panes (2.5s = 50 ticks, 250 EU = 5 EU/t)
    event.recipes.gtceu
      .cutter(`glass_brick_tile_pane_${color}_lubricant`)
      .itemInputs(`3x ${tile}`)
      .inputFluids(Fluid.of('gtceu:lubricant', 1))
      .itemOutputs(`8x ${tile_pane}`)
      .duration(50)
      .EUt(5)

    // Cutter with distilled water: 3 tiles -> 8 tile panes (3.75s = 75 ticks, 525 EU = 7 EU/t)
    event.recipes.gtceu
      .cutter(`glass_brick_tile_pane_${color}_distilled_water`)
      .itemInputs(`3x ${tile}`)
      .inputFluids(Fluid.of('gtceu:distilled_water', 3))
      .itemOutputs(`8x ${tile_pane}`)
      .duration(75)
      .EUt(7)

    // Saw recipe: tile -> 2 tile panes
    event.shapeless(`2x ${tile_pane}`, [tile, '#forge:tools/saws']).damageIngredient('#forge:tools/saws')
  })

  // === CHEMICAL DYEING & BLEACHING ===

  const glassBrickVariants = [
    { name: 'items', path: 'brick', chlorine: 50 },
    { name: 'blocks', path: 'block/bricks', chlorine: 50 },
    { name: 'tiles', path: 'block/tiles', chlorine: 50 },
    { name: 'panes', path: 'pane/bricks', chlorine: 20 },
    { name: 'tile_panes', path: 'pane/tiles', chlorine: 20 }
  ]

  glassBrickVariants.forEach(variant => {
    addChemBathDye(event, {
      idPrefix: `glass_brick_${variant.name}`,
      input: `#gregitas:glass_brick_${variant.name}`,
      coloredOutput: color => `dfc:glass/${variant.path}/${color}`,
    })
    addChemBathBleach(event, {
      idPrefix: `glass_brick_${variant.name}`,
      input: `#gregitas:glass_brick_${variant.name}`,
      bleachedOutput: `dfc:glass/${variant.path}/plain`,
      chlorineAmount: variant.chlorine,
    })
  })
}
