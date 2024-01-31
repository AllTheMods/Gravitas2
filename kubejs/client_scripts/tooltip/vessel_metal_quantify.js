// priority 10

const $HeatCapability = Java.loadClass("net.dries007.tfc.common.capabilities.heat.HeatCapability").CAPABILITY
const $VesselCap = Java.loadClass("net.dries007.tfc.common.items.VesselItem$VesselCapability")
const $Helpers = Java.loadClass("net.dries007.tfc.util.Helpers")
const $ItemStackInventory = Java.loadClass("net.dries007.tfc.common.recipes.inventory.ItemStackInventory")

const addMetalRatioToVessels = (/** @type {Internal.ItemTooltipEventJS} */ event) => {
  event.addAdvanced(
    "#tfc:fired_vessels",
    (
      /** @type {Internal.ItemStack} */ item,
      /** @type {boolean} */ advanced,
      /** @type {Internal.List<Internal.Component>} */ components
    ) => {
      /** @type {Internal.VesselItem$VesselCapability} */
      let vesselCap
      /** @type {Internal.HeatingRecipe[]} */
      let recipes
      try {
        vesselCap = $Helpers.getCapability(item, $HeatCapability)
        if (vesselCap.mode() == "INVENTORY") {
          recipes = getPrivateField(vesselCap, "cachedRecipes")
          let fluidMap = Utils.newMap()
          for (let index = 0; index < vesselCap.slots; index++) {
            let recipe = recipes[index]
            let inventory = new $ItemStackInventory()
            if (recipe != null) {
              let stack = vesselCap.getStackInSlot(index)
              inventory.setStack(stack) // check if need to be a copy
              let fluidStack = recipe.assembleFluid(inventory)
              if (!fluidStack.isEmpty()) {
                fluidStack.setAmount(fluidStack.getAmount() * stack.getCount())
                let fluidId = fluidStack.fluid.arch$registryName()
                fluidMap.computeIfPresent(fluidId, (key, val) => fluidStack.amount + val)
                fluidMap.putIfAbsent(fluidId, fluidStack.amount)
              }
            }
          }
          let total = fluidMap.values().stream().reduce(0, (acc, cur) => acc + cur)
          fluidMap.forEach((fluid, amount) => {
            let percentil = (amount / total) * 100
            let newComponent = Text.gold(`(${percentil % 1 ? "~" : ""}${Math.floor(percentil)}%) `).append(Text.yellow(Fluid.of(fluid).fluidStack.name)).append(` - ${amount} mB`)
            components.add(components.length, newComponent)
          })
        }
      } catch (error) {
        console.log("Something went wrong with tooltips for vessels! Object:" + item, error)
      }
    }
  )
}

function getPrivateField(obj, field) {
  let classField = obj.class.getDeclaredField(field)
  classField.setAccessible(true)
  return classField.get(obj)
}
