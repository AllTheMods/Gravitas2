let registerGTCEuMaterial = (/** @type {Registry.Material} */ event) => {
    GTMaterials.Bismuth.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
}