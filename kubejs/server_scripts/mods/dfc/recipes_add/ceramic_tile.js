const dfcRecipeAddCeramicTile = (/** @type {Internal.RecipesEventJS} */ event) => {

  // === CERAMIC TILE ===
  
  // Forming Press: 1 clay ball + plate mold → 1 unfired tile (5s, 800 EU)
  event.recipes.gtceu
    .forming_press('unfired_tile_from_clay')
    .notConsumable('gtceu:plate_casting_mold')
    .itemInputs('minecraft:clay_ball')
    .itemOutputs('dfc:ceramic/unfired_tile')
    .duration(100)
    .EUt(8)

  // Create Vintage Curving: 1 clay ball + plate mold → 1 unfired tile
  event.recipes.vintage.curving(
    'dfc:ceramic/unfired_tile',
    'minecraft:clay_ball',
    'gtceu:plate_casting_mold'
  ).id('gregitas:curving/unfired_tile')

  // Alloy Smelter: 4 clay balls + plate mold → 4 fired tiles (4s, 2400 EU)
  event.recipes.gtceu
    .alloy_smelter('tile_from_clay')
    .itemInputs('4x minecraft:clay_ball')
    .notConsumable('gtceu:plate_casting_mold')
    .itemOutputs('4x dfc:ceramic/tile')
    .duration(80)
    .EUt(30)

  // Smelting: unfired tile → fired tile (10s = 200 ticks)
  event.smelting('dfc:ceramic/tile', 'dfc:ceramic/unfired_tile')
    .cookingTime(200)

  // === DFC CERAMIC TILE BLOCK PROCESSING ===

  dfcTileTypes.forEach(type => {
    dfcTileColors.forEach(color => {

      // There is no plain glazed tiles
      if (type == "glazed" && color == "plain") {
	return
      }
      
      const baseBlock = `dfc:ceramic/tiles/${type}/${color}`
      const slab = `${baseBlock}_slab`
      const stairs = `${baseBlock}_stairs`

      // Extractor: 4 tile blocks → 5 tiles (12s = 240 ticks, 480 EU = 2 EU/t)
      event.recipes.gtceu
	.extractor(`dfc_ceramic_tile_${type}_${color}_extract`)
	.itemInputs(`4x ${baseBlock}`)
	.itemOutputs('5x dfc:ceramic/tile')
	.duration(240)
	.EUt(2)

      // Cutter with water: base block → 2 slabs (4s = 80 ticks, 640 EU = 8 EU/t)
      event.recipes.gtceu
        .cutter(`dfc_${type}_${color}_tile_slab_water`)
        .itemInputs(baseBlock)
        .inputFluids(Fluid.of('minecraft:water', 4))
        .itemOutputs(`2x ${slab}`)
        .duration(80)
        .EUt(8)

      // Cutter with distilled water: base block → 2 slabs (3s = 60 ticks, 480 EU = 8 EU/t)
      event.recipes.gtceu
        .cutter(`dfc_${type}_${color}_tile_slab_distilled_water`)
        .itemInputs(baseBlock)
        .inputFluids(Fluid.of('gtceu:distilled_water', 3))
        .itemOutputs(`2x ${slab}`)
        .duration(60)
        .EUt(8)

      // Cutter with lubricant: base block → 2 slabs (2s = 40 ticks, 320 EU = 8 EU/t)
      event.recipes.gtceu
        .cutter(`dfc_${type}_${color}_tile_slab_lubricant`)
        .itemInputs(baseBlock)
        .inputFluids(Fluid.of('gtceu:lubricant', 1))
        .itemOutputs(`2x ${slab}`)
        .duration(40)
        .EUt(8)

      // Assembler: 3 base blocks + circuit 7 → 4 stairs (4s = 80 ticks, 640 EU = 8 EU/t)
      event.recipes.gtceu
        .assembler(`dfc_${type}_${color}_tile_stairs`)
        .itemInputs(`3x ${baseBlock}`)
        .circuit(7)
        .itemOutputs(`4x ${stairs}`)
        .duration(80)
        .EUt(8)

      // Macerator: base block → 4 brick dust (3s = 60 ticks, 120 EU = 2 EU/t)
      event.recipes.gtceu
        .macerator(`dfc_${type}_${color}_tile_dust`)
        .itemInputs(baseBlock)
        .itemOutputs('4x gtceu:brick_dust')
        .duration(60)
        .EUt(2)
    })
  })
  
  // === GLAZED TILE CREATION ===
  // Smelting: colored ceramic tile (normal) → corresponding glazed tile (10s = 200 ticks)
  // Mirrors the vanilla glazed terracotta pattern

  dfcColors.forEach(color => {
    event.smelting(`dfc:ceramic/tiles/glazed/${color}`, `dfc:ceramic/tiles/normal/${color}`)
      .cookingTime(200)
  })

  // === CERAMIC TILE DYEING ===

  const tileVariants = [
    { name: 'blocks', suffix: '', fluidScale: 1 },
    { name: 'slabs', suffix: '_slab', fluidScale: 0.5 },
    { name: 'stairs', suffix: '_stairs', fluidScale: 0.75 },
  ]

  dfcTileTypes.forEach(type => {
    tileVariants.forEach(variant => {
      if (type === "glazed") {
        // Glazed: chemical bath allows re-dye from any color; white is the base for barrel/mixing
        addChemBathDye(event, {
          idPrefix: `dfc_tile_${type}_${variant.name}`,
          input: `#gregitas:ceramic_tile_${variant.name}/${type}`,
          coloredOutput: color => `dfc:ceramic/tiles/${type}/${color}${variant.suffix}`,
          fluidScale: variant.fluidScale,
        })
        addBarrelDye(event, {
          idPrefix: `dfc_tile_${type}_${variant.name}`,
          input: `dfc:ceramic/tiles/${type}/white${variant.suffix}`,
          colors: dfcColors.filter(c => c !== "white"),
          coloredOutput: color => `dfc:ceramic/tiles/${type}/${color}${variant.suffix}`,
          fluidScale: variant.fluidScale,
        })
        addGTMixDye(event, {
          idPrefix: `dfc_tile_${type}_${variant.name}`,
          input: `dfc:ceramic/tiles/${type}/white${variant.suffix}`,
          colors: dfcColors.filter(c => c !== "white"),
          coloredOutput: color => `dfc:ceramic/tiles/${type}/${color}${variant.suffix}`,
          fluidScale: variant.fluidScale,
        })
        addCreateMixDye(event, {
          idPrefix: `dfc_tile_${type}_${variant.name}`,
          input: `dfc:ceramic/tiles/${type}/white${variant.suffix}`,
          colors: dfcColors.filter(c => c !== "white"),
          coloredOutput: color => `dfc:ceramic/tiles/${type}/${color}${variant.suffix}`,
          fluidScale: variant.fluidScale,
        })
      } else {
        // Non-glazed: full suite, barrel/mixer/Create use plain as base
        addDyeRecipes(event, {
          idPrefix: `dfc_tile_${type}_${variant.name}`,
          input: `#gregitas:ceramic_tile_${variant.name}/${type}`,
          baseInput: `dfc:ceramic/tiles/${type}/plain${variant.suffix}`,
          bleachInput: `#gregitas:ceramic_tile_${variant.name}_colored/${type}`,
          coloredOutput: color => `dfc:ceramic/tiles/${type}/${color}${variant.suffix}`,
          bleachedOutput: `dfc:ceramic/tiles/${type}/plain${variant.suffix}`,
          fluidScale: variant.fluidScale,
        })
      }
    })
  })
}
