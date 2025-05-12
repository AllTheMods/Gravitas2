// priority 100

let registerCreateAdditionsSchemas = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
	const keys = global.schemas.keys
	const Component = (string, args) => event.components[string](args)
	
	const namespace = event.namespace("createaddition")

	// They hatin'
	let rollingSchema = new $RecipeSchema(
		Component("outputItem").key("result"),
		Component("inputItem").key("input")
	)
	namespace.register("rolling", rollingSchema)
	
	let liquidBurningSchema = new $RecipeSchema(
		Component("inputFluid").key("input"),
		Component("intNumber").key("burnTime"),
		Component("bool").key("superheated").defaultOptional()
	)
	namespace.register("liquid_burning", liquidBurningSchema)
}