// priority 10

let blockBanList = [
  "minecraft:enchanting_table",
  "minecraft:furnace",
  "minecraft:brewing_stand",
  "minecraft:smoker",
  "minecraft:blast_furnace",
  "minecraft:campfire",
  "minecraft:soul_campfire"
]
let blockReplacementMap = {
  "minecraft:chest": "tfc:wood/chest/oak",
  "minecraft:trapped_chest": "tfc:wood/trapped_chest/oak", // won't see on jade because it is cheating
  "minecraft:barrel": "tfc:wood/barrel/oak", // not same functionality but :shrug:
  "minecraft:lectern": "tfc:wood/lectern/oak",
  "minecraft:bell": "tfc:brass_bell",
  "minecraft:torch": "tfc:torch",
  "minecraft:beehive": "firmalife:beehive"
}
let $WailaClientRegistration
if (Platform.isClientEnvironment()){
  $WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration")
}
let addTooltipToBlocks = (/** @type {Internal.StartupEventJS} */ event) => {
  const blockBanListIngredient = Ingredient.of(blockBanList)
  const blockReplaceMapIngredient = Ingredient.of(Object.keys(blockReplacementMap))
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
        let newItem = Item.of(blockReplacementMap[item.item.id])
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
