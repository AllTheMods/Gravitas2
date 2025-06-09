// priority 100

let registerTFCGlassworkingSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
	const Component = (string, args) => event.components[string](args)
	const namespace = event.namespace("tfc")

	let glassworkingSchema = new $RecipeSchema(
		Component("outputItem").key("result"),
		Component("inputItem").key("batch"),
		Component("nonEmptyString").asArray().key("operations").optional([]).alwaysWrite()
	)
	namespace.register("glassworking", glassworkingSchema)
}