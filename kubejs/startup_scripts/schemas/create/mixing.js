// priority 100

let registerCreateMixingSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const mixingSchema = new $RecipeSchema(
    keys.fluid_or_item_input_array,
    keys.fluid_or_item_output_array,
    keys.heat_requirement,
    keys.processing_time
  )
  event.namespace("create").register("mixing", mixingSchema)
}
