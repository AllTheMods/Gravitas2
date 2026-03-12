const dfcRecipeAddConcrete = (/** @type {Internal.RecipesEventJS} */ event) => {

  // === CONCRETE ITEM CREATION ===

  // Fluid Solidifier: liquid concrete + ingot mold → concrete brick item (3.9s = 78 ticks, 546 EU = 7 EU/t)
  event.recipes.gtceu
    .fluid_solidifier('concrete_brick_item')
    .inputFluids('gtceu:concrete 115')
    .notConsumable('gtceu:ingot_casting_mold')
    .itemOutputs('dfc:concrete/brick')
    .duration(78)
    .EUt(7)

  // Fluid Solidifier: liquid concrete + plate mold → concrete slab item (3.9s = 78 ticks, 546 EU = 7 EU/t)
  event.recipes.gtceu
    .fluid_solidifier('concrete_slab_item')
    .inputFluids('gtceu:concrete 115')
    .notConsumable('gtceu:plate_casting_mold')
    .itemOutputs('dfc:concrete/slab')
    .duration(78)
    .EUt(7)

  // Assembler: TFC aggregate + liquid concrete → plain concrete block (5s = 100 ticks, 3000 EU = 30 EU/t)
  event.recipes.gtceu
    .assembler('concrete_block_from_aggregate')
    .itemInputs('tfc:aggregate')
    .inputFluids('gtceu:concrete 144')
    .itemOutputs('dfc:concrete/smooth/plain')
    .duration(100)
    .EUt(30)

  // === CONCRETE DYEING ===

  // Vanilla concrete uses a special tag and only has GT chemical_bath for white; barrel for all colors
  // Chemical Bath: any concrete + white dye → white concrete (1s = 20 ticks, 140 EU = 7 EU/t)
  event.recipes.gtceu
    .chemical_bath('concrete_dye_white')
    .itemInputs('#forge:concretes')
    .inputFluids(Fluid.of('gtceu:white_dye', 18))
    .itemOutputs('minecraft:white_concrete')
    .duration(20)
    .EUt(7)

  // TFC Barrel: plain concrete + dye fluid → colored concrete
  addBarrelDye(event, {
    idPrefix: 'concrete',
    input: 'dfc:concrete/smooth/plain',
    coloredOutput: color => `minecraft:${color}_concrete`,
  })

  // GT Mixer + Create Mixing: plain DFC concrete + TFC dye → colored vanilla concrete
  addGTMixDye(event, {
    idPrefix: 'concrete',
    input: 'dfc:concrete/smooth/plain',
    coloredOutput: color => `minecraft:${color}_concrete`,
  })
  addCreateMixDye(event, {
    idPrefix: 'concrete',
    input: 'dfc:concrete/smooth/plain',
    coloredOutput: color => `minecraft:${color}_concrete`,
  })

  // Chemical Bath: colored concrete + chlorine → plain concrete (20s = 400 ticks, 800 EU = 2 EU/t, 20mb chlorine)
  event.recipes.gtceu
    .chemical_bath('concrete_bleach_to_plain')
    .itemInputs('#gregitas:colored_concrete')
    .inputFluids(Fluid.of('gtceu:chlorine', 20))
    .itemOutputs('dfc:concrete/smooth/plain')
    .duration(400)
    .EUt(2)

  // Lye bleach: colored concrete → plain concrete (barrel + GT mixer + Create mixer)
  addBarrelBleach(event, {
    idPrefix: 'concrete',
    input: '#gregitas:colored_concrete',
    bleachedOutput: 'dfc:concrete/smooth/plain',
  })
  addGTMixBleach(event, {
    idPrefix: 'concrete',
    input: '#gregitas:colored_concrete',
    bleachedOutput: 'dfc:concrete/smooth/plain',
  })
  addCreateMixBleach(event, {
    idPrefix: 'concrete',
    input: '#gregitas:colored_concrete',
    bleachedOutput: 'dfc:concrete/smooth/plain',
  })

  // DFC concrete slabs and bricks: full dye/bleach suite from plain
  addDyeRecipes(event, {
    idPrefix: 'concrete_slab',
    input: '#dfc:concrete/slab',
    baseInput: 'dfc:concrete/slab/plain',
    bleachInput: '#dfc:concrete/colored_slab',
    coloredOutput: color => `dfc:concrete/slab/${color}`,
    bleachedOutput: 'dfc:concrete/slab/plain',
    chlorineAmount: 20,
    fluidScale: 0.5,
  })

  addDyeRecipes(event, {
    idPrefix: 'concrete_bricks',
    input: '#dfc:concrete/bricks',
    baseInput: 'dfc:concrete/bricks/plain',
    bleachInput: '#dfc:concrete/colored_bricks',
    coloredOutput: color => `dfc:concrete/bricks/${color}`,
    bleachedOutput: 'dfc:concrete/bricks/plain',
    chlorineAmount: 20,
  })
}
