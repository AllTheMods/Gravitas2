const addGregVeinsToTags = (/** @type {TagEvent.PlacedFeature}*/ event) => {
  //these are made in `greg_vein_maker.js`
  //Name should always be `gregitas:vein/${name of vein}`
  global.gregVeins.forEach((vein) => {
    event.add("tfc:in_biome/veins", `gregitas:vein/${vein.name}`)
  })
}
