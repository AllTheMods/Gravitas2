// IG ↔ GT ore processing conversion recipes
// Design: each direction applies the *source* system's processing logic to the *target* system's machine
//
// IG → GT  (GT Macerator): IE Crusher odds applied to Macerator — yields GT crushed ore
//   poor_ore   → 1× GT crushed + 33% chance of 1 more
//   normal_ore → 1× GT crushed + 33% + 16.5% chances
//   rich_ore   → 1× GT crushed + 33% + 16.5% + 16.5% chances
//
// GT → IG  (IE Crusher): GT Macerator's 2× baseline + 10% bonus — averages 2.1× dirty crushed
//   1× GT raw ore → 2× IG dirty crushed + 10% chance of 1 more (avg 2.1)

var ig_gt_ores = [
  { ig: "copper",       gt: "copper"           },
  { ig: "chalcopyrite", gt: "chalcopyrite"     },
  { ig: "lead",         gt: "lead"             },
  { ig: "silver",       gt: "silver"           },
  { ig: "gold",         gt: "gold"             },
  { ig: "bauxite",      gt: "bauxite"          },
  { ig: "cassiterite",  gt: "cassiterite"      },
  { ig: "cassiterite",  gt: "cassiterite_sand" },
  { ig: "hematite",     gt: "hematite"         },
  { ig: "magnetite",    gt: "magnetite"        },
  { ig: "sphalerite",   gt: "sphalerite"       },
  { ig: "uraninite",    gt: "uraninite"        },
  { ig: "platinum",     gt: "platinum"         },
  { ig: "galena",       gt: "galena"           },
  { ig: "chromite",     gt: "chromite"         },
  { ig: "cobaltite",    gt: "cobaltite"        },
  { ig: "pyrite",       gt: "pyrite"           },
  { ig: "pyrolusite",   gt: "pyrolusite"       },
  { ig: "molybdenite",  gt: "molybdenite"      },
  { ig: "scheelite",    gt: "scheelite"        },
  { ig: "ilmenite",     gt: "ilmenite"         },
  { ig: "chalcocite",   gt: "chalcocite"       },
  { ig: "apatite",      gt: "apatite"          },
  { ig: "monazite",     gt: "monazite"         },
]

let addIgGtConversions = (/** @type {Internal.RecipesEventJS} */ event) => {

  event.remove({ id: "tfc_ie_addon:crusher/cryolite" })
  event.custom({
    type: "immersiveengineering:crusher",
    energy: 6000,
    input: { item: "tfc:ore/cryolite" },
    result: { item: "immersivegeology:dirty_crushed_ore_cryolite", count: 1 },
    secondaries: [
      { chance: 0.33, output: { item: "immersivegeology:dirty_crushed_ore_cryolite" } },
      { chance: 0.165, output: { item: "immersivegeology:dirty_crushed_ore_cryolite" } }
    ],
    time: 100,
  })
  
  ig_gt_ores.forEach((ore) => {
    var gt_crushed = "gtceu:crushed_" + ore.gt + "_ore"
    var gt_raw = (ore.gt === "copper" || ore.gt === "gold")
      ? "minecraft:raw_" + ore.gt
      : "gtceu:raw_" + ore.gt
    var ig_dirty = "immersivegeology:dirty_crushed_ore_" + ore.ig

    // IG → GT: GT Macerator with IE Crusher probability structure
    event.recipes.gtceu
      .macerator("gregitas:ig_to_gt/poor_" + ore.ig + "_to_" + ore.gt)
      .itemInputs("immersivegeology:poor_ore_" + ore.ig)
      .itemOutputs(gt_crushed)
      .chancedOutput(gt_crushed, 3300, 0)
      .duration(400)
      .EUt(2)

    event.recipes.gtceu
      .macerator("gregitas:ig_to_gt/normal_" + ore.ig + "_to_" + ore.gt)
      .itemInputs("immersivegeology:normal_ore_" + ore.ig)
      .itemOutputs(gt_crushed)
      .chancedOutput(gt_crushed, 3300, 0)
      .chancedOutput(gt_crushed, 1650, 0)
      .duration(400)
      .EUt(2)

    event.recipes.gtceu
      .macerator("gregitas:ig_to_gt/rich_" + ore.ig + "_to_" + ore.gt)
      .itemInputs("immersivegeology:rich_ore_" + ore.ig)
      .itemOutputs(gt_crushed)
      .chancedOutput(gt_crushed, 3300, 0)
      .chancedOutput(gt_crushed, 1650, 0)
      .chancedOutput(gt_crushed, 1650, 0)
      .duration(400)
      .EUt(2)

    // GT → IG: IE Crusher — 2× guaranteed + 10% chance of 1 more (2.1 average)
    event.custom({
      type: "immersiveengineering:crusher",
      energy: 6000,
      input: { item: gt_raw },
      result: { item: ig_dirty, count: 2 },
      secondaries: [{ chance: 0.1, output: { item: ig_dirty } }],
      time: 100,
    })

    // GT → IG: Gravity Separator (water wash) — unlocks TFC ore → IG pipeline
    event.custom({
      type: "immersivegeology:gravity_separator",
      input: { item: "gtceu:crushed_" + ore.gt + "_ore" },
      result: { item: "immersivegeology:crushed_ore_" + ore.ig },
      byproduct: { item: "gtceu:stone_dust" },
      byproduct_chance: 0.33,
      water: 100,
      time: 100,
    })
  })
}
