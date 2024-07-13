// priority 10
const $Language = Java.loadClass("net.minecraft.client.resources.language.I18n")

const addMoreInfoTooltips = (/** @type {Internal.ItemTooltipEvent} */ event) => {
    const tooltipKey = "gregitas." + event.itemStack.getDescriptionId() + ".tooltip";

    if (!$Language.exists(tooltipKey)) return
    (!Client.isShiftDown()) && event.toolTip.add(Text.translate("gregitas.tooltip.holdForDesc", Text.translate("key.keyboard.left.shift").gray()).darkGray())
    
    if (!Client.isShiftDown()) return
    let translatedText = String(Text.translate(tooltipKey).getString())
    let lines = translatedText.split("\n")
    let colorCode = 0xAAAAAA
    

    for (let line in lines) {
        let words = lines[line]
        words = words.split(/<([0-9a-fA-F]{6})>/)
        let newLine = Text.of("")
        for (let word in words) {
          Client.tell(words[word])
            if (/[0-9a-fA-F]{6}/.test(words[word])) {
                colorCode = parseInt(words[word], 16)
                continue
            }
            
            newLine.append(Text.literal(words[word]).color(colorCode))
        }
        event.toolTip.add(Text.of(newLine))
    }
}
/*
If index for "gravitas.tooltip.holdForDesc" doesn't exist then ignore
If index does exist and player is holding shift change to the new description
if index doesn't exist but there is an entry, create a new index for it `event.toolTip.add(Text.translate("gravitas.tooltip.holdForDesc", "tooltip.keyShift"))`

*/