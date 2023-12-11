// priority 10

let registerGTCEuMaterialFlags = (/** @type {Registry.Material} */ event) => {
    GTMaterials.get("bismuth").addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    GTMaterials.get("nickel").addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    GTMaterials.get("astatine").setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.get("iodine").setProperty(PropertyKey.DUST, new $DustProperty())

    GTMaterials.get("certus_quartz").setFormula('CtO2', true)

    event.create("polycertus")
      .gem()
      .color(0xb6f2ee)
      .components('1x certus')
}