// priority 100

let registerWoodencogFillingSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const fillingSchema = new $RecipeSchema(
    keys.fluid_or_item_output_array,
    keys.fluid_or_item_input_array
  )
  event.namespace("woodencog").register("filling", fillingSchema)
}
