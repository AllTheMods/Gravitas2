// priority 100

let registerAe2ChargerSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const chargerSchema = new $RecipeSchema(keys.result, keys.ingredient)
  event.namespace("ae2").register("charger", chargerSchema)
}

/*

  Tests used:

  ae2.charger("gtceu:netherrack_plutonium_ore", "#create:sandpaper")
    .id("gregitas:charger/test/0")

*/
