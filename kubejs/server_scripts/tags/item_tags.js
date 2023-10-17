// priority 10

const gtceuIngots = [
  "aluminium",
  "americium",
  "annealed_copper",
  "antimony",
  "battery_alloy",
  "beryllium",
  "blue_alloy",
  "chromium",
  "cobalt",
  "cobalt_brass",
  "cupronickel",
  "damascus_steel",
  "darmstadtium",
  "duranium",
  "electrum",
  "enriched_naquadah",
  "enriched_naquadah_trinium_europium_duranide",
  "europium",
  "gallium",
  "gallium_arsenide",
  // "graphene", no fluid
  "hsse",
  "hssg",
  "hsss",
  "indium",
  "indium_gallium_phosphide",
  "indium_tin_barium_titanium_cuprate",
  "invar",
  "iridium",
  "kanthal",
  "lead",
  "magnalium",
  "magnesium_diboride",
  "manganese",
  "manganese_phosphide",
  "mercury_barium_calcium_cuprate",
  "molybdenum",
  "naquadah",
  "naquadah_alloy",
  "naquadria",
  "neodymium",
  "neutronium",
  "nichrome",
  "nickel_zinc_ferrite",
  "niobium",
  "niobium_nitride",
  "niobium_titanium",
  "osmiridium",
  "osmium",
  "palladium",
  "platinum",
  "plutonium",
  "plutonium_241",
  "potin",
  "red_alloy",
  "rhodium",
  "rhodium_plated_palladium",
  // "ruridit", no fluid
  "ruthenium",
  "ruthenium_trinium_americium_neutronate",
  "samarium",
  "samarium_iron_arsenic_oxide",
  "silicon",
  "soldering_alloy",
  "stainless_steel",
  "tantalum",
  "thorium",
  "tin_alloy",
  "titanium",
  "trinium",
  "tritanium",
  "tungsten",
  "tungsten_carbide",
  "tungsten_steel",
  "ultimet",
  "uranium",
  "uranium_235",
  "uranium_rhodium_dinaquadide",
  "uranium_triplatinum",
  "vanadium",
  "vanadium_gallium",
  "vanadium_steel",
  "yttrium",
  "yttrium_barium_cuprate"
]

const addItemTags = (/** @type {TagEvent.Item} */ event) => {
  event.add("forge:ingots/iron", "tfc:metal/ingot/cast_iron")
  event.add("forge:rods/iron", "tfc:metal/rod/cast_iron")
  event.add("forge:plates/iron", "tfc:metal/sheet/cast_iron")
  event.add("forge:dusts/diamond", "tfc:powder/diamond")

  gtceuIngots.forEach((ingot) => {
    event.add("tfc:pileable_ingots", `gtceu:${ingot}_ingot`)
  })

  tfcStone.forEach((stone) => {
    event.add("forge:slabs/cobblestone", `tfc:rock/cobble/${stone}_slab`)
  })

  tfcSaplings.forEach((sapling) => {
    event.add("forge:saplings", `tfc:wood/sapling/${sapling}`)
  })

  tfcMetal.forEach((metal) => {
    event.add(`forge:plates/${metal}`, `tfc:metal/sheet/${metal}`)
    event.add(`forge:plates/double/${metal}`, `tfc:metal/double_sheet/${metal}`)

    event.add(`forge:sheets/${metal}`, `gtceu:${metal}_plate`)
    event.add(`forge:double_sheets/${metal}`, `gtceu:${metal}_double_plate`)
  })

  event.add('forge:plates/iron', 'tfc:metal/sheet/cast_iron')
  event.add('forge:plates/double/iron', 'tfc:metal/double_sheet/cast_iron')

  event.add(`forge:sheets/cast_iron`, `gtceu:iron_plate`)
  event.add(`forge:double_sheets/cast_iron`, `gtceu:iron_double_plate`)
}
