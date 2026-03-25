var igRecipesReplace = (/** @type {Internal.RecipesEventJS} */ event) => {
  var FORMS_HASTELLOY = ["ingots", "plates", "rods", "nuggets"]
  FORMS_HASTELLOY.forEach(function(form) {
    event.replaceInput({ mod: "immersivegeology" },`#forge:${form}/hastelloy`, `#forge:${form}/hastelloy_c_276`)
    event.replaceOutput({ mod: "immersivegeology" },`#forge:${form}/hastelloy`, `#forge:${form}/hastelloy_c_276`)
  });

  var FORMS_HSS = ["ingots", "plates", "nuggets"]
  FORMS_HSS.forEach(function(form) {
    event.replaceInput({ mod: "immersivegeology" },`#forge:${form}/high_speed_steel`, `#forge:${form}/hssg`)
    event.replaceOutput({ mod: "immersivegeology" },`#forge:${form}/high_speed_steel`, `#forge:${form}/hssg`)
  });

  event.replaceInput({ mod: "immersivegeology" }, "immersiveengineering:circuit_board", "gtceu:phenolic_circuit_board")

  // Replace IE sulfur dust with GTCEu sulfur dust in IG sphalerite crusher recipes
  event.remove({ id: /^immersivegeology:crushing\/crush_(poor|normal|rich)_ore_sphalerite.*/ })
  event.custom({
    type: "immersiveengineering:crusher",
    energy: 6000,
    input: { item: "immersivegeology:poor_ore_sphalerite" },
    result: { item: "immersivegeology:dirty_crushed_ore_sphalerite" },
    secondaries: [
      { chance: 0.33,  output: { item: "immersivegeology:dirty_crushed_ore_sphalerite" } },
      { chance: 0.5,   output: { item: "gtceu:sulfur_dust" } },
    ],
    time: 100,
  }).id("immersivegeology:crushing/crush_poor_ore_sphalerite_to_zincdirty_crushed_ore")
  event.custom({
    type: "immersiveengineering:crusher",
    energy: 6000,
    input: { item: "immersivegeology:normal_ore_sphalerite" },
    result: { item: "immersivegeology:dirty_crushed_ore_sphalerite" },
    secondaries: [
      { chance: 0.33,  output: { item: "immersivegeology:dirty_crushed_ore_sphalerite" } },
      { chance: 0.5,   output: { item: "gtceu:sulfur_dust" } },
      { chance: 0.165, output: { item: "immersivegeology:dirty_crushed_ore_sphalerite" } },
    ],
    time: 100,
  }).id("immersivegeology:crushing/crush_normal_ore_sphalerite_to_zincdirty_crushed_ore")
  event.custom({
    type: "immersiveengineering:crusher",
    energy: 6000,
    input: { item: "immersivegeology:rich_ore_sphalerite" },
    result: { item: "immersivegeology:dirty_crushed_ore_sphalerite" },
    secondaries: [
      { chance: 0.33,  output: { item: "immersivegeology:dirty_crushed_ore_sphalerite" } },
      { chance: 0.5,   output: { item: "gtceu:sulfur_dust" } },
      { chance: 0.165, output: { item: "immersivegeology:dirty_crushed_ore_sphalerite" } },
      { chance: 0.165, output: { item: "immersivegeology:dirty_crushed_ore_sphalerite" } },
    ],
    time: 100,
  }).id("immersivegeology:crushing/crush_rich_ore_sphalerite_to_zincdirty_crushed_ore")
}
