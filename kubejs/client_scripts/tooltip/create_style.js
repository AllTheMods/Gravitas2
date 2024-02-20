const addExtraCreateTooltips = () => {
    const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier");
    const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
    const Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette");
    const AdditionalTooltips = [
        "gtceu:terminal"
    ]
    AdditionalTooltips.forEach((item) => {
        TooltipModifier.REGISTRY.register(
            item,
            new ItemDescription(item, Palette.STANDARD_CREATE)
        );
    })
}
