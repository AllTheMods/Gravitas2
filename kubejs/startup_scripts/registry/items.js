// priority 10

const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $Arrays = Java.loadClass('java.util.Arrays')

let registerItems = (/** @type {Registry.Item} */ event) => {
    // wait this wont work bruhhhhh
    GTRegistries.MATERIALS.forEach((material) => {
        if (material.hasProperty($PropertyKey.TOOL) && $Arrays.stream(material.getProperty($PropertyKey.TOOL).types).anyMatch(type => type == GTToolType.WIRE_CUTTER)) {
            event.create(`kubejs:${material.name}_cutter_head`)
            .unstackable()
            .displayName(titleCase(material.name) + " Cutter Head")
            .color(0, material.materialRGB)
        }
    })
  event.create('gtceu:double_invar_ingot').displayName('Invar Double Ingot').texture('tfc:item/metal/double_ingot/wrought_iron').color(0, 0xB4B478)
}

const titleCase = (s) =>
  s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
   .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_