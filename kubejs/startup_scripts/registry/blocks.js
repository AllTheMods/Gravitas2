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

let registerBlocks = (/** @type {Registry.Block} */ event) => {

    for(const stone of tfcStone){
        for(const mat of global.gtceuOreMap) {
          event
            .create(`gregitas:${mat}_${stone}_ore`)
            .texture("layer0", `tfc:block/rock/raw/${stone}`)
            .texture("layer1", "tfc:block/ore/normal_native_silver")
            .color(1, gtceuOreMap[mat].color)
        }
    }
}
