// priority 100

let registerTFCCastingSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const castingSchema = new $RecipeSchema(keys.fluid_stack_ingredient, keys.result_casting, keys.break_chance, keys.mold)
    .constructor(keys.fluid_stack_ingredient, keys.result_casting)
    .constructor(keys.fluid_stack_ingredient, keys.result_casting, keys.mold)
    .constructor(keys.fluid_stack_ingredient, keys.result_casting, keys.mold, keys.break_chance)

  event.namespace("tfc").register("casting", castingSchema)
}
