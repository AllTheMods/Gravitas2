let registerGTCEuMaterial = (/** @type {Registry.Material} */ event) => {
    GTMaterials.Bismuth.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    event.create('igneous')
        .dust()
        .color(0xbebebe)

    event.create('igneous_alloy')
        .fluid().dust()
        .iconSet('rough')
        .color(0x839689)

    event.create('nitinol')
        .ingot().fluid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .colorAverage()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('4x nickel', '6x titanium')
        .blastTemp(1583, 'high', GTValues.VA[GTValues.IV], 1200)
}