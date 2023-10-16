// priority 10

const tfcStone = [
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
const gtceuOreMap = {
   aluminium:{ color: 0x80C8F0 },
   cobalt:{ color: 0x5050FA },
   lead:{ color: 0x8C648C },
   lithium:{ color: 0xBDC7DB },
   magnesium: { color: 0xFFC8C8 },
   osmium:{ color: 0x3232FF },
   platinum:{ color: 0xFFFFC8 }
}

global.gtceuOreMap = [ "aluminium", "cobalt", "lead", "lithium", "magnesium", "osmium", "platinum"]

ClientEvents.highPriorityAssets(event => {
  for(const stone of tfcStone){
      for(const mat of global.gtceuOreMap) {
        event.addModel('block', `gregitas:${mat}_${stone}_ore`, model => {
          model.parent("tfc:block/ore")
          model.texture("all": `tfc:block/rock/raw/${stone}`)
          model.texture("particle": `tfc:block/rock/raw/${stone}`)
          model.texture("overlay": "tfc:block/ore/normal_native_silver")
          }
      }
  }
})