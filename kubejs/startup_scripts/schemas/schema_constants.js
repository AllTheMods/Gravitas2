// priority 200

const $RecipeSchema = Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.RecipeSchema")
const $RegistryComponent = Java.loadClass("dev.latvian.mods.kubejs.recipe.component.RegistryComponent")
const $EnumComponent = Java.loadClass("dev.latvian.mods.kubejs.recipe.component.EnumComponent")
const $InscriberProcessType = Java.loadClass("appeng.recipes.handlers.InscriberProcessType")
const $ForgeRule = Java.loadClass("net.dries007.tfc.common.capabilities.forge.ForgeRule")
const $HeatCondition = Java.loadClass("com.simibubi.create.content.processing.recipe.HeatCondition")

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
      let modifiers = from.getValue(recipe, schemaKeys.modifiers)
      let stack
      let childKeyNameArray = Utils.newList()
      let childKeyValueArray = Utils.newList()
      output.ifLeft((val) => !val.empty && recipe.setValue(schemaKeys.result_fluid, val))
        .ifRight((val) => {
          stack = val.empty ? undefined : val
        })
      stack && childKeyNameArray.add(schemaKeys.stack.name) && childKeyValueArray.add(stack)
      modifiers && childKeyNameArray.add(schemaKeys.modifiers.name) && childKeyValueArray.add(modifiers)
      !childKeyNameArray.isEmpty() && writeToParent(
        recipe,
        schemaKeys.result_item,
        childKeyNameArray,
        childKeyValueArray
      )
      continue
    }
    recipe.setValue(key, from.getValue(recipe, key))
  }
}

/** @type {Custom.RecipeSchemaFactory} */
function itemWithModifier(recipe, schemaType, keys, from) {
  const schemaKeys = global.schemas.keys
  for (const key of keys) {
    if (key == schemaKeys.modifiers) continue
    if (key == schemaKeys.stack) {
      let output = from.getValue(recipe, key)
      let modifiers = from.getValue(recipe, schemaKeys.modifiers)
      if (!modifiers) {
        writeToParent(recipe, schemaKeys.result_casting, [schemaKeys.stack.name], [output])
      } else {
        writeToParent(
          recipe,
          schemaKeys.result_casting,
          [schemaKeys.stack.name, schemaKeys.modifiers.name],
          [output, modifiers]
        )
      }
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

/** @type {Custom.RecipeSchemaFactory} */
function breakdownInput(recipe, schemaType, keys, from) {
  recipe.set("ingredients", $Stream.of(keys).reduce(Utils.newMap(),
    (acc, cur) => ["middle", "bottom", "top"].includes(cur.name)
      ? acc.putIfAbsent(cur.name, from.getValue(recipe, cur)) || acc
      : recipe.setValue(cur, from.getValue(recipe, cur)) && acc))
}
