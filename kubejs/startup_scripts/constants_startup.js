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
  // gold: { color: 0xffe650, overlay: "shiny" },
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
  // iron: { color: 0xc8c8c8, overlay: "metallic" },
  pyrite: { color: 0x967828, overlay: "rough" },
  // copper: { color: 0xff6400, overlay: "shiny" },
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

global.VEINS = {
  apatite: {
    config: null, // example placeholder, just in case we need
    oreAndWeight: [
      ["apatite", 3],
      ["tricalcium_phosphate", 2],
      ["pyrochlore", 1]
    ]
  },
  cassiterite: {
    oreAndWeight: [
      ["tin", 4],
      ["cassiterite", 2]
    ]
  },
  copper_tin: {
    oreAndWeight: [
      ["chalcopyrite", 10],
      ["zeolite", 4],
      ["cassiterite", 4],
      ["realgar", 1]
    ]
  },
  galena: {
    oreAndWeight: [
      ["galena", 3],
      ["silver", 2],
      ["lead", 1]
    ]
  },
  garnet_tin: {
    oreAndWeight: [
      ["cassiterite_sand", 5],
      ["garnet_sand", 2],
      ["asbestos", 2],
      ["diatomite", 1]
    ]
  },
  garnet: {
    oreAndWeight: [
      ["red_garnet", 3],
      ["yellow_garnet", 2],
      ["amethyst", 2],
      ["opal", 1]
    ]
  },
  iron: {
    oreAndWeight: [
      ["goethite", 5],
      ["yellow_limonite", 2],
      ["hematite", 2],
      ["malachite", 1]
    ]
  },
  lubricant: {
    oreAndWeight: [
      ["soapstone", 3],
      ["talc", 2],
      ["glauconite_sand", 2],
      ["pentlandite", 1]
    ]
  },
  magnetite: {
    oreAndWeight: [
      ["magnetite", 3],
      ["vanadium_magnetite", 2],
      ["gold", 1]
    ]
  },
  mineral_sand: {
    oreAndWeight: [
      ["basaltic_mineral_sand", 5],
      ["granitic_mineral_sand", 2],
      ["fullers_earth", 2],
      ["gypsum", 1]
    ]
  },
  nickel: {
    oreAndWeight: [
      ["garnierite", 3],
      ["nickel", 2],
      ["cobaltite", 2],
      ["pentlandite", 1]
    ]
  },
  salts: {
    oreAndWeight: [
      ["rock_salt", 3],
      ["salt", 2],
      ["lepidolite", 1],
      ["spodumene", 1]
    ]
  },
  oilsands: { oreAndWeight: [["oilsands", 1]] }
}

global.DEEPSLATE_VEINS = {
  copper: {
    config: null, // example placeholder, just in case we need
    oreAndWeight: [
      ["chalcopyrite", 5],
      ["iron", 2],
      ["pyrite", 2],
      ["copper", 2]
    ]
  },
  diamond: {
    oreAndWeight: [
      ["lazurite", 3],
      ["sodalite", 2],
      ["lapis", 2],
      ["calcite", 1]
    ]
  },
  manganese: {
    oreAndWeight: [
      ["grossular", 3],
      ["spessartine", 2],
      ["pyrolusite", 2],
      ["tantalite", 1]
    ]
  },
  mica: {
    oreAndWeight: [
      ["kyanite", 2],
      ["mica", 1],
      ["bauxite", 1],
      ["pollucite", 1]
    ]
  },
  olivine: {
    oreAndWeight: [
      ["bentonite", 2],
      ["magnetite", 1],
      ["olivine", 1],
      ["glauconite_sand", 1]
    ]
  },
  redstone: {
    oreAndWeight: [
      ["redstone", 2],
      ["ruby", 1],
      ["cinnabar", 1]
    ]
  },
  sapphire: {
    oreAndWeight: [
      ["almandine", 2],
      ["pyrope", 1],
      ["sapphire", 1],
      ["green_sapphire", 1]
    ]
  }
}
