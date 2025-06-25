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

	let curvingSchema = new $RecipeSchema(
		output_item_array_results,
		input_item_array_ingredients,
		Component("nonEmptyString").key("itemAsHead").optional(""),
		Component("intNumberRange", { min: 1, max: 4 }).key("mode").optional(1),
		Component("intNumber").key("headDamage").optional(0)
	)
	namespace.register("curving", curvingSchema)

	let hammeringSchema = new $RecipeSchema(
		output_item_array_results,
		input_item_array_ingredients,
		keys.processing_time,
		Component("intNumber").key("hammerBlows").optional(1),
		Component("nonEmptyString").key("anvilBlock").optional("")
	)
	namespace.register("hammering", hammeringSchema)
	
	let compressorSchema = new $RecipeSchema(
		keys.fluid_or_item_output_array,
		keys.fluid_or_item_input_array,
		keys.processing_time,
		keys.heat_requirement,
		Component("intNumber").key("secondaryFluidInput").optional(-1),
		Component("intNumber").key("secondaryFluidOutput").optional(-1)
	)
	namespace.register("vacuumizing", compressorSchema)
	namespace.register("pressurizing", compressorSchema)

}