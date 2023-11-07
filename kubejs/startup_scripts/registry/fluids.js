// priority 10

let registerFluids = (/** @type {Registry.Fluid} */ event) => {

    event.create('raw_syrup')
    .thinTexture(0xBB9351)
    .displayName('Raw Maple Sap')

    event.create('maple_syrup')
    .thickTexture(0xBB9351)
    .displayName('Maple Syrup')


    event.create("raw_resin")
    .thickTexture(0x785808)
    .displayName("Raw Resin")

}
