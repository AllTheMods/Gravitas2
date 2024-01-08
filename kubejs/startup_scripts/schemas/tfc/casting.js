// priority 100

let registerTFCCastingSchema = (/** @type {Internal.RecipeSchemaRegistryEventJS} */ event) => {
  const keys = global.schemas.keys
  const castingSchema = new $RecipeSchema(keys.result_casting, keys.fluid_stack_ingredient, keys.break_chance, keys.mold)
    .addConstructor(itemWithModifier, keys.stack, keys.fluid_stack_ingredient)
    .addConstructor(itemWithModifier, keys.stack, keys.fluid_stack_ingredient, keys.modifiers)
    .addConstructor(keys.result_casting, keys.fluid_stack_ingredient, keys.mold, keys.break_chance)

  event.namespace("tfc").register("casting", castingSchema)
}

/* Signatures:

    ItemStackProvider: (https://terrafirmacraft.github.io/Documentation/1.20.x/data/common-types/#item-stack-providers)
    ItemStackModifier[]: (https://terrafirmacraft.github.io/Documentation/1.20.x/data/item-stack-modifiers/)
    FluidStackIngredient: (https://terrafirmacraft.github.io/Documentation/1.20.x/data/common-types/#fluid-stack-ingredients)

    casting(
      stack: OutputItem_,
      fluid: {
        amount: number;
        ingredient:
          | Internal.InputFluid_
          | { tag?: string | Internal.TagKey_<Internal.FluidStackJS> };
      }
    )
      .breakChance(...)
      .mold(...)

    casting(
      stack: OutputItem_,
      fluid: {
        amount: number;
        ingredient:
          | Internal.InputFluid_
          | { tag?: string | Internal.TagKey_<Internal.FluidStackJS> };
      },
      modifiers?: ItemStackModifier[]
    )
      .breakChance(...)
      .mold(...)

    casting(
      result:
        | OutputItem_
        | {
            stack?: OutputItem_;
            modifiers?: ItemStackModifier[];
          },
      fluid: {
        amount: number;
        ingredient:
          | Internal.InputFluid_
          | { tag?: string | Internal.TagKey_<Internal.FluidStackJS> };
      },
      mold?:
        | { item?: string | Internal.Item_ }
        | { tag?: `#${Special.ItemTag}` },
      break_chance?: number
    )

  Tests used:

  let tfc = event.recipes.tfc
  tfc.casting("tfc:metal/pickaxe_head/copper", { amount: 144, ingredient: "tfc:metal/copper" })
    .id("gregitas:casting/test/0")
  tfc.casting("tfc:metal/pickaxe_head/bronze", { amount: 144, ingredient: { tag: "#forge:milk" } }).mold({ item: "minecraft:acacia_boat" })
    .id("gregitas:casting/test/1")
  tfc.casting("tfc:metal/pickaxe_head/wrought_iron", { amount: 144, ingredient: "tfc:metal/wrought_iron" }).breakChance(0.01)
    .id("gregitas:casting/test/2")
  tfc.casting("tfc:metal/pickaxe_head/black_steel", { amount: 144, ingredient: "tfc:metal/black_steel" }, null)
    .id("gregitas:casting/test/3")
  tfc.casting({ stack: "tfc:metal/pickaxe_head/black_steel", modifiers: null }, { amount: 144, ingredient: "tfc:metal/black_steel" }, { tag: "#minecraft:logs" }, 0.5)
    .id("gregitas:casting/test/4")

*/
