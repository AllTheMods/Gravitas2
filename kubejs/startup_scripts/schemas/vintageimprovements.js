// priority 100

let registerVintageImprovementsSchemas = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
	const keys = global.schemas.keys
	const Component = (string, args) => event.components[string](args)
	
	const namespace = event.namespace("vintageimprovements")
	
	let input_item_array_ingredients = Component("inputItem").asArray().key("ingredients")
	let output_item_array_results = Component("outputItem").asArray().key("results")

	let vibratingSchema = new $RecipeSchema(
		output_item_array_results,
		input_item_array_ingredients,
		keys.processing_time
	)
	namespace.register("vibrating", vibratingSchema)

	let polishingSchema = new $RecipeSchema(
		output_item_array_results,
		input_item_array_ingredients,
		keys.processing_time,
		Component("intNumberRange", { min: 0, max: 3 }).key("speedLimits").optional(0)
	)
	namespace.register("polishing", polishingSchema)

	let turningSchema = new $RecipeSchema(
		output_item_array_results,
		input_item_array_ingredients,
		keys.processing_time
	)
	namespace.register("turning", turningSchema)

	let centrifugationSchema = new $RecipeSchema(
		keys.fluid_or_item_output_array,
		keys.fluid_or_item_input_array,
		keys.processing_time,
		Component("intNumberRange", { min: 0, max: 256 }).key("minimalRPM").optional(0)
	)
	namespace.register("centrifugation", centrifugationSchema)

}