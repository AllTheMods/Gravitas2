let registerGTCEuMaterialFlags = (/** @type {Registry.Material} */ event) => {
    GTMaterials.Bismuth.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Astatine.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Iodine.setProperty(PropertyKey.DUST, new $DustProperty())

    GTMaterials.CertusQuartz.setFormula('CtO2', true)
}

let ULV = 0
let LV = 1
let MV = 2
let HV = 3
let EV = 4
let IV = 5
let LuV = 6
let ZPM = 7
let UV = 8
let UHV = 9
let UEV = 10
let UIV = 11
let UXV = 12
let OpV = 13
let MAX = 14

let VA = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920]
// TODO tweak blast temps, times
let registerGTCEuElementMaterial = (/** @type {Registry.Material} */ event) => {
    event.create("weapons_grade_naquadah")
        .ingot(5).fluid()
        .color(0x586357).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)
        .element('weapons_grade_naquadah')
        .blastTemp(8000, 'HIGH', VA[ZPM], 1500)
    
    event.create("low_grade_hypogen")
        .ingot(5)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(16100))
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidState)'](GTFluidStorageKeys.MOLTEN, GTFluidState.MOLTEN)
        .color(0xed6f15).secondaryColor(0xc98642).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .element('hypogen_422')
        .blastTemp(10062, 'HIGHER', VA[UHV], 1800)
    event.create("high_grade_hypogen")
        .ingot(5)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(16100))
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidState)'](GTFluidStorageKeys.MOLTEN, GTFluidState.MOLTEN)
        .color(0xf55d00).secondaryColor(0xbf670d).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .element('hypogen_414')
        .blastTemp(10062, 'HIGHER', VA[UHV], 1800)
    event.create("weapons_grade_hypogen")
        .ingot(6)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(16100))
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidState)'](GTFluidStorageKeys.MOLTEN, GTFluidState.MOLTEN)
        .color(0xf04f0a).secondaryColor(0xedad09).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD)
        .element('hypogen_403')
        .blastTemp(10062, 'HIGHEST', VA[UHV], 2200)

    event.create("infinity_matter")
        .ingot(7).fluid()
        .color(0xebf5eb).secondaryColor(0xf0d3ec).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_DENSE)
        .element('infinity_matter')
    event.create("time")
        .element('time')
    
    event.create("allthemodium")
        .ingot(6).fluid()
        .color(0xf5c414).secondaryColor(0xf2ac0a).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD)
        .element('allthemodium')
        .blastTemp(3000, 'HIGHEST', VA[ZPM], 1800)
    event.create("unobtainium")
        .ingot(7).fluid()
        .color(0xa62be0).secondaryColor(0x7d28a6).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD)
        .element('unobtainium')
        .blastTemp(3000, 'HIGHEST', VA[UHV], 1800)

    event.create("certus")
        .gem()
        .color(0xc5e3de).iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .element('certus')
}

let registerGTCEuUnknownCompositionMaterial = (/** @type {Registry.Material} */ event) => {
    event.create("space")
        .dust()
        .color(0x2e213b).iconSet(GTMaterialIconSet.SHINY)
    event.create("trace_minerals")
        .dust()
        .color(0x537854).iconSet(GTMaterialIconSet.ROUGH)
    event.create("extraterrestial_materials")
        .dust()
        .color(0x5be3de).iconSet(GTMaterialIconSet.ROUGH)
    event.create('star_matter')
        .fluid()
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.PLASMA, new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
        .color(0xb219d1)
    
    event.create("raw_hypogen")
        .fluid()
        .color(0xab6527)
    event.create("dirty_hypogen")
        .fluid()
        .color(0xc9893a)
    event.create("dirty_hypogen_solution")
        .fluid()
        .color(0xc9b63a)  
    event.create("purified_hypogen_solution")
        .fluid()
        .color(0xe39714)
    event.create("impure_hypogen_solution")
        .fluid()
        .color(0xe69e10)
    event.create("acidic_purified_hypogen_solution")
        .fluid()
        .color(0xed7e1c)
    event.create("acidic_impure_hypogen_solution")
        .fluid()
        .color(0xeda71c)
    event.create("weapons_grade_hypogen_solution")
        .fluid()
        .color(0xe33714)
    event.create("purified_hypogen_waste")
        .fluid()
        .color(0xede20c)
    event.create("impure_hypogen_waste")
        .fluid()
        .color(0xd8ed1c)

    event.create("infinity_matter_precursor")
        .fluid()
        .color(0xe39e14)
    event.create("impure_infinity_matter")
        .plasma()
        .color(0xdcebbe)
    event.create("reactive_infinity_matter")
        .fluid()
        .color(0xbeebe0)

    event.create("spacetime_junk")
        .dust()
        .color(0x734b6c)

    event.create('igneous')
        .dust()
        .color(0xbebebe)
    event.create('igneous_alloy')
        .fluid().dust()
        .iconSet('rough')
        .color(0x839689)
}

let registerGTCEuFirstDegreeMaterial = (/** @type {Registry.Material} */ event) => {
    event.create("allthemodium_naquadah_mixture")
        .dust()
        .color(0x5be3de).iconSet(GTMaterialIconSet.ROUGH)
        .components('1x allthemodium', '4x naquadah')
    event.create("spacetime")
        .dust().fluid()
        .color(0x5be3de).iconSet(GTMaterialIconSet.ROUGH)
        .components('1x space', '1x time')
    event.create("infinity_hypogen_alloy")
        .fluid().plasma()
        .color(0xf2b988)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('1x infinity_matter_precursor', '1x weapons_grade_hypogen')
    event.create("infinity_matter_sulfate")
        .fluid()
        .color(0xf2b988)
        .components('1x infinity_matter', '1x sulfur')

    event.create('nitinol')
        .ingot().fluid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .colorAverage()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('4x nickel', '6x titanium')
        .blastTemp(1583, 'high', VA[IV], 1200)
    
    event.create("trichlorocertane")
        .fluid()
        .color(0xb1d9f0)
        .components('1x certus', '1x hydrogen', '3x chlorine')
    event.create("dichlorocertane")
        .fluid()
        .color(0x90cfd1)
        .components('2x hydrogen', '1x certus', '2x chlorine')
    event.create("chlorocertane")
        .fluid()
        .color(0xccede3)
        .components('3x hydrogen', '1x certus', '1x chlorine')
    event.create("certus_tetrachloride")
        .fluid()
        .color(0xccede3)
        .components('1x certus', '4x chlorine')
    event.create("certane")
        .fluid()
        .color(0xccede3)
        .components('1x certus', '4x hydrogen')
    event.create("polycertus")
        .gem()
        .color(0xb6f2ee)
        .components('1x certus')
}

let registerGTCEuHigherDegreeMaterial = (/** @type {Registry.Material} */ event) => {
    event.create("ultra_high_grade_hypogen_separation_agent")
        .fluid()
        .colorAverage()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('8x redstone', '1x star_matter', '2x fluoroantimonic_acid')
    event.create("hypogen_solder_catalyst")
        .dust().fluid()
        .colorAverage()
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('4x soldering_alloy', '4x unobtainium', '1x neutronium')
    event.create("spacetime_reaction_catalyst")
        .dust()
        .color(0xf2b988)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x spacetime', '1x star_matter', '1x weapons_grade_naquadah')
}

let registerGTCEuOrganicMaterial = (/** @type {Registry.Material} */ event) => {
    
}