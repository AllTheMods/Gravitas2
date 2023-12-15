// priority 100

let registerTFCHeatingSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const heatingSchema = new $RecipeSchema(
    keys.input_item,
    keys.temperature,
    keys.result_item,
    keys.result_fluid,
    keys.use_durability,
    keys.chance
  )
    .constructor(keys.input_item, keys.temperature)
    .constructor(fluidOrItem, keys.input_item, keys.temperature, keys.fluid_or_item_output)
    .constructor(
      fluidOrItemWithModifier,
      keys.input_item,
      keys.temperature,
      keys.fluid_or_item_output,
      keys.modifiers
    )
    .constructor(
      fluidOrItemWithModifier,
      keys.input_item,
      keys.temperature,
      keys.fluid_or_item_output,
      keys.modifiers,
      keys.chance,
      keys.use_durability
    )
  event.namespace("tfc").register("heating", heatingSchema)
}

/** @type {Custom.RecipeSchemaFactory} */
function fluidOrItem(recipe, schemaType, keys, from) {
  const schemaKeys = global.schemas.keys
  for (const key of keys) {
    if (key == schemaKeys.fluid_or_item_output) {
      let output = from.getValue(recipe, key)
      output.ifLeft((val) => recipe.setValue(schemaKeys.result_fluid, val))
      output.ifRight((val) => writeToParent(recipe, schemaKeys.result_item, [schemaKeys.stack.name], [val]))
      continue
    }
    recipe.setValue(key, from.getValue(recipe, key))
  }
}

/** @type {Custom.RecipeSchemaFactory} */
function fluidOrItemWithModifier(recipe, schemaType, keys, from) {
  const schemaKeys = global.schemas.keys
  for (const key of keys) {
    if (key == schemaKeys.modifiers) continue
    if (key == schemaKeys.fluid_or_item_output) {
      let output = from.getValue(recipe, key)
      output.ifLeft((val) => recipe.setValue(schemaKeys.result_fluid, val))
      output.ifRight((val) => {
        let modifiers = from.getValue(recipe, schemaKeys.modifiers)
        if (!modifiers) {
          writeToParent(recipe, schemaKeys.result_item, [schemaKeys.stack.name], [val])
        } else {
          writeToParent(
            recipe,
            schemaKeys.result_item,
            [schemaKeys.stack.name, schemaKeys.modifiers.name],
            [val, modifiers]
          )
        }
      })
      continue
    }
    recipe.setValue(key, from.getValue(recipe, key))
  }
}

function writeToParent(recipe, parentKey, childKeyNameArray, childKeyValueArray) {
  const parentCV = recipe.getAllValueMap().get(parentKey.name)
  const childMap = Utils.newMap()
  for (let index = 0; index < childKeyNameArray.length; index++) {
    childMap.put(childKeyNameArray[index], childKeyValueArray[index])
  }
  const map = Utils.newMap().of(parentKey.name, childMap)
  parentKey.component.readFromMap(recipe, parentCV, map)
  parentCV.write()
}
