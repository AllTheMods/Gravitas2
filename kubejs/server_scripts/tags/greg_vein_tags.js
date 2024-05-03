
let gregVeinz = global.gregVeins

const addGregVeinsToTags = (/** @type {TagEvent.PlacedFeature}*/ event) => {
  //these are made in `greg_vein_maker.js`
  //Name should always be `gregitas:vein/${name of vein}`
  gregVeinz.forEach((vein) => {
    event.add("tfc:in_biome/veins", `gtceu:vein/${vein.name}`)
  })
}
