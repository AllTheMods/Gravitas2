// priority 10

var ieRecipesReplace = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceInput({ mod: "immersiveengineering" }, "immersiveengineering:hemp_fiber", "tfc:jute_fiber")
  event.replaceInput({ mod: "immersiveengineering" }, "#forge:rods/aluminum", "gtceu:aluminium_rod")
  event.replaceInput({ input: "immersiveengineering:treated_wood_packaged"   }, "immersiveengineering:treated_wood_packaged",   "#forge:treated_wood")
  event.replaceInput({ input: "immersiveengineering:treated_wood_horizontal" }, "immersiveengineering:treated_wood_horizontal", "#forge:treated_wood")
  event.replaceInput({ input: "immersiveengineering:treated_wood_vertical"   }, "immersiveengineering:treated_wood_vertical",   "#forge:treated_wood")
}
