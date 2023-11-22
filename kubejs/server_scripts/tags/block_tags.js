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
const addBlockTags = (/** @type {TagEvent.Block} */ event) => {
  tfcStoneb.forEach((stone) => {
    event.add('tfc:not_solid_supporting', [`tfc:rock/cobble/${stone}_slab`])
    event.add('tfc:can_collapse', [`tfc:rock/cobble/${stone}_slab`])
  })
}
