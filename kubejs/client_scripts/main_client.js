// priority 0

ClientEvents.tick((event) => {
  observeGtQuest(event) // TODO: needs rework
})

NetworkEvents.dataReceived('customTask', event => {
  clientObserveGtTask(event) // TODO: needs rework
})

JEIEvents.hideItems(event => {
  hidePotions(event)
})

ClientEvents.lang("en_us", (event) => {
  addGregOresLang(event)
  addGregitasName(event)
})

ItemEvents.tooltip(event => {
  addModNameTooltipToCreativeTab(event)
})
