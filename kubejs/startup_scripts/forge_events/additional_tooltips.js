// priority 10

let parseFormatText = (/**@type {string}*/text, /** @type {Internal.ItemTooltipEvent} */ event) => {
    let lines = text.split("\n")
    let colorCode = 0xAAAAAA

    for (let line in lines) {
        let words = lines[line].split(/<([0-9a-fA-F]{6})>/)
        let newLine = Text.empty()
        for (let word in words) {
            if (/[0-9a-fA-F]{6}/.test(words[word])) {
                colorCode = parseInt(words[word], 16)
                continue
            }
            newLine.append(Text.literal(words[word]).color(colorCode))
        }
        event.toolTip.add(Text.of(newLine))
    }
}
const addMoreInfoTooltips = (/** @type {Internal.ItemTooltipEvent} */ event) => {
    if(Platform.isClientEnvironment()) return
    const $Language = Java.loadClass("net.minecraft.client.resources.language.I18n")
    const tooltipKeyShift = "gregitas." + event.itemStack.getDescriptionId() + ".shift";
    const tooltipKeyCtrl = "gregitas." + event.itemStack.getDescriptionId() + ".ctrl";
    const tooltipKeyAlt = "gregitas." + event.itemStack.getDescriptionId() + ".alt";

    if (!$Language.exists(tooltipKeyCtrl) && !$Language.exists(tooltipKeyShift) && !$Language.exists(tooltipKeyAlt)) return

    if (Client.isShiftDown() && $Language.exists(tooltipKeyShift)) {
        parseFormatText(String(Text.translate(tooltipKeyShift).getString()), event)
        return
    } else {
        $Language.exists(tooltipKeyShift) && event.toolTip.add(Text.translate("gregitas.tooltip.holdForDesc", Text.translate("key.keyboard.left.shift").gray()).darkGray())
    }
    
    if (Client.isCtrlDown() && $Language.exists(tooltipKeyCtrl)) {
        parseFormatText(String(Text.translate(tooltipKeyCtrl).getString()), event)
        return
    } else {
        $Language.exists(tooltipKeyCtrl) && event.toolTip.add(Text.translate("gregitas.tooltip.holdForDesc", Text.translate("key.keyboard.left.ctrl").gray()).darkGray())
    }
    
    if (Client.isAltDown() && $Language.exists(tooltipKeyAlt)) {
        parseFormatText(String(Text.translate(tooltipKeyAlt).getString()), event)
        return
    } else {
        $Language.exists(tooltipKeyAlt) && event.toolTip.add(Text.translate("gregitas.tooltip.holdForDesc", Text.translate("key.keyboard.left.alt").gray()).darkGray())
    }
}
/*
If index for "gravitas.tooltip.holdForDesc" doesn't exist then ignore
If index does exist and player is holding shift change to the new description
if index doesn't exist but there is an entry, create a new index for it `event.toolTip.add(Text.translate("gravitas.tooltip.holdForDesc", "tooltip.keyShift"))`

*/