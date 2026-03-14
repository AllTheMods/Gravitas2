// priority 10

let igRefractoryChain = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Step 1: Macerator — fire bricks → fire brick dust
  event.recipes.gtceu
    .macerator('gregitas:ig/fire_brick_dust')
    .itemInputs('tfc:ceramic/fire_brick')
    .itemOutputs('gregitas:fire_brick_dust')
    .EUt(LV)
    .duration(80)

  // Create Crusher alternate
  event.recipes.create
    .crushing(['gregitas:fire_brick_dust'], 'tfc:ceramic/fire_brick')
    .id('gregitas:ig/fire_brick_dust_crushing')

  // IE Crusher alternate
  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3200,
    input: {item: "tfc:ceramic/fire_brick"},
    result: {item: "gregitas:fire_brick_dust"},
    secondaries: [],
    time: 100,
  }).id('gregitas:ig/fire_brick_dust_ie_crusher')

  // Step 2: Mixer — refractory clay
  event.recipes.gtceu
    .mixer('gregitas:ig/refractory_clay')
    .itemInputs('2x gregitas:fire_brick_dust', '2x tfc:fire_clay', 'gtceu:quartz_sand_dust')
    .itemOutputs('4x immersivegeology:raw_fire_clay')
    .EUt(LV)
    .duration(160)

  // Step 3A: Forming Press — unfired refractory brick
  event.recipes.gtceu
    .forming_press('gregitas:ig/unfired_refractory_brick')
    .notConsumable('gtceu:ingot_casting_mold')
    .itemInputs('immersivegeology:raw_fire_clay')
    .itemOutputs('gregitas:unfired_refractory_brick')
    .duration(80)
    .EUt(LV)

  // Step 3B: Create Vintage curving
  event.recipes.vintage
    .curving('gregitas:unfired_refractory_brick', 'immersivegeology:raw_fire_clay', 'gtceu:ingot_casting_mold')
    .id('gregitas:ig/unfired_refractory_brick_curving')

  // Step 4: EBF — fire the unfired brick
  event.recipes.gtceu
    .electric_blast_furnace('gregitas:ig/refractory_brick_ebf')
    .itemInputs('gregitas:unfired_refractory_brick')
    .itemOutputs('immersivegeology:refractory_brick')
    .EUt(MV)
    .blastFurnaceTemp(1700)
    .duration(100)

  // Step 5: Create Deploying — reinforce refractory brick storage block with bronze plate
  event.recipes.create
    .deploying('immersivegeology:storage_block_reinforced_refractory_brick', [
      'immersivegeology:storage_block_refractory_brick',
      '#forge:plates/bronze'
    ])
    .id('gregitas:ig/reinforced_refractory_brick_block')
}
