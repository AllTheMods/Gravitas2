// priority 100

let registerAe2ChargerSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
    const keys = global.schemas.keys
    const chargerSchema = new $RecipeSchema(
      keys.input_item,
      keys.result_casting
    )
    event.namespace("ae2").register("charger", chargerSchema)
  }