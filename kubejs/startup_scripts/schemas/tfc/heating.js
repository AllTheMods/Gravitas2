// priority 100

let registerTFCHeatingSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const heatingSchema = new $RecipeSchema(
    keys.input_item,
    keys.temperature,
    keys.result_item,
    keys.result_fluid,
    keys.use_durability,
    keys.chance
  )
    .addConstructor(keys.input_item, keys.temperature)
    .addConstructor(fluidOrItem, keys.fluid_or_item_output, keys.input_item, keys.temperature)
    .addConstructor(
      fluidOrItemWithModifier,
      keys.fluid_or_item_output,
      keys.input_item,
      keys.temperature,
      keys.modifiers
    )
    .addConstructor(
      fluidOrItemWithModifier,
      keys.fluid_or_item_output,
      keys.input_item,
      keys.temperature,
      keys.modifiers,
      keys.chance,
      keys.use_durability
    )
  event.namespace("tfc").register("heating", heatingSchema)
}

/* Signatures:

    ItemStackModifier[]: (https://terrafirmacraft.github.io/Documentation/1.20.x/data/item-stack-modifiers/)

    heating(
      ingredient: InputItem_,
      temperature: number
    )
      .resultItem(...)
      .resultFluid(...)
      .useDurability(...)
      .chance(...)

    heating(
      result: Internal.OutputFluid_ | OutputItem_
      ingredient: InputItem_,
      temperature: number,
    )
      .useDurability(...)
      .chance(...)

    heating(
      result: Internal.OutputFluid_ | OutputItem_,
      ingredient: InputItem_,
      temperature: number,
      modifiers?: ItemStackModifier[]
    )
      .useDurability(...)
      .chance(...)

    heating(
      result: Internal.OutputFluid_ | OutputItem_,
      ingredient: InputItem_,
      temperature: number,
      modifiers?: ItemStackModifier[],
      chance?: number,
      useDurability?: boolean
    )

    Tests used:

    let tfc = event.recipes.tfc
    tfc.heating("#tfc:foods/raw_meats", 1500)
      .id("gregitas:heating/test/0")
    tfc.heating({ type: "tfc:not_rotten", ingredient: { tag: "tfc:foods/raw_meats" } }, 1153).resultItem({ modifiers: [{ trait: "tfc:wood_grilled", type: "tfc:add_trait" }, "tfc:copy_food", "tfc:copy_input"] })
      .id("gregitas:heating/test/1")
    tfc.heating("tfc:food/salmon", 850).resultFluid("lava 1000")
      .id("gregitas:heating/test/2")
    tfc.heating("tfc:metal/black_steel 144", "tfc:metal/axe/black_steel", 674).useDurability(true)
      .id("gregitas:heating/test/3")
    tfc.heating("#tfc:foods/raw_meats", 1030).chance(0.35)
      .id("gregitas:heating/test/4")
    tfc.heating("tfc:metal/wrought_iron 144", "#forge:ingots/iron", 975)
      .id("gregitas:heating/test/5")
    tfc.heating(Item.empty, "#tfc:foods/raw_meats", 1245, ["tfc:copy_input"])
      .id("gregitas:heating/test/6")
    tfc.heating("tfc:metal/black_bronze 576", "tfc:metal/mace/black_bronze", 666, null, 0.5, true)
      .id("gregitas:heating/test/7")

*/
