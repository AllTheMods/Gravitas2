const $KoppenClimateClassification = Java.loadClass("net.dries007.tfc.util.climate.KoppenClimateClassification")
const $Climate = Java.loadClass("net.dries007.tfc.util.climate.Climate")

const entityMap = {
"iceandfire:hippogryph": "TROPICAL_RAINFOREST",
"iceandfire:stymphalian_bird": "HOT_DESERT"
}

EntityEvents.checkSpawn(event => {
  if (!event.entity.isLiving()) return
  if (event.entity.type.startsWith("iceandfire:")) {
    console.log("Trying to spawn entity: " + event.entity.type)
    console.log("At biome: " + event.block.biomeId)
    let avgTemp = $Climate.getAverageTemperature(event.level, event.block.pos)
    let rainfall = $Climate.getRainfall(event.level, event.block.pos)
    let climate = $KoppenClimateClassification.classify(avgTemp, rainfall)
    console.log("At climate: " + climate)
    let entityCheck = entityMap[event.entity.type]
    if(entityCheck == null) { return }
    if(entityCheck != climate) {
      console.log("Entity Allowed: " + (entityCheck == climate))
      event.cancel()
    }
  }
})