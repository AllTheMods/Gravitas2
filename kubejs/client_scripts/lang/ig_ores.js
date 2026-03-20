// priority 10

var igOreNames = {
  chalcopyrite: "Chalcopyrite",
  cuprite:      "Cuprite",
  galena:       "Galena",
  pyrite:       "Pyrite",
  acanthite:    "Acanthite",
  apatite:      "Apatite",
  bauxite:      "Bauxite",
  chromite:     "Chromite",
  cobaltite:    "Cobaltite",
  fluorite:     "Fluorite",
  ilmenite:     "Ilmenite",
  molybdenite:  "Molybdenite",
  pyrolusite:   "Pyrolusite",
  scheelite:    "Scheelite",
  smithsonite:  "Smithsonite",
  vanadinite:   "Vanadinite",
  wolframite:   "Wolframite",
  anatase:      "Anatase",
  chalcocite:   "Chalcocite",
  lead:         "Lead",
  millerite:    "Millerite",
  thorianite:   "Thorianite",
  uraninite:    "Uraninite",
  monazite:     "Monazite",
  thorite:      "Thorite",
  zircon:       "Zircon",
  platinum:     "Platinum",
}

var igAllStones = [
  "andesite", "basalt", "dacite", "rhyolite",
  "diorite", "gabbro", "granite",
  "gneiss", "marble", "phyllite", "quartzite", "schist", "slate",
  "chalk", "chert", "claystone", "conglomerate", "dolomite", "limestone", "shale",
]

var igRichness = [
  { key: "poor",   label: "Poor" },
  { key: "normal", label: "Normal" },
  { key: "rich",   label: "Rich" },
]

const addIGOresLang = (/** @type {Internal.LangEventJS} */ event) => {
  Object.keys(igOreNames).forEach((mineralId) => {
    var name = igOreNames[mineralId]
    igAllStones.forEach((stone) => {
      var stoneName = stone.charAt(0).toUpperCase() + stone.slice(1)
      igRichness.forEach((r) => {
        var displayName = `${r.label} ${stoneName} ${name}`
        var baseKey = `block.immersivegeology.tfc_${r.key}_ore_block_${mineralId}_${stone}`
        event.add(baseKey, displayName)
        event.add(`${baseKey}.prospected`, displayName)
      })
    })
  })

  // Zircon on the Moon uses the default Minecraft stone texture
  event.add("block.immersivegeology.minecraft_poor_ore_block_zircon_stone", "Poor Zircon")
  event.add("block.immersivegeology.minecraft_poor_ore_block_zircon_stone.prospected", "Poor Zircon")
  event.add("block.immersivegeology.minecraft_normal_ore_block_zircon_stone", "Normal Zircon")
  event.add("block.immersivegeology.minecraft_normal_ore_block_zircon_stone.prospected", "Normal Zircon")
  event.add("block.immersivegeology.minecraft_rich_ore_block_zircon_stone", "Rich Zircon")
  event.add("block.immersivegeology.minecraft_rich_ore_block_zircon_stone.prospected", "Rich Zircon")
}
