// priority 10
const $CreativeModeInventoryScreen = Java.loadClass(
  "net.minecraft.client.gui.screens.inventory.CreativeModeInventoryScreen"
)

const addModNameTooltipToCreativeTab = (/** @type {Internal.ItemTooltipEventJS} */ event) => {
  event.addAdvancedToAll(
    (
      /** @type {Internal.ItemStack} */ item,
      /** @type {boolean} */ advanced,
      /** @type {Internal.List<Internal.Component>} */ components
    ) => {
      if (Client.screen instanceof $CreativeModeInventoryScreen) {
        for (let slot = 0; slot <= 8; slot++) {
          if (Client.player.inventory.getStackInSlot(slot).equals(item)) {
            components.add(Text.blue(Platform.getInfo(item.mod).name).italic())
          }
        }
      }
    }
  )
}
