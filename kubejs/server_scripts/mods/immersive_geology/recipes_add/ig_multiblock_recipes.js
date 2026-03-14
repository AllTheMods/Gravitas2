// priority 10

// IG multiblock structure recipe overrides and related crafting paths.
// Covers: Chemical Engineering Block recipe, IE Blast Brick alternatives,
// and GT <-> IG storage block conversions for Hastelloy C-276 / HSS-G / Stainless Steel.

var igMultiblockRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  // --- Storage block conversions --------------------------------------------
  // Allow GT and IG storage blocks to be used interchangeably.
  // Block IDs: gtceu:hastelloy_c_276_block, gtceu:hssg_block, gtceu:stainless_steel_block
  // (GT generates these for all materials with doGenerateBlock() — verify at runtime)

  event.shapeless("immersivegeology:storage_block_hastelloy", ["gtceu:hastelloy_c_276_block"])
  event.shapeless("gtceu:hastelloy_c_276_block", ["immersivegeology:storage_block_hastelloy"])

  event.shapeless("immersivegeology:storage_block_high_speed_steel", ["gtceu:hssg_block"])
  event.shapeless("gtceu:hssg_block", ["immersivegeology:storage_block_high_speed_steel"])

  event.shapeless("immersivegeology:storage_block_stainless_steel", ["gtceu:stainless_steel_block"])
  event.shapeless("gtceu:stainless_steel_block", ["immersivegeology:storage_block_stainless_steel"])

  // --- Chemical Engineering Block override ----------------------------------
  // Down-tiers from hastelloy sheetmetal + hastelloy component to stainless steel sheetmetal + IE steel component.
  // The controller block ID (engineering_block_hastelloy) is unchanged — only wall material changes.

  event.remove({ id: "immersivegeology:crafting/craft_chemical_engineering_block" })

  event.shaped("4x immersivegeology:engineering_block_hastelloy", ["scs", "coc", "scs"], {
    s: "immersivegeology:sheetmetal_block_stainless_steel",
    c: "immersiveengineering:component_steel",
    o: "immersiveengineering:ingot_silver",
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
}
