const addGregVeinsToTags = (/** @type {TagEvent.PlacedFeature}*/ event) => {
  //these are made in `greg_vein_maker.js`
  tfcStone.forEach((stone) => {
    event.add("tfc:in_biome/veins", `gregitas:vein/test_${stone}`)
    console.log(`tfc:vein/test_${stone}` + " to tfc:in_biome/veins")
  })
}
