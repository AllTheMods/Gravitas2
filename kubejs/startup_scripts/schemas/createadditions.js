// priority 100

let registerCreateAdditionsSchemas = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
	const [comps, keys] = [global.schemas.components, global.schemas.keys]
	const Component = (string, args) => event.components[string](args)
	
	const namespace = event.namespace("createaddition")

	// They hatin'
	let rollingSchema = new $RecipeSchema(
		Component("outputItem").key("result"),
		Component("inputItem").key("input")
	)
	namespace.register("rolling", rollingSchema)
	
	let chargingSchema = new $RecipeSchema(
		Component("outputItem").key("result"),
		Component("inputItem").key("input"),
		Component("intNumber").key("energy"),
		Component("intNumber").key("maxChargeRate").defaultOptional()
	)
	namespace.register("charging", chargingSchema)
	
	let liquidBurningSchema = new $RecipeSchema(
		comps.create_fluid_ingredient.or(Component("inputFluid")).key("input"),
		Component("intNumber").key("burnTime"),
		Component("bool").key("superheated").defaultOptional()
	)
	namespace.register("liquid_burning", liquidBurningSchema)
}