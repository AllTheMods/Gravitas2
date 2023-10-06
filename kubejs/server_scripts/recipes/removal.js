// priority 10

let recipeRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  //TFC
  event.remove({id: "tfc:anvil/wrought_iron_rod"})

  //GT
  event.remove({id: "gtceu:shaped/stick_wrought_iron"})
  event.remove({id: "gtceu:shaped/stick_long_wrought_iron"})
  event.remove({id: "gtceu:shaped/screw_wrought_iron"})
  event.remove({id: "gtceu:shaped/wire_cutter_wrought_iron"})
  event.remove({id: /^gtceu:.*_shovel/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_pickaxe/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_axe/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_hoe/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_scythe/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_sword/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_helmet/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_chestplate/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_leggings/, mod: "gtceu" })
  event.remove({id: /^gtceu:.*_boots/, mod: "gtceu" })

  //ATO
  event.remove({id: /^alltheores:.*/, mod: "alltheores" })

  //Railcraft
  event.remove({id: /^railcraft:.*_gear/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_shovel/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_pickaxe/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_axe/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_hoe/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_sword/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_helmet/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_chestplate/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_leggings/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_boots/, mod: "railcraft" })
  event.remove({id: /^railcraft:.*_shears/, mod: "railcraft" })

  //Ad Astra
  event.remove({id: /^ad_astra:hammering.*/, mod: "ad_astra" })

}
