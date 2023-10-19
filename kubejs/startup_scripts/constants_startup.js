// priority 100

global.tfcStone = [
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

global.gregOreBlockProps = {
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
  //gold: { color: 0xffe650, overlay: "shiny" },
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
  //iron: { color: 0xc8c8c8, overlay: "metallic" },
  pyrite: { color: 0x967828, overlay: "rough" },
  //copper: { color: 0xff6400, overlay: "shiny" },
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
  green_sapphire: { color: 0x64c882, overlay: "gem_horizontal" }
}

global.gregVeins = [
  {
    name: "apatite",
    weight: 40,
    minY: 10,
    maxY: 80,
    validStones: ["basalt", "rhyolite", "andesite", "dacite", "granite", "gabbro", "diorite"], //This should eventually be replaced with what stones its allowed to generate in.
    oreAndWeight: [
      ["apatite", 3],
      ["tricalcium_phosphate", 2],
      ["pyrochlore", 1]
    ]
  },
  {
    name: "cassiterite",
    weight: 80,
    minY: 10,
    maxY: 80,
    validStones: ["granite", "diorite", "gabbro"],
    oreAndWeight: [
      ["tin", 4],
      ["cassiterite", 2]
    ]
  },
  {
    name: "copper_tin",
    weight: 50,
    minY: -10,
    maxY: 160,
    validStones: [],
    oreAndWeight: [
      ["chalcopyrite", 10],
      ["zeolite", 4],
      ["cassiterite", 4],
      ["realgar", 1]
    ]
  },
  {
    name: "galena",
    weight: 40,
    minY: -15,
    maxY: 45,
    validStones: ["granite", "gneiss"],
    oreAndWeight: [
      ["galena", 3],
      ["silver", 2],
      ["lead", 1]
    ]
  },
  {
    weight: 80,
    minY: 30,
    maxY: 60,
    validStones: [],
    name: "garnet_tin",
    oreAndWeight: [
      ["cassiterite_sand", 5],
      ["garnet_sand", 2],
      ["asbestos", 2],
      ["diatomite", 1]
    ]
  },
  {
    name: "garnet",
    weight: 40,
    minY: -10,
    maxY: 50,
    validStones: [],
    oreAndWeight: [
      ["red_garnet", 3],
      ["yellow_garnet", 2],
      ["amethyst", 2],
      ["opal", 1]
    ]
  },
  {
    name: "iron",
    weight: 120,
    minY: -10,
    maxY: 60,
    validStones: ["basalt", "rhyolite", "andesite", "dacite"],
    oreAndWeight: [
      ["goethite", 5],
      ["yellow_limonite", 2],
      ["hematite", 2],
      ["malachite", 1]
    ]
  },
  {
    name: "lubricant",
    weight: 40,
    minY: 0,
    maxY: 50,
    validStones: [],
    oreAndWeight: [
      ["soapstone", 3],
      ["talc", 2],
      ["glauconite_sand", 2],
      ["pentlandite", 1]
    ]
  },
  {
    name: "magnetite",
    weight: 80,
    minY: 10,
    maxY: 60,
    validStones: ["basalt", "rhyolite", "andesite", "dacite"],
    oreAndWeight: [
      ["magnetite", 3],
      ["vanadium_magnetite", 2],
      ["gold", 1]
    ]
  },
  {
    name: "mineral_sand",
    weight: 80,
    minY: 15,
    maxY: 60,
    validStones: [],
    oreAndWeight: [
      ["basaltic_mineral_sand", 5],
      ["granitic_mineral_sand", 2],
      ["fullers_earth", 2],
      ["gypsum", 1]
    ]
  },
  {
    name: "nickel",
    weight: 40,
    minY: -10,
    maxY: 60,
    validStones: ["gabbro", "diorite", "granite"],
    oreAndWeight: [
      ["garnierite", 3],
      ["nickel", 2],
      ["cobaltite", 2],
      ["pentlandite", 1]
    ]
  },
  {
    name: "salts",
    weight: 50,
    minY: 30,
    maxY: 70,
    validStones: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
    oreAndWeight: [
      ["rock_salt", 3],
      ["salt", 2],
      ["lepidolite", 1],
      ["spodumene", 1]
    ]
  },
  {
    name: "oilsands",
    weight: 40,
    minY: 30,
    maxY: 80,
    validStones: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
    oreAndWeight: [["oilsands", 1]]
  },
  {
    name: "copper",
    weight: 80,
    minY: -40,
    maxY: 10,
    validStones: [],
    oreAndWeight: [
      ["chalcopyrite", 5],
      ["iron", 2],
      ["pyrite", 2],
      ["copper", 2]
    ]
  },
  {
    name: "diamond",
    weight: 40,
    minY: -65,
    maxY: -30,
    validStones: [],
    oreAndWeight: [
      ["lazurite", 3],
      ["sodalite", 2],
      ["lapis", 2],
      ["calcite", 1]
    ]
  },
  {
    name: "manganese",
    weight: 20,
    minY: -30,
    maxY: 0,
    validStones: [],
    oreAndWeight: [
      ["grossular", 3],
      ["spessartine", 2],
      ["pyrolusite", 2],
      ["tantalite", 1]
    ]
  },
  {
    name: "mica",
    weight: 20,
    minY: -40,
    maxY: -10,
    validStones: [],
    oreAndWeight: [
      ["kyanite", 2],
      ["mica", 1],
      ["bauxite", 1],
      ["pollucite", 1]
    ]
  },
  {
    name: "olivine",
    weight: 20,
    minY: -20,
    maxY: 10,
    validStones: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
    oreAndWeight: [
      ["bentonite", 2],
      ["magnetite", 1],
      ["olivine", 1],
      ["glauconite_sand", 1]
    ]
  },
  {
    name: "redstone",
    weight: 60,
    minY: -65,
    maxY: -10,
    validStones: ["rhyolite", "basalt", "andesite", "dacite", "quartzite", "shale"],
    oreAndWeight: [
      ["redstone", 2],
      ["ruby", 1],
      ["cinnabar", 1]
    ]
  },
  {
    name: "sapphire",
    weight: 60,
    minY: -40,
    maxY: 0,
    validStones: [],
    oreAndWeight: [
      ["almandine", 2],
      ["pyrope", 1],
      ["sapphire", 1],
      ["green_sapphire", 1]
    ]
  }
]
