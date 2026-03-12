const dfcRecipeAddFoggyGlass = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Glass brick blocks: glass brick + mortar -> 5 brick blocks
  // Fixes conversions for extracting liquid glass
  event.shaped('5x dfc:glass/block/bricks/foggy', [
    'ABA',
    'BAB',
    'ABA'
  ], {
    A: 'dfc:glass/brick/foggy',
    B: 'tfc:mortar'
  }).id('gregitas:crafting/glass/block/bricks/foggy')
  
  // Glass tile blocks: glass brick + mortar -> 5 tile blocks
  // Fixes conversions for extracting liquid glass
  event.shaped('5x dfc:glass/block/tiles/foggy', [
    'BAB',
    'AAA',
    'BAB'
  ], {
    A: 'dfc:glass/brick/foggy',
    B: 'tfc:mortar'
  }).id('gregitas:crafting/glass/block/tiles/foggy')

  // === HF ETCHING ===

  // Chemical Bath: vanilla glass + HF → foggy glass block (10s = 200 ticks, 25600 EU = 128 EU/t)
  event.recipes.gtceu
    .chemical_bath("foggy_glass_block")
    .itemInputs("minecraft:glass")
    .inputFluids(Fluid.of("gtceu:hydrofluoric_acid", 100))
    .itemOutputs("dfc:glass/block/foggy")
    .duration(200)
    .EUt(128)

  // Chemical Bath: vanilla glass pane + HF → foggy glass pane (5s = 100 ticks, 12800 EU = 128 EU/t)
  event.recipes.gtceu
    .chemical_bath("foggy_glass_pane")
    .itemInputs("minecraft:glass_pane")
    .inputFluids(Fluid.of("gtceu:hydrofluoric_acid", 50))
    .itemOutputs("dfc:glass/pane/foggy")
    .duration(100)
    .EUt(128)

  // Chemical Bath: glass brick + HF → foggy glass brick (10s = 200 ticks, 25600 EU = 128 EU/t)
  event.recipes.gtceu
    .chemical_bath("foggy_glass_brick_item")
    .itemInputs("dfc:glass/brick/plain")
    .inputFluids(Fluid.of("gtceu:hydrofluoric_acid", 100))
    .itemOutputs("dfc:glass/brick/foggy")
    .duration(200)
    .EUt(128)

  // === FOGGY PANE CUTTING ===

  // Cutter with lubricant: 3 foggy glass blocks → 8 foggy panes (2.5s = 50 ticks, 250 EU = 5 EU/t)
  event.recipes.gtceu
    .cutter("foggy_glass_pane_lubricant")
    .itemInputs("3x dfc:glass/block/foggy")
    .inputFluids(Fluid.of("gtceu:lubricant", 1))
    .itemOutputs("8x dfc:glass/pane/foggy")
    .duration(50)
    .EUt(5)

  // Cutter with distilled water: 3 foggy glass blocks → 8 foggy panes (3.75s = 75 ticks, 525 EU = 7 EU/t)
  event.recipes.gtceu
    .cutter("foggy_glass_pane_distilled_water")
    .itemInputs("3x dfc:glass/block/foggy")
    .inputFluids(Fluid.of("gtceu:distilled_water", 3))
    .itemOutputs("8x dfc:glass/pane/foggy")
    .duration(75)
    .EUt(7)

  // Saw: foggy glass block → 2 foggy panes
  event.shapeless("2x dfc:glass/pane/foggy", ["dfc:glass/block/foggy", "#forge:tools/saws"])
    .damageIngredient("#forge:tools/saws")

  // Cutter with lubricant: 3 foggy brick blocks → 8 foggy brick panes (2.5s = 50 ticks, 250 EU = 5 EU/t)
  event.recipes.gtceu
    .cutter("foggy_glass_brick_pane_lubricant")
    .itemInputs("3x dfc:glass/block/bricks/foggy")
    .inputFluids(Fluid.of("gtceu:lubricant", 1))
    .itemOutputs("8x dfc:glass/pane/bricks/foggy")
    .duration(50)
    .EUt(5)

  // Cutter with distilled water: 3 foggy brick blocks → 8 foggy brick panes (3.75s = 75 ticks, 525 EU = 7 EU/t)
  event.recipes.gtceu
    .cutter("foggy_glass_brick_pane_distilled_water")
    .itemInputs("3x dfc:glass/block/bricks/foggy")
    .inputFluids(Fluid.of("gtceu:distilled_water", 3))
    .itemOutputs("8x dfc:glass/pane/bricks/foggy")
    .duration(75)
    .EUt(7)

  // Saw: foggy brick block → 2 foggy brick panes
  event.shapeless("2x dfc:glass/pane/bricks/foggy", ["dfc:glass/block/bricks/foggy", "#forge:tools/saws"])
    .damageIngredient("#forge:tools/saws")

  // Cutter with lubricant: 3 foggy tile blocks → 8 foggy tile panes (2.5s = 50 ticks, 250 EU = 5 EU/t)
  event.recipes.gtceu
    .cutter("foggy_glass_tile_pane_lubricant")
    .itemInputs("3x dfc:glass/block/tiles/foggy")
    .inputFluids(Fluid.of("gtceu:lubricant", 1))
    .itemOutputs("8x dfc:glass/pane/tiles/foggy")
    .duration(50)
    .EUt(5)

  // Cutter with distilled water: 3 foggy tile blocks → 8 foggy tile panes (3.75s = 75 ticks, 525 EU = 7 EU/t)
  event.recipes.gtceu
    .cutter("foggy_glass_tile_pane_distilled_water")
    .itemInputs("3x dfc:glass/block/tiles/foggy")
    .inputFluids(Fluid.of("gtceu:distilled_water", 3))
    .itemOutputs("8x dfc:glass/pane/tiles/foggy")
    .duration(75)
    .EUt(7)

  // Saw: foggy tile block → 2 foggy tile panes
  event.shapeless("2x dfc:glass/pane/tiles/foggy", ["dfc:glass/block/tiles/foggy", "#forge:tools/saws"])
    .damageIngredient("#forge:tools/saws")

  // === FOGGY GLASS EXTRACTING ===

  // Extractor: foggy glass block → glass fluid (1s = 20 ticks, 600 EU = 30 EU/t)
  event.recipes.gtceu
    .extractor("foggy_glass_block_extract")
    .itemInputs("dfc:glass/block/foggy")
    .outputFluids("gtceu:glass 144")
    .duration(20)
    .EUt(30)

  // Extractor: foggy glass brick → glass fluid (1s = 20 ticks, 600 EU = 30 EU/t)
  event.recipes.gtceu
    .extractor("foggy_glass_brick_item_extract")
    .itemInputs("dfc:glass/brick/foggy")
    .outputFluids("gtceu:glass 144")
    .duration(20)
    .EUt(30)

  // Extractor: foggy brick block → glass fluid (1s = 20 ticks, 600 EU = 30 EU/t)
  event.recipes.gtceu
    .extractor("foggy_glass_brick_block_extract")
    .itemInputs("dfc:glass/block/bricks/foggy")
    .outputFluids("gtceu:glass 144")
    .duration(20)
    .EUt(30)

  // Extractor: foggy tile block → glass fluid (1s = 20 ticks, 600 EU = 30 EU/t)
  event.recipes.gtceu
    .extractor("foggy_glass_tile_block_extract")
    .itemInputs("dfc:glass/block/tiles/foggy")
    .outputFluids("gtceu:glass 144")
    .duration(20)
    .EUt(30)
}
