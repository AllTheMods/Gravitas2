// priority 10

let loadComponents = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  /**
   *
   * @param {"bool" | "inputItem" | "inputFluidOrItem" | "anyDoubleNumber" | "outputItemArray" | "outputFluidOrItem" | "entityTypeTag" | "outputBlock" | "nonEmptyString" | "character" | "seconds" | "outputFluidOrItemArray" | "otherBlockState" | "doubleNumber" | "anyFloatNumber" | "floatNumberRange" | "otherBlock" | "id" | "tag" | "anyLongNumber" | "outputItemIdWithCount" | "biomeTag" | "inputFluid" | "ticks" | "itemTag" | "anyString" | "minutes" | "outputBlockState" | "inputItemArray" | "doubleNumberRange" | "filteredString" | "inputBlock" | "inputBlockState" | "floatNumber" | "anyIntNumber" | "longNumber" | "intNumberRange" | "blockTag" | "inputFluidArray" | "outputFluid" | "outputFluidArray" | "unwrappedInputItemArray" | "outputItem" | "intNumber" | "time" | "longNumberRange" | "nonBlankString" | "inputFluidOrItemArray"} string
   * @param {{error: string, filter: Internal.Predicate<string>} | {min: number, max: number} | {registry: string, class?: string} | null} args
   * @returns {Internal.RecipeComponent} // not accurate but helps
   */
  const Component = (string, args) => event.components[string](args)

  global.schemas = {}
  global.schemas.keys = {}
  global.schemas.components = {}
  global.schemas.constants = {}
  global.schemas.constants.traits_set = Utils.newList()
  global.schemas.constants.traits_set.addAll([
    "tfc:salted",
    "tfc:pickled",
    "tfc:brined",
    "tfc:preserved",
    "tfc:vinegar",
    "tfc:charcoal_grilled",
    "tfc:wood_grilled",
    "tfc:burnt_to_a_crisp",
    "tfcchannelcasting:romantic",
    "tfcchannelcasting:scary",
    "tfcchannelcasting:festive"
  ])
  global.schemas.constants.modifiers_set = Utils.newList()
  global.schemas.constants.modifiers_set.addAll([
    "tfc:add_bait_to_rod",
    "tfc:copy_food",
    "tfc:copy_forging_bonus",
    "tfc:copy_heat",
    "tfc:copy_input",
    "tfc:empty_bowl"
  ])

  /** @type {[Internal.Map<string,Internal.RecipeComponent>, Internal.Map<string,Internal.RecipeComponent>]} */
  const [comps, keys] = [global.schemas.components, global.schemas.keys]
  const builder = Component("bool").builder
  comps.trait = Component("filteredString", {
    error: `invalid trait, valid traits are: ${global.schemas.constants.traits_set}`,
    filter: (string) => global.schemas.constants.traits_set.contains(string)
  })

  comps.modifier = Component("filteredString", {
    error: `invalid type, valid types are: ${global.schemas.constants.modifiers_set}`,
    filter: (string) => global.schemas.constants.modifiers_set.contains(string)
  })

  comps.add_trait = Component("filteredString", {
    error: `invalid type, valid type is: "tfc:add_trait"`,
    filter: (string) => string == "tfc:add_trait"
  })

  comps.tfccc_conditional = Component("filteredString", {
    error: `invalid type, valid type is: "tfcchannelcasting:conditional"`,
    filter: (string) => string == "tfcchannelcasting:conditional"
  })

  comps.tfccc_date_range = Component("filteredString", {
    error: `invalid type, valid type is: "tfcchannelcasting:date_range"`,
    filter: (string) => string == "tfcchannelcasting:date_range"
  })

  comps.tfccc_food_data = Component("filteredString", {
    error: `invalid type, valid type is: "tfcchannelcasting:set_food_data"`,
    filter: (string) => string == "tfcchannelcasting:set_food_data"
  })

  keys.add_trait = comps.add_trait.key("type")
  keys.trait = comps.trait.key("trait")
  comps.add_trait_modifier = builder(keys.add_trait, keys.trait)

  comps.add_heat = Component("filteredString", {
    error: `invalid type, valid type is: "tfc:add_heat"`,
    filter: (string) => string == "tfc:add_heat"
  })

  keys.tfcc_date_condition = builder(
    comps.tfccc_date_range.key("type"),
    Component("intNumberRange", { min: 1 }).key("min_day"),
    Component("intNumberRange", { min: 1 }).key("max_day"),
    Component("intNumberRange", { min: 1, max: 12 }).key("max_month"),
    Component("intNumberRange", { min: 1, max: 12 }).key("min_month")
  ).key("condition")

  comps.tfcc_food_data_map = builder(
    comps.tfccc_food_data.key("type"),
    Component("intNumber").key("hunger").optional(4).alwaysWrite(),
    Component("floatNumber").key("saturation").optional(0).alwaysWrite(),
    Component("floatNumber").key("water").optional(0).alwaysWrite(),
    Component("floatNumber").key("decay_modifier").optional(1).alwaysWrite(),
    Component("floatNumber").key("grain").optional(0).alwaysWrite(),
    Component("floatNumber").key("vegetables").optional(0).alwaysWrite(),
    Component("floatNumber").key("fruit").optional(0).alwaysWrite(),
    Component("floatNumber").key("protein").optional(0).alwaysWrite(),
    Component("floatNumber").key("dairy").optional(0).alwaysWrite()
  )

  keys.add_heat = comps.add_heat.key("type")
  keys.temperature = Component("intNumber").key("temperature")
  comps.add_heat_modifier = builder(keys.add_heat, keys.temperature)

  keys.inner_modifiers = comps.add_trait_modifier
    .or(comps.modifier.or(comps.add_heat_modifier.or(comps.tfcc_food_data_map)))
    .asArray()
    .key("modifiers")
    .defaultOptional()

  comps.tfcc_conditional = builder(
    comps.tfccc_conditional.key("type"),
    keys.tfcc_date_condition,
    keys.inner_modifiers,
    keys.inner_modifiers.component.key("else_modifiers")
  )

  keys.modifiers = comps.add_trait_modifier
    .or(comps.modifier.or(comps.add_heat_modifier.or(comps.tfcc_conditional.or(comps.tfcc_food_data_map))))
    .asArray()
    .key("modifiers")
    .defaultOptional()
  keys.stack = Component("outputItem").key("stack").defaultOptional()

  comps.item_stack_provider = Component("outputItem").or(builder(keys.stack, keys.modifiers).outputRole())
  keys.result_item = comps.item_stack_provider.key("result_item").defaultOptional().preferred("resultItem").allowEmpty()

  keys.input_item = Component("inputItem").key("ingredient")
  keys.input_item_anvil = Component("inputItem").key("input")
  keys.tier_anvil = Component("intNumberRange", { min: -1, max: 6 }).key("tier").optional(-1).alwaysWrite()
  keys.rules_anvil = new $EnumComponent($ForgeRule).asArray().key("rules")
  keys.apply_forge_bonus = Component("bool").key("apply_forging_bonus").preferred("applyBonus").defaultOptional()
  keys.result_fluid = Component("outputFluid").key("result_fluid").defaultOptional().preferred("resultFluid").allowEmpty()
  keys.use_durability = Component("bool").key("use_durability").optional(false).preferred("useDurability")
  keys.chance = Component("floatNumberRange", { min: 0, max: 1 }).key("chance").optional(1)
  keys.fluid_or_item_output = Component("outputFluidOrItem").key("result")
  comps.fluid_tag = Component("tag", {
    registry: "fluid",
    class: Fluid.of("empty").getClass().getSuperclass().getName()
  })
  keys.fluid_tag = comps.fluid_tag.key("tag").defaultOptional()
  comps.fluid_input_tag = builder(keys.fluid_tag).inputRole()
  keys.fluid_input = Component("inputFluid").or(comps.fluid_input_tag).key("ingredient")
  keys.fluid_amount = Component("intNumber").key("amount")
  keys.fluid_stack_ingredient = builder(keys.fluid_input, keys.fluid_amount).inputRole().key("fluid")
  keys.break_chance = keys.chance.component.key("break_chance").preferred("breakChance").optional(1).alwaysWrite()
  comps.item_registry = new $RegistryComponent(Utils.getRegistry("item"))
  comps.item = builder(comps.item_registry.key("item"))
  comps.item_tag = builder(Component("itemTag").key("tag"))
  keys.mold = comps.item
    .or(comps.item_tag)
    .key("mold")
    .optional(Utils.newMap().of("item", "tfc:ceramic/ingot_mold"))
    .alwaysWrite()
  keys.result_casting = keys.result_item.component.key("result")
  keys.fluid_or_item_output_array = comps.item_stack_provider.or(Component("outputFluid")).asArray().key("results")
  keys.processing_time = Component("intNumber").key("processingTime").defaultOptional()
  keys.heat_requirement = new $EnumComponent($HeatCondition).key("heatRequirement").defaultOptional()
  comps.create_fluid_ingredient = builder(comps.fluid_tag.key("fluidTag"), keys.fluid_amount)
  keys.fluid_or_item_input_array = comps.create_fluid_ingredient.or(Component("inputFluid").or(Component("inputItem"))).asArray().key("ingredients")

  keys.ingredient = Component("inputItem").key("ingredient")
  keys.inscriber_bottom = Component("inputItem").key("bottom").defaultOptional().allowEmpty()
  keys.inscriber_middle = Component("inputItem").key("middle")
  keys.inscriber_top = Component("inputItem").key("top").defaultOptional().allowEmpty()
  keys.inscriber_mode = new $EnumComponent($InscriberProcessType).key("mode").optional("inscribe").alwaysWrite()
  keys.result = Component("outputItem").key("result")
  keys.inscriber_ingredients = builder(keys.inscriber_bottom, keys.inscriber_middle, keys.inscriber_top).key("ingredients")
}
