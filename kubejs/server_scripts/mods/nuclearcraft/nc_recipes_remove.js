// priority 10

let ncRecipesRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Fuel crafting recipes registered under the minecraft: namespace — replaced by GT mixer bridge
  event.remove({ id: /^minecraft:nuclearcraft_fuel/ })

  // Machine crafting recipes — replaced by GT equivalents or removed from the pack
  event.remove({ id: "nuclearcraft:melter" })
  event.remove({ id: "nuclearcraft:fission_reactor_casing" })
  event.remove({ id: "nuclearcraft:fission_reactor_controller" })
  event.remove({ id: "nuclearcraft:fission_reactor_port" })
  event.remove({ id: "nuclearcraft:empty_heat_sink" })
  event.remove({ id: "nuclearcraft:fission_reactor_solid_fuel_cell" })
  event.remove({ id: "nuclearcraft:fusion_reactor_casing" })
  event.remove({ id: "nuclearcraft:basic_electromagnet" })
  event.remove({ id: "nuclearcraft:basic_rf_amplifier" })
  event.remove({ id: "nuclearcraft:fusion_reactor_connector" })
  event.remove({ id: "nuclearcraft:actuator" })
  event.remove({ id: "nuclearcraft:chassis" })
  event.remove({ id: "nuclearcraft:motor" })
  event.remove({ id: "nuclearcraft:coil_copper" })
  event.remove({ id: "nuclearcraft:plate_basic" })
  event.remove({ id: "nuclearcraft:plate_basic2" })

  // Alloy smelter recipes replaced by GT equivalents
  event.remove({ id: "nuclearcraft:alloy_smelter/dusts_steel-dusts_chromium" })
  event.remove({ id: "nuclearcraft:alloy_smelter/ingots_steel-ingots_chromium" })
  event.remove({ id: "nuclearcraft:alloy_smelter/ingots_iron-ingots_carbon_manganese" })
  event.remove({ id: "nuclearcraft:alloy_smelter/dusts_iron-dusts_carbon_manganese" })

  // Rock crusher recipes replaced or removed
  event.remove({ id: "nuclearcraft:rock_crusher/purpur_block" })
  event.remove({ id: "nuclearcraft:rock_crusher/granite" })
  event.remove({ id: "nuclearcraft:blast_iridium_dust" })

  // NC-related crafting recipes registered under the minecraft: namespace
  event.remove({ id: "minecraft:nuclearcraft_iridium_dust" })
  event.remove({ id: "minecraft:nuclearcraft_hsla_steel_dust" })
  event.remove({ id: "minecraft:nuclearcraft_tungsten_dust" })
}
