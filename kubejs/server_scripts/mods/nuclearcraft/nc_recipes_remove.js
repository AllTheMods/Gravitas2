// priority 10

let ncRecipesRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Remove all NuclearCraft fuel crafting recipes registered under the minecraft: namespace.
  // Fuel synthesis is handled instead by GT mixer recipes via nc_to_gt_chem_reactor.js.
  event.remove({ id: /^minecraft:nuclearcraft_fuel/ })
}
