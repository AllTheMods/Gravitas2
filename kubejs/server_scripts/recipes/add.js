// priority 10

let recipeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    // Loop material registry
    GTRegistries.MATERIALS.forEach((material) => {
        // Register rod recipes, if material has rod
        if (material.hasFlag(GTMaterialFlags.GENERATE_ROD) && !m.hasProperty($PropertyKey.GEM)) {
            event.custom({
              type: "tfc:anvil",
              input: {tag: "forge:ingots/" + material.name},
              result: {
                item: `gtceu:${material.name}_rod`,
                count: 2,
              },
              tier: 3,
              rules: ["bend_last", "draw_second_last", "draw_third_last"],
            })
            
            // Register screw recipes, if material has screw
            if (material.hasFlag(GTMaterialFlags.GENERATE_BOLT_SCREW)) {
                event.custom({
                    type: "tfc:welding",
                    first_input: {item: `gtceu:${material.name}_bolt`},
                    second_input: {item: `gtceu:${material.name}_bolt`},
                    tier: 3,
                    result: {item: `gtceu:${material.name}_screw`},
                })
                
                if (material.hasProperty($PropertyKey.TOOL) && $Arrays.stream(material.getProperty($PropertyKey.TOOL).types).anyMatch(type => type == GTToolType.WIRE_CUTTER)) {
                    event.custom({
                        type: "tfc:welding",
                        first_input: {item: `gtceu:${material.name}_rod`},
                        second_input: {item: `gtceu:${material.name}_rod`},
                        tier: 3,
                        result: {item: `kubejs:${material.name}_cutter_head`},
                      })
                    event.shaped(`gtceu:${material.name}_wire_cutter`, [" F ", "HCD", "RSR"], {
                      F: "#forge:tools/files",
                      H: "#forge:tools/hammers",
                      C: `kubejs:${material.name}_cutter_head`,
                      D: "#forge:tools/screwdrivers",
                      R: `gtceu:${material.name}_rod`,
                      S: `gtceu:${material.name}_screw`,
                    })
                }
            }
        }
    })

  event.custom({
    type: "tfc:glassworking",
    operations: ["blow", "blow", "roll", "pinch", "saw"],
    batch: {
      item: "tfc:silica_glass_batch",
    },
    result: {
      item: "gtceu:glass_tube",
    },
  })

}
