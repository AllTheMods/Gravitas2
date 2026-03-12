const addFluidTags = (/** @type {TagEvent.Fluid} */ event) => {
    event.add("tfc:usable_in_tool_head_mold", [
        "gtceu:aluminium",
        "gtceu:titanium",
        "gtceu:invar",
        "tfc:metal/sterling_silver",
        "tfc:metal/rose_gold",
        "firmalife:metal/stainless_steel",
        "gtceu:damascus_steel",
        "gtceu:cobalt_brass",
        "gtceu:rubber",
        "gtceu:silicone_rubber",
        "gtceu:styrene_butadiene_rubber",
        "gtceu:polyethylene",
        "gtceu:polytetrafluoroethylene",
        "gtceu:polybenzimidazole"
    ])

    event.add("tfc:usable_in_wooden_bucket", [
        "gregitas:raw_syrup",
        "gregitas:maple_syrup",
        "gregitas:raw_resin",
        "gtceu:creosote",
        "gtceu:rubber",
        "integrateddynamics:menril_resin"
    ])

    event.add("tfc:usable_in_barrel", [
        "gregitas:raw_syrup",
        "gregitas:maple_syrup",
        "gregitas:raw_resin",
        "gtceu:creosote",
        "integrateddynamics:menril_resin"
    ])

    event.add("tfc:usable_in_pot", [
        "gregitas:raw_syrup",
        "gregitas:maple_syrup",
        "gregitas:raw_resin"
    ])

    event.add("tfc:usable_in_jug", [
        "gregitas:maple_syrup",
        "gregitas:iced_pina_colada"
    ])

    event.add("tfc:usable_in_ingot_mold",
        [
            "gtceu:tin",
            "gtceu:silver",
            "gtceu:gold",
            "gtceu:copper",
            "gtceu:nickel",
            "gtceu:bismuth",
            "gtceu:rubber",
            "gregitas_core:igneous_alloy",
        ]
    )

    gtceuIngots1.forEach(id => {
        event.add("tfc:usable_in_ingot_mold", `gtceu:${id}`)
    })

    event.add("forge:salt_water", "tfc:salt_water")

    tfcMetalFluids.forEach(fluid => {
        event.add(`forge:${fluid}`, `tfc:metal/${fluid}`)
    })

    event.add("create:bottomless/allow", "tfc:salt_water")
    event.add("create:bottomless/allow", "tfc:river_water")

    event.add("forge:water", "tfc:river_water")
    event.add("gregitas:water", "minecraft:water")

    event.add("forge:oil_medium", ["createdieselgenerators:crude_oil", "gtceu:flowing_oil_medium"])
    event.add("forge:crude_oil", ["gtceu:oil_medium", "gtceu:flowing_oil_medium"])
    event.add("forge:bio_diesel", ["createdieselgenerators:biodiesel", "immersiveengineering:biodiesel"])
    event.add("forge:biodiesel", ["gtceu:biodiesel"])
    event.add("forge:biofuel", "createaddition:bioethanol")

    const plantTags = ["forge:plant_oil", "forge:seed_oil"]
    const plantFluids = [
        "immersiveengineering:plantoil",
        "createdieselgenerators:plant_oil",
        "createaddition:seed_oil",
        "gtceu:seed_oil",
        "tfc:olive_oil"
    ]

    plantTags.forEach(tag => {
        event.add(tag, plantFluids)
    })

    event.add("gregitas:concrete", [
        "gtceu:concrete",
        "createdieselgenerators:white_cement",
        "createdieselgenerators:gray_cement",
        "createdieselgenerators:light_gray_cement",
        "createdieselgenerators:yellow_cement",
        "createdieselgenerators:orange_cement",
        "createdieselgenerators:red_cement",
        "createdieselgenerators:purple_cement",
        "createdieselgenerators:blue_cement",
        "createdieselgenerators:light_blue_cement",
        "createdieselgenerators:green_cement",
        "createdieselgenerators:lime_cement",
        "createdieselgenerators:brown_cement",
        "createdieselgenerators:black_cement",
        "createdieselgenerators:pink_cement",
        "createdieselgenerators:magenta_cement",
        "createdieselgenerators:cyan_cement"

    ])
    event.add("tfc:alcohols", [
        "tfcagedalcohol:aged_beer",
        "tfcagedalcohol:aged_cider",
        "tfcagedalcohol:aged_mead",
        "tfcagedalcohol:aged_rum",
        "tfcagedalcohol:aged_vodka",
        "tfcagedalcohol:aged_whiskey",
        "tfcagedalcohol:aged_sake",
        "tfcagedalcohol:aged_corn_whiskey",
        "tfcagedalcohol:aged_rye_whiskey"
    ])
}
