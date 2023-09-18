// priority 10

let recipeRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.remove({id: "tfc:anvil/wrought_iron_rod"})
  event.remove({id: "gtceu:shaped/stick_wrought_iron"})
  event.remove({id: "gtceu:shaped/stick_long_wrought_iron"})
  event.remove({id: "gtceu:shaped/screw_wrought_iron"})
  event.remove({id: "gtceu:shaped/wire_cutter_wrought_iron"})
}
