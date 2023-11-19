// priority 10

let registerItems = (/** @type {Registry.Item} */ event) => {
  //GTCEu
    event.create('gregitas:creosote_treated_lumber').texture('kubejs:item/lumber').color(0x502800)
    event.create('gregitas:rubber_lumber').texture('kubejs:item/lumber').color(0x615232)

    event.create('gregitas:certus_boule').texture('kubejs:item/certus_boule')
    event.create('gregitas:certus_wafer').texture('kubejs:item/certus_wafer')
    event.create('gregitas:engineering_wafer').texture('kubejs:item/engineering_wafer')
    event.create('gregitas:calculation_wafer').texture('kubejs:item/calculation_wafer')
    event.create('gregitas:logic_wafer').texture('kubejs:item/logic_wafer')

  //Tools
    event.create('gregitas:small_tool_handle').texture('kubejs:item/tools/handle').unstackable()
    event.create('gregitas:stone_bowl').texture('kubejs:item/tools/stone_bowl').unstackable()
    event.create('gregitas:flint_pestle').texture('kubejs:item/tools/pestle').color(0, 0x002040).unstackable()
    event.create('gregitas:plunger_head').texture('kubejs:item/tools/plunger').unstackable()
    event.create('gregitas:rubber_mallet_head').texture('kubejs:item/tools/mallet').color(0, 0x000000).unstackable()
    event.create('gregitas:polyethylene_mallet_head').texture('kubejs:item/tools/mallet').color(0, 0xC8C8C8).unstackable()
    event.create('gregitas:polytetrafluoroethylene_mallet_head').texture('kubejs:item/tools/mallet').color(0, 0x646464).unstackable()
    event.create('gregitas:polybenzimidazole_mallet_head').texture('kubejs:item/tools/mallet').color(0, 0x2D2D2D).unstackable()

    gtTFCTools.forEach((metal) => {
      event.create(`gregitas:${metal.id}_saw_blade`).texture('kubejs:item/tools/saw').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_file_head`).texture('kubejs:item/tools/file').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_hammer_head`).texture('kubejs:item/tools/hammer').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_knife_blade`).texture('kubejs:item/tools/knife').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_crowbar_base`).texture('kubejs:item/tools/crowbar').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_cutter_blade`).texture('layer0', 'kubejs:item/tools/cutter_handle').texture('layer1', 'kubejs:item/tools/cutter_blade').color(1, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_wrench_base`).texture('kubejs:item/tools/wrench_base').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_wrench_claw`).texture('kubejs:item/tools/wrench_claw').color(0, metal.color).unstackable()
      event.create(`gregitas:double_${metal.id}_ingot`).displayName(`${metal.name} Double Ingot`).texture('tfc:item/metal/double_ingot/wrought_iron').color(0, metal.color)
      event.create(`gregitas:${metal.id}_axe_head`).texture('kubejs:item/tools/axe').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_hoe_head`).texture('kubejs:item/tools/hoe').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_pickaxe_head`).texture('kubejs:item/tools/pickaxe').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_scythe_head`).texture('kubejs:item/tools/scythe').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_shovel_head`).texture('kubejs:item/tools/shovel').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_sword_blade`).texture('kubejs:item/tools/sword').color(0, metal.color).unstackable()
      event.create(`gregitas:${metal.id}_butchery_blade`).texture('kubejs:item/tools/butchery_blade').color(0, metal.color).unstackable()
  })

  gtMortars.forEach((metal) => {
    event.create(`gregitas:${metal.id}_pestle`).texture('kubejs:item/tools/pestle').color(0, metal.color).unstackable()
  })

  gtTFCtoolsTFC.forEach((metal) => {
    event.create(`gregitas:${metal.id}_file_head`).texture('kubejs:item/tools/file').color(0, metal.color).unstackable()
    event.create(`gregitas:${metal.id}_crowbar_base`).texture('kubejs:item/tools/crowbar').color(0, metal.color).unstackable()
    event.create(`gregitas:${metal.id}_cutter_blade`).texture('layer0', 'kubejs:item/tools/cutter_handle').texture('layer1', 'kubejs:item/tools/cutter_blade').color(1, metal.color).unstackable()
    event.create(`gregitas:${metal.id}_wrench_base`).texture('kubejs:item/tools/wrench_base').color(0, metal.color).unstackable()
    event.create(`gregitas:${metal.id}_wrench_claw`).texture('kubejs:item/tools/wrench_claw').color(0, metal.color).unstackable()
    event.create(`gregitas:${metal.id}_butchery_blade`).texture('kubejs:item/tools/butchery_blade').color(0, metal.color).unstackable()
  })
}