// priority 10

// Bridges IG ore-chain intermediates (grits, powders, pellets, crystals) to GT machines.
// Replaces IE Arc Furnace / IE Blast Furnace recipes.

var igEbfBridge = (/** @type {Internal.RecipesEventJS} */ event) => {
  // --- EBF: high-tier metal grits / powders / oxides -----------------------

  var IG_EBF_GRITS = [
    { id: "zirconium_grit", input: "grit_zirconium", out: "gtceu:hot_zirconium_ingot", temp: 2100, eut: HV, dur: 3872, gasDur: 2594, gas: "argon", mb: 50 },
    { id: "titanium_grit", input: "grit_titanium", out: "gtceu:hot_titanium_ingot", temp: 1941, eut: HV, dur: 1500, gasDur: 1005, gas: "helium", mb: 100 },
    { id: "silicon_grit", input: "grit_silicon", out: "gtceu:hot_silicon_ingot", temp: 2273, eut: MV, dur: 1272, gasDur: 900, gas: "nitrogen", mb: 100 },
    { id: "grit_magnesium", input: "grit_magnesium", out: "immersivegeology:ingot_magnesium", temp: 923, eut: LV, dur: 200 },
    { id: "grit_neodymium", input: "grit_neodymium", out: "gtceu:neodymium_ingot", temp: 1297, eut: MV, dur: 3735, gasDur: 2502, gas: "helium", mb: 100 },
    { id: "tungsten_powder", input: "powder_tungsten", out: "gtceu:hot_tungsten_ingot", temp: 3600, eut: EV, dur: 1206, gasDur: 804, gas: "helium", mb: 100 },
    { id: "grit_chromium",  input: "grit_chromium", out: "firmalife:metal/ingot/chromium",   temp: 2180, eut: MV, dur: 1768, gasDur: 1184, gas: "nitrogen", mb: 1000 },
    { id: "grit_osmium",  input: "grit_osmium", out: "gtceu:hot_osmium_ingot", temp: 4500, eut: LuV, dur: 1000, gasDur: 670, gas: "argon", mb: 50 },
  ]
  for (var i = 0; i < IG_EBF_GRITS.length; i++) {
    var row = IG_EBF_GRITS[i]
    var noGasRecipe = event.recipes.gtceu
      .electric_blast_furnace("gregitas:ig/ebf/" + row.id)
      .itemInputs("immersivegeology:" + row.input)
      .itemOutputs(row.out)
      .blastFurnaceTemp(row.temp).EUt(row.eut).duration(row.dur)
    if (row.gas) {
      noGasRecipe.circuit(1)
      event.recipes.gtceu
        .electric_blast_furnace("gregitas:ig/ebf/" + row.id + "_" + row.gas)
        .itemInputs("immersivegeology:" + row.input)
        .itemOutputs(row.out)
        .inputFluids(Fluid.of("gtceu:" + row.gas, row.mb))
        .blastFurnaceTemp(row.temp).EUt(row.eut).duration(row.gasDur)
        .circuit(2)
    }
  }

  // Hall–Héroult: aluminium oxide + cryolite flux
  event.recipes.gtceu
    .electric_blast_furnace("gregitas:ig/ebf/aluminium_oxide")
    .itemInputs("immersivegeology:metal_oxide_aluminum", "immersivegeology:powder_cryolite")
    .itemOutputs("gtceu:aluminium_ingot")
    .chancedOutput("immersivegeology:powder_cryolite", 5000, 0)
    .blastFurnaceTemp(1700)
    .EUt(MV)
    .duration(300)

  event.recipes.gtceu
    .electric_blast_furnace("gregitas:ig/ebf/powder_alumina")
    .itemInputs("immersivegeology:powder_alumina", "immersivegeology:powder_cryolite")
    .itemOutputs("gtceu:aluminium_ingot")
    .chancedOutput("immersivegeology:powder_cryolite", 4000, 0)
    .blastFurnaceTemp(1700)
    .EUt(MV)
    .duration(300)

  // Vanadium thermite reduction: vanadium oxide + magnesium grit
  event.recipes.gtceu
    .electric_blast_furnace("gregitas:ig/ebf/vanadium_oxide")
    .itemInputs("immersivegeology:metal_oxide_vanadium", "immersivegeology:grit_magnesium")
    .itemOutputs("gtceu:hot_vanadium_ingot")
    .chancedOutput("immersivegeology:metal_oxide_magnesium", 9000, 0)
    .blastFurnaceTemp(1900)
    .EUt(MV)
    .duration(900)
    .circuit(1)

  event.recipes.gtceu
    .electric_blast_furnace("gregitas:ig/ebf/vanadium_oxide_nitrogen")
    .itemInputs("immersivegeology:metal_oxide_vanadium", "immersivegeology:grit_magnesium")
    .itemOutputs("gtceu:hot_vanadium_ingot")
    .chancedOutput("immersivegeology:metal_oxide_magnesium", 9000, 0)
    .inputFluids(Fluid.of("gtceu:nitrogen", 100))
    .blastFurnaceTemp(1900)
    .EUt(MV)
    .duration(600)
    .circuit(2)

  // --- EBF: calcium slag (carbothermic reduction) ---------------------------

  event.recipes.gtceu
    .electric_blast_furnace("gregitas:ig/ebf/calcium_slag_from_oxide")
    .itemInputs("immersivegeology:metal_oxide_calcium", "#forge:dusts/coal_coke")
    .itemOutputs("immersivegeology:slag_calcium")
    .blastFurnaceTemp(1200)
    .EUt(HV)
    .duration(500)

  // --- EBF: silicon slag ---------------------------------------------------

  event.recipes.gtceu
    .electric_blast_furnace("gregitas:ig/ebf/silicon_slag_from_oxide")
    .itemInputs("immersivegeology:metal_oxide_silicon", "#forge:dusts/coal_coke")
    .itemOutputs("immersivegeology:slag_silicon")
    .blastFurnaceTemp(1460)
    .EUt(MV)
    .duration(500)

  // --- EBF: Chromium compound dust -----------------------------------------

  event.recipes.gtceu
    .electric_blast_furnace("gregitas:ig/ebf/chromium_compound_from_chromite_powder")
    .itemInputs("immersivegeology:powder_chromite", "immersivegeology:compound_dust_sodium", "#forge:dusts/coal_coke")
    .itemOutputs("immersivegeology:compound_dust_chromium")
    .chancedOutput("minecraft:iron_ingot", 8000, 0)
    .blastFurnaceTemp(1500)
    .EUt(MV)
    .duration(800)

  // --- EBF: crystal routes -------------------------------------------------

  var IG_EBF_CRYSTALS = [
    { mineral: "zirconium", out: "gtceu:hot_zirconium_ingot",        temp: 2100, eut: HV, dur: 3872, gasDur: 2594, gas: "argon", mb: 50 },
    { mineral: "neodymium", out: "gtceu:neodymium_ingot",            temp: 1297, eut: MV, dur: 3735, gasDur: 2502, gas: "helium", mb: 100 },
    { mineral: "chromium",  out: "firmalife:metal/ingot/chromium",   temp: 2180, eut: MV, dur: 1768, gasDur: 1184, gas: "nitrogen", mb: 1000 },
    { mineral: "magnesium", out: "immersivegeology:ingot_magnesium", temp: 923, eut: LV, dur: 200 },
  ]
  for (var i = 0; i < IG_EBF_CRYSTALS.length; i++) {
    var row = IG_EBF_CRYSTALS[i]
    var noGasRecipe = event.recipes.gtceu
      .electric_blast_furnace("gregitas:ig/ebf/crystal_" + row.mineral)
      .itemInputs("immersivegeology:crystal_" + row.mineral)
      .itemOutputs(row.out)
      .blastFurnaceTemp(row.temp).EUt(row.eut).duration(row.dur)
    if (row.gas) {
      noGasRecipe.circuit(1)
      event.recipes.gtceu
        .electric_blast_furnace("gregitas:ig/ebf/crystal_" + row.mineral + "_" + row.gas)
        .itemInputs("immersivegeology:crystal_" + row.mineral)
        .itemOutputs(row.out)
        .inputFluids(Fluid.of("gtceu:" + row.gas, row.mb))
        .blastFurnaceTemp(row.temp).EUt(row.eut).duration(row.gasDur)
        .circuit(2)
    }
  }

  // --- EBF: crushed ores (IE blast furnace bridge) --------------------------

  var IG_BF_CRUSHED = [
    { mineral: "acanthite",   out: "gtceu:silver_ingot",     temp: 1235, dur: 300 },
    { mineral: "cassiterite", out: "gtceu:tin_ingot",        temp: 505, eut: LV, dur: 200 },
    { mineral: "cuprite",     out: "tfc:metal/ingot/copper", temp: 1357, dur: 300 },
    { mineral: "galena",      out: "gtceu:lead_ingot",       temp: 600, eut: LV, dur: 200 },
    { mineral: "gold",        out: "tfc:metal/ingot/gold",   temp: 1337, dur: 300 },
    { mineral: "hematite",    out: "minecraft:iron_ingot",   temp: 1800, dur: 550 },
    { mineral: "lead",        out: "gtceu:lead_ingot",       temp: 600, eut: LV, dur: 200 },
    { mineral: "magnetite",   out: "minecraft:iron_ingot",   temp: 1800, dur: 550 },
    { mineral: "pyrolusite",  out: "gtceu:manganese_ingot",  temp: 1519, dur: 400 },
    { mineral: "silver",      out: "gtceu:silver_ingot",     temp: 1235, dur: 300 },
    { mineral: "smithsonite", out: "5x gtceu:zinc_nugget",   temp: 693, eut: LV, dur: 200 },
    { mineral: "vanadinite",  out: "gtceu:lead_ingot", slag: "immersivegeology:slag_vanadinite", temp: 1200, dur: 700 },
  ]
  for (var i = 0; i < IG_BF_CRUSHED.length; i++) {
    var row = IG_BF_CRUSHED[i]
    var r = event.recipes.gtceu
      .electric_blast_furnace("gregitas:ig/ebf/crushed_" + row.mineral)
      .itemInputs("immersivegeology:crushed_ore_" + row.mineral)
      .itemOutputs(row.out, row.slag || "immersiveengineering:slag")
      .blastFurnaceTemp(row.temp).EUt(row.eut || MV).duration(row.dur || 900)
  }

  // --- EBF: pellets (IE blast furnace bridge) --------------------------------

  var IG_BF_PELLETS = [
    { mineral: "acanthite",   out: "gtceu:silver_ingot",     temp: 1235, dur: 200 },
    { mineral: "cassiterite", out: "gtceu:tin_ingot",        temp: 505, eut: LV, dur: 150 },
    { mineral: "chalcocite",  out: "tfc:metal/ingot/copper", temp: 1357, dur: 200 },
    { mineral: "cuprite",     out: "tfc:metal/ingot/copper", temp: 1357, dur: 200 },
    { mineral: "galena",      out: "gtceu:lead_ingot",       temp: 600, eut: LV, dur: 150 },
    { mineral: "hematite",    out: "minecraft:iron_ingot",   temp: 1800, dur: 450 },
    { mineral: "magnetite",   out: "minecraft:iron_ingot",   temp: 1800, dur: 450 },
    { mineral: "millerite",   out: "gtceu:nickel_ingot",     temp: 1728, dur: 400 },
    { mineral: "pyrite",      out: "minecraft:iron_ingot",   temp: 1800, dur: 300 },
    { mineral: "pyrolusite",  out: "gtceu:manganese_ingot",  temp: 1519, dur: 300 },
    { mineral: "smithsonite", out: "gtceu:zinc_ingot",       temp: 693, eut: LV, dur: 150 },
    { mineral: "sphalerite",  out: "gtceu:zinc_ingot",       temp: 693, eut: LV, dur: 150 },
    { mineral: "vanadinite",  out: "gtceu:lead_ingot", slag: "immersivegeology:slag_vanadinite", temp: 1200, dur: 550 },
  ]
  for (var i = 0; i < IG_BF_PELLETS.length; i++) {
    var row = IG_BF_PELLETS[i]
    var r = event.recipes.gtceu
      .electric_blast_furnace("gregitas:ig/ebf/pellet_" + row.mineral)
      .itemInputs("immersivegeology:pellet_" + row.mineral)
      .itemOutputs(row.out, row.slag || "immersiveengineering:slag")
      .blastFurnaceTemp(row.temp).EUt(row.eut || MV).duration(row.dur)
  }

  // --- EBF: oxide pellets (IE blast furnace bridge) -------------------------

  var IG_BF_OXIDE_PELLETS = [
    // Chromium nitrogen recipe is broken and defies explanation:
    // as written it will not load in game despite the other tungsten recipe working fine
    // but if you add another recipe manually using the exact same parameters except with the
    // gas being helium, not only will that recipe work but this nitrogen recipe will also
    // suddenly work. Comment out that helium recipe and the nitrogen one goes too.
    { mineral: "chromium",   out: "firmalife:metal/ingot/chromium", temp: 2180, eut: MV, dur: 1768, gasDur: 1184, gas: "nitrogen", mb: 1000 },
    { mineral: "cobalt",     out: "gtceu:cobalt_ingot",             temp: 1768, dur: 400 },
    { mineral: "copper",     out: "tfc:metal/ingot/copper",         temp: 1357, dur: 200 },
    { mineral: "iron",       out: "minecraft:iron_ingot",           temp: 1800, dur: 450 },
    { mineral: "lead",       out: "gtceu:lead_ingot",               temp: 600, eut: LV, dur: 150 },
    { mineral: "manganese",  out: "gtceu:manganese_ingot",          temp: 1519, dur: 300 },
    { mineral: "molybdenum", out: "gtceu:molybdenum_ingot",         temp: 2700, dur: 800 },
    { mineral: "nickel",     out: "gtceu:nickel_ingot",             temp: 1728, dur: 400 },
    { mineral: "tin",        out: "gtceu:tin_ingot",                temp: 505, eut: LV, dur: 150 },
    { mineral: "tungsten",   out: "gtceu:hot_tungsten_ingot",       temp: 3600, eut: EV, dur: 1206, gasDur: 804, gas: "helium", mb: 100 },
  ]
  for (var i = 0; i < IG_BF_OXIDE_PELLETS.length; i++) {
    var row = IG_BF_OXIDE_PELLETS[i]
    var noGasRecipe = event.recipes.gtceu
      .electric_blast_furnace("gregitas:ig/ebf/oxide_pellet_" + row.mineral)
      .itemInputs("immersivegeology:oxide_pellet_" + row.mineral)
      .itemOutputs(row.out, row.slag || "immersiveengineering:slag")
      .blastFurnaceTemp(row.temp).EUt(row.eut || MV).duration(row.dur)
    if (row.gas) {
      noGasRecipe.circuit(1)
      event.recipes.gtceu
        .electric_blast_furnace("gregitas:ig/ebf/oxide_pellet_" + row.mineral + "_" + row.gas)
        .itemInputs("immersivegeology:oxide_pellet_" + row.mineral)
        .itemOutputs(row.out, row.slag || "immersiveengineering:slag")
        .inputFluids(Fluid.of("gtceu:" + row.gas, row.mb))
        .blastFurnaceTemp(row.temp).EUt(row.eut || MV).duration(row.gasDur)
        .circuit(2)
    }
  }

  // --- Smelting: low-tier grits, pellets, and crystals ---------------------

  // Grits
  event.recipes.minecraft.smelting("gtceu:tin_ingot", "immersivegeology:grit_tin")
  event.recipes.minecraft.smelting("gtceu:zinc_ingot", "immersivegeology:grit_zinc")
  event.recipes.minecraft.smelting("gtceu:cobalt_ingot", "immersivegeology:grit_cobalt")
  event.recipes.minecraft.smelting("gtceu:nickel_ingot", "immersivegeology:grit_nickel")
  event.recipes.minecraft.smelting("gtceu:platinum_ingot", "immersivegeology:grit_platinum")
  event.recipes.minecraft.smelting("gtceu:thorium_ingot", "immersivegeology:grit_thorium")
  event.recipes.minecraft.smelting("gtceu:manganese_ingot", "immersivegeology:grit_manganese")
  event.recipes.minecraft.smelting("gtceu:molybdenum_ingot", "immersivegeology:grit_molybdenum")

  // Crystals (low-tier)
  event.recipes.minecraft.smelting("tfc:metal/ingot/copper", "immersivegeology:crystal_copper")
  event.recipes.minecraft.smelting("minecraft:iron_ingot", "immersivegeology:crystal_iron")
  event.recipes.minecraft.smelting("gtceu:silver_ingot", "immersivegeology:crystal_silver")
  event.recipes.minecraft.smelting("tfc:metal/ingot/gold", "immersivegeology:crystal_gold")
  event.recipes.minecraft.smelting("gtceu:lead_ingot", "immersivegeology:crystal_lead")
  event.recipes.minecraft.smelting("gtceu:cobalt_ingot", "immersivegeology:crystal_cobalt")
  event.recipes.minecraft.smelting("gtceu:nickel_ingot", "immersivegeology:crystal_nickel")
  event.recipes.minecraft.smelting("gtceu:platinum_ingot", "immersivegeology:crystal_platinum")
  event.recipes.minecraft.smelting("gtceu:thorium_ingot", "immersivegeology:crystal_thorium")

  // --- Arc Furnace: ore slag ----------------------------------------

  // Millerite slag -> nickel nuggets
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/millerite_slag_to_nickel_nugget")
    .itemInputs("immersivegeology:slag_millerite")
    .itemOutputs("8x gtceu:nickel_nugget", "immersiveengineering:slag")
    .EUt(MV)
    .duration(200)

  // Smithsonite slag -> zing ingot
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/slag_smithsonite")
    .itemInputs("immersivegeology:slag_smithsonite")
    .itemOutputs("gtceu:zinc_ingot", "immersiveengineering:slag")
    .EUt(MV)
    .duration(200)

  // --- GT Arc Furnace: recycling routes ------------------------------------

  // Rusty metal plates -> steel nuggets (replaces blast_crude_steel_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_metal_to_steel_nugget")
    .itemInputs("#forge:plates/rusty_metal")
    .itemOutputs("4x gtceu:steel_nugget")
    .EUt(MV)
    .duration(100)

  // Rusty metal -> steel ingot (replaces arc_slab_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_slab_to_steel_ingot")
    .itemInputs("immersivegeology:slab_rusty_metal")
    .itemOutputs("gtceu:steel_ingot")
    .EUt(MV)
    .duration(100)

  // Rusty metal -> steel ingot (replaces arc_storage_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_block_to_steel_ingot")
    .itemInputs("immersivegeology:storage_block_rusty_metal")
    .itemOutputs("4x gtceu:steel_ingot")
    .EUt(MV)
    .duration(100)
  
  // Rusty metal -> steel ingot (replaces arc_fence_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_fence_to_steel_ingot")
    .itemInputs("immersivegeology:fence_rusty_metal")
    .itemOutputs("2x gtceu:steel_rod", "1x gtceu:steel_ingot")
    .EUt(MV)
    .duration(100)

  // Rusty sheetmetal stairs -> steel nuggets (replaces arc_sheetmetal_stair_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_sheetmetal_stairs_to_steel_nugget")
    .itemInputs("immersivegeology:sheetmetal_stairs_rusty_metal")
    .itemOutputs("4x gtceu:steel_nugget")
    .EUt(MV)
    .duration(100)

  // Rusty sheetmetal stairs -> steel nuggets (replaces arc_sheetmetal_slab_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_sheetmetal_slab_to_steel_nugget")
    .itemInputs("immersivegeology:sheetmetal_slab_rusty_metal")
    .itemOutputs("3x gtceu:steel_nugget")
    .EUt(MV)
    .duration(100)

  // Rusty metal stairs -> steel nuggets (replaces arc_stair_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_metal_stairs_to_steel_ingot")
    .itemInputs("immersivegeology:stairs_rusty_metal")
    .itemOutputs("2x gtceu:steel_ingot")
    .EUt(MV)
    .duration(100)

  // Rusty sheetmetal block -> steel nuggets (replaces arc_steel_extraction)
  event.recipes.gtceu
    .arc_furnace("gregitas:ig/arc/rusty_sheetmetal_block_to_iron_nugget")
    .itemInputs("immersivegeology:sheetmetal_block_rusty_metal")
    .itemOutputs("6x minecraft:iron_nugget")
    .EUt(MV)
    .duration(100)
}
