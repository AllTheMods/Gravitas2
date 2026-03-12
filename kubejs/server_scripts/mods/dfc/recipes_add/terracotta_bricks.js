const dfcRecipeAddTerracottaBricks = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Smelting: brick → terracotta_brick (10s = 200 ticks)
  event.smelting('gregitas:terracotta_brick', 'minecraft:brick')
    .cookingTime(200)

  // Terracotta brick
  event.shaped('4x dfc:ceramic/bricks/terracotta_white', [
    'ABA',
    'BAB',
    'ABA'
  ], {
    A: 'gregitas:terracotta_brick',
    B: 'tfc:mortar'
  })

  dfcColors.forEach(color => {
    // Since white is the default, don't allow dyeing to it
    if (color == 'white') return
    
    event.shapeless(`8x dfc:ceramic/bricks/terracotta_${color}`, [
      '8x dfc:ceramic/bricks/terracotta_white',
      `#forge:dyes/${color}`
    ])
  })

  // === TERRACOTTA BRICK BLOCK PROCESSING ===

  dfcColors.forEach(color => {
    const baseBlock = `dfc:ceramic/bricks/terracotta_${color}`
    const slab = `${baseBlock}_slab`
    const stairs = `${baseBlock}_stairs`
    const wall = `${baseBlock}_wall`

    // Standard stairs, slabs, and walls recipes
    event.shaped(`6x ${slab}`, [
      'AAA'
    ], {
      A: baseBlock
    })
    
    event.shaped(`8x ${stairs}`, [
      'A  ',
      'AA ',
      'AAA'
    ], {
      A: baseBlock
    })

    event.shaped(`6x ${wall}`, [
      'AAA',
      'AAA'
    ], {
      A: baseBlock
    })
    
    // Extractor: 4 terracotta brick blocks → 5 terracotta bricks (12s = 240 ticks, 480 EU = 2 EU/t)
    event.recipes.gtceu
      .extractor(`dfc_terracotta_brick_${color}_extract`)
      .itemInputs(`4x ${baseBlock}`)
      .itemOutputs('5x gregitas:terracotta_brick')
      .duration(240)
      .EUt(2)

    // Cutter with water: base block → 2 slabs (4s = 80 ticks, 640 EU = 8 EU/t)
    event.recipes.gtceu
      .cutter(`dfc_terracotta_brick_${color}_slab_water`)
      .itemInputs(baseBlock)
      .inputFluids(Fluid.of('minecraft:water', 4))
      .itemOutputs(`2x ${slab}`)
      .duration(80)
      .EUt(8)

    // Cutter with distilled water: base block → 2 slabs (3s = 60 ticks, 480 EU = 8 EU/t)
    event.recipes.gtceu
      .cutter(`dfc_terracotta_brick_${color}_slab_distilled_water`)
      .itemInputs(baseBlock)
      .inputFluids(Fluid.of('gtceu:distilled_water', 3))
      .itemOutputs(`2x ${slab}`)
      .duration(60)
      .EUt(8)

    // Cutter with lubricant: base block → 2 slabs (2s = 40 ticks, 320 EU = 8 EU/t)
    event.recipes.gtceu
      .cutter(`dfc_terracotta_brick_${color}_slab_lubricant`)
      .itemInputs(baseBlock)
      .inputFluids(Fluid.of('gtceu:lubricant', 1))
      .itemOutputs(`2x ${slab}`)
      .duration(40)
      .EUt(8)

    // Assembler: 3 base blocks + circuit 7 → 4 stairs (4s = 80 ticks, 640 EU = 8 EU/t)
    event.recipes.gtceu
      .assembler(`dfc_terracotta_brick_${color}_stairs`)
      .itemInputs(`3x ${baseBlock}`)
      .circuit(7)
      .itemOutputs(`4x ${stairs}`)
      .duration(80)
      .EUt(8)

    // Assembler: 1 base block + circuit 13 → 1 wall (5s = 100 ticks, 800 EU = 8 EU/t)
    event.recipes.gtceu
      .assembler(`dfc_terracotta_brick_${color}_wall`)
      .itemInputs(baseBlock)
      .circuit(13)
      .itemOutputs(wall)
      .duration(100)
      .EUt(8)

    // Macerator: base block → 4 brick dust (3s = 60 ticks, 120 EU = 2 EU/t)
    event.recipes.gtceu
      .macerator(`dfc_terracotta_brick_${color}_dust`)
      .itemInputs(baseBlock)
      .itemOutputs('4x gtceu:brick_dust')
      .duration(60)
      .EUt(2)
  })

  // === TERRACOTTA BRICK DYEING ===

  const terracottaBrickVariants = [
    { name: 'blocks', suffix: '', fluidScale: 1 },
    { name: 'slabs', suffix: '_slab', fluidScale: 0.5 },
    { name: 'stairs', suffix: '_stairs', fluidScale: 0.75 },
    { name: 'walls', suffix: '_wall', fluidScale: 1 },
  ]

  terracottaBrickVariants.forEach(variant => {
    // Since white is the default, don't allow dyeing to it
    addDyeRecipes(event, {
      idPrefix: `dfc_terracotta_brick_${variant.name}`,
      input: `#gregitas:terracotta_brick_${variant.name}`,
      baseInput: `dfc:ceramic/bricks/terracotta_white${variant.suffix}`,
      bleachInput: `#gregitas:terracotta_brick_${variant.name}_colored`,
      colors: dfcColors.filter(c => c !== "white"),
      coloredOutput: color => `dfc:ceramic/bricks/terracotta_${color}${variant.suffix}`,
      bleachedOutput: `dfc:ceramic/bricks/terracotta_white${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
  })
}
