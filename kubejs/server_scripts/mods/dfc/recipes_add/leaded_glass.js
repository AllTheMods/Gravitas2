const dfcRecipeAddLeadedGlass = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Leaded glass dust
  event.shapeless('8x gregitas:leaded_glass_dust', [
    '6x gtceu:quartz_sand_dust',
    'gtceu:lead_dust',
    'gtceu:flint_dust'
  ])

  // === GREGTECH MACHINE RECIPES ===

  // Alloy Smelter: leaded glass dust -> plain leaded glass block
  event.recipes.gtceu
    .alloy_smelter("leaded_glass_block_alloy_smelter")
    .itemInputs("gregitas:leaded_glass_dust")
    .notConsumable("gtceu:block_casting_mold")
    .itemOutputs("dfc:glass/block/leaded/plain")
    .duration(120)
    .EUt(16)

  // Fluid Solidifier: molten leaded glass -> plain leaded glass block
  event.recipes.gtceu
    .fluid_solidifier("leaded_glass_block_fluid_solidifier")
    .inputFluids("gregitas:leaded_glass 144")
    .notConsumable("gtceu:block_casting_mold")
    .itemOutputs("dfc:glass/block/leaded/plain")
    .duration(12)
    .EUt(4)

  // Forming Press: leaded glass dust -> plain leaded glass block
  event.recipes.gtceu
    .forming_press("leaded_glass_block_forming_press")
    .itemInputs("gregitas:leaded_glass_dust")
    .notConsumable("gtceu:block_casting_mold")
    .itemOutputs("dfc:glass/block/leaded/plain")
    .duration(80)
    .EUt(30)

  // Extractor: leaded glass dust -> molten leaded glass
  event.recipes.gtceu
    .extractor("leaded_glass_dust_extract")
    .itemInputs("gregitas:leaded_glass_dust")
    .outputFluids("gregitas:leaded_glass 144")
    .duration(20)
    .EUt(30)

  // Extractor: leaded glass block -> molten leaded glass
  event.recipes.gtceu
    .extractor("leaded_glass_block_extract")
    .itemInputs("dfc:glass/block/leaded/plain")
    .outputFluids("gregitas:leaded_glass 144")
    .duration(20)
    .EUt(30)

  // === PANE CUTTING ===

  dfcTileColors.forEach(color => {
    const block = `dfc:glass/block/leaded/${color}`
    const pane = `dfc:glass/pane/leaded/${color}`

    // Cutter with lubricant: 3 blocks -> 8 panes (2.5s = 50 ticks, 250 EU = 5 EU/t)
    event.recipes.gtceu
      .cutter(`leaded_glass_pane_${color}_lubricant`)
      .itemInputs(`3x ${block}`)
      .inputFluids(Fluid.of('gtceu:lubricant', 1))
      .itemOutputs(`8x ${pane}`)
      .duration(50)
      .EUt(5)

    // Cutter with distilled water: 3 blocks -> 8 panes (3.75s = 75 ticks, 525 EU = 7 EU/t)
    event.recipes.gtceu
      .cutter(`leaded_glass_pane_${color}_distilled_water`)
      .itemInputs(`3x ${block}`)
      .inputFluids(Fluid.of('gtceu:distilled_water', 3))
      .itemOutputs(`8x ${pane}`)
      .duration(75)
      .EUt(7)

    // Saw recipe: block -> 2 panes
    event.shapeless(`2x ${pane}`, [block, '#forge:tools/saws']).damageIngredient('#forge:tools/saws')
  })

  // === CHEMICAL DYEING AND BLEACHING ===

  const glassVariants = [
    { name: 'blocks', item: 'block', chlorine: 50 },
    { name: 'panes', item: 'pane', chlorine: 20 }
  ]

  glassVariants.forEach(variant => {
    addChemBathDye(event, {
      idPrefix: `leaded_glass_${variant.name}`,
      input: `#gregitas:leaded_glass_${variant.name}`,
      coloredOutput: color => `dfc:glass/${variant.item}/leaded/${color}`,
    })
    addChemBathBleach(event, {
      idPrefix: `leaded_glass_${variant.name}`,
      input: `#gregitas:leaded_glass_${variant.name}`,
      bleachedOutput: `dfc:glass/${variant.item}/leaded/plain`,
      chlorineAmount: variant.chlorine,
    })
  })
}
