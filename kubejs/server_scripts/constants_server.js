// priority 100

const $IngotPileBlock = Java.loadClass("net.dries007.tfc.common.blocks.devices.IngotPileBlock")
const $Integer = Java.loadClass("java.lang.Integer")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $FluidHelper = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidHelper")
const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
const RockBreakerCondition = Java.loadClass('com.gregtechceu.gtceu.common.recipe.RockBreakerCondition')
const $CraftingComponent = Java.loadClass('com.gregtechceu.gtceu.data.recipe.CraftingComponent')

let enderTC = [
    {
        id: 'white',
        colour: '000'
    },
    {
        id: 'orange',
        colour: '111'
    },
    {
        id: 'magenta',
        colour: '222'
    },
    {
        id: 'light_blue',
        colour: '333'
    },
    {
        id: 'yellow',
        colour: '444'
    },
    {
        id: 'lime',
        colour: '555'
    },
    {
        id: 'pink',
        colour: '666'
    },
    {
        id: 'gray',
        colour: '777'
    },
    {
        id: 'light_gray',
        colour: '888'
    },
    {
        id: 'cyan',
        colour: '999'
    },
    {
        id: 'purple',
        colour: 'AAA'
    },
    {
        id: 'blue',
        colour: 'BBB'
    },
    {
        id: 'brown',
        colour: 'CCC'
    },
    {
        id: 'green',
        colour: 'DDD'
    },
    {
        id: 'red',
        colour: 'EEE'
    },
    {
        id: 'black',
        colour: 'FFF'
    }
]






