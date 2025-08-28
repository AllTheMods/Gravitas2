// priority 100

let registerCreateNewAgeSchemas = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
	const Component = (string, args) => event.components[string](args)
	const namespace = event.namespace("create_new_age")

	let energizingSchema = new $RecipeSchema(
		Component("outputItem").asArray().key("results"),
		Component("inputItem").asArray().key("ingredients"),
		Component("intNumber").key("energy_needed")
	)
	namespace.register("energising", energizingSchema)
}