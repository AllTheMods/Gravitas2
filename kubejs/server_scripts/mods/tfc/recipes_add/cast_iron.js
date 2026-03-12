const tfcAddCastIron = (/** @type {Internal.RecipesEventJS} */ event) => {
  // === TFC Cast Iron Sheet Processing ===

  // Create press: ingot → sheet
  event.recipes.create.pressing(
    'tfc:metal/sheet/cast_iron',
    ['tfc:metal/ingot/cast_iron']
  ).id('gregitas:pressing/cast_iron_sheet')

  // GregTech forge hammer: 3 ingots → 2 sheets
  event.recipes.gtceu
    .forge_hammer('cast_iron_ingot_to_sheet')
    .itemInputs('3x tfc:metal/ingot/cast_iron')
    .itemOutputs('2x tfc:metal/sheet/cast_iron')
    .duration(100)
    .EUt(8)

  // GregTech bender: ingot → sheet
  event.recipes.gtceu
    .bender('cast_iron_ingot_to_sheet_bender')
    .itemInputs('tfc:metal/ingot/cast_iron')
    .itemOutputs('tfc:metal/sheet/cast_iron')
    .circuit(1)
    .duration(100)
    .EUt(24)

  // GregTech extruder: ingot + plate mold → sheet
  event.recipes.gtceu
    .extruder('cast_iron_ingot_to_sheet_extruder')
    .itemInputs('tfc:metal/ingot/cast_iron')
    .notConsumable('gtceu:plate_extruder_mold')
    .itemOutputs('tfc:metal/sheet/cast_iron')
    .duration(100)
    .EUt(64)

  // GregTech cutter: ingot → sheet (with lubricant)
  event.recipes.gtceu
    .cutter('cast_iron_ingot_to_sheet_cutter')
    .itemInputs('tfc:metal/ingot/cast_iron')
    .inputFluids(Fluid.of('gtceu:lubricant', 1))
    .itemOutputs('tfc:metal/sheet/cast_iron')
    .duration(40)
    .EUt(32)

  // GregTech fluid solidifier: molten cast_iron + plate mold → sheet
  event.recipes.gtceu
    .fluid_solidifier('cast_iron_fluid_to_sheet')
    .inputFluids('tfc:metal/cast_iron 144')
    .notConsumable('gtceu:plate_casting_mold')
    .itemOutputs('tfc:metal/sheet/cast_iron')
    .duration(60)
    .EUt(8)

  // GregTech bender: 2 sheets → double sheet
  event.recipes.gtceu
    .bender('cast_iron_sheets_to_double_sheet')
    .itemInputs('2x tfc:metal/sheet/cast_iron')
    .itemOutputs('tfc:metal/double_sheet/cast_iron')
    .circuit(2)
    .duration(100)
    .EUt(24)

  // === TFC Cast Iron Rod Processing ===

  // Create rolling: 1 ingot → 2 rods
  event.recipes.createaddition.rolling(
    Item.of('tfc:metal/rod/cast_iron', 2),
    'tfc:metal/ingot/cast_iron'
  ).id('gregitas:rolling/cast_iron_rod')

  // GregTech extruder: 1 ingot + rod mold → 2 rods
  event.recipes.gtceu
    .extruder('cast_iron_ingot_to_rod_extruder')
    .itemInputs('tfc:metal/ingot/cast_iron')
    .notConsumable('gtceu:rod_extruder_mold')
    .itemOutputs('2x tfc:metal/rod/cast_iron')
    .duration(100)
    .EUt(64)

  // GregTech lathe: 1 ingot → 2 rods
  event.recipes.gtceu
    .lathe('cast_iron_ingot_to_rod_lathe')
    .itemInputs('tfc:metal/ingot/cast_iron')
    .itemOutputs('2x tfc:metal/rod/cast_iron')
    .duration(100)
    .EUt(8)
}
