// priority 10

let registerFluids = (/** @type {Registry.Fluid} */ event) => {
    event.create('gregitas:raw_syrup')
        .thinTexture(0xBB9351)
        .displayName('Raw Maple Sap')

    event.create('gregitas:maple_syrup')
        .thickTexture(0xBB9351)
        .displayName('Maple Syrup')

    event.create("gregitas:cane_syrup")
        .thickTexture(0xB67050)
        .displayName("Cane Syrup")

    event.create("gregitas:sugar_syrup")
        .thickTexture(0xFFF9DB)
        .displayName("Sugar Syrup")

    event.create("gregitas:raw_resin")
        .thickTexture(0x785808)
        .displayName("Raw Resin")

    event.create("gregitas:crimson_resin")
        .thickTexture(0xB62A0C)
        .displayName("Crimson Resin")

    event.create("gregitas:warped_resin")
        .thickTexture(0x000F75)
        .displayName("Warped Resin")
}
