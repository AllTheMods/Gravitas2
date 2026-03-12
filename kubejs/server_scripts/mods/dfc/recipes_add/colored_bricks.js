const dfcRecipeAddColoredBricks = (/** @type {Internal.RecipesEventJS} */ event) => {

  // === COLORED BRICK BLOCK PROCESSING ===

  dfcColors.forEach(color => {
    const baseBlock = `dfc:ceramic/bricks/${color}`
    const slab = `${baseBlock}_slab`
    const stairs = `${baseBlock}_stairs`
    const wall = `${baseBlock}_wall`

    // Extractor: 4 colored brick blocks → 5 bricks (12s = 240 ticks, 480 EU = 2 EU/t)
    // Matches vanilla brick extractor ratio to prevent infinite loops
    event.recipes.gtceu
      .extractor(`dfc_brick_${color}_extract`)
      .itemInputs(`4x ${baseBlock}`)
      .itemOutputs('5x minecraft:brick')
      .duration(240)
      .EUt(2)

    // Cutter with water: base block → 2 slabs (4s = 80 ticks, 640 EU = 8 EU/t)
    event.recipes.gtceu
      .cutter(`dfc_brick_${color}_slab_water`)
      .itemInputs(baseBlock)
      .inputFluids(Fluid.of('minecraft:water', 4))
      .itemOutputs(`2x ${slab}`)
      .duration(80)
      .EUt(8)

    // Cutter with distilled water: base block → 2 slabs (3s = 60 ticks, 480 EU = 8 EU/t)
    event.recipes.gtceu
      .cutter(`dfc_brick_${color}_slab_distilled_water`)
      .itemInputs(baseBlock)
      .inputFluids(Fluid.of('gtceu:distilled_water', 3))
      .itemOutputs(`2x ${slab}`)
      .duration(60)
      .EUt(8)

    // Cutter with lubricant: base block → 2 slabs (2s = 40 ticks, 320 EU = 8 EU/t)
    event.recipes.gtceu
      .cutter(`dfc_brick_${color}_slab_lubricant`)
      .itemInputs(baseBlock)
      .inputFluids(Fluid.of('gtceu:lubricant', 1))
      .itemOutputs(`2x ${slab}`)
      .duration(40)
      .EUt(8)

    // Assembler: 3 base blocks + circuit 7 → 4 stairs (4s = 80 ticks, 640 EU = 8 EU/t)
    event.recipes.gtceu
      .assembler(`dfc_brick_${color}_stairs`)
      .itemInputs(`3x ${baseBlock}`)
      .circuit(7)
      .itemOutputs(`4x ${stairs}`)
      .duration(80)
      .EUt(8)

    // Assembler: 1 base block + circuit 13 → 1 wall (5s = 100 ticks, 800 EU = 8 EU/t)
    event.recipes.gtceu
      .assembler(`dfc_brick_${color}_wall`)
      .itemInputs(baseBlock)
      .circuit(13)
      .itemOutputs(wall)
      .duration(100)
      .EUt(8)

    // Macerator: base block → 4 brick dust (3s = 60 ticks, 120 EU = 2 EU/t)
    event.recipes.gtceu
      .macerator(`dfc_brick_${color}_dust`)
      .itemInputs(baseBlock)
      .itemOutputs('4x gtceu:brick_dust')
      .duration(60)
      .EUt(2)
  })

  // === COLORED BRICK CHEMICAL DYEING ===

  const coloredBrickVariants = [
    { name: 'blocks', suffix: '', vanillaName: 'bricks', fluidScale: 1 },
    { name: 'slabs', suffix: '_slab', vanillaName: 'brick_slab', fluidScale: 0.5 },
    { name: 'stairs', suffix: '_stairs', vanillaName: 'brick_stairs', fluidScale: 0.75 },
    { name: 'walls', suffix: '_wall', vanillaName: 'brick_wall', fluidScale: 1 },
  ]

  // GregTech Chemical Bath dyeing: brick + dye → colored brick (1s = 20 ticks, 140 EU = 7 EU/t)
  coloredBrickVariants.forEach(function(variant) {
    addDyeRecipes(event, {
      idPrefix: `dfc_brick_${variant.name}`,
      input: `#gregitas:colored_brick_${variant.name}`,
      baseInput: `minecraft:${variant.vanillaName}`,
      bleachInput: `#gregitas:dfc_colored_brick_${variant.name}`,
      coloredOutput: color => `dfc:ceramic/bricks/${color}${variant.suffix}`,
      bleachedOutput: `minecraft:${variant.vanillaName}`,
      fluidScale: variant.fluidScale,
    })
  })
}
