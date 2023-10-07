// priority 10
const toolsToRemove = [
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "iron",
  "steel",
  "invar",
  "black_steel",
  "blue_steel",
  "red_steel"

]
let recipeRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  //TFC
  event.remove({id: "tfc:anvil/wrought_iron_rod"})

  //GT
  event.remove({id: "gtceu:shaped/stick_wrought_iron"})
  event.remove({id: "gtceu:shaped/stick_long_wrought_iron"})
  event.remove({id: "gtceu:shaped/screw_wrought_iron"})
  event.remove({id: "gtceu:shaped/wire_cutter_wrought_iron"})

  //GT / Railcraft Tool Specific
  toolsToRemove.forEach((tool) =>{
  event.remove({output: `gtceu:${tool}_shovel`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_pickaxe`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_axe`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_hoe`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_scythe`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_sword`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_helmet`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_chestplate`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_leggings`, mod: "gtceu" })
  event.remove({output: `gtceu:${tool}_boots`, mod: "gtceu" })

  event.remove({output: `railcraft:${tool}_shovel`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_pickaxe`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_axe`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_hoe`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_sword`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_helmet`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_chestplate`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_leggings`, mod: "railcraft" })
  event.remove({output: `railcraft:${tool}_boots`, mod: "railcraft" })

  })

  //Railcraft
  event.remove({id: /^railcraft:.*_gear/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_shears/, mod: "railcraft" })

  //ATO
  event.remove({id: /^alltheores:.*/, mod: "alltheores" })

  //Ad Astra
  event.remove({id: /^ad_astra:hammering.*/, mod: "ad_astra" })

  //Create
  event.remove({id: "create:crafting/materials/andesite_alloy"})
  event.remove({id: "create:crafting/materials/andesite_alloy_from_zinc" })
  event.remove({id: "create:mixing/andesite_alloy"})
  event.remove({id: "create:mixing/andesite_alloy_from_zinc" })
}
