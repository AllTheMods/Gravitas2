// priority 10
const tfcStoneb = [
  "granite",
  "diorite",
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "basalt",
  "andesite",
  "dacite",
  "quartzite",
  "slate",
  "phyllite",
  "schist",
  "gneiss",
  "marble"
]

const tfcWoodTags = [
  {
    id: 'acacia',
    color: 0x9d422f,
    name: 'Acacia'
  },
  {
    id: 'ash',
    color: 0x9e5647,
    name: 'Ash'
  },
  {
    id: 'aspen',
    color: 0x40402d,
    name: 'Aspen'
  },
  {
    id: 'birch',
    color: 0x80704e,
    name: 'Birch'
  },
  {
    id: 'blackwood',
    color: 0x1d1b19,
    name: 'Blackwood'
  },
  {
    id: 'chestnut',
    color: 0x55341f,
    name: 'Chestnut'
  },
  {
    id: 'douglas_fir',
    color: 0xae9476,
    name: 'Douglas Fir'
  },
  {
    id: 'hickory',
    color: 0x492f17,
    name: 'Hickory'
  },
  {
    id: 'kapok',
    color: 0xa27892,
    name: 'Kapok'
  },
  {
    id: 'mangrove',
    color: 0x6f2a2d,
    name: 'Mangrove'
  },
  {
    id: 'maple',
    color: 0xaa743d,
    name: 'Maple'
  },
  {
    id: 'oak',
    color: 0xc29d62,
    name: 'Oak'
  },
  {
    id: 'palm',
    color: 0xc07438,
    name: 'Palm'
  },
  {
    id: 'pine',
    color: 0xd1bd9a,
    name: 'Pine'
  },
  {
    id: 'rosewood',
    color: 0x8f2228,
    name: 'Rosewood'
  },
  {
    id: 'sequoia',
    color: 0x754434,
    name: 'Sequoia'
  },
  {
    id: 'spruce',
    color: 0xbf806f,
    name: 'Spruce'
  },
  {
    id: 'sycamore',
    color: 0xd2a040,
    name: 'Sycamore'
  },
  {
    id: 'white_cedar',
    color: 0xc2b5ad,
    name: 'White Cedar'
  },
  {
    id: 'willow',
    color: 0x3a430b,
    name: 'Willow'
  }
]


