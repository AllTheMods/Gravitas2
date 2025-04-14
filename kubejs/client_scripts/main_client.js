// priority 0

ClientEvents.highPriorityAssets(event => {
  addTFCBookEntries(event)
})

NetworkEvents.dataReceived('customTask', event => {
})

JEIEvents.hideItems(event => {
  hideItems(event)
})

JEIEvents.hideFluids(event => {
  hideFluids(event)
})

JEIEvents.removeCategories(event => {
  hideCats(event)
})

JEIEvents.addItems(event => {
  addItems(event)
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
  addItemTooltips(event)
})
