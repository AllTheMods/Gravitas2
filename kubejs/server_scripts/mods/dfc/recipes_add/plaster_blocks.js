const dfcRecipeAddPlasterBlocks = (/** @type {Internal.RecipesEventJS} */ event) => {

  // === PLASTER FLUID CREATION ===
  
  // TFC Barrel: gypsum dust + water → plaster fluid
  event.custom({
    type: 'tfc:barrel_instant',
    input_item: {
      ingredient: {
        tag: 'forge:dusts/gypsum'
      }
    },
    input_fluid: {
      ingredient: 'minecraft:water',
      amount: 500
    },
    output_fluid: {
      fluid: 'dfc:plaster',
      amount: 500
    }
  }).id('gregitas:barrel/plaster_from_gypsum_dust')

  // LV Mixer: gypsum dust + water → plaster fluid
  // 320 EU over 1 second = 16 EU/t × 20 ticks
  event.recipes.gtceu
    .mixer('plaster_fluid_from_gypsum')
    .itemInputs('gtceu:gypsum_dust')
    .inputFluids(Fluid.of('minecraft:water', 500))
    .outputFluids(Fluid.of('dfc:plaster', 576))
    .duration(20)
    .EUt(16)
  
  // === PLASTER BLOCKS - CREATE SPOUT INTEGRATION ===
  
  // Create Spout: spout applies plaster fluid to blocks → plaster blocks
  
  // Wood planks
  event.recipes.create
    .filling('dfc:plaster/smooth/plain', ['#minecraft:planks', Fluid.of('dfc:plaster', 40)])
    .id('gregitas:filling/plaster_smooth_from_planks')
  
  // Wooden stairs
  event.recipes.create
    .filling('dfc:plaster/smooth/plain_stairs', ['#minecraft:wooden_stairs', Fluid.of('dfc:plaster', 40)])
    .id('gregitas:filling/plaster_smooth_stairs_from_wood')
  
  // Wooden slabs
  event.recipes.create
    .filling('dfc:plaster/smooth/plain_slab', ['#minecraft:wooden_slabs', Fluid.of('dfc:plaster', 40)])
    .id('gregitas:filling/plaster_smooth_slab_from_wood')
  
  // Bricks
  event.recipes.create
    .filling('dfc:plaster/smooth/plain', ['minecraft:bricks', Fluid.of('dfc:plaster', 40)])
    .id('gregitas:filling/plaster_smooth_from_bricks')
  
  event.recipes.create
    .filling('dfc:plaster/smooth/plain_stairs', ['minecraft:brick_stairs', Fluid.of('dfc:plaster', 40)])
    .id('gregitas:filling/plaster_smooth_stairs_from_bricks')
  
  event.recipes.create
    .filling('dfc:plaster/smooth/plain_slab', ['minecraft:brick_slab', Fluid.of('dfc:plaster', 40)])
    .id('gregitas:filling/plaster_smooth_slab_from_bricks')

  // Stone pillars
  event.recipes.create
    .filling('dfc:plaster/pillar/plain', ['#dfc:rock/pillars', Fluid.of('dfc:plaster', 40)])
    .id('gregitas:filling/plaster_pillar_from_stone')
  
  // === PLAIN PLASTER BLOCKS FROM WOOD ===

  // Chemical Bath: wood planks + plaster → plain smooth plaster (5s = 100 ticks, 800 EU = 8 EU/t)
  event.recipes.gtceu
    .chemical_bath('plaster_smooth_from_planks')
    .itemInputs('#minecraft:planks')
    .inputFluids(Fluid.of('dfc:plaster', 40))
    .itemOutputs('dfc:plaster/smooth/plain')
    .duration(100)
    .EUt(8)

  // Chemical Bath: wooden stairs + plaster → plain smooth plaster stairs (5s = 100 ticks, 800 EU = 8 EU/t)
  event.recipes.gtceu
    .chemical_bath('plaster_smooth_stairs_from_wood')
    .itemInputs('#minecraft:wooden_stairs')
    .inputFluids(Fluid.of('dfc:plaster', 40))
    .itemOutputs('dfc:plaster/smooth/plain_stairs')
    .duration(100)
    .EUt(8)

  // Chemical Bath: wooden slabs + plaster → plain smooth plaster slabs (5s = 100 ticks, 800 EU = 8 EU/t)
  event.recipes.gtceu
    .chemical_bath('plaster_smooth_slab_from_wood')
    .itemInputs('#minecraft:wooden_slabs')
    .inputFluids(Fluid.of('dfc:plaster', 40))
    .itemOutputs('dfc:plaster/smooth/plain_slab')
    .duration(100)
    .EUt(8)

  // === PLAIN PLASTER BLOCKS FROM BRICKS ===

  // Chemical Bath: bricks + plaster → plain smooth plaster (5s = 100 ticks, 800 EU = 8 EU/t)
  event.recipes.gtceu
    .chemical_bath('plaster_smooth_from_bricks')
    .itemInputs('minecraft:bricks')
    .inputFluids(Fluid.of('dfc:plaster', 40))
    .itemOutputs('dfc:plaster/smooth/plain')
    .duration(100)
    .EUt(8)

  // Chemical Bath: brick stairs + plaster → plain smooth plaster stairs (5s = 100 ticks, 800 EU = 8 EU/t)
  event.recipes.gtceu
    .chemical_bath('plaster_smooth_stairs_from_bricks')
    .itemInputs('minecraft:brick_stairs')
    .inputFluids(Fluid.of('dfc:plaster', 40))
    .itemOutputs('dfc:plaster/smooth/plain_stairs')
    .duration(100)
    .EUt(8)

  // Chemical Bath: brick slab + plaster → plain smooth plaster slabs (5s = 100 ticks, 800 EU = 8 EU/t)
  event.recipes.gtceu
    .chemical_bath('plaster_smooth_slab_from_bricks')
    .itemInputs('minecraft:brick_slab')
    .inputFluids(Fluid.of('dfc:plaster', 40))
    .itemOutputs('dfc:plaster/smooth/plain_slab')
    .duration(100)
    .EUt(8)

  // === PLAIN PLASTER PILLARS FROM STONE PILLARS ===

  // Chemical Bath: stone pillar + plaster → plain plaster pillar (5s = 100 ticks, 800 EU = 8 EU/t)
  event.recipes.gtceu
    .chemical_bath('plaster_pillar_from_stone')
    .itemInputs('#dfc:rock/pillars')
    .inputFluids(Fluid.of('dfc:plaster', 40))
    .itemOutputs('dfc:plaster/pillar/plain')
    .duration(100)
    .EUt(8)

  // === COLORED PLASTER BLOCKS VIA DYEING ===

  // === COLORED PLASTER BLOCKS VIA DYEING ===

  const plasterVariants = [
    { idSuffix: 'smooth',        tag: '#gregitas:plaster_blocks/smooth',  name: 'smooth', suffix: '',        fluidScale: 1 },
    { idSuffix: 'smooth_stairs', tag: '#gregitas:plaster_stairs/smooth',  name: 'smooth', suffix: '_stairs', fluidScale: 0.75 },
    { idSuffix: 'smooth_slab',   tag: '#gregitas:plaster_slabs/smooth',   name: 'smooth', suffix: '_slab',   fluidScale: 0.5 },
    { idSuffix: 'pillar',        tag: '#gregitas:plaster_blocks/pillar',  name: 'pillar', suffix: '',        fluidScale: 1 },
  ]

  plasterVariants.forEach(variant => {
    addDyeRecipes(event, {
      idPrefix: `plaster_${variant.idSuffix}`,
      input: variant.tag,
      baseInput: `dfc:plaster/${variant.name}/plain${variant.suffix}`,
      coloredOutput: color => `dfc:plaster/${variant.name}/${color}${variant.suffix}`,
      bleachedOutput: `dfc:plaster/${variant.name}/plain${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
  })
}
