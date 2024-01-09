// priority 100

let registerAe2InscriberSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const inscriberSchema = new $RecipeSchema(keys.result, keys.inscriber_ingredients, keys.inscriber_mode)
    .addConstructor(breakdownInput, keys.result, keys.inscriber_middle)
    .addConstructor(breakdownInput, keys.result, keys.inscriber_middle, keys.inscriber_top)
    .addConstructor(breakdownInput, keys.result, keys.inscriber_middle, keys.inscriber_top, keys.inscriber_bottom)
  event.namespace("ae2").register("inscriber", inscriberSchema)
}

/*

  Tests used:

  ae2.inscriber("acacia_boat", "#ae2:all_certus_quartz")
    .id("gregitas:inscriber/test/0")
  ae2.inscriber("oak_boat", "minecraft:stone", "minecraft:apple").mode("inscribe")
    .id("gregitas:inscriber/test/1")
  ae2.inscriber("dark_oak_boat", "minecraft:carrot", "minecraft:beef", "minecraft:cooked_rabbit").mode("press")
    .id("gregitas:inscriber/test/2")

*/
