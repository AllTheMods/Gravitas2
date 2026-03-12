// priority 10

let igRecipesRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.remove({ id: "immersivegeology:crafting/get_ingot_from_iron_nuggets"})
  event.remove({ id: /^immersivegeology:crafting\/.*_with_work_hammer/})
  event.remove({ id: /^immersivegeology:crafting\/.*_with_bronze_hammer/})
  event.remove({ id: 'immersivegeology:crafting/craft_raw_fire_clay' })
  event.remove({ id: 'immersivegeology:crafting/cook_refractory_brick' })
}
