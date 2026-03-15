// priority 10

let igRecipesRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.remove({ id: "immersivegeology:crafting/get_ingot_from_iron_nuggets"})
  event.remove({ id: /^immersivegeology:crafting\/.*_with_work_hammer/})
  event.remove({ id: /^immersivegeology:crafting\/.*_with_bronze_hammer/})
  event.remove({ id: 'immersivegeology:crafting/craft_raw_fire_clay' })
  event.remove({ id: 'immersivegeology:crafting/cook_refractory_brick' })
  event.remove({ id: 'immersivegeology:crafting/craft_tungsten_carbide_powder' })
  event.remove({ id: '/^immersivegeology:.*get_ingots_from_block/' })
  event.remove({ id: '/^immersivegeology:ingot_to_block.*/' })
  event.remove({ id: '/^minecraft:ingot_to_block.*/' })
  event.remove({ id: '/^immersivegeology:crafting/get_ingot_from.*nuggets/' })
  event.remove({ id: '/^immersivegeology:crafting/get_nuggets_from.*ingot/' })
  event.remove({ id: '/^immersivegeology:crafting/drill_head.*/' })
  event.remove({ id: '/^immersivegeology:crafting/get_crate.*/' })
  event.remove({id: "/^immersivegeology:prospector.*/"})
  event.remove({id: "immersivegeology:crafting/craft_titanium_concrete"})
  event.remove({id: "immersivegeology:crafting/craft_reinforced_concrete"})
}
