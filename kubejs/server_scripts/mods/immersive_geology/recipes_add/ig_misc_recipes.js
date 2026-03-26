// priority 10

var igMiscRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  // --- Storage block conversions --------------------------------------------
  var STORAGE_BLOCKS = [
    { gt: "hastelloy_c_276_block",  ig: "storage_block_hastelloy"},
    { gt: "hssg_block",             ig: "storage_block_high_speed_steel"},
    { gt: "stainless_steel_block",  ig: "storage_block_stainless_steel"},
    { gt: "bronze_block",           ig: "storage_block_bronze"},
    { gt: "chromium_block",         ig: "storage_block_chromium"},
    { gt: "cobalt_block",           ig: "storage_block_cobalt"},
    { gt: "manganese_block",        ig: "storage_block_manganese"},
    { gt: "molybdenum_block",       ig: "storage_block_molybdenum"},
    { gt: "neodymium_block",        ig: "storage_block_neodymium"},
    { gt: "osmium_block",           ig: "storage_block_osmium"},
    { gt: "platinum_block",         ig: "storage_block_platinum"},
    { gt: "thorium_block",          ig: "storage_block_thorium"},
    { gt: "tin_block",              ig: "storage_block_tin"},
    { gt: "titanium_block",         ig: "storage_block_titanium"},
    { gt: "tungsten_block",         ig: "storage_block_tungsten"},
    { gt: "vanadium_block",         ig: "storage_block_vanadium"},
    { gt: "zinc_block",             ig: "storage_block_zinc"},
    { gt: "zirconium_block",        ig: "storage_block_zirconium"},
    { gt: "tungsten_carbide_block", ig: "storage_block_tungsten_carbide"},
  ]

  STORAGE_BLOCKS.forEach(function(row) {
    event.shapeless("immersivegeology:" + row.ig, ["gtceu:" + row.gt])
    event.shapeless("gtceu:" + row.gt, ["immersivegeology:" + row.ig])
  })

  // --- Chemical Engineering Block override ----------------------------------
  // Down-tiers from hastelloy sheetmetal + hastelloy component to stainless steel sheetmetal + IE steel component.

  event.remove({ id: "immersivegeology:crafting/craft_chemical_engineering_block" })

  event.shaped("4x immersivegeology:engineering_block_hastelloy", ["scs", "coc", "scs"], {
    s: "immersivegeology:sheetmetal_block_stainless_steel",
    c: "immersiveengineering:component_steel",
    o: "immersiveengineering:ingot_silver",
  })

  // --- Tools ----------------------------------------------------------------
  // Re-uses TFC hammer head to craft the multi-block forming tools of IG.
  // Stone hammer is skipped as it only forms the crude blast furnace and
  // bloomery which are both disabled.

  event.remove({id: "/^immersivegeology:hammer.*/"})
  
  event.shaped("immersivegeology:hammer_bronze", [" A ", " B ", "   "], {
    A: "tfc:metal/hammer_head/bronze",
    B: "#forge:rods/bronze"
  })

  event.shaped("immersivegeology:hammer_stainless_steel", [" A ", " B ", "   "], {
    A: "gregitas:stainless_steel_hammer_head",
    B: "#forge:rods/stainless_steel"
  })

  // --- IE Blast Brick: Create fan haunting ----------------------------------
  // GT firebricks -> IE blast brick via Create fan haunting.

  event.recipes.create.haunting(["immersiveengineering:blastbrick"], "gtceu:firebricks")

  // --- IE Blast Brick: Shaped crafting (TFC + nether materials) ------------

  event.shaped("immersiveengineering:blastbrick", ["ABA", "BCB", "ABA"], {
    A: "#forge:ingots/nether_brick",
    B: "tfc:mortar",
    C: "tfc:ceramic/fire_brick",
  })

  // --- EHV Cable crafting chain ---------------------------------------------

  event.remove({ id: "immersivegeology:crafting/craft_ehv_cable" })
  event.shaped("2x immersivegeology:energy_pipe_high_voltage_cable", ["pwp", "wbw", "pwp"], {
    p: "immersivegeology:plate_ehv_insulation",
    w: "#forge:fine_wires/platinum",
    b: "#forge:storage_blocks/electrum"
  })

  event.recipes.gtceu.chemical_reactor("gregitas:ig_ehv_insulation")
    .itemInputs("immersivegeology:metal_oxide_aluminum")
    .inputFluids(Fluid.of("immersiveengineering:phenolic_resin", 100))
    .outputFluids(Fluid.of("immersivegeology:fluid_ehv_insulation", 100))
    .EUt(MV)
    .duration(160)

  event.recipes.gtceu.fluid_solidifier("gregitas:ig_ehv_plate")
    .notConsumable("gtceu:plate_casting_mold")
    .inputFluids(Fluid.of("immersivegeology:fluid_ehv_insulation", 250))
    .itemOutputs("immersivegeology:plate_ehv_insulation")
    .EUt(LV)
    .duration(250)

  // --- Extra phenolic resin recipes -----------------------------------------

  event.recipes.gtceu.fluid_solidifier("gregitas:solidify_duroplast")
    .notConsumable("gtceu:block_casting_mold")
    .inputFluids(Fluid.of("immersiveengineering:phenolic_resin", 1296))
    .itemOutputs("4x immersiveengineering:duroplast")
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu.fluid_solidifier("gregitas:solidify_phenolic_circuit")
    .notConsumable("gtceu:plate_casting_mold")
    .inputFluids(Fluid.of("immersiveengineering:phenolic_resin", 50))
    .itemOutputs("gtceu:phenolic_circuit_board")
    .EUt(LV)
    .duration(200)

  // --- IG Concrete storage blocks -------------------------------------------
  // Titanium-reinforced and steel-reinforced concrete blocks via GT Assembler.

  event.recipes.gtceu.assembler("gregitas:ig/trconcrete_block")
    .itemInputs("1x #forge:frames/titanium")
    .inputFluids(Fluid.of("gtceu:concrete", 1000))
    .itemOutputs("9x immersivegeology:storage_block_trconcrete")
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu.assembler("gregitas:ig/srconcrete_block")
    .itemInputs("1x #forge:frames/steel")
    .inputFluids(Fluid.of("gtceu:concrete", 1000))
    .itemOutputs("9x immersivegeology:storage_block_srconcrete")
    .EUt(LV)
    .duration(200)
}
