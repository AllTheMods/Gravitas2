// priority 10

let registerItems = (/** @type {Registry.Item} */ event) => {
  event.create("kubejs:cutter_head").unstackable().displayName("Cutter Head")
  event.create('gtceu:double_invar_ingot').displayName('Invar Double Ingot').texture('tfc:item/metal/double_ingot/wrought_iron').color(0, 0xB4B478)
}