// priority 100

let registerCreateDieselGeneratorsSchemas = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
	const [comps, keys] = [global.schemas.components, global.schemas.keys]
	const Component = (string, args) => event.components[string](args)
	
	const namespace = event.namespace("createdieselgenerators")

	let distillationSchema = new $RecipeSchema(
		comps.create_fluid_ingredient.or(Component("inputFluid")).asArray().key("ingredients"),
		Component("outputFluid").asArray().key("results"),
		keys.processing_time,
		keys.heat_requirement
	)
	namespace.register("distillation", distillationSchema)
	
	let basinWithLidSchema = new $RecipeSchema(
		keys.fluid_or_item_output_array,
		keys.fluid_or_item_input_array,
		keys.processing_time,
		keys.heat_requirement 
	)
	namespace.register("basin_fermenting", basinWithLidSchema)
}
