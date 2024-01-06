// priority 10

const $Integer = Java.loadClass("java.lang.Integer")
//const meltRegex = /(\d+) mB/

const addTooltipIngots = (/** @type {Internal.ItemTooltipEvent} */ event) => {
  if (!Client.isShiftDown()) return
  const idx = event.toolTip.findIndex((component) => component.contents?.key === "tfc.tooltip.item_melts_into")
  if (idx == -1) return
  const comp = event.toolTip.get(idx)
  // const match = comp.string.match(meltRegex)
  const ingots = parseFloat((comp.contents.args[0] / 144).toFixed(1))
  comp.contents.args[0] = ingots === Math.floor(ingots) ? $Integer.valueOf(ingots.toFixed()) : ingots
  event.toolTip.set(idx, Text.translate("tfc.tooltip.item_melts_into_ingots", comp.contents.args))
}