const gregOreBlockPropsT = {
  apatite: { color: 0xc8c8ff, overlay: "diamond" },
  tricalcium_phosphate: { color: 0xffff00, overlay: "flint" },
  pyrochlore: { color: 0x2b1100, overlay: "metallic" },
  tin: { color: 0xdcdcdc, overlay: "dull" },
  cassiterite: { color: 0xdcdcdc, overlay: "metallic" },
  chalcopyrite: { color: 0xa07828, overlay: "dull" },
  zeolite: { color: 0xf0e6e6, overlay: "dull" },
  realgar: { color: 0x9d2123, overlay: "emerald" },
  galena: { color: 0x643c64, overlay: "dull" },
  silver: { color: 0xdcdcff, overlay: "shiny" },
  lead: { color: 0x8c648c, overlay: "dull" },
  cassiterite_sand: { color: 0xdcdcdc, overlay: "sand" },
  garnet_sand: { color: 0xc86400, overlay: "sand" },
  asbestos: { color: 0xe6e6e6, overlay: "dull" },
  diatomite: { color: 0xe1e1e1, overlay: "dull" },
  red_garnet: { color: 0xc85050, overlay: "ruby" },
  yellow_garnet: { color: 0xc8c850, overlay: "ruby" },
  amethyst: { color: 0x8464bc, overlay: "ruby" },
  opal: { color: 0x0000ff, overlay: "opal" },
  goethite: { color: 0xc86400, overlay: "metallic" },
  yellow_limonite: { color: 0xc8c800, overlay: "metallic" },
  hematite: { color: 0x915a5a, overlay: "dull" },
  malachite: { color: 0x055f05, overlay: "lapis" },
  soapstone: { color: 0x5f915f, overlay: "dull" },
  talc: { color: 0x5ab45a, overlay: "fine" },
  glauconite_sand: { color: 0x82b43c, overlay: "sand" },
  pentlandite: { color: 0xa59605, overlay: "dull" },
  magnetite: { color: 0x1e1e1e, overlay: "metallic" },
  vanadium_magnetite: { color: 0x23233c, overlay: "metallic" },
  basaltic_mineral_sand: { color: 0x283228, overlay: "sand" },
  granitic_mineral_sand: { color: 0x283c3c, overlay: "sand" },
  fullers_earth: { color: 0xa0a078, overlay: "fine" },
  gypsum: { color: 0xe6e6fa, overlay: "dull" },
  garnierite: { color: 0x32c846, overlay: "metallic" },
  nickel: { color: 0xc8c8fa, overlay: "metallic" },
  cobaltite: { color: 0x5050fa, overlay: "metallic" },
  rock_salt: { color: 0xf0c8c8, overlay: "fine" },
  salt: { color: 0xfafafa, overlay: "fine" },
  lepidolite: { color: 0xf0328c, overlay: "fine" },
  spodumene: { color: 0xbeaaaa, overlay: "dull" },
  oilsands: { color: 0x0a0a0a, overlay: "sand" },
  pyrite: { color: 0x967828, overlay: "rough" },
  lazurite: { color: 0x6478ff, overlay: "lapis" },
  sodalite: { color: 0x1414ff, overlay: "lapis" },
  lapis: { color: 0x4646dc, overlay: "lapis" },
  calcite: { color: 0xfae6dc, overlay: "dull" },
  grossular: { color: 0xc86400, overlay: "ruby" },
  spessartine: { color: 0xff6464, overlay: "ruby" },
  pyrolusite: { color: 0x9696aa, overlay: "dull" },
  tantalite: { color: 0x915028, overlay: "metallic" },
  kyanite: { color: 0x6e6efa, overlay: "flint" },
  mica: { color: 0xc3c3cd, overlay: "fine" },
  bauxite: { color: 0xc86400, overlay: "dull" },
  pollucite: { color: 0xf0d2d2, overlay: "dull" },
  bentonite: { color: 0xf5d7d2, overlay: "rough" },
  olivine: { color: 0x96ff96, overlay: "ruby" },
  redstone: { color: 0xc80000, overlay: "rough" },
  ruby: { color: 0xff6464, overlay: "ruby" },
  cinnabar: { color: 0x960000, overlay: "emerald" },
  almandine: { color: 0xff0000, overlay: "dull" },
  pyrope: { color: 0x783264, overlay: "ruby" },
  sapphire: { color: 0x6464c8, overlay: "gem_vertical" },
  green_sapphire: { color: 0x64c882, overlay: "gem_horizontal" },
  thorium: { color: 0xc65500, overlay: "metallic"},
  chromite: { color: 0xdbe2e9, overlay: "flint"}

}

const addBlockTags = (/** @type {TagEvent.Block} */ event) => {
  const blocksA = Object.keys(gregOreBlockPropsT)
  tfcStoneb.forEach((stone) => {
    event.add('tfc:not_solid_supporting', [`tfc:rock/cobble/${stone}_slab`])
    event.add('tfc:can_collapse', [`tfc:rock/cobble/${stone}_slab`])
    blocksA.forEach((ore) =>{
            event.add('tfc:prospectable', [`gtceu:${stone}_${ore}_ore`])
    })
  })
  tfcWoodTags.forEach((wood) => {
  event.add('create:tracks', [ `railways:track_tfc_${wood.id}`, `railways:track_tfc_${wood.id}_wide`, `railways:track_tfc_${wood.id}_narrow`])
  event.add('create:girdable_tracks', [ `railways:track_tfc_${wood.id}`, `railways:track_tfc_${wood.id}_wide`, `railways:track_tfc_${wood.id}_narrow`])
  }
  )
  event.add("tfc:blast_furnace_insulation", ["gtceu:firebricks"])
  event.add("forge:ores", ["tfc:white_kaolin_clay", "tfc:kaolin_clay_grass", "tfc:pink_kaolin_clay", "tfc:red_kaolin_clay"])
  event.add("forge:ores/kaolin",["tfc:white_kaolin_clay", "tfc:kaolin_clay_grass", "tfc:pink_kaolin_clay", "tfc:red_kaolin_clay"])

}
