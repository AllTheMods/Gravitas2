const dfcRecipesAddPewter = (/** @type {Internal.RecipesEventJS} */ event) => {

  // === TFC PEWTER ALLOY ===

  // TFC Alloy: bismuth (0-20%) + lead (0-30%) + tin (50-70%) → pewter
  event.custom({
    type: 'tfc:alloy',
    result: 'dfc:pewter',
    contents: [
      {
        metal: 'tfc:bismuth',
        min: 0.0,
        max: 0.2
      },
      {
        metal: 'tfc_ie_addon:lead',
        min: 0.0,
        max: 0.3
      },
      {
        metal: 'tfc:tin',
        min: 0.5,
        max: 0.7
      }
    ]
  }).id('gregitas:alloy/pewter')

  // === PEWTER DUST CREATION ===

  // Mixer: bismuth + lead + tin dusts → pewter dust (25s = 500 ticks, 3500 EU = 7 EU/t)
  // Recipe 1: With bismuth (16.7% Bi, 16.7% Pb, 66.7% Sn)
  event.recipes.gtceu
    .mixer('pewter_dust_with_bismuth')
    .itemInputs(
      'gtceu:bismuth_dust',
      'gtceu:lead_dust',
      '4x gtceu:tin_dust'
    )
    .itemOutputs('6x gregitas:pewter_dust')
    .duration(500)
    .EUt(7)

  // Centrifuge: pewter dust → component dusts (25s = 500 ticks, 16000 EU = 32 EU/t)
  // Reverse of mixer recipe
  event.recipes.gtceu
    .centrifuge('pewter_dust_separation')
    .itemInputs('6x gregitas:pewter_dust')
    .itemOutputs(
      'gtceu:bismuth_dust',
      'gtceu:lead_dust',
      '4x gtceu:tin_dust'
    )
    .duration(500)
    .EUt(32)

  // === PEWTER DUST PROCESSING ===

  // Macerator: pewter ingot → pewter dust (4.6s = 92 ticks, 736 EU = 8 EU/t)
  event.recipes.gtceu
    .macerator('pewter_ingot_to_dust')
    .itemInputs('dfc:metal/ingot/pewter')
    .itemOutputs('gregitas:pewter_dust')
    .duration(92)
    .EUt(8)

  // Macerator: pewter sheet → pewter dust (4.6s = 92 ticks, 736 EU = 8 EU/t)
  event.recipes.gtceu
    .macerator('pewter_sheet_to_dust')
    .itemInputs('dfc:metal/sheet/pewter')
    .itemOutputs('gregitas:pewter_dust')
    .duration(92)
    .EUt(8)

  // Macerator: pewter double ingot → 2 pewter dust (9.2s = 184 ticks, 1472 EU = 8 EU/t)
  event.recipes.gtceu
    .macerator('pewter_double_ingot_to_dust')
    .itemInputs('dfc:metal/double_ingot/pewter')
    .itemOutputs('2x gregitas:pewter_dust')
    .duration(184)
    .EUt(8)

  // Macerator: pewter double sheet → 2 pewter dust (9.2s = 184 ticks, 1472 EU = 8 EU/t)
  event.recipes.gtceu
    .macerator('pewter_double_sheet_to_dust')
    .itemInputs('dfc:metal/double_sheet/pewter')
    .itemOutputs('2x gregitas:pewter_dust')
    .duration(184)
    .EUt(8)

  // === PEWTER SMELTING ===

  // Electric Blast Furnace: pewter dust → pewter ingot (9s = 180 ticks, 21600 EU = 120 EU/t)
  event.recipes.gtceu
    .electric_blast_furnace('pewter_dust_to_ingot')
    .itemInputs('gregitas:pewter_dust')
    .circuit(1)
    .itemOutputs('dfc:metal/ingot/pewter')
    .duration(180)
    .EUt(120)
    .blastFurnaceTemp(1000)

  // Electric Blast Furnace: pewter dust + nitrogen → pewter ingot (6s = 120 ticks, 14400 EU = 120 EU/t)
  event.recipes.gtceu
    .electric_blast_furnace('pewter_dust_to_ingot_nitrogen')
    .itemInputs('gregitas:pewter_dust')
    .circuit(2)
    .inputFluids('gtceu:nitrogen 1000')
    .itemOutputs('dfc:metal/ingot/pewter')
    .duration(120)
    .EUt(120)
    .blastFurnaceTemp(1000)

  // === PEWTER PLATE PROCESSING ===

  // Pewter plate processing recipes
  // Create press: ingot → plate
  event.recipes.create.pressing(
    'dfc:metal/sheet/pewter',
    ['dfc:metal/ingot/pewter']
  ).id('gregitas:pressing/pewter_plate')

  // GregTech forge hammer: 3 ingots → 2 plates
  event.recipes.gtceu
    .forge_hammer('pewter_ingot_to_plate')
    .itemInputs('3x dfc:metal/ingot/pewter')
    .itemOutputs('2x dfc:metal/sheet/pewter')
    .duration(100)
    .EUt(8)

  // GregTech bender: ingot → plate
  event.recipes.gtceu
    .bender('pewter_ingot_to_plate_bender')
    .itemInputs('dfc:metal/ingot/pewter')
    .itemOutputs('dfc:metal/sheet/pewter')
    .circuit(1)
    .duration(100)
    .EUt(24)

  // GregTech extruder: ingot + plate mold → plate
  event.recipes.gtceu
    .extruder('pewter_ingot_to_plate_extruder')
    .itemInputs('dfc:metal/ingot/pewter')
    .notConsumable('gtceu:plate_extruder_mold')
    .itemOutputs('dfc:metal/sheet/pewter')
    .duration(100)
    .EUt(64)

  // GregTech cutter: ingot → plate
  event.recipes.gtceu
    .cutter('pewter_ingot_to_plate_cutter')
    .itemInputs('dfc:metal/ingot/pewter')
    .inputFluids(Fluid.of('gtceu:lubricant', 1))
    .itemOutputs('dfc:metal/sheet/pewter')
    .duration(40)
    .EUt(32)

  // GregTech fluid solidifier: molten pewter + plate mold → plate (3s = 60 ticks, 480 EU = 8 EU/t)
  event.recipes.gtceu
    .fluid_solidifier('pewter_fluid_to_plate')
    .inputFluids('dfc:metal/dfc_pewter 144')
    .notConsumable('gtceu:plate_casting_mold')
    .itemOutputs('dfc:metal/sheet/pewter')
    .duration(60)
    .EUt(8)

  // GregTech fluid solidifier: molten pewter + ingot mold → ingot (3s = 60 ticks, 480 EU = 8 EU/t)
  event.recipes.gtceu
    .fluid_solidifier('pewter_fluid_to_ingot')
    .inputFluids('dfc:metal/dfc_pewter 144')
    .notConsumable('gtceu:ingot_casting_mold')
    .itemOutputs('dfc:metal/ingot/pewter')
    .duration(60)
    .EUt(8)

  // Heated Create press: 2 ingots + flux → double ingot
  event.custom({
    type: 'create:compacting',
    ingredients: [
      {
        item: 'dfc:metal/ingot/pewter',
        count: 2
      },
      {
        item: 'tfc:powder/flux',
        count: 1
      }
    ],
    results: [
      {
        item: 'dfc:metal/double_ingot/pewter',
        count: 1
      }
    ],
    heatRequirement: 'superheated'
  }).id('gregitas:heated_pressing/double_ingot/pewter')

  // GregTech bender: 2 sheets → double sheet
  event.recipes.gtceu
    .bender('pewter_sheets_to_double_sheet')
    .itemInputs('2x dfc:metal/sheet/pewter')
    .itemOutputs('dfc:metal/double_sheet/pewter')
    .circuit(2)
    .duration(100)
    .EUt(24)

  // Pewter rod processing recipes
  // Create rolling: 1 ingot → 2 rods
  event.recipes.createaddition.rolling(
    Item.of('dfc:metal/rod/pewter', 2),
    'dfc:metal/ingot/pewter'
  ).id('gregitas:rolling/pewter_rod')

  // GregTech extruder: 1 ingot + rod mold → 2 rods
  event.recipes.gtceu
    .extruder('pewter_ingot_to_rod_extruder')
    .itemInputs('dfc:metal/ingot/pewter')
    .notConsumable('gtceu:rod_extruder_mold')
    .itemOutputs('2x dfc:metal/rod/pewter')
    .duration(100)
    .EUt(64)

  // GregTech lathe: 1 ingot → 2 rods
  event.recipes.gtceu
    .lathe('pewter_ingot_to_rod_lathe')
    .itemInputs('dfc:metal/ingot/pewter')
    .itemOutputs('2x dfc:metal/rod/pewter')
    .duration(100)
    .EUt(8)
}
