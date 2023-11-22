// priority 10
let tfcStoneL = [
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
const addGregOresLang = (event) => {
  const blocks = Object.keys(global.gregOreBlockProps)
  blocks.forEach((block) => {
    tfcStoneL.forEach((stone) => {
      event.add(`block.gregitas.ore.${block}.${stone}`, Utils.snakeCaseToTitleCase(`${stone}_${block}`))
      event.add(`block.gregitas.ore.${block}.${stone}.prospected`, Utils.snakeCaseToTitleCase(`${block}`))
    })
  })
}
