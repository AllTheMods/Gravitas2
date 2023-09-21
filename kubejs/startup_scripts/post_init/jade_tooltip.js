// priority 10

const $WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration")

let addTooltipToBlocks = (/** @type {Internal.StartupEventJS} */ event) => {
  const blockBanListIngredient = Ingredient.of(global.blockBanList)
  const blockReplaceMapIngredient = Ingredient.of(Object.keys(global.blockReplacementMap))
  $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
    if (!accessor.hitResult) return
    let item = accessor.getPickedResult()
    let addToTooltip = comp => tooltip["add(net.minecraft.network.chat.Component)"](comp)
    if (blockBanListIngredient.test(item)) {
      addToTooltip(Text.red("BREAKING THIS BLOCK").italic())
      addToTooltip(Text.red("WILL GIVE NO ITEM").italic())
      return
    }
    if (blockReplaceMapIngredient.test(item)) {
      if (accessor.player.isCrouching()) {
        let newItem = Item.of(global.blockReplacementMap[item.item.id])
        let modName = Platform.getInfo(newItem.item.mod).name
        addToTooltip(Text.yellow("If you break this block you will get"))
        addToTooltip(Text.gray(newItem.item.description))
        addToTooltip(Text.blue(modName).italic())
      } else {
        addToTooltip(Text.of("§bHold [§aShift§b] for More Info"))
      }
      return
    }
  })
}
