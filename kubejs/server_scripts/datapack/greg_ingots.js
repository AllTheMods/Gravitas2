// priority 10

let addGregTechIngotsToTFC = (/** @type {Internal.DataPackEventJS} */ event) => {
  /**
   * @param {string} item
   * @param {number} heat - Heat Capacity
   * @param {number} [forgTemp] - Optional: Forging Temperature
   * @param {number} [weldTemp] - Optional: Welding Temperature
   */
  let addTFCHeatCapability = (item, heat, forgTemp, weldTemp) => {
    /** @type {Internal.LinkedHashMap} */
    let json = JsonIO.toObject({ ingredient: Item.of(item).toJson(), heat_capacity: heat })
    forgTemp && json.put("forging_temperature", forgTemp)
    weldTemp && json.put("welding_temperature", weldTemp)
    let itemLocation = Utils.id(item)
    event.addJson(`${itemLocation.namespace}:tfc/item_heats/metal/${itemLocation.path}.json`, json)
  }

  /**
   * @param {string} item
   * @param {"tiny"|"very_small"|"small"|"normal"|"large"|"very_large"|"huge"} size
   * @param {"very_light"|"light"|"medium"|"heavy"|"very_heavy"} weight
   */
  let addTFCSize = (item, size, weight) => {
    /** @type {Internal.LinkedHashMap} */
    let json = JsonIO.toObject({ ingredient: Item.of(item).toJson(), size: size, weight: weight })
    let itemLocation = Utils.id(item)
    event.addJson(`${itemLocation.namespace}:tfc/item_sizes/${itemLocation.path}.json`, json)
  }

  /**
   *
   * @param {string} fluid
   * @param {number} tier
   * @param {number} meltTemp
   * @param {number} specificHeatCap
   * @param {string} ingots
   * @param {string} sheets
   */
  let addTFCMetalFluid = (fluid, tier, meltTemp, specificHeatCap, ingots, sheets) => {
    /** @type {Internal.LinkedHashMap} */
    let json = JsonIO.toObject({
      tier: tier,
      fluid: fluid,
      melt_temperature: meltTemp,
      specific_heat_capacity: specificHeatCap,
      ingots: Ingredient.of(ingots).toJson(),
      sheets: Ingredient.of(sheets).toJson()
    })
    let itemLocation = Utils.id(fluid)
    event.addJson(`${itemLocation.namespace}:tfc/metals/${itemLocation.path}.json`, json)
  }

  let addTFCHeatingRecipe = (item, fluid, meltTemp, amount) => {
    /** @type {Internal.LinkedHashMap} */
    let json = JsonIO.toObject({
      type: "tfc:heating",
      ingredient: Ingredient.of(item).toJson(),
      result_fluid: {
        fluid: fluid,
        amount: amount
      },
      temperature: meltTemp
    })
    let itemLocation = Utils.id(item)
    event.addJson(`tfc:recipes/heating/metal/${itemLocation.path}.json`, json)
  }

  let addTFCCastingRecipe = (item, fluid, amount) => {
    /** @type {Internal.LinkedHashMap} */
    let json = JsonIO.toObject({
      type: "tfc:casting",
      mold: {
        item: "tfc:ceramic/ingot_mold"
      },
      fluid: {
        ingredient: fluid,
        amount: amount
      },
      result: {
        item: item
      },
      break_chance: 0.1
    })
    let itemLocation = Utils.id(item)
    event.addJson(`tfc:recipes/casting/${itemLocation.path}.json`, json)
  }

  gtceuIngots.forEach((id) => {
    let fluid = Utils.id("gtceu:" + id)
    let ingot = Utils.id("gtceu:" + id + "_ingot")
    let temp = $FluidHelper.getTemperature(Fluid.of(fluid)) - 273 // Kelvin to Celcius
    temp = Math.max(230, temp) // set at minimum temp like Tin
    addTFCHeatCapability(ingot.toString(), 2.857, Math.floor(temp * 0.6), Math.floor(temp * 0.8))
    addTFCMetalFluid(fluid.toString(), 3, temp, 0.0085, "#forge:ingots/" + id, "#forge:plates/" + id)
    if (temp > 1540) return // skip if temp is over Red/Blue Steel
    addTFCHeatingRecipe(ingot.toString(), fluid.toString(), temp, 144)
    addTFCCastingRecipe(ingot.toString(), fluid.toString(), 144)
  })

  let oreToMolten = [
    {
      ore: "gtceu:raw_lead",
      liquid: "gtceu:lead",
      amount: 72
    },
    {
      ore: "gtceu:raw_silver",
      liquid: "tfc:metal/silver",
      amount: 72
    },
    {
      ore: "gtceu:raw_tin",
      liquid: "tfc:metal/tin",
      amount: 72
    },
    {
      ore: "gtceu:raw_hematite",
      liquid: "tfc:metal/cast_iron",
      amount: 72
    },
    {
      ore: "gtceu:raw_goethite",
      liquid: "tfc:metal/cast_iron",
      amount: 72
    },
    {
      ore: "gtceu:raw_cassiterite",
      liquid: "tfc:metal/tin",
      amount: 144
    },
    {
      ore: "gtceu:raw_cassiterite_sand",
      liquid: "tfc:metal/tin",
      amount: 144
    },
    {
      ore: "gtceu:raw_chalcopyrite",
      liquid: "tfc:metal/copper",
      amount: 72
    },
    {
      ore: "gtceu:raw_chalcopyrite",
      liquid: "tfc:metal/copper",
      amount: 72
    },
    {
      ore: "gtceu:raw_galena",
      liquid: "gtceu:lead",
      amount: 72
    },
    {
      ore: "gtceu:raw_garnierite",
      liquid: "tfc:metal/nickel",
      amount: 72
    },
    {
      ore: "gtceu:raw_magnetite",
      liquid: "tfc:metal/cast_iron",
      amount: 72
    },
    {
      ore: "gtceu:raw_pyrite",
      liquid: "tfc:metal/cast_iron",
      amount: 72
    },
    {
      ore: "gtceu:raw_sphalerite",
      liquid: "tfc:metal/zinc",
      amount: 72
    },
    {
      ore: "gtceu:raw_ctetrahedrite",
      liquid: "tfc:metal/copper",
      amount: 72
    },
    {
      ore: "gtceu:raw_chalcopyrite",
      liquid: "tfc:metal/copper",
      amount: 72
    },
    {
      ore: "gtceu:raw_yellow_limonite",
      liquid: "tfc:metal/cast_iron",
      amount: 72
    },
    {
      ore: "gtceu:raw_bornite",
      liquid: "tfc:metal/copper",
      amount: 72
    },
    {
      ore: "gtceu:raw_chalcocite",
      liquid: "tfc:metal/copper",
      amount: 72
    },
    {
      ore: "gtceu:raw_pentlandite",
      liquid: "tfc:metal/nickel",
      amount: 72
    },
    {
      ore: "gtceu:raw_malachite",
      liquid: "tfc:metal/copper",
      amount: 72
    },
    {
      ore: "gtceu:raw_basaltic_mineral_sand",
      liquid: "tfc:metal/cast_iron",
      amount: 72
    },
    {
      ore: "gtceu:raw_granitic_mineral_sand",
      liquid: "tfc:metal/cast_iron",
      amount: 72
    }
  ]

  oreToMolten.forEach((ore) => {
    let temp = $FluidHelper.getTemperature(Fluid.of(ore.liquid)) - 273 // Kelvin to Celcius
    temp = Math.max(230, temp)
    addTFCHeatCapability(ore.ore, 2.857)
    addTFCHeatingRecipe(ore.ore, ore.liquid, temp, ore.amount)
  })

  addTFCHeatCapability("gtceu:double_invar_ingot", 2.857, 921, 1228)
  addTFCHeatCapability("gtceu:wrought_iron_bolt", 1.429, 921, 1228)

  addTFCSize("gtceu:double_invar_ingot", "large", "heavy")
}
