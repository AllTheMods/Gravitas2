// priority 100

let registerTFCAnvilSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const anvilSchema = new $RecipeSchema(
    keys.input_item_anvil,
    keys.rules_anvil,
    keys.result_casting,
    keys.tier_anvil,
    keys.apply_forge_bonus
  )

  event.namespace("tfc").register("anvil", anvilSchema)
}
