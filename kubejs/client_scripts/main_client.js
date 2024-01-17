// priority 0

ClientEvents.tick((event) => {
})

NetworkEvents.dataReceived('customTask', event => {
})

JEIEvents.hideItems(event => {
  hidePotions(event)
})

JEIEvents.removeCategories(event => {
  hideCats(event)
})
ClientEvents.lang("en_us", (event) => {
  addGregOresLang(event)
  addGregitasName(event)
  convertBucketsToIngots(event)
  addRailwaysTFCNames(event)
})

ItemEvents.tooltip(event => {
  addModNameTooltipToCreativeTab(event)
  circuitTooltips(event)
  addMetalRatioToVessels(event)
})
