// priority 10

let registerFluids = (/** @type {Registry.Fluid} */ event) => {

    event.create('gregitas:raw_syrup')
    .thinTexture(0xBB9351)
    .displayName('Raw Maple Sap')

    event.create('gregitas:maple_syrup')
    .thickTexture(0xBB9351)
    .displayName('Maple Syrup')


    event.create("gregitas:raw_resin")
    .thickTexture(0x785808)
    .displayName("Raw Resin")

}
