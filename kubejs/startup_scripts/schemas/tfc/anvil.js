// priority 100

let registerTFCAnvilSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const anvilSchema = new $RecipeSchema(
    keys.result_casting,
    keys.input_item_anvil,
    keys.rules_anvil,
    keys.tier_anvil,
    keys.apply_forge_bonus
  )
    .addConstructor(itemWithModifier, keys.stack, keys.input_item_anvil, keys.rules_anvil)
    .addConstructor(itemWithModifier, keys.stack, keys.input_item_anvil, keys.rules_anvil, keys.modifiers)
    .addConstructor(keys.result_casting, keys.input_item_anvil, keys.rules_anvil, keys.tier_anvil, keys.apply_forge_bonus)

  event.namespace("tfc").register("anvil", anvilSchema)
}

/* Signatures:

  ItemStackProvider: (https://terrafirmacraft.github.io/Documentation/1.20.x/data/common-types/#item-stack-providers)
  ItemStackModifier[]: (https://terrafirmacraft.github.io/Documentation/1.20.x/data/item-stack-modifiers/)
  ForgeRule: (https://terrafirmacraft.github.io/Documentation/1.20.x/data/recipes/#anvil-working)

  anvil(
      stack?: OutputItem_,
      input: InputItem_,
      rules: Internal.ForgeRule_[]
    )
      .tier(...)
      .applyBonus(...)

  anvil(
    stack?: OutputItem_,
    input: InputItem_,
    rules: Internal.ForgeRule_[],
    modifiers?: ItemStackModifier[]
  )
    .tier(...)
    .applyBonus(...)

  anvil(
    result:
      | OutputItem_
      | ItemStackProvider,
    input: InputItem_,
    rules: Internal.ForgeRule_[],
    tier?: number,
    applyBonus?: boolean
  )

  Tests used:

  let tfc = event.recipes.tfc
  tfc.anvil("treetap:tap", "#forge:ingots/copper", ["bend_last", "bend_second_last", "bend_third_last"]).tier(0)
    .id("gregitas:anvil/test/0")
  tfc.anvil("tfc:metal/pickaxe_head/black_bronze", "#forge:ingots/black_bronze", ["bend_last", "bend_second_last", "bend_third_last"]).applyBonus(true)
    .id("gregitas:anvil/test/1")
  tfc.anvil("tfc:metal/pickaxe_head/bismuth_bronze", "#forge:ingots/bismuth_bronze", ["bend_last", "bend_second_last", "bend_third_last"], [{ type: "tfc:add_heat", temperature: 800 }])
    .id("gregitas:anvil/test/2")
  tfc.anvil({ stack: "tfc:metal/pickaxe_head/bronze", modifiers: [{ type: "tfc:add_heat", temperature: 666 }] }, "#forge:ingots/bronze", ["bend_last", "bend_second_last", "bend_third_last"], 5, true)
    .id("gregitas:anvil/test/3")

*/
