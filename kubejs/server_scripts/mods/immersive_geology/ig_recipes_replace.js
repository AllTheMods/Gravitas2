var igRecipesReplace = (/** @type {Internal.RecipesEventJS} */ event) => {
  var FORMS_HASTELLOY = ["ingots", "plates", "rods", "nuggets"]
  FORMS_HASTELLOY.forEach(function(form) {
    event.replaceInput({ mod: "immersivegeology" },`#forge:${form}/hastelloy`, `#forge:${form}/hastelloy_c_276`)
    event.replaceOutput({ mod: "immersivegeology" },`#forge:${form}/hastelloy`, `#forge:${form}/hastelloy_c_276`)
  });

  var FORMS_HSS = ["ingots", "plates", "nuggets"]
  FORMS_HSS.forEach(function(form) {
    event.replaceInput({ mod: "immersivegeology" },`#forge:${form}/high_speed_steel`, `#forge:${form}/hssg`)
    event.replaceOutput({ mod: "immersivegeology" },`#forge:${form}/high_speed_steel`, `#forge:${form}/hssg`)
  });
}
