// priority 10

const replaceTFCHeatingAndCasting = (/** @type {Internal.RecipesEventJS} */ event) => {
  const convertMap = {
    6: 9,
    10: 16,
    15: 24,
    35: 48,
    25: 36,
    50: 72,
    40: 58,
    60: 86,
    90: 128,
    20: 24,
    30: 48,
    70: 96
  }
    

  let convertFluidValues = (oldValue) => {
    let newValue = convertMap[oldValue]
    if (!newValue) {
      return oldValue % 25 ? oldValue : oldValue * 1.44
    } else return newValue
  }
  let convertFluidToKJS = (inputFluid) => {
    if (inputFluid instanceof $CreateInputFluid) {
      return inputFluid.copy(inputFluid.getAmount())
    }
    return inputFluid
  }
  let convertFluidsFromArray = (array) => {
    var newVal;
    return array
      .stream()
      .map((val) => (
        newVal = convertFluidToKJS(val),
        newVal instanceof $UnboundFluidStackJS ? newVal.setAmount(convertFluidValues(newVal.amount)) || newVal : newVal))
      .toList()
  }

  event.forEachRecipe({ type: "tfc:heating" }, (/** @type {Special.Recipes.HeatingTfc}**/ r) => {
    let fluid = r.allValueMap.result_fluid.value
    if (!fluid) return
    fluid.setAmount(r.getId().includes("_sheet") ? convertFluidValues(fluid.amount) / 2 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("boots") ? convertFluidValues(fluid.amount) / 2 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("greaves") ? convertFluidValues(fluid.amount) / 2 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("chestplate") ? convertFluidValues(fluid.amount) / 4 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("fishing_rod") ? convertFluidValues(fluid.amount) / 4 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("helmet") ? convertFluidValues(fluid.amount) / 2 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("fish_hook") ? convertFluidValues(fluid.amount) / 4 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("bars") ? convertFluidValues(fluid.amount) / 2 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("shingles") ? convertFluidValues(fluid.amount) / 16 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("bars") ? convertFluidValues(fluid.amount) / 2 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("tiles") ? convertFluidValues(fluid.amount) / 16 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("stairs") ? convertFluidValues(fluid.amount) / 16 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("slab") ? convertFluidValues(fluid.amount) / 8 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("pipe") ? convertFluidValues(fluid.amount) / 4 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("block") ? convertFluidValues(fluid.amount) / 8 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("tuyere") ? convertFluidValues(fluid.amount) / 2 : convertFluidValues(fluid.amount))
    fluid.setAmount(r.getId().includes("flask") ? convertFluidValues(fluid.amount) / 4 : convertFluidValues(fluid.amount))

    r.resultFluid(fluid)
  })

  event.forEachRecipe({ id: /^woodencog:mixing/ }, (/** @type {Special.Recipes.MixingCreate}**/ r) => {
    if (r.getId().includes("/barrel")) return
    let ingredients = unwrapValue(r.get("ingredients"))
    let modifiedIngredients = convertFluidsFromArray(ingredients)
    r.ingredients(modifiedIngredients)
    let results = unwrapValue(r.get("results"))
    let modifiedResults = convertFluidsFromArray(results)
    r.results(modifiedResults)
  })

  event.forEachRecipe({ type: "woodencog:filling" }, (/** @type {Special.Recipes.FillingWoodencog}**/ r) => {
    let ingredients = unwrapValue(r.get("ingredients"))
    let modifiedIngredients = convertFluidsFromArray(ingredients)
    r.ingredients(modifiedIngredients)
  })

  event.forEachRecipe({ type: "tfc:casting" }, (/** @type {Special.Recipes.CastingTfc}**/ r) => {
    let fluidIngredient = unwrapValue(r.get("fluid"))
    fluidIngredient.computeIfPresent("amount", (key, val) => convertFluidValues(val))
    r.fluid(fluidIngredient)
  })
// Immersive Geo ores fix 

  global.immGeoOres.forEach((ore) => {
    event.custom({
      type: "tfc:heating",
      ingredient: {
        item: `immersivegeology:poor_ore_${ore.ore}`
      },
      result_fluid: {
        fluid: `${ore.fluid}`,
        amount: 16
      },
      temperature: global.immGeoOresMelts[ore.ore]
    }).id(`gregitas:tfc/heating/immersive_geology/poor_${ore.ore}`)
  
  event.custom({
      type: "tfc:heating",
      ingredient: {
        item: `immersivegeology:normal_ore_${ore.ore}`
      },
      result_fluid: {
        fluid: `${ore.fluid}`,
        amount: 36
      },
      temperature: global.immGeoOresMelts[ore.ore]
    }).id(`gregitas:tfc/heating/immersive_geology/normal_${ore.ore}`)
  
  event.custom({
      type: "tfc:heating",
      ingredient: { item: `immersivegeology:rich_ore_${ore.ore}` },
      result_fluid: {
        fluid: `${ore.fluid}`,   
        amount: 48
      },
      temperature: global.immGeoOresMelts[ore.ore]
    }).id(`gregitas:tfc/heating/immersive_geology/rich_${ore.ore}`)
  
 
  })



  //Aluminum heating Fix
  event.custom({
    type: "tfc:heating",
    ingredient: {
      item: 'gregitas:double_aluminium_ingot'
    },
    result_fluid: {
      fluid: "gtceu:aluminium",
      amount: 288
    },
    temperature: 650
  })

  // Cast Iron part heating recipes
  const castIronData = global.metalHeatingData["cast_iron"]
  if (castIronData) {
    event.remove({ id: 'tfc:heating/metal/sheet/cast_iron' })
    event.remove({ id: 'tfc:heating/metal/rod/cast_iron' })

    // Sheet: 144 mb (1 ingot worth)
    if (Item.exists('tfc:metal/sheet/cast_iron')) {
      event.custom({
        type: "tfc:heating",
        ingredient: { item: 'tfc:metal/sheet/cast_iron' },
        result_fluid: { fluid: castIronData.fluid, amount: 144 },
        temperature: castIronData.temp
      }).id('kubejs:tfc/heating/cast_iron_sheet')
    }

    // Rod: 72 mb (1/2 ingot worth)
    if (Item.exists('tfc:metal/rod/cast_iron')) {
      event.custom({
        type: "tfc:heating",
        ingredient: { item: 'tfc:metal/rod/cast_iron' },
        result_fluid: { fluid: castIronData.fluid, amount: 72 },
        temperature: castIronData.temp
      }).id('kubejs:tfc/heating/cast_iron_rod')
    }
  }
}
