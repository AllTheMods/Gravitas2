// priority 10

const itemTypes = ["ingots", "plates", "rods", "gears"]

//Id's of things to replace furnace -> crucible
const furnacent = [
  "integrateddynamics:crafting/part_machine_reader",
  "gtceu:shaped/multi_furnace",
  "integrateddynamics:crafting/part_machine_writer",
  "gtceu:shaped/steam_boiler_coal_bronze",
  "gtceu:shaped/steam_boiler_coal_steel",
  "railcraft:fluid_fueled_firebox",
  "enderio:alloy_smelter",
  "minecraft:blast_furnace",
  "gtceu:shaped/steam_furnace_bronze",
  "gtceu:shaped/steam_alloy_smelter_bronze",
  "gtceu:shaped/electric_blast_furnace",
  "enderio:stirling_generator",
  "railcraft:steam_oven",
  "ad_astra:recipes/fuel_refinery",
  "enderio:primitive_alloy_smelter",
  "ae2:network/blocks/energy_vibration_chamber",
  "railcraft:tunnel_bore",
  "ad_astra:recipes/coal_generator",
  "integrateddynamics:crafting/coal_generator",
]

let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")
  //remove furnace existance
  furnacent.forEach((furnace) => {
    event.replaceInput(furnace, "minecraft:furnace", "tfc:crucible")
  })

  //Create
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceOutput({ id: "minecraft:dried_kelp" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")

  //Railcraft
  event.replaceInput({ id: "railcraft:water_tank_siding" }, "minecraft:slimeball", "gtceu:sticky_resin")
  event.replaceInput({ id: "railcraft:steam_locomotive" }, "railcraft:blast_furnace_bricks", "gtceu:firebricks")
}
