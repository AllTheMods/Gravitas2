# Changelog

# 📦 0.2.5-a

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- graphite recipes fix
- Whoops
- Made LV Chemical depositor require Steel pipes instead
- Added a way to get tinted glass via GT
- Changed gravitas any_bronze to forge any_bronze
- Updated any_bronze tags
- Update any_bronze tag
- Removed original smokestack recipes
- Add smokestack recipes
- Re added the usable_in_ingot_cast tag for greg fluids
- Made LV Chemical depositor require Steel instead of Stainless, Added Tinted Glass Via GT
- Smokestacks
- Tweak to Gravitas Any bronze Tags
- fix slice n splice recipes
- fix pyrolyser recipes, fix aluminIum
- no iron fix this time, sorry
- v1 of the pt_br.json file for translations
- Update pt_br.json
- Changed wording in "gravitas.chapters.10.title" (thanks Uncandango)
- 1st submission of "pt_br.json" file for the Portuguese-Brazil translations
- Sugar refining
- Added Cane Pulp
- Added Cane/Sugar Syrup
- Added a way to process sugar cane with GTCEU
- chalk recipes (for chalk mod)
- chembath recipes for chalk dying
- removes alloy smelter anvil recipe
- resolves #191 Fluid Solidifier is the correct crafting path</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Added (3)</summary>

- Chalk (1.6.3)
- Create: Connected (0.7.2-mc1.20.1)
- Gpu memory leak fix (1.20.1-1.8)

</details>

<details open>
<summary>Updated (4)</summary>

- betterfpsdist mod (1.20.1-4.2) -> (1.20.1-4.3)
- MixinExtras (0.3.2) -> (0.2.0-beta.7)
- Smoothchunk mod (1.20.1-3.5) -> (1.20.1-3.6)
- TFC Astikor Carts (1.1.7.5) -> (1.1.8.1)

</details>

## 🍳 Recipes

<details>
<summary>Added (105)</summary>
<blockquote>

<details>
<summary>almostunified/create_connected</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "create_connected"
+  recipes: [
+    "1$sequenced_assembly/control_chip"
+  ]
+}

```


</details>

<details>
<summary>chalk/chalk_box</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  key: {
+    P: {
+      item: "minecraft:paper"
+    }
+    S: {
+      item: "tfc:glue"
+    }
+  }
+  pattern: [
+    "P P"
+    "PSP"
+    "PPP"
+  ]
+  result: {
+    item: "chalk:chalk_box"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/brake</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:andesite_casing"
+    }
+    {
+      item: "create:shaft"
+    }
+    {
+      item: "minecraft:redstone"
+    }
+    {
+      item: "minecraft:obsidian"
+    }
+  ]
+  result: {
+    item: "create_connected:brake"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/brass_gearbox</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    c: {
+      item: "create:cogwheel"
+    }
+    s: {
+      item: "create:rotation_speed_controller"
+    }
+  }
+  pattern: [
+    " c "
+    "csc"
+    " c "
+  ]
+  result: {
+    item: "create_connected:brass_gearbox"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/brass_gearbox_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:vertical_brass_gearbox"
+    }
+  ]
+  result: {
+    item: "create_connected:brass_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/centrifugal_clutch</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:andesite_casing"
+    }
+    {
+      item: "create:shaft"
+    }
+    {
+      tag: "forge:plates/iron"
+    }
+    {
+      item: "create:speedometer"
+    }
+  ]
+  result: {
+    item: "create_connected:centrifugal_clutch"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/clutch_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:inverted_clutch"
+    }
+  ]
+  result: {
+    item: "create:clutch"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/empty_fan_catalyst</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    b: {
+      tag: "forge:ingots/brass"
+    }
+    i: {
+      item: "minecraft:iron_bars"
+    }
+  }
+  pattern: [
+    "bib"
+    "i i"
+    "bib"
+  ]
+  result: {
+    item: "create_connected:empty_fan_catalyst"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/empty_fan_catalyst_from_blasting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:fan_blasting_catalyst"
+    }
+  ]
+  result: {
+    item: "create_connected:empty_fan_catalyst"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/empty_fan_catalyst_from_haunting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:fan_haunting_catalyst"
+    }
+  ]
+  result: {
+    item: "create_connected:empty_fan_catalyst"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/empty_fan_catalyst_from_smoking</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:fan_smoking_catalyst"
+    }
+  ]
+  result: {
+    item: "create_connected:empty_fan_catalyst"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/empty_fan_catalyst_from_splashing</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:fan_splashing_catalyst"
+    }
+  ]
+  result: {
+    item: "create_connected:empty_fan_catalyst"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/encased_chain_cogwheel</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:encased_chain_drive"
+    }
+    {
+      item: "create:cogwheel"
+    }
+  ]
+  result: {
+    item: "create_connected:encased_chain_cogwheel"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/freewheel_clutch</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:andesite_casing"
+    }
+    {
+      item: "create:shaft"
+    }
+    {
+      tag: "forge:plates/iron"
+    }
+    {
+      item: "create:cogwheel"
+    }
+  ]
+  result: {
+    item: "create_connected:freewheel_clutch"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/gearshift_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:inverted_gearshift"
+    }
+  ]
+  result: {
+    item: "create:gearshift"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/inverted_clutch_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:clutch"
+    }
+  ]
+  result: {
+    item: "create_connected:inverted_clutch"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/inverted_gearshift_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:gearshift"
+    }
+  ]
+  result: {
+    item: "create_connected:inverted_gearshift"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/item_silo</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      tag: "forge:plates/iron"
+    }
+    C: {
+      tag: "forge:barrels/wooden"
+    }
+  }
+  pattern: [
+    "BCB"
+  ]
+  result: {
+    item: "create_connected:item_silo"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/item_silo_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:item_vault"
+    }
+  ]
+  result: {
+    item: "create_connected:item_silo"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/item_vault_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:item_silo"
+    }
+  ]
+  result: {
+    item: "create:item_vault"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/linked_transmitter_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:redstone_link"
+    }
+  ]
+  result: {
+    item: "create_connected:linked_transmitter"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/overstress_clutch</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:andesite_casing"
+    }
+    {
+      item: "create:shaft"
+    }
+    {
+      tag: "forge:plates/iron"
+    }
+    {
+      item: "create:electron_tube"
+    }
+  ]
+  result: {
+    item: "create_connected:overstress_clutch"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/parallel_gearbox</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:gearbox"
+    }
+    {
+      item: "create:large_cogwheel"
+    }
+  ]
+  result: {
+    item: "create_connected:parallel_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/parallel_gearbox_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:vertical_parallel_gearbox"
+    }
+  ]
+  result: {
+    item: "create_connected:parallel_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/redstone_link_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:linked_transmitter"
+    }
+  ]
+  result: {
+    item: "create:redstone_link"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/sequenced_pulse_generator</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      tag: "forge:plates/brass"
+    }
+    C: {
+      item: "create_connected:control_chip"
+    }
+    E: {
+      item: "create:electron_tube"
+    }
+    S: {
+      tag: "forge:stone"
+    }
+    T: {
+      item: "minecraft:redstone_torch"
+    }
+  }
+  pattern: [
+    "EC "
+    "EBT"
+    "SSS"
+  ]
+  result: {
+    item: "create_connected:sequenced_pulse_generator"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/six_way_gearbox</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    c: {
+      item: "create:cogwheel"
+    }
+    l: {
+      item: "create:large_cogwheel"
+    }
+    s: {
+      item: "create:andesite_casing"
+    }
+  }
+  pattern: [
+    "lc "
+    "csc"
+    " cl"
+  ]
+  result: {
+    item: "create_connected:six_way_gearbox"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/six_way_gearbox_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:vertical_six_way_gearbox"
+    }
+  ]
+  result: {
+    item: "create_connected:six_way_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/six_way_gearbox_from_gearbox</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:gearbox"
+    }
+    {
+      item: "create:large_cogwheel"
+    }
+    {
+      item: "create:large_cogwheel"
+    }
+  ]
+  result: {
+    item: "create_connected:six_way_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/six_way_gearbox_from_parallel</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:parallel_gearbox"
+    }
+    {
+      item: "create:large_cogwheel"
+    }
+  ]
+  result: {
+    item: "create_connected:six_way_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/vertical_brass_gearbox_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:brass_gearbox"
+    }
+  ]
+  result: {
+    item: "create_connected:vertical_brass_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/vertical_parallel_gearbox_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:parallel_gearbox"
+    }
+  ]
+  result: {
+    item: "create_connected:vertical_parallel_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/kinetics/vertical_six_way_gearbox_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:six_way_gearbox"
+    }
+  ]
+  result: {
+    item: "create_connected:vertical_six_way_gearbox"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/bamboo_window</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:bamboo_planks"
+    }
+    X: {
+      tag: "forge:glass/colorless"
+    }
+  }
+  pattern: [
+    " # "
+    "#X#"
+  ]
+  result: {
+    count: 2
+    item: "create_connected:bamboo_window"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/bamboo_window_pane</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "create_connected:bamboo_window"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+  ]
+  result: {
+    count: 16
+    item: "create_connected:bamboo_window_pane"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/cherry_window</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:cherry_planks"
+    }
+    X: {
+      tag: "forge:glass/colorless"
+    }
+  }
+  pattern: [
+    " # "
+    "#X#"
+  ]
+  result: {
+    count: 2
+    item: "create_connected:cherry_window"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/cherry_window_pane</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "create_connected:cherry_window"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+  ]
+  result: {
+    count: 16
+    item: "create_connected:cherry_window_pane"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_beam</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 4
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_beam"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_block</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 1
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_block"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_block_from_slabs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      item: "create_connected:copycat_slab"
+    }
+  }
+  pattern: [
+    "s"
+    "s"
+  ]
+  result: {
+    item: "create_connected:copycat_block"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_board</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 8
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_board"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_box</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      item: "create_connected:copycat_board"
+    }
+  }
+  pattern: [
+    "ss "
+    "s s"
+    " ss"
+  ]
+  result: {
+    item: "create_connected:copycat_box"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_catwalk</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      item: "create_connected:copycat_board"
+    }
+  }
+  pattern: [
+    "s s"
+    " s "
+  ]
+  result: {
+    item: "create_connected:copycat_catwalk"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_fence</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 1
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_fence"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_fence_gate</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 1
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_fence_gate"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_slab</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 2
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_slab"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_slab_from_beams</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      item: "create_connected:copycat_beam"
+    }
+  }
+  pattern: [
+    "ss"
+  ]
+  result: {
+    item: "create_connected:copycat_slab"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_slab_from_panels</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    p: {
+      item: "create:copycat_panel"
+    }
+  }
+  pattern: [
+    "p"
+    "p"
+  ]
+  result: {
+    item: "create_connected:copycat_slab"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_slab_from_steps</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      item: "create:copycat_step"
+    }
+  }
+  pattern: [
+    "ss"
+  ]
+  result: {
+    item: "create_connected:copycat_slab"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 1
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_stairs"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_step_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create_connected:copycat_vertical_step"
+    }
+  ]
+  result: {
+    item: "create:copycat_step"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_vertical_step</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 4
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_vertical_step"
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_vertical_step_from_conversion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "create:copycat_step"
+    }
+  ]
+  result: {
+    item: "create_connected:copycat_vertical_step"
+  }
+}

```


</details>

<details>
<summary>create_connected/crafting/palettes/copycat_wall</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  count: 1
+  ingredient: {
+    tag: "forge:ingots/zinc"
+  }
+  result: "create_connected:copycat_wall"
+}

```


</details>

<details>
<summary>create_connected/cutting/shaft</summary>

```diff
+{
+  type: "create:cutting"
+  conditions: [
+    {
+      type: "create_connected:feature_enabled"
+      feature: "create_connected:shear_pin"
+    }
+  ]
+  ingredients: [
+    {
+      item: "create:shaft"
+    }
+  ]
+  processingTime: 200
+  results: [
+    {
+      item: "create_connected:shear_pin"
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/filling/fan_blasting_catalyst</summary>

```diff
+{
+  type: "create:filling"
+  conditions: [
+    {
+      type: "create_connected:feature_enabled"
+      feature: "create_connected:empty_fan_catalyst"
+    }
+  ]
+  ingredients: [
+    {
+      item: "create_connected:empty_fan_catalyst"
+    }
+    {
+      amount: 1000
+      fluid: "minecraft:lava"
+      nbt: {
+      }
+    }
+  ]
+  results: [
+    {
+      item: "create_connected:fan_blasting_catalyst"
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/filling/fan_splashing_catalyst</summary>

```diff
+{
+  type: "create:filling"
+  conditions: [
+    {
+      type: "create_connected:feature_enabled"
+      feature: "create_connected:empty_fan_catalyst"
+    }
+  ]
+  ingredients: [
+    {
+      item: "create_connected:empty_fan_catalyst"
+    }
+    {
+      amount: 1000
+      fluid: "minecraft:water"
+      nbt: {
+      }
+    }
+  ]
+  results: [
+    {
+      item: "create_connected:fan_splashing_catalyst"
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/item_application/blasting_catalyst_from_empty</summary>

```diff
+{
+  type: "create:item_application"
+  conditions: [
+    {
+      type: "create_connected:feature_enabled"
+      feature: "create_connected:empty_fan_catalyst"
+    }
+  ]
+  ingredients: [
+    {
+      item: "create_connected:empty_fan_catalyst"
+    }
+    {
+      item: "minecraft:lava_bucket"
+    }
+  ]
+  results: [
+    {
+      item: "create_connected:fan_blasting_catalyst"
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/item_application/haunting_catalyst_from_empty</summary>

```diff
+{
+  type: "create:item_application"
+  conditions: [
+    {
+      type: "create_connected:feature_enabled"
+      feature: "create_connected:empty_fan_catalyst"
+    }
+  ]
+  ingredients: [
+    {
+      item: "create_connected:empty_fan_catalyst"
+    }
+    {
+      item: "minecraft:soul_sand"
+    }
+  ]
+  results: [
+    {
+      item: "create_connected:fan_haunting_catalyst"
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/item_application/smoking_catalyst_from_empty</summary>

```diff
+{
+  type: "create:item_application"
+  conditions: [
+    {
+      type: "create_connected:feature_enabled"
+      feature: "create_connected:empty_fan_catalyst"
+    }
+  ]
+  ingredients: [
+    {
+      item: "create_connected:empty_fan_catalyst"
+    }
+    {
+      item: "minecraft:netherrack"
+    }
+  ]
+  results: [
+    {
+      item: "create_connected:fan_smoking_catalyst"
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/item_application/splashing_catalyst_from_empty</summary>

```diff
+{
+  type: "create:item_application"
+  conditions: [
+    {
+      type: "create_connected:feature_enabled"
+      feature: "create_connected:empty_fan_catalyst"
+    }
+  ]
+  ingredients: [
+    {
+      item: "create_connected:empty_fan_catalyst"
+    }
+    {
+      item: "minecraft:water_bucket"
+    }
+  ]
+  results: [
+    {
+      item: "create_connected:fan_splashing_catalyst"
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/sequenced_assembly/control_chip</summary>

```diff
+{
+  type: "create:sequenced_assembly"
+  ingredient: {
+    tag: "forge:plates/gold"
+  }
+  loops: 3
+  results: [
+    {
+      chance: 120
+      item: "create_connected:control_chip"
+    }
+    {
+      chance: 8
+      item: "minecraft:redstone"
+    }
+    {
+      chance: 8
+      item: "create:electron_tube"
+    }
+    {
+      chance: 5
+      item: "gtceu:gold_plate"
+    }
+    {
+      chance: 3
+      item: "minecraft:gold_nugget"
+    }
+    {
+      chance: 2
+      item: "gtceu:iron_plate"
+    }
+    {
+      chance: 2
+      item: "create:crushed_raw_gold"
+    }
+    {
+      item: "minecraft:quartz"
+    }
+    {
+      item: "minecraft:compass"
+    }
+  ]
+  sequence: [
+    {
+      type: "create:deploying"
+      ingredients: [
+        {
+          item: "create_connected:incomplete_control_chip"
+        }
+        {
+          item: "create:electron_tube"
+        }
+      ]
+      results: [
+        {
+          item: "create_connected:incomplete_control_chip"
+        }
+      ]
+    }
+    {
+      type: "create:deploying"
+      ingredients: [
+        {
+          item: "create_connected:incomplete_control_chip"
+        }
+        {
+          item: "minecraft:redstone"
+        }
+      ]
+      results: [
+        {
+          item: "create_connected:incomplete_control_chip"
+        }
+      ]
+    }
+    {
+      type: "create:pressing"
+      ingredients: [
+        {
+          item: "create_connected:incomplete_control_chip"
+        }
+      ]
+      results: [
+        {
+          item: "create_connected:incomplete_control_chip"
+        }
+      ]
+    }
+  ]
+  transitionalItem: {
+    item: "create_connected:incomplete_control_chip"
+  }
+}

```


</details>

<details>
<summary>gregitas/barrel/black_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:black_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:black_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/blue_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:blue_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:blue_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/brown_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:brown_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:brown_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/cyan_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:cyan_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:cyan_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/gray_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:gray_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:gray_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/green_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:green_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:green_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/light_blue_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:light_blue_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:light_blue_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/light_gray_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:light_gray_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:light_gray_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/lime_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:lime_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:lime_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/magenta_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:magenta_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:magenta_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/orange_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:orange_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:orange_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/pink_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:pink_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:pink_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/purple_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:purple_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:purple_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/red_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:red_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:red_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/barrel/yellow_chalk</summary>

```diff
+{
+  type: "tfc:barrel_sealed"
+  input_item: {
+    ingredient: {
+      item: "chalk:white_chalk"
+    }
+  }
+  input_fluid: {
+    ingredient: "tfc:yellow_dye"
+    amount: 25
+  }
+  output_item: {
+    item: "chalk:yellow_chalk"
+  }
+  duration: 1200
+}

```


</details>

<details>
<summary>gregitas/chemical_vapor_deposition/tinted_glass</summary>

```diff
+{
+  type: "gtceu:chemical_vapor_deposition"
+  duration: 200
+  inputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            tag: "forge:dusts/amethyst"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 4
+          ingredient: {
+            tag: "forge:glass"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 4
+          ingredient: {
+            item: "minecraft:tinted_glass"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/autoclave/sugar_crystallization</summary>

```diff
+{
+  type: "gtceu:autoclave"
+  duration: 110
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 225
+          value: [
+            {
+              fluid: "gregitas:sugar_syrup"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "gtceu:sugar_block"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/centrifuge/cane_syrup</summary>

```diff
+{
+  type: "gtceu:centrifuge"
+  duration: 110
+  inputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "gregitas:cane_pulp"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    fluid: [
+      {
+        content: {
+          amount: 150
+          value: [
+            {
+              fluid: "gregitas:cane_syrup"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "gtceu:bio_chaff"
+          }
+        }
+        chance: 0.2
+        tierChanceBoost: 0.015
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/black_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:black_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:black_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/blue_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:blue_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:blue_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/brown_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:brown_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:brown_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/cyan_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:cyan_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:cyan_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/gray_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:gray_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:gray_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/green_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:green_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:green_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/light_blue_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:light_blue_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:light_blue_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/light_gray_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:light_gray_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:light_gray_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/lime_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:lime_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:lime_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/magenta_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:magenta_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:magenta_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/orange_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:orange_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:orange_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/pink_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:pink_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:pink_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/purple_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:purple_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:purple_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/red_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:red_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:red_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/chemical_bath/yellow_chalk</summary>

```diff
+{
+  type: "gtceu:chemical_bath"
+  duration: 500
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 25
+          value: [
+            {
+              fluid: "tfc:yellow_dye"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "chalk:white_chalk"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "forge:nbt"
+            item: "chalk:yellow_chalk"
+            count: 1
+            nbt: "{Damage:0}"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/extractor/cane_pulp</summary>

```diff
+{
+  type: "gtceu:extractor"
+  duration: 50
+  inputs: {
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "tfc:food/sugarcane"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    fluid: [
+      {
+        content: {
+          amount: 15
+          value: [
+            {
+              fluid: "gregitas:cane_syrup"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            item: "gregitas:cane_pulp"
+          }
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>gtceu/fluid_heater/sugar_syrup</summary>

```diff
+{
+  type: "gtceu:fluid_heater"
+  duration: 25
+  inputs: {
+    fluid: [
+      {
+        content: {
+          amount: 100
+          value: [
+            {
+              fluid: "gregitas:cane_syrup"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+    item: [
+      {
+        content: {
+          type: "gtceu:sized"
+          count: 1
+          ingredient: {
+            type: "gtceu:circuit"
+            configuration: 1
+          }
+        }
+        chance: 0
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  tickInputs: {
+    eu: [
+      {
+        content: 30
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+  outputs: {
+    fluid: [
+      {
+        content: {
+          amount: 50
+          value: [
+            {
+              fluid: "gregitas:sugar_syrup"
+            }
+          ]
+        }
+        chance: 1
+        tierChanceBoost: 0
+      }
+    ]
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/chalk_white_chalk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  result: {
+    item: "chalk:white_chalk"
+    count: 3
+    nbt: "{Damage:0}"
+  }
+  ingredients: [
+    {
+      tag: "tfc:chisels"
+    }
+    {
+      item: "tfc:brick/chalk"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/kjs/railways_smokestack_caboosestyle</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  result: "railways:smokestack_caboosestyle"
+  count: 3
+  ingredient: {
+    tag: "tfc:lamps"
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/railways_smokestack_coalburner</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  result: "railways:smokestack_coalburner"
+  count: 3
+  ingredient: {
+    tag: "tfc:lamps"
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/railways_smokestack_long</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  result: "railways:smokestack_long"
+  count: 3
+  ingredient: {
+    tag: "tfc:lamps"
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/railways_smokestack_oilburner</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  result: "railways:smokestack_oilburner"
+  count: 3
+  ingredient: {
+    tag: "tfc:lamps"
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/railways_smokestack_streamlined</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  result: "railways:smokestack_streamlined"
+  count: 3
+  ingredient: {
+    tag: "tfc:lamps"
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/railways_smokestack_woodburner</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  result: "railways:smokestack_woodburner"
+  count: 3
+  ingredient: {
+    tag: "tfc:lamps"
+  }
+}

```


</details>

<details>
<summary>tfc/kjs/ekbwwxh3ekzvqj6ldbfuyj8oj</summary>

```diff
+{
+  type: "tfc:anvil"
+  result: {
+    stack: {
+      item: "gregitas:bronze_pestle"
+      count: 1
+    }
+  }
+  input: {
+    tag: "forge:double_ingots/any_bronze"
+  }
+  rules: [
+    "shrink_last"
+    "draw_second_last"
+    "hit_third_last"
+  ]
+  tier: 2
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (340)</summary>
<blockquote>

<details>
<summary>almostunified/alltheores</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "alltheores"
   recipes: [
-    "1$aluminum_ingot_from_raw"
-    "1$aluminum_ingot_from_raw_blasting"
     "1$aluminum_plate"
     "1$brass_dust_from_alloy_blending"
     "1$brass_ingot_from_dust"
     "1$brass_ingot_from_dust_blasting"
     "1$brass_plate"
     "1$brass_rod"
     "1$bronze_dust_from_alloy_blending"
     "1$bronze_gear"
     "1$bronze_ingot_from_dust"
     "1$bronze_ingot_from_dust_blasting"
     "1$bronze_ore_hammer"
     "1$bronze_plate"
     "1$bronze_rod"
     "1$constantan_dust_from_alloy_blending"
     "1$constantan_ingot_from_dust"
     "1$constantan_ingot_from_dust_blasting"
     "1$copper_dust_from_hammer_crushing"
     "1$copper_dust_from_hammer_ingot_crushing"
     "1$copper_ingot_from_block"
     "1$copper_ore_hammer"
     "1$copper_plate"
     "1$copper_rod"
     "1$diamond_dust_from_hammer_crushing"
     "1$diamond_gear"
     "1$diamond_plate"
     "1$diamond_rod"
     "1$electrum_plate"
     "1$electrum_rod"
     "1$enderium_dust_from_alloy_blending"
     "1$enderium_ingot_from_dust"
     "1$enderium_ingot_from_dust_blasting"
     "1$gold_dust_from_hammer_crushing"
     "1$gold_dust_from_hammer_ingot_crushing"
     "1$gold_plate"
     "1$gold_rod"
     "1$invar_dust_from_alloy_blending"
     "1$invar_gear"
     "1$invar_ingot_from_dust"
     "1$invar_ingot_from_dust_blasting"
     "1$invar_ore_hammer"
     "1$invar_plate"
     "1$invar_rod"
     "1$iridium_block"
     "1$iridium_dust_from_hammer_crushing"
     "1$iridium_gear"
     "1$iridium_ingot"
     "1$iridium_ingot_from_block"
     "1$iridium_ingot_from_dust"
     "1$iridium_ingot_from_raw"
     "1$iridium_ingot_from_raw_blasting"
     "1$iridium_nugget_from_ingot"
     "1$iridium_plate"
     "1$iridium_rod"
     "1$iron_dust_from_hammer_crushing"
     "1$iron_dust_from_hammer_ingot_crushing"
     "1$iron_gear"
     "1$iron_ore_hammer"
     "1$iron_plate"
     "1$iron_rod"
     "1$lead_dust_from_hammer_crushing"
     "1$lead_dust_from_hammer_ingot_crushing"
     "1$lead_plate"
     "1$lead_rod"
     "1$lumium_dust_from_alloy_blending"
     "1$lumium_ingot_from_dust"
     "1$lumium_ingot_from_dust_blasting"
     "1$mek_processing/iridium/dust/from_dirty_dust"
     "1$mek_processing/iridium/dust/from_ingot"
     "1$mek_processing/iridium/dust/from_ore"
     "1$mek_processing/iridium/dust/from_raw_block"
     "1$mek_processing/iridium/dust/from_raw_ore"
     "1$mek_processing/nickel/dust/from_dirty_dust"
     "1$mek_processing/nickel/dust/from_ingot"
     "1$mek_processing/nickel/dust/from_ore"
     "1$mek_processing/nickel/dust/from_raw_block"
     "1$mek_processing/nickel/dust/from_raw_ore"
     "1$mek_processing/nickel/ore/from_dust"
     "1$mek_processing/platinum/dust/from_dirty_dust"
     "1$mek_processing/platinum/dust/from_ingot"
     "1$mek_processing/platinum/dust/from_ore"
     "1$mek_processing/platinum/dust/from_raw_block"
     "1$mek_processing/platinum/dust/from_raw_ore"
     "1$mek_processing/platinum/ingot/from_dust_blasting"
     "1$mek_processing/platinum/ore/from_dust"
     "1$mek_processing/silver/dust/from_dirty_dust"
     "1$mek_processing/silver/dust/from_ingot"
     "1$mek_processing/silver/dust/from_ore"
     "1$mek_processing/silver/dust/from_raw_block"
     "1$mek_processing/silver/dust/from_raw_ore"
     "1$mek_processing/silver/ore/from_dust"
     "1$mek_processing/zinc/dust/from_dirty_dust"
     "1$mek_processing/zinc/dust/from_ingot"
     "1$mek_processing/zinc/dust/from_ore"
     "1$mek_processing/zinc/dust/from_raw_block"
     "1$mek_processing/zinc/dust/from_raw_ore"
     "1$mek_processing/zinc/ingot/from_dust_blasting"
     "1$mek_processing/zinc/ore/from_dust"
     "1$netherite_dust_from_hammer_crushing"
     "1$nickel_dust_from_hammer_crushing"
     "1$nickel_dust_from_hammer_ingot_crushing"
     "1$nickel_plate"
     "1$nickel_rod"
     "1$osmium_block"
     "1$osmium_dust_from_hammer_crushing"
     "1$osmium_dust_from_hammer_ingot_crushing"
     "1$osmium_ingot"
     "1$osmium_ingot_from_block"
     "1$osmium_ingot_from_raw"
     "1$osmium_ingot_from_raw_blasting"
     "1$osmium_nugget_from_ingot"
     "1$osmium_plate"
     "1$osmium_rod"
     "1$peridot_dust_from_hammer_crushing"
     "1$platinum_block"
     "1$platinum_dust_from_hammer_crushing"
     "1$platinum_dust_from_hammer_ingot_crushing"
     "1$platinum_ingot"
     "1$platinum_ingot_from_block"
     "1$platinum_ingot_from_raw"
     "1$platinum_ingot_from_raw_blasting"
     "1$platinum_nugget_from_ingot"
     "1$platinum_ore_hammer"
     "1$platinum_plate"
     "1$platinum_rod"
     "1$raw_platinum_block"
     "1$raw_platinum_from_block"
     "1$raw_tin_block"
     "1$raw_tin_from_block"
     "1$ruby_block"
     "1$ruby_dust_from_hammer_crushing"
     "1$ruby_from_block"
     "1$ruby_from_hammer_crushing"
     "1$sapphire_block"
     "1$sapphire_dust_from_hammer_crushing"
     "1$sapphire_from_hammer_crushing"
     "1$signalum_dust_from_alloy_blending"
     "1$signalum_ingot_from_dust"
     "1$signalum_ingot_from_dust_blasting"
     "1$silver_dust_from_hammer_crushing"
     "1$silver_dust_from_hammer_ingot_crushing"
     "1$silver_plate"
     "1$silver_rod"
     "1$smelting_dust/osmium_ingot"
     "1$smelting_dust/platinum_ingot"
     "1$smelting_dust/tin_ingot"
     "1$smelting_dust/zinc_ingot"
     "1$steel_dust_from_alloy_blending"
     "1$steel_gear"
     "1$steel_plate"
     "1$steel_rod"
     "1$thermal_pulverize/pulverizer_osmium_ingot_to_dust"
     "1$thermal_pulverize/pulverizer_platinum_ingot_to_dust"
     "1$thermal_pulverize/pulverizer_platinum_ore"
     "1$thermal_pulverize/pulverizer_zinc_ingot_to_dust"
     "1$thermal_pulverize/pulverizer_zinc_ore"
     "1$tin_dust_from_hammer_crushing"
     "1$tin_dust_from_hammer_ingot_crushing"
     "1$tin_plate"
     "1$tin_rod"
     "1$uranium_dust_from_hammer_crushing"
     "1$uranium_dust_from_hammer_ingot_crushing"
     "1$uranium_plate"
     "1$uranium_rod"
     "1$zinc_dust_from_hammer_crushing"
     "1$zinc_dust_from_hammer_ingot_crushing"
     "1$zinc_plate"
     "1$zinc_rod"
+    "3$aluminum_ingot"
+    "3$aluminum_ingot_from_block"
     "3$aluminum_ingot_from_ore"
     "3$aluminum_ingot_from_ore_blasting"
+    "3$aluminum_ingot_from_raw"
+    "3$aluminum_ingot_from_raw_blasting"
     "3$aluminum_ingot_from_slate_ore"
     "3$aluminum_ingot_from_slate_ore_blasting"
     "3$aluminum_nugget_from_ingot"
     "3$brass_block"
     "3$brass_ingot"
     "3$brass_nugget_from_ingot"
     "3$bronze_block"
     "3$bronze_ingot"
     "3$bronze_ingot_from_block"
     "3$bronze_nugget_from_ingot"
     "3$copper_ingot_from_dust"
     "3$copper_ingot_from_dust_blasting"
     "3$copper_nugget_from_ingot"
     "3$electrum_block"
     "3$electrum_dust_from_alloy_blending"
     "3$electrum_ingot"
     "3$electrum_ingot_from_block"
     "3$electrum_ingot_from_dust"
     "3$electrum_ingot_from_dust_blasting"
     "3$electrum_nugget_from_ingot"
     "3$gold_ingot_from_dust"
     "3$gold_ingot_from_dust_blasting"
     "3$invar_block"
     "3$invar_ingot"
     "3$invar_ingot_from_block"
     "3$invar_nugget_from_ingot"
     "3$iridium_ingot_from_dust_blasting"
     "3$iridium_ingot_from_ore"
     "3$iridium_ingot_from_ore_blasting"
     "3$iridium_ingot_from_slate_ore"
     "3$iridium_ingot_from_slate_ore_blasting"
     "3$iron_ingot_from_dust"
     "3$iron_ingot_from_dust_blasting"
     "3$lead_block"
     "3$lead_ingot"
     "3$lead_ingot_from_block"
     "3$lead_ingot_from_ore"
     "3$lead_ingot_from_ore_blasting"
     "3$lead_ingot_from_raw"
     "3$lead_ingot_from_raw_blasting"
     "3$lead_ingot_from_slate_ore"
     "3$lead_ingot_from_slate_ore_blasting"
     "3$lead_nugget_from_ingot"
+    "3$mek_processing/aluminum/ingot/from_dust_blasting"
     "3$mek_processing/iridium/ingot/from_dust_blasting"
     "3$mek_processing/nickel/ingot/from_dust_blasting"
     "3$mek_processing/silver/ingot/from_dust_blasting"
     "3$nickel_block"
     "3$nickel_ingot"
     "3$nickel_ingot_from_block"
     "3$nickel_ingot_from_ore"
     "3$nickel_ingot_from_ore_blasting"
     "3$nickel_ingot_from_raw"
     "3$nickel_ingot_from_raw_blasting"
     "3$nickel_ingot_from_slate_ore"
     "3$nickel_ingot_from_slate_ore_blasting"
     "3$nickel_nugget_from_ingot"
     "3$osmium_ingot_from_ore"
     "3$osmium_ingot_from_ore_blasting"
     "3$osmium_ingot_from_slate_ore"
     "3$osmium_ingot_from_slate_ore_blasting"
     "3$platinum_ingot_from_ore"
     "3$platinum_ingot_from_ore_blasting"
     "3$platinum_ingot_from_slate_ore"
     "3$platinum_ingot_from_slate_ore_blasting"
     "3$raw_lead_block"
     "3$raw_lead_from_block"
     "3$raw_nickel_block"
     "3$raw_nickel_from_block"
     "3$raw_silver_block"
     "3$raw_silver_from_block"
     "3$raw_zinc_block"
     "3$raw_zinc_from_block"
     "3$sapphire_from_block"
     "3$silver_block"
     "3$silver_ingot"
     "3$silver_ingot_from_block"
     "3$silver_ingot_from_ore"
     "3$silver_ingot_from_ore_blasting"
     "3$silver_ingot_from_raw"
     "3$silver_ingot_from_raw_blasting"
     "3$silver_ingot_from_slate_ore"
     "3$silver_ingot_from_slate_ore_blasting"
     "3$silver_nugget_from_ingot"
+    "3$smelting_dust/aluminum_ingot"
     "3$smelting_dust/lead_ingot"
     "3$smelting_dust/nickel_ingot"
     "3$smelting_dust/silver_ingot"
     "3$smelting_dust/uranium_ingot"
     "3$steel_block"
     "3$steel_ingot"
     "3$steel_ingot_from_block"
     "3$steel_ingot_from_dust"
     "3$steel_ingot_from_dust_blasting"
     "3$steel_nugget_from_ingot"
     "3$tin_block"
     "3$tin_ingot"
     "3$tin_ingot_from_block"
     "3$tin_ingot_from_ore"
     "3$tin_ingot_from_ore_blasting"
     "3$tin_ingot_from_raw"
     "3$tin_ingot_from_raw_blasting"
     "3$tin_ingot_from_slate_ore"
     "3$tin_ingot_from_slate_ore_blasting"
     "3$tin_nugget_from_ingot"
     "3$uranium_block"
     "3$uranium_ingot"
     "3$uranium_ingot_from_block"
     "3$uranium_ingot_from_ore"
     "3$uranium_ingot_from_ore_blasting"
     "3$uranium_ingot_from_raw"
     "3$uranium_ingot_from_raw_blasting"
     "3$uranium_ingot_from_slate_ore"
     "3$uranium_ingot_from_slate_ore_blasting"
     "3$uranium_nugget_from_ingot"
     "3$zinc_block"
     "3$zinc_ingot"
     "3$zinc_ingot_from_block"
     "3$zinc_ingot_from_ore"
     "3$zinc_ingot_from_ore_blasting"
     "3$zinc_ingot_from_raw"
     "3$zinc_ingot_from_raw_blasting"
     "3$zinc_ingot_from_slate_ore"
     "3$zinc_ingot_from_slate_ore_blasting"
     "3$zinc_nugget_from_ingot"
   ]
 }

```


</details>

<details>
<summary>almostunified/create</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "create"
   recipes: [
     "1$blasting/copper_ingot_from_crushed"
     "1$blasting/gold_ingot_from_crushed"
+    "1$blasting/ingot_aluminum_compat_immersiveengineering"
     "1$blasting/ingot_lead_compat_immersiveengineering"
     "1$blasting/ingot_nickel_compat_immersiveengineering"
     "1$blasting/ingot_silver_compat_immersiveengineering"
     "1$blasting/ingot_uranium_compat_immersiveengineering"
     "1$blasting/zinc_ingot_from_crushed"
     "1$crafting/appliances/copper_backtank"
     "1$crafting/appliances/copper_diving_boots"
     "1$crafting/appliances/copper_diving_helmet"
     "1$crafting/kinetics/fluid_pipe"
     "1$crafting/kinetics/fluid_pipe_vertical"
     "1$crafting/kinetics/steam_engine"
     "1$crafting/kinetics/steam_whistle"
     "1$crushing/asurine"
     "1$crushing/asurine_recycling"
     "1$crushing/coal_ore"
     "1$crushing/copper_ore"
     "1$crushing/deepslate_coal_ore"
     "1$crushing/deepslate_copper_ore"
     "1$crushing/deepslate_diamond_ore"
     "1$crushing/deepslate_emerald_ore"
     "1$crushing/deepslate_gold_ore"
     "1$crushing/deepslate_iron_ore"
     "1$crushing/deepslate_lapis_ore"
     "1$crushing/deepslate_zinc_ore"
     "1$crushing/diamond_horse_armor"
     "1$crushing/diamond_ore"
     "1$crushing/emerald_ore"
     "1$crushing/gold_ore"
     "1$crushing/golden_horse_armor"
     "1$crushing/iron_ore"
     "1$crushing/lapis_ore"
     "1$crushing/nether_gold_ore"
     "1$crushing/obsidian"
     "1$crushing/ochrum"
     "1$crushing/ochrum_recycling"
     "1$crushing/raw_copper"
     "1$crushing/raw_copper_block"
     "1$crushing/raw_gold"
     "1$crushing/raw_gold_block"
     "1$crushing/raw_iron"
     "1$crushing/raw_iron_block"
     "1$crushing/raw_zinc"
     "1$crushing/raw_zinc_block"
     "1$crushing/tuff"
     "1$crushing/tuff_recycling"
     "1$crushing/veridium"
     "1$crushing/veridium_recycling"
     "1$crushing/zinc_ore"
     "1$deploying/waxed_copper_block_from_adding_wax"
     "1$milling/charcoal"
     "1$milling/coal"
     "1$milling/lapis_lazuli"
     "1$mixing/brass_ingot"
     "1$ornate_iron_window"
     "1$pressing/brass_ingot"
     "1$pressing/copper_ingot"
     "1$pressing/gold_ingot"
     "1$pressing/iron_ingot"
     "1$sequenced_assembly/precision_mechanism"
     "1$smelting/copper_ingot_from_crushed"
     "1$smelting/gold_ingot_from_crushed"
+    "1$smelting/ingot_aluminum_compat_immersiveengineering"
     "1$smelting/ingot_lead_compat_immersiveengineering"
     "1$smelting/ingot_nickel_compat_immersiveengineering"
     "1$smelting/ingot_silver_compat_immersiveengineering"
     "1$smelting/ingot_uranium_compat_immersiveengineering"
     "1$smelting/zinc_ingot_from_crushed"
     "1$splashing/crushed_raw_copper"
     "1$splashing/crushed_raw_zinc"
     "1$splashing/immersiveengineering/crushed_raw_aluminum"
     "1$splashing/immersiveengineering/crushed_raw_lead"
     "1$splashing/immersiveengineering/crushed_raw_nickel"
     "1$splashing/immersiveengineering/crushed_raw_silver"
     "1$splashing/immersiveengineering/crushed_raw_uranium"
     "3$blasting/zinc_ingot_from_ore"
     "3$blasting/zinc_ingot_from_raw_ore"
     "3$crafting/materials/brass_block_from_compacting"
     "3$crafting/materials/brass_ingot_from_compacting"
     "3$crafting/materials/brass_ingot_from_decompacting"
     "3$crafting/materials/brass_nugget_from_decompacting"
     "3$crafting/materials/copper_ingot"
     "3$crafting/materials/copper_nugget"
     "3$crafting/materials/raw_zinc"
     "3$crafting/materials/raw_zinc_block"
     "3$crafting/materials/zinc_block_from_compacting"
     "3$crafting/materials/zinc_ingot_from_compacting"
     "3$crafting/materials/zinc_ingot_from_decompacting"
     "3$crafting/materials/zinc_nugget_from_decompacting"
     "3$crafting/schematics/schematicannon"
     "3$item_application/copper_casing_from_log"
     "3$item_application/copper_casing_from_wood"
     "3$mechanical_crafting/potato_cannon"
     "3$sequenced_assembly/sturdy_sheet"
     "3$smelting/zinc_ingot_from_ore"
     "3$smelting/zinc_ingot_from_raw_ore"
   ]
 }

```


</details>

<details>
<summary>almostunified/gtceu</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "gtceu"
   recipes: [
     "1$alloy_smelter/alloy_smelt_chromium_nugget_to_ingot"
     "1$alloy_smelter/alloy_smelt_chromium_to_ingot"
     "1$alloy_smelter/alloy_smelt_copper_nugget_to_ingot"
     "1$alloy_smelter/alloy_smelt_copper_to_ingot"
     "1$alloy_smelter/alloy_smelt_gold_nugget_to_ingot"
     "1$alloy_smelter/alloy_smelt_gold_to_ingot"
     "1$alloy_smelter/alloy_smelt_stainless_steel_nugget_to_ingot"
     "1$alloy_smelter/alloy_smelt_stainless_steel_to_ingot"
     "1$arc_furnace/arc_auto_maintenance_hatch"
     "1$arc_furnace/arc_brass_gear"
     "1$arc_furnace/arc_chromium_block"
     "1$arc_furnace/arc_chromium_huge_fluid_pipe"
     "1$arc_furnace/arc_chromium_large_fluid_pipe"
     "1$arc_furnace/arc_chromium_normal_fluid_pipe"
     "1$arc_furnace/arc_chromium_plate"
     "1$arc_furnace/arc_chromium_quadruple_fluid_pipe"
     "1$arc_furnace/arc_chromium_rotor"
     "1$arc_furnace/arc_chromium_small_fluid_pipe"
     "1$arc_furnace/arc_chromium_turbine_blade"
     "1$arc_furnace/arc_clean_machine_casing"
     "1$arc_furnace/arc_cleaning_maintenance_hatch"
     "1$arc_furnace/arc_cleanroom"
     "1$arc_furnace/arc_clock"
     "1$arc_furnace/arc_configurable_maintenance_hatch"
     "1$arc_furnace/arc_copper_gear"
     "1$arc_furnace/arc_cracker"
     "1$arc_furnace/arc_distillation_tower"
     "1$arc_furnace/arc_double_chromium_plate"
     "1$arc_furnace/arc_double_gold_plate"
     "1$arc_furnace/arc_double_stainless_steel_plate"
     "1$arc_furnace/arc_electrum_gear"
     "1$arc_furnace/arc_ev_chemical_reactor"
     "1$arc_furnace/arc_ev_fluid_heater"
     "1$arc_furnace/arc_ev_fluid_solidifier"
     "1$arc_furnace/arc_ev_gas_collector"
     "1$arc_furnace/arc_ev_hermetic_casing"
     "1$arc_furnace/arc_ev_mixer"
     "1$arc_furnace/arc_ev_muffler_hatch"
     "1$arc_furnace/arc_ev_ore_washer"
     "1$arc_furnace/arc_ev_pump"
     "1$arc_furnace/arc_ev_stainless_steel_drill"
     "1$arc_furnace/arc_gas_large_turbine"
     "1$arc_furnace/arc_gold_block"
     "1$arc_furnace/arc_gold_double_cable"
     "1$arc_furnace/arc_gold_double_wire"
     "1$arc_furnace/arc_gold_drum"
     "1$arc_furnace/arc_gold_dust"
     "1$arc_furnace/arc_gold_gear"
     "1$arc_furnace/arc_gold_hex_cable"
     "1$arc_furnace/arc_gold_hex_wire"
     "1$arc_furnace/arc_gold_huge_fluid_pipe"
     "1$arc_furnace/arc_gold_large_fluid_pipe"
     "1$arc_furnace/arc_gold_normal_fluid_pipe"
     "1$arc_furnace/arc_gold_octal_cable"
     "1$arc_furnace/arc_gold_octal_wire"
     "1$arc_furnace/arc_gold_plate"
     "1$arc_furnace/arc_gold_quadruple_cable"
     "1$arc_furnace/arc_gold_quadruple_fluid_pipe"
     "1$arc_furnace/arc_gold_quadruple_wire"
     "1$arc_furnace/arc_gold_small_fluid_pipe"
     "1$arc_furnace/arc_gold_spring"
     "1$arc_furnace/arc_golden_apple"
     "1$arc_furnace/arc_golden_axe"
     "1$arc_furnace/arc_golden_boots"
     "1$arc_furnace/arc_golden_chestplate"
     "1$arc_furnace/arc_golden_helmet"
     "1$arc_furnace/arc_golden_hoe"
     "1$arc_furnace/arc_golden_horse_armor"
     "1$arc_furnace/arc_golden_leggings"
     "1$arc_furnace/arc_golden_pickaxe"
     "1$arc_furnace/arc_golden_shovel"
     "1$arc_furnace/arc_golden_sword"
     "1$arc_furnace/arc_hv_16a_energy_converter"
     "1$arc_furnace/arc_hv_1a_energy_converter"
     "1$arc_furnace/arc_hv_4a_energy_converter"
     "1$arc_furnace/arc_hv_8a_energy_converter"
     "1$arc_furnace/arc_hv_alloy_smelter"
     "1$arc_furnace/arc_hv_arc_furnace"
     "1$arc_furnace/arc_hv_assembler"
     "1$arc_furnace/arc_hv_autoclave"
     "1$arc_furnace/arc_hv_battery_buffer_16x"
     "1$arc_furnace/arc_hv_battery_buffer_4x"
     "1$arc_furnace/arc_hv_battery_buffer_8x"
     "1$arc_furnace/arc_hv_bender"
     "1$arc_furnace/arc_hv_block_breaker"
     "1$arc_furnace/arc_hv_brewery"
     "1$arc_furnace/arc_hv_canner"
     "1$arc_furnace/arc_hv_centrifuge"
     "1$arc_furnace/arc_hv_chemical_bath"
     "1$arc_furnace/arc_hv_chemical_reactor"
     "1$arc_furnace/arc_hv_circuit_assembler"
     "1$arc_furnace/arc_hv_combustion"
     "1$arc_furnace/arc_hv_compressor"
     "1$arc_furnace/arc_hv_conveyor_module"
     "1$arc_furnace/arc_hv_cutter"
     "1$arc_furnace/arc_hv_diode"
     "1$arc_furnace/arc_hv_distillery"
     "1$arc_furnace/arc_hv_electric_furnace"
     "1$arc_furnace/arc_hv_electric_motor"
     "1$arc_furnace/arc_hv_electric_piston"
     "1$arc_furnace/arc_hv_electric_pump"
     "1$arc_furnace/arc_hv_electromagnetic_separator"
     "1$arc_furnace/arc_hv_emitter"
     "1$arc_furnace/arc_hv_energy_input_hatch"
     "1$arc_furnace/arc_hv_energy_output_hatch"
     "1$arc_furnace/arc_hv_extractor"
     "1$arc_furnace/arc_hv_fermenter"
     "1$arc_furnace/arc_hv_field_generator"
     "1$arc_furnace/arc_hv_fisher"
     "1$arc_furnace/arc_hv_fluid_heater"
     "1$arc_furnace/arc_hv_fluid_passthrough_hatch"
     "1$arc_furnace/arc_hv_fluid_solidifier"
     "1$arc_furnace/arc_hv_forge_hammer"
     "1$arc_furnace/arc_hv_forming_press"
     "1$arc_furnace/arc_hv_gas_collector"
     "1$arc_furnace/arc_hv_hermetic_casing"
     "1$arc_furnace/arc_hv_item_magnet"
     "1$arc_furnace/arc_hv_item_passthrough_hatch"
     "1$arc_furnace/arc_hv_laser_engraver"
     "1$arc_furnace/arc_hv_lathe"
     "1$arc_furnace/arc_hv_macerator"
     "1$arc_furnace/arc_hv_machine_casing"
     "1$arc_furnace/arc_hv_machine_hull"
     "1$arc_furnace/arc_hv_miner"
     "1$arc_furnace/arc_hv_mixer"
     "1$arc_furnace/arc_hv_muffler_hatch"
     "1$arc_furnace/arc_hv_ore_washer"
     "1$arc_furnace/arc_hv_packer"
     "1$arc_furnace/arc_hv_polarizer"
     "1$arc_furnace/arc_hv_pump"
     "1$arc_furnace/arc_hv_rock_crusher"
     "1$arc_furnace/arc_hv_rotor_holder"
     "1$arc_furnace/arc_hv_sensor"
     "1$arc_furnace/arc_hv_sifter"
     "1$arc_furnace/arc_hv_stainless_steel_drill"
     "1$arc_furnace/arc_hv_stainless_steel_wrench"
     "1$arc_furnace/arc_hv_steam_turbine"
     "1$arc_furnace/arc_hv_super_chest"
     "1$arc_furnace/arc_hv_super_tank"
     "1$arc_furnace/arc_hv_thermal_centrifuge"
     "1$arc_furnace/arc_hv_transformer_16a"
     "1$arc_furnace/arc_hv_transformer_1a"
     "1$arc_furnace/arc_hv_transformer_2a"
     "1$arc_furnace/arc_hv_transformer_4a"
     "1$arc_furnace/arc_hv_wiremill"
     "1$arc_furnace/arc_hv_world_accelerator"
     "1$arc_furnace/arc_implosion_compressor"
     "1$arc_furnace/arc_iv_processing_array"
     "1$arc_furnace/arc_iv_quantum_chest"
     "1$arc_furnace/arc_iv_stainless_steel_drill"
     "1$arc_furnace/arc_iv_stainless_steel_wrench"
     "1$arc_furnace/arc_large_centrifuge"
     "1$arc_furnace/arc_large_chemical_reactor"
     "1$arc_furnace/arc_large_distillery"
     "1$arc_furnace/arc_large_packer"
     "1$arc_furnace/arc_lead_gear"
     "1$arc_furnace/arc_light_weighted_pressure_plate"
     "1$arc_furnace/arc_long_gold_rod"
     "1$arc_furnace/arc_long_stainless_steel_rod"
-    "1$arc_furnace/arc_luv_processing_array"
     "1$arc_furnace/arc_lv_electrolyzer"
     "1$arc_furnace/arc_lv_stainless_steel_chainsaw"
     "1$arc_furnace/arc_lv_stainless_steel_drill"
     "1$arc_furnace/arc_lv_stainless_steel_screwdriver"
     "1$arc_furnace/arc_lv_stainless_steel_wrench"
     "1$arc_furnace/arc_mv_stainless_steel_drill"
     "1$arc_furnace/arc_mv_transformer_16a"
     "1$arc_furnace/arc_mv_transformer_2a"
     "1$arc_furnace/arc_mv_transformer_4a"
     "1$arc_furnace/arc_nichrome_coil_block"
     "1$arc_furnace/arc_nickel_gear"
     "1$arc_furnace/arc_osmium_gear"
     "1$arc_furnace/arc_platinum_gear"
     "1$arc_furnace/arc_prospector.hv"
     "1$arc_furnace/arc_silver_gear"
     "1$arc_furnace/arc_small_stainless_steel_gear"
     "1$arc_furnace/arc_stainless_steel_block"
     "1$arc_furnace/arc_stainless_steel_buzzsaw"
     "1$arc_furnace/arc_stainless_steel_crate"
     "1$arc_furnace/arc_stainless_steel_drum"
     "1$arc_furnace/arc_stainless_steel_fluid_cell"
     "1$arc_furnace/arc_stainless_steel_frame"
     "1$arc_furnace/arc_stainless_steel_gear"
     "1$arc_furnace/arc_stainless_steel_gearbox"
     "1$arc_furnace/arc_stainless_steel_huge_fluid_pipe"
     "1$arc_furnace/arc_stainless_steel_large_fluid_pipe"
     "1$arc_furnace/arc_stainless_steel_normal_fluid_pipe"
     "1$arc_furnace/arc_stainless_steel_plate"
     "1$arc_furnace/arc_stainless_steel_quadruple_fluid_pipe"
     "1$arc_furnace/arc_stainless_steel_rotor"
     "1$arc_furnace/arc_stainless_steel_small_fluid_pipe"
     "1$arc_furnace/arc_stainless_steel_turbine_blade"
     "1$arc_furnace/arc_stainless_steel_turbine_casing"
     "1$arc_furnace/arc_tin_gear"
     "1$arc_furnace/arc_titanium_large_boiler"
     "1$arc_furnace/arc_uranium_gear"
     "1$arc_furnace/arc_vacuum_freezer"
     "1$arc_furnace/arc_zinc_gear"
     "1$autoclave/autoclave_dust_apatite__distilled"
     "1$autoclave/autoclave_dust_apatite__water"
     "1$autoclave/autoclave_dust_cinnabar__distilled"
     "1$autoclave/autoclave_dust_cinnabar__water"
     "1$autoclave/autoclave_dust_lapis__distilled"
     "1$autoclave/autoclave_dust_lapis__water"
     "1$blasting/smelt_bornite_ore_to_ingot"
     "1$blasting/smelt_chalcocite_ore_to_ingot"
     "1$blasting/smelt_chalcopyrite_ore_to_ingot"
     "1$blasting/smelt_copper_ore_to_ingot"
     "1$blasting/smelt_deepslate_bornite_ore_to_ingot"
     "1$blasting/smelt_deepslate_chalcocite_ore_to_ingot"
     "1$blasting/smelt_deepslate_chalcopyrite_ore_to_ingot"
     "1$blasting/smelt_deepslate_copper_ore_to_ingot"
     "1$blasting/smelt_deepslate_diamond_ore_to_ingot"
     "1$blasting/smelt_deepslate_emerald_ore_to_ingot"
     "1$blasting/smelt_deepslate_gold_ore_to_ingot"
     "1$blasting/smelt_deepslate_lapis_ore_to_ingot"
     "1$blasting/smelt_deepslate_malachite_ore_to_ingot"
     "1$blasting/smelt_deepslate_tetrahedrite_ore_to_ingot"
     "1$blasting/smelt_diamond_ore_to_ingot"
     "1$blasting/smelt_emerald_ore_to_ingot"
     "1$blasting/smelt_endstone_bornite_ore_to_ingot"
     "1$blasting/smelt_endstone_chalcocite_ore_to_ingot"
     "1$blasting/smelt_endstone_chalcopyrite_ore_to_ingot"
     "1$blasting/smelt_endstone_copper_ore_to_ingot"
     "1$blasting/smelt_endstone_diamond_ore_to_ingot"
     "1$blasting/smelt_endstone_emerald_ore_to_ingot"
     "1$blasting/smelt_endstone_gold_ore_to_ingot"
     "1$blasting/smelt_endstone_lapis_ore_to_ingot"
     "1$blasting/smelt_endstone_malachite_ore_to_ingot"
     "1$blasting/smelt_endstone_tetrahedrite_ore_to_ingot"
     "1$blasting/smelt_gold_ore_to_ingot"
     "1$blasting/smelt_lapis_ore_to_ingot"
     "1$blasting/smelt_malachite_ore_to_ingot"
     "1$blasting/smelt_netherrack_bornite_ore_to_ingot"
     "1$blasting/smelt_netherrack_chalcocite_ore_to_ingot"
     "1$blasting/smelt_netherrack_chalcopyrite_ore_to_ingot"
     "1$blasting/smelt_netherrack_copper_ore_to_ingot"
     "1$blasting/smelt_netherrack_diamond_ore_to_ingot"
     "1$blasting/smelt_netherrack_emerald_ore_to_ingot"
     "1$blasting/smelt_netherrack_gold_ore_to_ingot"
     "1$blasting/smelt_netherrack_lapis_ore_to_ingot"
     "1$blasting/smelt_netherrack_malachite_ore_to_ingot"
     "1$blasting/smelt_netherrack_tetrahedrite_ore_to_ingot"
     "1$blasting/smelt_raw_bornite_ore_to_ingot"
     "1$blasting/smelt_raw_chalcocite_ore_to_ingot"
     "1$blasting/smelt_raw_chalcopyrite_ore_to_ingot"
     "1$blasting/smelt_raw_diamond_ore_to_ingot"
     "1$blasting/smelt_raw_emerald_ore_to_ingot"
     "1$blasting/smelt_raw_lapis_ore_to_ingot"
     "1$blasting/smelt_raw_malachite_ore_to_ingot"
     "1$blasting/smelt_raw_tetrahedrite_ore_to_ingot"
     "1$blasting/smelt_tetrahedrite_ore_to_ingot"
     "1$compressor/compress_chromium_nugget_to_ingot"
     "1$compressor/compress_copper_nugget_to_ingot"
     "1$compressor/compress_gold_nugget_to_ingot"
     "1$compressor/compress_plate_dust_obsidian_"
     "1$compressor/compress_stainless_steel_nugget_to_ingot"
     "1$cutter/cut_diamond_flawless_gem_to_gem"
     "1$cutter/cut_diamond_flawless_gem_to_gem_distilled_water"
     "1$cutter/cut_diamond_flawless_gem_to_gem_water"
     "1$cutter/cut_emerald_flawless_gem_to_gem"
     "1$cutter/cut_emerald_flawless_gem_to_gem_distilled_water"
     "1$cutter/cut_emerald_flawless_gem_to_gem_water"
     "1$cutter/cut_lapis_flawless_gem_to_gem"
     "1$cutter/cut_lapis_flawless_gem_to_gem_distilled_water"
     "1$cutter/cut_lapis_flawless_gem_to_gem_water"
     "1$cutter/cut_stainless_steel_long_rod_to_rod"
     "1$cutter/cut_stainless_steel_long_rod_to_rod_distilled_water"
     "1$cutter/cut_stainless_steel_long_rod_to_rod_water"
     "1$electric_blast_furnace/blast_chromium"
     "1$electric_blast_furnace/blast_chromium_gas"
     "1$electric_blast_furnace/blast_stainless_steel"
     "1$electric_blast_furnace/blast_stainless_steel_gas"
     "1$extractor/charcoal_extraction"
     "1$extruder/extrude_chromium_to_rod"
     "1$extruder/extrude_stainless_steel_to_rod"
     "1$fluid_solidifier/solidify_chromium_to_ingot"
     "1$fluid_solidifier/solidify_copper_to_ingot"
     "1$fluid_solidifier/solidify_gold_to_ingot"
     "1$fluid_solidifier/solidify_stainless_steel_to_ingot"
     "1$forge_hammer/hammer_diamond_block_to_gem"
     "1$forge_hammer/hammer_emerald_block_to_gem"
     "1$forge_hammer/hammer_lapis_block_to_gem"
     "1$implosion_compressor/implode_dust_apatite__tnt"
     "1$implosion_compressor/implode_dust_cinnabar__tnt"
     "1$implosion_compressor/implode_dust_diamond__tnt"
     "1$implosion_compressor/implode_dust_emerald__tnt"
     "1$implosion_compressor/implode_dust_fluorite__tnt"
     "1$implosion_compressor/implode_dust_lapis__tnt"
     "1$implosion_compressor/implode_dust_ruby__tnt"
     "1$implosion_compressor/implode_dust_sapphire__tnt"
     "1$large_boiler/charcoal_block"
     "1$large_boiler/charcoal_dust"
     "1$large_boiler/coal_dust"
     "1$laser_engraver/engrave_apatite_flawless_gem_to_gem"
     "1$laser_engraver/engrave_cinnabar_flawless_gem_to_gem"
     "1$laser_engraver/engrave_coal_flawless_gem_to_gem"
     "1$laser_engraver/engrave_diamond_flawless_gem_to_gem"
     "1$laser_engraver/engrave_diamond_gem_to_flawed_gem"
     "1$laser_engraver/engrave_emerald_flawless_gem_to_gem"
     "1$laser_engraver/engrave_emerald_gem_to_flawed_gem"
     "1$laser_engraver/engrave_fluorite_flawless_gem_to_gem"
     "1$laser_engraver/engrave_lapis_flawless_gem_to_gem"
     "1$laser_engraver/engrave_lapis_gem_to_flawed_gem"
     "1$laser_engraver/engrave_ruby_flawless_gem_to_gem"
     "1$laser_engraver/engrave_sapphire_flawless_gem_to_gem"
     "1$lathe/lathe_chromium_to_rod"
     "1$lathe/lathe_stainless_steel_to_rod"
     "1$macerator/macerate_beryllium_ore_to_raw_ore"
     "1$macerator/macerate_brass_gear"
     "1$macerator/macerate_copper_gear"
     "1$macerator/macerate_deepslate_beryllium_ore_to_raw_ore"
     "1$macerator/macerate_electrum_gear"
     "1$macerator/macerate_endstone_beryllium_ore_to_raw_ore"
     "1$macerator/macerate_fluorite_ingot"
     "1$macerator/macerate_fluorite_nugget"
     "1$macerator/macerate_gold_gear"
     "1$macerator/macerate_graphite_ingot"
     "1$macerator/macerate_graphite_nugget"
     "1$macerator/macerate_lead_gear"
     "1$macerator/macerate_netherrack_beryllium_ore_to_raw_ore"
     "1$macerator/macerate_nickel_gear"
     "1$macerator/macerate_osmium_gear"
     "1$macerator/macerate_platinum_gear"
     "1$macerator/macerate_silver_gear"
     "1$macerator/macerate_tin_gear"
     "1$macerator/macerate_uranium_gear"
     "1$macerator/macerate_zinc_gear"
     "1$pyrolyse_oven/charcoal_to_coal_tar"
     "1$pyrolyse_oven/coal_to_coal_tar"
     "1$shaped/stick_chromium"
     "1$shaped/stick_long_stainless_steel"
     "1$shaped/stick_stainless_steel"
     "1$shapeless/gem_to_gem_gem_diamond"
     "1$shapeless/gem_to_gem_gem_emerald"
     "1$shapeless/gem_to_gem_gem_lapis"
     "1$sifter/sift_diamond_purified_ore_to_gems"
     "1$sifter/sift_emerald_purified_ore_to_gems"
     "1$sifter/sift_lapis_purified_ore_to_gems"
     "1$smelting/dust_bornite__dust_to_ingot"
     "1$smelting/dust_chalcocite__dust_to_ingot"
     "1$smelting/dust_chalcopyrite__dust_to_ingot"
     "1$smelting/dust_copper__demagnetize_from_dust"
     "1$smelting/dust_gold__demagnetize_from_dust"
     "1$smelting/dust_malachite__ingot"
     "1$smelting/dust_tetrahedrite__dust_to_ingot"
     "1$smelting/smelt_bornite_ore_to_ingot"
     "1$smelting/smelt_chalcocite_ore_to_ingot"
     "1$smelting/smelt_chalcopyrite_ore_to_ingot"
     "1$smelting/smelt_copper_ore_to_ingot"
     "1$smelting/smelt_crushed_ore_bornite_to_ingot"
     "1$smelting/smelt_crushed_ore_chalcocite_to_ingot"
     "1$smelting/smelt_crushed_ore_chalcopyrite_to_ingot"
     "1$smelting/smelt_crushed_ore_copper_to_ingot"
     "1$smelting/smelt_crushed_ore_gold_to_ingot"
     "1$smelting/smelt_crushed_ore_malachite_to_ingot"
     "1$smelting/smelt_crushed_ore_tetrahedrite_to_ingot"
     "1$smelting/smelt_deepslate_bornite_ore_to_ingot"
     "1$smelting/smelt_deepslate_chalcocite_ore_to_ingot"
     "1$smelting/smelt_deepslate_chalcopyrite_ore_to_ingot"
     "1$smelting/smelt_deepslate_copper_ore_to_ingot"
     "1$smelting/smelt_deepslate_diamond_ore_to_ingot"
     "1$smelting/smelt_deepslate_emerald_ore_to_ingot"
     "1$smelting/smelt_deepslate_gold_ore_to_ingot"
     "1$smelting/smelt_deepslate_lapis_ore_to_ingot"
     "1$smelting/smelt_deepslate_malachite_ore_to_ingot"
     "1$smelting/smelt_deepslate_tetrahedrite_ore_to_ingot"
     "1$smelting/smelt_diamond_ore_to_ingot"
     "1$smelting/smelt_emerald_ore_to_ingot"
     "1$smelting/smelt_endstone_bornite_ore_to_ingot"
     "1$smelting/smelt_endstone_chalcocite_ore_to_ingot"
     "1$smelting/smelt_endstone_chalcopyrite_ore_to_ingot"
     "1$smelting/smelt_endstone_copper_ore_to_ingot"
     "1$smelting/smelt_endstone_diamond_ore_to_ingot"
     "1$smelting/smelt_endstone_emerald_ore_to_ingot"
     "1$smelting/smelt_endstone_gold_ore_to_ingot"
     "1$smelting/smelt_endstone_lapis_ore_to_ingot"
     "1$smelting/smelt_endstone_malachite_ore_to_ingot"
     "1$smelting/smelt_endstone_tetrahedrite_ore_to_ingot"
     "1$smelting/smelt_gold_ore_to_ingot"
     "1$smelting/smelt_impure_dust_bornite_to_ingot"
     "1$smelting/smelt_impure_dust_chalcocite_to_ingot"
     "1$smelting/smelt_impure_dust_chalcopyrite_to_ingot"
     "1$smelting/smelt_impure_dust_copper_to_ingot"
     "1$smelting/smelt_impure_dust_gold_to_ingot"
     "1$smelting/smelt_impure_dust_malachite_to_ingot"
     "1$smelting/smelt_impure_dust_tetrahedrite_to_ingot"
     "1$smelting/smelt_lapis_ore_to_ingot"
     "1$smelting/smelt_malachite_ore_to_ingot"
     "1$smelting/smelt_netherrack_bornite_ore_to_ingot"
     "1$smelting/smelt_netherrack_chalcocite_ore_to_ingot"
     "1$smelting/smelt_netherrack_chalcopyrite_ore_to_ingot"
     "1$smelting/smelt_netherrack_copper_ore_to_ingot"
     "1$smelting/smelt_netherrack_diamond_ore_to_ingot"
     "1$smelting/smelt_netherrack_emerald_ore_to_ingot"
     "1$smelting/smelt_netherrack_gold_ore_to_ingot"
     "1$smelting/smelt_netherrack_lapis_ore_to_ingot"
     "1$smelting/smelt_netherrack_malachite_ore_to_ingot"
     "1$smelting/smelt_netherrack_tetrahedrite_ore_to_ingot"
     "1$smelting/smelt_pure_dust_bornite_to_ingot"
     "1$smelting/smelt_pure_dust_chalcocite_to_ingot"
     "1$smelting/smelt_pure_dust_chalcopyrite_to_ingot"
     "1$smelting/smelt_pure_dust_copper_to_ingot"
     "1$smelting/smelt_pure_dust_gold_to_ingot"
     "1$smelting/smelt_pure_dust_malachite_to_ingot"
     "1$smelting/smelt_pure_dust_tetrahedrite_to_ingot"
     "1$smelting/smelt_purified_ore_bornite_to_ingot"
     "1$smelting/smelt_purified_ore_chalcocite_to_ingot"
     "1$smelting/smelt_purified_ore_chalcopyrite_to_ingot"
     "1$smelting/smelt_purified_ore_copper_to_ingot"
     "1$smelting/smelt_purified_ore_gold_to_ingot"
     "1$smelting/smelt_purified_ore_malachite_to_ingot"
     "1$smelting/smelt_purified_ore_tetrahedrite_to_ingot"
     "1$smelting/smelt_raw_bornite_ore_to_ingot"
     "1$smelting/smelt_raw_chalcocite_ore_to_ingot"
     "1$smelting/smelt_raw_chalcopyrite_ore_to_ingot"
     "1$smelting/smelt_raw_diamond_ore_to_ingot"
     "1$smelting/smelt_raw_emerald_ore_to_ingot"
     "1$smelting/smelt_raw_lapis_ore_to_ingot"
     "1$smelting/smelt_raw_malachite_ore_to_ingot"
     "1$smelting/smelt_raw_tetrahedrite_ore_to_ingot"
     "1$smelting/smelt_refined_ore_bornite_to_ingot"
     "1$smelting/smelt_refined_ore_chalcocite_to_ingot"
     "1$smelting/smelt_refined_ore_chalcopyrite_to_ingot"
     "1$smelting/smelt_refined_ore_copper_to_ingot"
     "1$smelting/smelt_refined_ore_gold_to_ingot"
     "1$smelting/smelt_refined_ore_malachite_to_ingot"
     "1$smelting/smelt_refined_ore_tetrahedrite_to_ingot"
     "1$smelting/smelt_tetrahedrite_ore_to_ingot"
     "1$steam_boiler/charcoal_block"
     "1$steam_boiler/charcoal_dust"
     "1$steam_boiler/coal_dust"
   ]
 }

```


</details>

<details>
<summary>almostunified/immersiveengineering</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "immersiveengineering"
   recipes: [
     "1$alloysmelter/brass"
     "1$alloysmelter/bronze"
     "1$alloysmelter/electrum"
     "1$alloysmelter/invar"
     "1$alloysmelter/rose_gold"
     "1$arcfurnace/alloy_brass"
     "1$arcfurnace/alloy_bronze"
     "1$arcfurnace/alloy_electrum"
     "1$arcfurnace/alloy_invar"
     "1$arcfurnace/alloy_rose_gold"
+    "1$arcfurnace/dust_aluminum"
     "1$arcfurnace/dust_brass"
     "1$arcfurnace/dust_bronze"
     "1$arcfurnace/dust_cobalt"
     "1$arcfurnace/dust_copper"
     "1$arcfurnace/dust_electrum"
     "1$arcfurnace/dust_gold"
     "1$arcfurnace/dust_invar"
     "1$arcfurnace/dust_iron"
     "1$arcfurnace/dust_lead"
     "1$arcfurnace/dust_nickel"
     "1$arcfurnace/dust_osmium"
     "1$arcfurnace/dust_platinum"
     "1$arcfurnace/dust_rose_gold"
     "1$arcfurnace/dust_silver"
     "1$arcfurnace/dust_steel"
     "1$arcfurnace/dust_tin"
     "1$arcfurnace/dust_tungsten"
     "1$arcfurnace/dust_uranium"
     "1$arcfurnace/dust_zinc"
+    "1$arcfurnace/ore_aluminum"
     "1$arcfurnace/ore_cobalt"
     "1$arcfurnace/ore_copper"
     "1$arcfurnace/ore_gold"
     "1$arcfurnace/ore_iron"
     "1$arcfurnace/ore_lead"
     "1$arcfurnace/ore_nickel"
     "1$arcfurnace/ore_osmium"
     "1$arcfurnace/ore_platinum"
     "1$arcfurnace/ore_silver"
     "1$arcfurnace/ore_tin"
     "1$arcfurnace/ore_tungsten"
     "1$arcfurnace/ore_uranium"
     "1$arcfurnace/ore_zinc"
+    "1$arcfurnace/raw_block_aluminum"
     "1$arcfurnace/raw_block_cobalt"
     "1$arcfurnace/raw_block_copper"
     "1$arcfurnace/raw_block_gold"
     "1$arcfurnace/raw_block_iron"
     "1$arcfurnace/raw_block_lead"
     "1$arcfurnace/raw_block_nickel"
     "1$arcfurnace/raw_block_osmium"
     "1$arcfurnace/raw_block_platinum"
     "1$arcfurnace/raw_block_silver"
     "1$arcfurnace/raw_block_tin"
     "1$arcfurnace/raw_block_tungsten"
     "1$arcfurnace/raw_block_uranium"
     "1$arcfurnace/raw_block_zinc"
+    "1$arcfurnace/raw_ore_aluminum"
     "1$arcfurnace/raw_ore_cobalt"
     "1$arcfurnace/raw_ore_copper"
     "1$arcfurnace/raw_ore_gold"
     "1$arcfurnace/raw_ore_iron"
     "1$arcfurnace/raw_ore_lead"
     "1$arcfurnace/raw_ore_nickel"
     "1$arcfurnace/raw_ore_osmium"
     "1$arcfurnace/raw_ore_platinum"
     "1$arcfurnace/raw_ore_silver"
     "1$arcfurnace/raw_ore_tin"
     "1$arcfurnace/raw_ore_tungsten"
     "1$arcfurnace/raw_ore_uranium"
     "1$arcfurnace/raw_ore_zinc"
     "1$arcfurnace/steel"
     "1$blastfurnace/steel"
     "1$blastfurnace/steel_block"
     "1$bottling/copper_aging"
     "1$cokeoven/coke"
     "1$cokeoven/coke_block"
     "1$crafting/coke_to_coal_coke"
     "1$crafting/coke_to_slab"
     "1$crafting/gunpowder_from_dusts"
     "1$crafting/hammercrushing_cobalt"
     "1$crafting/hammercrushing_copper"
     "1$crafting/hammercrushing_gold"
     "1$crafting/hammercrushing_iron"
     "1$crafting/hammercrushing_lead"
     "1$crafting/hammercrushing_nickel"
     "1$crafting/hammercrushing_osmium"
     "1$crafting/hammercrushing_platinum"
     "1$crafting/hammercrushing_silver"
     "1$crafting/hammercrushing_tin"
     "1$crafting/hammercrushing_tungsten"
     "1$crafting/hammercrushing_uranium"
     "1$crafting/hammercrushing_zinc"
     "1$crafting/ingot_aluminum_to_storage_aluminum"
     "1$crafting/ingot_constantan_to_nugget_constantan"
     "1$crafting/ingot_constantan_to_storage_constantan"
-    "1$crafting/nugget_aluminum_to_ingot_aluminum"
     "1$crafting/nugget_constantan_to_ingot_constantan"
     "1$crafting/plate_aluminum_hammering"
     "1$crafting/plate_copper_hammering"
     "1$crafting/plate_electrum_hammering"
     "1$crafting/plate_gold_hammering"
     "1$crafting/plate_iron_hammering"
     "1$crafting/plate_lead_hammering"
     "1$crafting/plate_nickel_hammering"
     "1$crafting/plate_silver_hammering"
     "1$crafting/plate_steel_hammering"
     "1$crafting/plate_uranium_hammering"
     "1$crafting/raw_aluminum_to_raw_block_aluminum"
     "1$crafting/raw_block_aluminum_to_raw_aluminum"
     "1$crafting/raw_block_uranium_to_raw_uranium"
     "1$crafting/raw_hammercrushing_cobalt"
     "1$crafting/raw_hammercrushing_copper"
     "1$crafting/raw_hammercrushing_gold"
     "1$crafting/raw_hammercrushing_iron"
     "1$crafting/raw_hammercrushing_lead"
     "1$crafting/raw_hammercrushing_nickel"
     "1$crafting/raw_hammercrushing_osmium"
     "1$crafting/raw_hammercrushing_platinum"
     "1$crafting/raw_hammercrushing_silver"
     "1$crafting/raw_hammercrushing_tin"
     "1$crafting/raw_hammercrushing_tungsten"
     "1$crafting/raw_hammercrushing_uranium"
     "1$crafting/raw_hammercrushing_zinc"
     "1$crafting/raw_uranium_to_raw_block_uranium"
     "1$crafting/razor_wire"
     "1$crafting/stick_iron"
     "1$crafting/stick_steel"
-    "1$crafting/storage_aluminum_to_ingot_aluminum"
     "1$crafting/storage_aluminum_to_slab"
     "1$crafting/storage_constantan_to_ingot_constantan"
     "1$crafting/storage_constantan_to_slab"
     "1$crafting/storage_electrum_from_slab"
     "1$crafting/storage_electrum_to_slab"
     "1$crafting/storage_lead_from_slab"
     "1$crafting/storage_lead_to_slab"
     "1$crafting/storage_nickel_from_slab"
     "1$crafting/storage_nickel_to_slab"
     "1$crafting/storage_silver_from_slab"
     "1$crafting/storage_silver_to_slab"
     "1$crafting/storage_steel_from_slab"
     "1$crafting/storage_steel_to_slab"
     "1$crafting/storage_uranium_from_slab"
     "1$crafting/storage_uranium_to_slab"
     "1$crafting/toolupgrade_revolver_electro"
     "1$crafting/wirecoil_structure_steel"
     "1$crusher/blaze_powder"
     "1$crusher/coal"
     "1$crusher/coal_block"
     "1$crusher/ingot_brass"
     "1$crusher/ingot_bronze"
     "1$crusher/ingot_cobalt"
     "1$crusher/ingot_copper"
     "1$crusher/ingot_electrum"
     "1$crusher/ingot_gold"
     "1$crusher/ingot_invar"
     "1$crusher/ingot_iron"
     "1$crusher/ingot_lead"
     "1$crusher/ingot_nickel"
     "1$crusher/ingot_osmium"
     "1$crusher/ingot_platinum"
     "1$crusher/ingot_rose_gold"
     "1$crusher/ingot_silver"
     "1$crusher/ingot_steel"
     "1$crusher/ingot_tin"
     "1$crusher/ingot_tungsten"
     "1$crusher/ingot_uranium"
     "1$crusher/ingot_zinc"
     "1$crusher/ore_coal"
     "1$crusher/ore_cobalt"
     "1$crusher/ore_copper"
     "1$crusher/ore_diamond"
     "1$crusher/ore_emerald"
     "1$crusher/ore_iron"
     "1$crusher/ore_lapis"
     "1$crusher/ore_lead"
     "1$crusher/ore_nickel"
     "1$crusher/ore_osmium"
     "1$crusher/ore_platinum"
     "1$crusher/ore_quartz"
     "1$crusher/ore_silver"
     "1$crusher/ore_tin"
     "1$crusher/ore_tungsten"
     "1$crusher/ore_uranium"
     "1$crusher/ore_zinc"
     "1$crusher/raw_block_cobalt"
     "1$crusher/raw_block_copper"
     "1$crusher/raw_block_gold"
     "1$crusher/raw_block_iron"
     "1$crusher/raw_block_lead"
     "1$crusher/raw_block_nickel"
     "1$crusher/raw_block_osmium"
     "1$crusher/raw_block_platinum"
     "1$crusher/raw_block_silver"
     "1$crusher/raw_block_tin"
     "1$crusher/raw_block_tungsten"
     "1$crusher/raw_block_uranium"
     "1$crusher/raw_block_zinc"
     "1$crusher/raw_ore_cobalt"
     "1$crusher/raw_ore_copper"
     "1$crusher/raw_ore_gold"
     "1$crusher/raw_ore_iron"
     "1$crusher/raw_ore_lead"
     "1$crusher/raw_ore_nickel"
     "1$crusher/raw_ore_osmium"
     "1$crusher/raw_ore_platinum"
     "1$crusher/raw_ore_silver"
     "1$crusher/raw_ore_tin"
     "1$crusher/raw_ore_tungsten"
     "1$crusher/raw_ore_uranium"
     "1$crusher/raw_ore_zinc"
     "1$large_boiler/coke"
     "1$metalpress/gear_bronze"
     "1$metalpress/gear_invar"
     "1$metalpress/gear_iron"
     "1$metalpress/gear_steel"
     "1$metalpress/gear_tungsten"
     "1$metalpress/plate_aluminum"
     "1$metalpress/plate_brass"
     "1$metalpress/plate_bronze"
     "1$metalpress/plate_cobalt"
     "1$metalpress/plate_copper"
     "1$metalpress/plate_electrum"
     "1$metalpress/plate_gold"
     "1$metalpress/plate_invar"
     "1$metalpress/plate_iron"
     "1$metalpress/plate_lead"
     "1$metalpress/plate_nickel"
     "1$metalpress/plate_osmium"
     "1$metalpress/plate_platinum"
     "1$metalpress/plate_rose_gold"
     "1$metalpress/plate_silver"
     "1$metalpress/plate_steel"
     "1$metalpress/plate_tin"
     "1$metalpress/plate_tungsten"
     "1$metalpress/plate_uranium"
     "1$metalpress/plate_zinc"
     "1$metalpress/rod_brass"
     "1$metalpress/rod_bronze"
     "1$metalpress/rod_cobalt"
     "1$metalpress/rod_copper"
     "1$metalpress/rod_electrum"
     "1$metalpress/rod_gold"
     "1$metalpress/rod_invar"
     "1$metalpress/rod_iron"
     "1$metalpress/rod_lead"
     "1$metalpress/rod_nickel"
     "1$metalpress/rod_osmium"
     "1$metalpress/rod_platinum"
     "1$metalpress/rod_rose_gold"
     "1$metalpress/rod_silver"
     "1$metalpress/rod_steel"
     "1$metalpress/rod_tin"
     "1$metalpress/rod_tungsten"
     "1$metalpress/rod_uranium"
     "1$metalpress/rod_zinc"
-    "1$smelting/ingot_aluminum3"
-    "1$smelting/ingot_aluminum_from_blasting3"
-    "1$smelting/ingot_aluminum_from_dust"
-    "1$smelting/ingot_aluminum_from_dust_from_blasting"
     "1$smelting/ingot_constantan_from_dust"
     "1$smelting/ingot_constantan_from_dust_from_blasting"
     "1$smelting/ingot_lead_from_dust_from_blasting"
     "1$smelting/ingot_uranium_from_dust_from_blasting"
     "1$smelting/nugget_aluminum_recycle_faraday_boots"
     "1$smelting/nugget_aluminum_recycle_faraday_boots_from_blasting"
     "1$smelting/nugget_aluminum_recycle_faraday_chestplate"
     "1$smelting/nugget_aluminum_recycle_faraday_chestplate_from_blasting"
     "1$smelting/nugget_aluminum_recycle_faraday_helmet"
     "1$smelting/nugget_aluminum_recycle_faraday_helmet_from_blasting"
     "1$smelting/nugget_aluminum_recycle_faraday_leggings"
     "1$smelting/nugget_aluminum_recycle_faraday_leggings_from_blasting"
     "1$smelting/nugget_steel_recycle_axe"
     "1$smelting/nugget_steel_recycle_axe_from_blasting"
     "1$smelting/nugget_steel_recycle_pick"
     "1$smelting/nugget_steel_recycle_pick_from_blasting"
     "1$smelting/nugget_steel_recycle_shovel"
     "1$smelting/nugget_steel_recycle_shovel_from_blasting"
     "1$smelting/nugget_steel_recycle_steel_boots"
     "1$smelting/nugget_steel_recycle_steel_boots_from_blasting"
     "1$smelting/nugget_steel_recycle_steel_chestplate"
     "1$smelting/nugget_steel_recycle_steel_chestplate_from_blasting"
     "1$smelting/nugget_steel_recycle_steel_helmet"
     "1$smelting/nugget_steel_recycle_steel_helmet_from_blasting"
     "1$smelting/nugget_steel_recycle_steel_leggings"
     "1$smelting/nugget_steel_recycle_steel_leggings_from_blasting"
     "1$smelting/nugget_steel_recycle_sword"
     "1$smelting/nugget_steel_recycle_sword_from_blasting"
     "1$steam_boiler/coke"
     "3$crafting/copper_ingot_to_nugget_copper"
     "3$crafting/electrum_mix"
     "3$crafting/ingot_aluminum_to_nugget_aluminum"
     "3$crafting/ingot_electrum_to_nugget_electrum"
     "3$crafting/ingot_electrum_to_storage_electrum"
     "3$crafting/ingot_lead_to_nugget_lead"
     "3$crafting/ingot_lead_to_storage_lead"
     "3$crafting/ingot_nickel_to_nugget_nickel"
     "3$crafting/ingot_nickel_to_storage_nickel"
     "3$crafting/ingot_silver_to_nugget_silver"
     "3$crafting/ingot_silver_to_storage_silver"
     "3$crafting/ingot_steel_to_nugget_steel"
     "3$crafting/ingot_steel_to_storage_steel"
     "3$crafting/ingot_uranium_to_nugget_uranium"
     "3$crafting/ingot_uranium_to_storage_uranium"
+    "3$crafting/nugget_aluminum_to_ingot_aluminum"
     "3$crafting/nugget_copper_to_copper_ingot"
     "3$crafting/nugget_electrum_to_ingot_electrum"
     "3$crafting/nugget_lead_to_ingot_lead"
     "3$crafting/nugget_nickel_to_ingot_nickel"
     "3$crafting/nugget_silver_to_ingot_silver"
     "3$crafting/nugget_steel_to_ingot_steel"
     "3$crafting/nugget_uranium_to_ingot_uranium"
     "3$crafting/raw_block_lead_to_raw_lead"
     "3$crafting/raw_block_nickel_to_raw_nickel"
     "3$crafting/raw_block_silver_to_raw_silver"
     "3$crafting/raw_lead_to_raw_block_lead"
     "3$crafting/raw_nickel_to_raw_block_nickel"
     "3$crafting/raw_silver_to_raw_block_silver"
+    "3$crafting/storage_aluminum_to_ingot_aluminum"
     "3$crafting/storage_electrum_to_ingot_electrum"
     "3$crafting/storage_lead_to_ingot_lead"
     "3$crafting/storage_nickel_to_ingot_nickel"
     "3$crafting/storage_silver_to_ingot_silver"
     "3$crafting/storage_steel_to_ingot_steel"
     "3$crafting/storage_uranium_to_ingot_uranium"
     "3$crusher/nether_gold"
     "3$crusher/ore_gold"
     "3$smelting/copper_ingot_from_dust"
     "3$smelting/copper_ingot_from_dust_from_blasting"
     "3$smelting/gold_ingot_from_dust"
     "3$smelting/gold_ingot_from_dust_from_blasting"
     "3$smelting/ingot_aluminum"
     "3$smelting/ingot_aluminum2"
+    "3$smelting/ingot_aluminum3"
     "3$smelting/ingot_aluminum_from_blasting"
     "3$smelting/ingot_aluminum_from_blasting2"
+    "3$smelting/ingot_aluminum_from_blasting3"
+    "3$smelting/ingot_aluminum_from_dust"
+    "3$smelting/ingot_aluminum_from_dust_from_blasting"
     "3$smelting/ingot_electrum_from_dust"
     "3$smelting/ingot_electrum_from_dust_from_blasting"
     "3$smelting/ingot_lead"
     "3$smelting/ingot_lead2"
     "3$smelting/ingot_lead3"
     "3$smelting/ingot_lead_from_blasting"
     "3$smelting/ingot_lead_from_blasting2"
     "3$smelting/ingot_lead_from_blasting3"
     "3$smelting/ingot_lead_from_dust"
     "3$smelting/ingot_nickel"
     "3$smelting/ingot_nickel2"
     "3$smelting/ingot_nickel3"
     "3$smelting/ingot_nickel_from_blasting"
     "3$smelting/ingot_nickel_from_blasting2"
     "3$smelting/ingot_nickel_from_blasting3"
     "3$smelting/ingot_nickel_from_dust"
     "3$smelting/ingot_nickel_from_dust_from_blasting"
     "3$smelting/ingot_silver"
     "3$smelting/ingot_silver2"
     "3$smelting/ingot_silver3"
     "3$smelting/ingot_silver_from_blasting"
     "3$smelting/ingot_silver_from_blasting2"
     "3$smelting/ingot_silver_from_blasting3"
     "3$smelting/ingot_silver_from_dust"
     "3$smelting/ingot_silver_from_dust_from_blasting"
     "3$smelting/ingot_steel_from_dust"
     "3$smelting/ingot_steel_from_dust_from_blasting"
     "3$smelting/ingot_uranium"
     "3$smelting/ingot_uranium2"
     "3$smelting/ingot_uranium3"
     "3$smelting/ingot_uranium_from_blasting"
     "3$smelting/ingot_uranium_from_blasting2"
     "3$smelting/ingot_uranium_from_blasting3"
     "3$smelting/ingot_uranium_from_dust"
     "3$smelting/iron_ingot_from_dust"
     "3$smelting/iron_ingot_from_dust_from_blasting"
   ]
 }

```


</details>

<details>
<summary>almostunified/minecraft</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "minecraft"
   recipes: [
+    "1$aluminum_ingot_from_smelting"
+    "1$aluminum_ingot_from_smelting_deepslate"
     "1$blue_dye"
     "1$chain"
     "1$chromium_ingot_from_smelting"
     "1$chromium_ingot_from_smelting_deeplate"
     "1$copper_block"
     "1$copper_ingot_from_blasting_raw_copper"
     "1$copper_ingot_from_smelting_raw_copper"
     "1$copper_ingot_from_waxed_copper_block"
     "1$cut_copper"
     "1$cut_copper_from_copper_block_stonecutting"
     "1$cut_copper_slab_from_copper_block_stonecutting"
     "1$cut_copper_stairs_from_copper_block_stonecutting"
     "1$fire_charge"
     "1$glistering_melon_slice"
     "1$gold_ingot_from_blasting_raw_gold"
     "1$gold_ingot_from_smelting_raw_gold"
     "1$golden_carrot"
     "1$iron_ingot_from_blasting_raw_iron"
     "1$iron_ingot_from_smelting_raw_iron"
     "1$large_boiler/charcoal"
     "1$large_boiler/coal"
     "1$large_boiler/coal_block"
     "1$manganese_ingot_from_smelting"
     "1$manganese_ingot_from_smelting_deepslate"
     "1$molybdenum_ingot_from_smelting"
     "1$molybdenum_ingot_from_smelting_deepslate"
     "1$netherite_axe_smithing"
     "1$netherite_block"
     "1$netherite_boots_smithing"
     "1$netherite_chestplate_smithing"
     "1$netherite_helmet_smithing"
     "1$netherite_hoe_smithing"
     "1$netherite_ingot_from_netherite_block"
     "1$netherite_leggings_smithing"
     "1$netherite_pickaxe_smithing"
     "1$netherite_shovel_smithing"
     "1$netherite_sword_smithing"
     "1$nickel_ingot_from_smelting"
     "1$nickel_ingot_from_smelting_deepslate"
     "1$niob_ingot_from_smelting"
     "1$niob_ingot_from_smelting_deepslate"
     "1$raw_copper"
     "1$raw_copper_block"
     "1$raw_gold"
     "1$raw_gold_block"
     "1$raw_iron"
     "1$raw_iron_block"
     "1$soul_lantern"
     "1$steam_boiler/charcoal"
     "1$steam_boiler/coal"
     "1$steam_boiler/coal_block"
     "1$titanium_ingot_from_smelting"
     "1$titanium_ingot_from_smelting_deepslate"
     "1$uranium_ingot_from_smelting"
     "1$uranium_ingot_from_smelting_deepslate"
     "1$waxed_copper_block_from_honeycomb"
     "3$coal_from_blasting_coal_ore"
     "3$coal_from_blasting_deepslate_coal_ore"
     "3$coal_from_smelting_coal_ore"
     "3$coal_from_smelting_deepslate_coal_ore"
     "3$copper_ingot"
     "3$copper_ingot_from_blasting_copper_ore"
     "3$copper_ingot_from_blasting_deepslate_copper_ore"
     "3$copper_ingot_from_smelting_copper_ore"
     "3$copper_ingot_from_smelting_deepslate_copper_ore"
     "3$diamond_from_blasting_deepslate_diamond_ore"
     "3$diamond_from_blasting_diamond_ore"
     "3$diamond_from_smelting_deepslate_diamond_ore"
     "3$diamond_from_smelting_diamond_ore"
     "3$emerald_from_blasting_deepslate_emerald_ore"
     "3$emerald_from_blasting_emerald_ore"
     "3$emerald_from_smelting_deepslate_emerald_ore"
     "3$emerald_from_smelting_emerald_ore"
     "3$gold_ingot_from_blasting_deepslate_gold_ore"
     "3$gold_ingot_from_blasting_gold_ore"
     "3$gold_ingot_from_blasting_nether_gold_ore"
     "3$gold_ingot_from_smelting_deepslate_gold_ore"
     "3$gold_ingot_from_smelting_gold_ore"
     "3$gold_ingot_from_smelting_nether_gold_ore"
     "3$iron_ingot_from_blasting_deepslate_iron_ore"
     "3$iron_ingot_from_blasting_iron_ore"
     "3$iron_ingot_from_smelting_deepslate_iron_ore"
     "3$iron_ingot_from_smelting_iron_ore"
     "3$lapis_lazuli_from_blasting_deepslate_lapis_ore"
     "3$lapis_lazuli_from_blasting_lapis_ore"
     "3$lapis_lazuli_from_smelting_deepslate_lapis_ore"
     "3$lapis_lazuli_from_smelting_lapis_ore"
     "3$lead_ingot_from_blasting_deepslate_lead_ore"
     "3$lead_ingot_from_blasting_lead_ore"
     "3$lead_ingot_from_blasting_lead_raw"
     "3$lead_ingot_from_smelting_deepslate_lead_ore"
     "3$lead_ingot_from_smelting_lead_ore"
     "3$lead_ingot_from_smelting_lead_raw"
     "3$nickel_ingot_from_blasting_deepslate_nickel_ore"
     "3$nickel_ingot_from_blasting_nickel_ore"
     "3$nickel_ingot_from_blasting_nickel_raw"
     "3$nickel_ingot_from_smelting_deepslate_nickel_ore"
     "3$nickel_ingot_from_smelting_nickel_ore"
     "3$nickel_ingot_from_smelting_nickel_raw"
     "3$silver_ingot_from_blasting_deepslate_silver_ore"
     "3$silver_ingot_from_blasting_silver_ore"
     "3$silver_ingot_from_blasting_silver_raw"
     "3$silver_ingot_from_smelting_deepslate_silver_ore"
     "3$silver_ingot_from_smelting_silver_ore"
     "3$silver_ingot_from_smelting_silver_raw"
     "3$tin_ingot_from_blasting_deepslate_tin_ore"
     "3$tin_ingot_from_blasting_tin_ore"
     "3$tin_ingot_from_blasting_tin_raw"
     "3$tin_ingot_from_smelting_deepslate_tin_ore"
     "3$tin_ingot_from_smelting_tin_ore"
     "3$tin_ingot_from_smelting_tin_raw"
     "3$zinc_ingot_from_blasting_deepslate_zinc_ore"
     "3$zinc_ingot_from_blasting_zinc_ore"
     "3$zinc_ingot_from_blasting_zinc_raw"
     "3$zinc_ingot_from_smelting_deepslate_zinc_ore"
     "3$zinc_ingot_from_smelting_zinc_ore"
     "3$zinc_ingot_from_smelting_zinc_raw"
   ]
 }

```


</details>

<details>
<summary>almostunified/tfc</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "tfc"
   recipes: [
     "1$anvil/bismuth_bronze_rod"
     "1$anvil/bismuth_bronze_sheet"
     "1$anvil/bismuth_rod"
     "1$anvil/bismuth_sheet"
     "1$anvil/black_bronze_rod"
     "1$anvil/black_bronze_sheet"
     "1$anvil/black_steel_ingot"
     "1$anvil/black_steel_rod"
     "1$anvil/black_steel_sheet"
     "1$anvil/blue_steel_ingot"
     "1$anvil/blue_steel_rod"
     "1$anvil/blue_steel_sheet"
     "1$anvil/brass_rod"
     "1$anvil/brass_sheet"
     "1$anvil/bronze_rod"
     "1$anvil/bronze_sheet"
     "1$anvil/copper_rod"
     "1$anvil/copper_sheet"
     "1$anvil/gold_rod"
     "1$anvil/gold_sheet"
     "1$anvil/invar_plate"
     "1$anvil/nickel_rod"
     "1$anvil/nickel_sheet"
     "1$anvil/red_steel_ingot"
     "1$anvil/red_steel_rod"
     "1$anvil/red_steel_sheet"
     "1$anvil/rose_gold_rod"
     "1$anvil/rose_gold_sheet"
     "1$anvil/silver_rod"
     "1$anvil/silver_sheet"
     "1$anvil/steel_ingot"
     "1$anvil/steel_rod"
     "1$anvil/steel_sheet"
     "1$anvil/sterling_silver_rod"
     "1$anvil/sterling_silver_sheet"
     "1$anvil/tin_rod"
     "1$anvil/tin_sheet"
     "1$anvil/wrought_iron_from_bloom"
     "1$anvil/wrought_iron_rod"
     "1$anvil/wrought_iron_sheet"
     "1$anvil/zinc_rod"
     "1$anvil/zinc_sheet"
     "1$casting/bismuth_bronze_fire_ingot"
     "1$casting/bismuth_bronze_ingot"
     "1$casting/bismuth_fire_ingot"
     "1$casting/bismuth_ingot"
     "1$casting/black_bronze_fire_ingot"
     "1$casting/black_bronze_ingot"
     "1$casting/black_steel_fire_ingot"
     "1$casting/black_steel_ingot"
     "1$casting/blue_steel_fire_ingot"
     "1$casting/blue_steel_ingot"
     "1$casting/brass_fire_ingot"
     "1$casting/brass_ingot"
     "1$casting/bronze_fire_ingot"
     "1$casting/bronze_ingot"
     "1$casting/nickel_fire_ingot"
     "1$casting/nickel_ingot"
     "1$casting/red_steel_fire_ingot"
     "1$casting/red_steel_ingot"
     "1$casting/rose_gold_fire_ingot"
     "1$casting/rose_gold_ingot"
     "1$casting/silver_fire_ingot"
     "1$casting/silver_ingot"
     "1$casting/steel_fire_ingot"
     "1$casting/steel_ingot"
     "1$casting/sterling_silver_fire_ingot"
     "1$casting/sterling_silver_ingot"
     "1$casting/tin_fire_ingot"
     "1$casting/tin_ingot"
     "1$casting/wrought_iron_fire_ingot"
     "1$casting/wrought_iron_ingot"
     "1$casting/zinc_fire_ingot"
     "1$casting/zinc_ingot"
     "1$crafting/blast_furnace"
     "1$crafting/gunpowder"
     "1$crafting/gunpowder_graphite"
     "1$crafting/vanilla/lapis_block"
+    "1$heating/metal/aluminium_ingot"
     "1$heating/metal/bismuth_bronze_double_ingot"
     "1$heating/metal/bismuth_bronze_double_sheet"
     "1$heating/metal/bismuth_bronze_ingot"
     "1$heating/metal/bismuth_bronze_rod"
     "1$heating/metal/bismuth_bronze_sheet"
     "1$heating/metal/bismuth_double_ingot"
     "1$heating/metal/bismuth_double_sheet"
     "1$heating/metal/bismuth_ingot"
     "1$heating/metal/bismuth_rod"
     "1$heating/metal/bismuth_sheet"
     "1$heating/metal/black_bronze_double_ingot"
     "1$heating/metal/black_bronze_double_sheet"
     "1$heating/metal/black_bronze_ingot"
     "1$heating/metal/black_bronze_rod"
     "1$heating/metal/black_bronze_sheet"
     "1$heating/metal/black_steel_double_ingot"
     "1$heating/metal/black_steel_double_sheet"
     "1$heating/metal/black_steel_ingot"
     "1$heating/metal/black_steel_rod"
     "1$heating/metal/black_steel_sheet"
     "1$heating/metal/blue_steel_double_ingot"
     "1$heating/metal/blue_steel_double_sheet"
     "1$heating/metal/blue_steel_ingot"
     "1$heating/metal/blue_steel_rod"
     "1$heating/metal/blue_steel_sheet"
     "1$heating/metal/brass_double_ingot"
     "1$heating/metal/brass_double_sheet"
     "1$heating/metal/brass_ingot"
     "1$heating/metal/brass_rod"
     "1$heating/metal/brass_sheet"
     "1$heating/metal/bronze_double_ingot"
     "1$heating/metal/bronze_double_sheet"
     "1$heating/metal/bronze_ingot"
     "1$heating/metal/bronze_rod"
     "1$heating/metal/bronze_sheet"
     "1$heating/metal/cobalt_ingot"
     "1$heating/metal/copper_double_ingot"
     "1$heating/metal/copper_double_sheet"
     "1$heating/metal/copper_ingot"
     "1$heating/metal/copper_rod"
     "1$heating/metal/copper_sheet"
     "1$heating/metal/electrum_ingot"
     "1$heating/metal/gold_double_ingot"
     "1$heating/metal/gold_double_sheet"
     "1$heating/metal/gold_ingot"
     "1$heating/metal/gold_rod"
     "1$heating/metal/gold_sheet"
     "1$heating/metal/invar_double_ingot"
     "1$heating/metal/invar_ingot"
     "1$heating/metal/lead_ingot"
     "1$heating/metal/manganese_ingot"
     "1$heating/metal/nickel_double_ingot"
     "1$heating/metal/nickel_double_sheet"
     "1$heating/metal/nickel_ingot"
     "1$heating/metal/nickel_rod"
     "1$heating/metal/nickel_sheet"
     "1$heating/metal/raw_lead"
     "1$heating/metal/raw_silver"
     "1$heating/metal/raw_thorium"
     "1$heating/metal/raw_tin"
     "1$heating/metal/red_steel_double_ingot"
     "1$heating/metal/red_steel_double_sheet"
     "1$heating/metal/red_steel_ingot"
     "1$heating/metal/red_steel_rod"
     "1$heating/metal/red_steel_sheet"
     "1$heating/metal/rose_gold_double_ingot"
     "1$heating/metal/rose_gold_double_sheet"
     "1$heating/metal/rose_gold_ingot"
     "1$heating/metal/rose_gold_rod"
     "1$heating/metal/rose_gold_sheet"
     "1$heating/metal/silver_double_ingot"
     "1$heating/metal/silver_double_sheet"
     "1$heating/metal/silver_ingot"
     "1$heating/metal/silver_rod"
     "1$heating/metal/silver_sheet"
     "1$heating/metal/steel_double_ingot"
     "1$heating/metal/steel_double_sheet"
     "1$heating/metal/steel_ingot"
     "1$heating/metal/steel_rod"
     "1$heating/metal/steel_sheet"
     "1$heating/metal/sterling_silver_double_ingot"
     "1$heating/metal/sterling_silver_double_sheet"
     "1$heating/metal/sterling_silver_ingot"
     "1$heating/metal/sterling_silver_rod"
     "1$heating/metal/sterling_silver_sheet"
     "1$heating/metal/tin_double_ingot"
     "1$heating/metal/tin_double_sheet"
     "1$heating/metal/tin_ingot"
     "1$heating/metal/tin_rod"
     "1$heating/metal/tin_sheet"
     "1$heating/metal/uranium_ingot"
     "1$heating/metal/wrought_iron_double_ingot"
     "1$heating/metal/wrought_iron_double_sheet"
     "1$heating/metal/wrought_iron_ingot"
     "1$heating/metal/wrought_iron_rod"
     "1$heating/metal/wrought_iron_sheet"
     "1$heating/metal/zinc_double_ingot"
     "1$heating/metal/zinc_double_sheet"
     "1$heating/metal/zinc_ingot"
     "1$heating/metal/zinc_rod"
     "1$heating/metal/zinc_sheet"
     "1$quern/charcoal"
     "1$quern/diamond"
-    "1$quern/graphite_from_gt"
     "1$quern/sulfur"
     "1$welding/bismuth_bronze_double_sheet"
     "1$welding/bismuth_double_sheet"
     "1$welding/black_bronze_double_sheet"
     "1$welding/black_steel_double_sheet"
     "1$welding/blue_steel_double_sheet"
     "1$welding/brass_double_sheet"
     "1$welding/bronze_double_sheet"
     "1$welding/copper_double_sheet"
     "1$welding/gold_double_sheet"
     "1$welding/nickel_double_sheet"
     "1$welding/red_steel_double_sheet"
     "1$welding/rose_gold_double_sheet"
     "1$welding/silver_double_sheet"
     "1$welding/steel_double_sheet"
     "1$welding/sterling_silver_double_sheet"
     "1$welding/tin_double_sheet"
     "1$welding/wrought_iron_double_sheet"
     "1$welding/zinc_double_sheet"
     "3$quern/diamond_cut"
     "3$quern/emerald_cut"
+    "3$quern/graphite"
+    "3$quern/graphite_from_gt"
     "3$quern/lapis_lazuli_cut"
   ]
 }

```


</details>

<details>
<summary>almostunified/thoriumreactors</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "thoriumreactors"
   recipes: [
     "1$aluminum_block_craft_from_ingot"
+    "1$aluminum_ingot_craft_from_block"
     "1$aluminum_ingot_craft_from_nugget"
     "1$chromium_block_craft_from_ingot"
     "1$chromium_ingot_craft_from_block"
     "1$chromium_ingot_craft_from_nugget"
     "1$chromium_nugget_craft_from_ingot"
     "1$cobalt_block_craft_from_ingot"
     "1$cobalt_ingot_craft_from_block"
     "1$cobalt_ingot_craft_from_nugget"
     "1$cobalt_nugget_craft_from_ingot"
     "1$factory_block"
     "1$fluorite_block_craft_from_ingot"
     "1$fluorite_ingot_craft_from_nugget"
     "1$fluorite_nugget_craft_from_ingot"
     "1$graphite_block_craft_from_ingot"
     "1$graphite_ingot_craft_from_nugget"
     "1$graphite_nugget_craft_from_ingot"
     "1$manganese_block_craft_from_ingot"
     "1$manganese_ingot_craft_from_block"
     "1$manganese_ingot_craft_from_nugget"
     "1$manganese_nugget_craft_from_ingot"
     "1$molybdenum_block_craft_from_ingot"
     "1$molybdenum_ingot_craft_from_block"
     "1$molybdenum_ingot_craft_from_nugget"
     "1$molybdenum_nugget_craft_from_ingot"
     "1$nickel_block_craft_from_ingot"
     "1$nickel_ingot_craft_from_block"
     "1$nickel_ingot_craft_from_nugget"
     "1$niob_block_craft_from_ingot"
     "1$niob_ingot_craft_from_block"
     "1$niob_ingot_craft_from_nugget"
     "1$niob_nugget_craft_from_ingot"
     "1$steel_block_craft_from_ingot"
     "1$steel_ingot_craft_from_block"
     "1$steel_ingot_craft_from_nugget"
     "1$thorium"
     "1$thorium_block"
     "1$thorium_crafting/blast_furnace"
     "1$thorium_crafting/blasted_iron_chest"
     "1$thorium_crafting/concentrator_block"
     "1$thorium_crafting/configurator"
     "1$thorium_crafting/crystallizer"
     "1$thorium_crafting/decomposer_block"
     "1$thorium_crafting/electrolytic_salt_separator"
     "1$thorium_crafting/electromagnetic_coil"
     "1$thorium_crafting/factory_block"
     "1$thorium_crafting/fluid_centrifuge"
     "1$thorium_crafting/fluid_enricher"
     "1$thorium_crafting/fluid_evaporation"
     "1$thorium_crafting/generator"
     "1$thorium_crafting/generic_energy_tank"
     "1$thorium_crafting/generic_fluid_tank"
     "1$thorium_crafting/graphite_tube"
     "1$thorium_crafting/machine_casing"
     "1$thorium_crafting/module_empty"
     "1$thorium_crafting/module_energy"
     "1$thorium_crafting/module_io"
     "1$thorium_crafting/module_processing"
     "1$thorium_crafting/module_sensor"
     "1$thorium_crafting/module_storage"
     "1$thorium_crafting/module_tank"
     "1$thorium_crafting/progressive_energy_tank"
     "1$thorium_crafting/progressive_fluid_tank"
     "1$thorium_crafting/reactor_casing"
     "1$thorium_crafting/reactor_control_rod"
     "1$thorium_crafting/reactor_controller"
     "1$thorium_crafting/reactor_core"
     "1$thorium_crafting/reactor_glass"
     "1$thorium_crafting/reactor_valve"
     "1$thorium_crafting/redstone_processor"
     "1$thorium_crafting/salt_melter"
     "1$thorium_crafting/simple_energy_tank"
     "1$thorium_crafting/simple_fluid_tank"
     "1$thorium_crafting/steel_chest"
     "1$thorium_crafting/thermal_conductor"
     "1$thorium_crafting/thermal_heat_controller"
     "1$thorium_crafting/thermal_heat_valve"
     "1$thorium_crafting/thermal_heatsink"
     "1$thorium_crafting/thorium_chest"
     "1$thorium_crafting/turbine_blade"
     "1$thorium_crafting/turbine_casing"
     "1$thorium_crafting/turbine_constroller"
     "1$thorium_crafting/turbine_glass"
     "1$thorium_crafting/turbine_power_port"
     "1$thorium_crafting/turbine_rotation_mount"
     "1$thorium_crafting/turbine_rotor"
     "1$thorium_crafting/turbine_valve"
     "1$thorium_crafting/turbine_vent"
     "1$thorium_crafting/uranium_oxidizer_block"
     "1$thorium_crafting/water_source_block"
     "1$thorium_crafting_table"
     "1$titanium_block_craft_from_ingot"
     "1$titanium_ingot_craft_from_block"
     "1$titanium_ingot_craft_from_nugget"
     "1$titanium_nugget_craft_from_ingot"
     "1$uranium_block_craft_from_ingot"
     "1$uranium_ingot_craft_from_block"
     "1$uranium_ingot_craft_from_nugget"
     "3$aluminum_nugget_craft_from_ingot"
     "3$nickel_nugget_craft_from_ingot"
     "3$steel_nugget_craft_from_ingot"
     "3$uranium_nugget_craft_from_ingot"
   ]
 }

```


</details>

<details>
<summary>almostunified/woodencog</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "woodencog"
   recipes: [
     "1$crushing/crushing_charcoal.json"
     "1$crushing/crushing_diamond.json"
+    "1$crushing/crushing_graphite.json"
     "1$crushing/crushing_sulfur.json"
     "1$crushing/milling_charcoal.json"
     "1$crushing/milling_diamond.json"
+    "1$crushing/milling_graphite.json"
     "1$crushing/milling_sulfur.json"
     "1$deploying/mold_to_ingot_bismuth"
     "1$deploying/mold_to_ingot_bismuth_bronze"
     "1$deploying/mold_to_ingot_black_bronze"
     "1$deploying/mold_to_ingot_black_steel"
     "1$deploying/mold_to_ingot_blue_steel"
     "1$deploying/mold_to_ingot_brass"
     "1$deploying/mold_to_ingot_bronze"
     "1$deploying/mold_to_ingot_nickel"
     "1$deploying/mold_to_ingot_red_steel"
     "1$deploying/mold_to_ingot_rose_gold"
     "1$deploying/mold_to_ingot_silver"
     "1$deploying/mold_to_ingot_steel"
     "1$deploying/mold_to_ingot_sterling_silver"
     "1$deploying/mold_to_ingot_tin"
     "1$deploying/mold_to_ingot_wrought_iron"
     "1$deploying/mold_to_ingot_zinc"
     "1$mixing/ingot_to_liquid_bismuth"
     "1$mixing/ingot_to_liquid_bismuth_bronze"
     "1$mixing/ingot_to_liquid_black_bronze"
     "1$mixing/ingot_to_liquid_black_steel"
     "1$mixing/ingot_to_liquid_blue_steel"
     "1$mixing/ingot_to_liquid_brass"
     "1$mixing/ingot_to_liquid_bronze"
     "1$mixing/ingot_to_liquid_copper"
     "1$mixing/ingot_to_liquid_gold"
     "1$mixing/ingot_to_liquid_nickel"
     "1$mixing/ingot_to_liquid_red_steel"
     "1$mixing/ingot_to_liquid_rose_gold"
     "1$mixing/ingot_to_liquid_silver"
     "1$mixing/ingot_to_liquid_steel"
     "1$mixing/ingot_to_liquid_sterling_silver"
     "1$mixing/ingot_to_liquid_tin"
     "1$mixing/ingot_to_liquid_wrought_iron"
     "1$mixing/ingot_to_liquid_zinc"
     "3$crafting/schematics/schematicannon"
     "3$crafting/sequenced_assembly/sturdy_sheet"
   ]
 }

```


</details>

<details>
<summary>create/blasting/ingot_aluminum_compat_immersiveengineering</summary>

```diff
 {
   type: "minecraft:blasting"
   category: "blocks"
   conditions: [
     {
       type: "forge:mod_loaded"
       modid: "immersiveengineering"
     }
   ]
   cookingtime: 100
   experience: 0.1
   ingredient: {
     item: "create:crushed_raw_aluminum"
   }
-  result: "immersiveengineering:ingot_aluminum"
+  result: "gtceu:aluminium_ingot"
 }

```


</details>

<details>
<summary>create/smelting/ingot_aluminum_compat_immersiveengineering</summary>

```diff
 {
   type: "minecraft:smelting"
   category: "blocks"
   conditions: [
     {
       type: "forge:mod_loaded"
       modid: "immersiveengineering"
     }
   ]
   cookingtime: 200
   experience: 0.1
   ingredient: {
     item: "create:crushed_raw_aluminum"
   }
-  result: "immersiveengineering:ingot_aluminum"
+  result: "gtceu:aluminium_ingot"
 }

```


</details>

<details>
<summary>gregitas/shaped/lv_chemical_vapor_depositor</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   result: {
     item: "gtceu:lv_chemical_vapor_depositor"
     count: 1
   }
   pattern: [
     "SCS"
     "GHG"
     "PCP"
   ]
   key: {
     S: {
-      item: "gtceu:stainless_steel_small_fluid_pipe"
+      item: "gtceu:steel_small_fluid_pipe"
     }
     C: {
       tag: "gtceu:circuits/lv"
     }
     G: {
       tag: "forge:glass"
     }
     H: {
       item: "gtceu:lv_machine_hull"
     }
     P: {
       item: "gtceu:lv_emitter"
     }
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_cleanroom</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 2372
+  duration: 2576
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:cleanroom"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 2372
+          amount: 2576
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 10
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:zinc_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:steel_ingot"
+            item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_cracker</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 2580
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:cracker"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 2580
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 721
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 721
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:titanium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_chemical_reactor</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 522
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_chemical_reactor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 522
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 653
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 653
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:titanium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_energy_input_hatch</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 738
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_energy_input_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 738
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:neodymium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_fluid_heater</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1332
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_fluid_heater"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1332
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_fluid_solidifier</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1332
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_fluid_solidifier"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1332
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_forming_press</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1280
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_forming_press"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1280
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:neodymium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_gas_collector</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1306
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_gas_collector"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1306
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_invar_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 645
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 645
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:titanium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_laser_engraver</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1526
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_laser_engraver"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1526
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:platinum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_mixer</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 496
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 496
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_muffler_hatch</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 640
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_muffler_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 640
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_naquadah_alloy_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1985
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_naquadah_alloy_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1985
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:titanium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:naquadah_alloy_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_stainless_steel_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 641
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_stainless_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 641
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:titanium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_ev_tungsten_carbide_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 809
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_tungsten_carbide_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 809
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:titanium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tungsten_carbide_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_filter_casing</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 1160
+  duration: 1197
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:filter_casing"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 1160
+          amount: 1197
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:zinc_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "gtceu:aluminium_ingot"
+            item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hp_steam_alloy_smelter</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1315
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hp_steam_alloy_smelter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1315
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 11
           ingredient: {
             item: "gtceu:bronze_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:wrought_iron_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tin_alloy_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 750
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 750
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:stainless_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_chemical_reactor</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 1121
+  duration: 1262
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_chemical_reactor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 1121
+          amount: 1262
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 40
           ingredient: {
             item: "gtceu:steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "firmalife:metal/ingot/stainless_steel"
+            item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 682
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 682
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:stainless_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_electromagnetic_separator</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 2352
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_electromagnetic_separator"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 2352
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_energy_input_hatch</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 984
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_energy_input_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 984
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:black_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_fluid_heater</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 2328
+  duration: 2580
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_fluid_heater"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 2328
+          amount: 2580
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:kanthal_ingot"
+            item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_fluid_solidifier</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 2580
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_fluid_solidifier"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 2580
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_forming_press</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 3080
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_forming_press"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 3080
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_gas_collector</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 2580
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_gas_collector"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 2580
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_invar_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 674
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 674
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:stainless_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_item_magnet</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 542
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_item_magnet"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 542
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:neodymium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:small_ash_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_laser_engraver</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 3080
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_laser_engraver"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 3080
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_naquadah_alloy_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 2014
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_naquadah_alloy_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 2014
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:stainless_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:naquadah_alloy_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_ore_washer</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 1321
+  duration: 1462
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_ore_washer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 1321
+          amount: 1462
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "firmalife:metal/ingot/stainless_steel"
+            item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_thermal_centrifuge</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1922
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_thermal_centrifuge"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1922
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:silver_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_hv_tungsten_carbide_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 838
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_tungsten_carbide_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 838
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:stainless_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tungsten_carbide_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1013
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1013
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tungsten_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_chemical_bath</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 3328
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_chemical_bath"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 3328
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 20
           ingredient: {
             item: "gtceu:graphene_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_steel_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 28
           ingredient: {
             item: "gtceu:tungsten_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 945
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 945
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tungsten_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_energy_input_hatch</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1766
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_energy_input_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1766
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:tungsten_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:iridium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:neodymium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_invar_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 937
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 937
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tungsten_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_lathe</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 3016
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_lathe"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 3016
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:tungsten_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_macerator</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 3016
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_macerator"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 3016
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:tungsten_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_naquadah_alloy_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 2277
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_naquadah_alloy_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 2277
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tungsten_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:naquadah_alloy_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_rock_crusher</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 3016
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_rock_crusher"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 3016
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:tungsten_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_stainless_steel_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 933
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_stainless_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 933
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tungsten_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_iv_tungsten_carbide_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1101
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_tungsten_carbide_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1101
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tungsten_steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tungsten_carbide_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_large_sifting_funnel</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 5504
+  duration: 5488
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:large_sifting_funnel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 5504
+          amount: 5488
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 24
           ingredient: {
             item: "gtceu:tungsten_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 16
           ingredient: {
             item: "gtceu:graphene_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:tungsten_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:zinc_ingot"
+            item: "gtceu:hsla_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_luv_polarizer</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 561
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:luv_polarizer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 561
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:niobium_nitride_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:vanadium_gallium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:niobium_titanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:small_ash_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_luv_processing_array</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 2692
+  duration: 5518
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:luv_processing_array"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 2692
+          amount: 5518
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 24
           ingredient: {
             item: "gtceu:kanthal_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:titanium_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 17
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
-            item: "firmalife:metal/ingot/stainless_steel"
+            item: "gtceu:naquadah_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_block_breaker</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 783
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_block_breaker"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 783
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:tin_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:wrought_iron_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:small_ash_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_brewery</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1271
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_brewery"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1271
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 59
           ingredient: {
             item: "gtceu:tin_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:bronze_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 13
           ingredient: {
             item: "gtceu:wrought_iron_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_centrifuge</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 783
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_centrifuge"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 783
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:tin_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:wrought_iron_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:small_ash_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_cutter</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1383
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_cutter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1383
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 40
           ingredient: {
             item: "gtceu:tin_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 40
           ingredient: {
             item: "gtceu:wrought_iron_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_distillery</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1271
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_distillery"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1271
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 59
           ingredient: {
             item: "gtceu:tin_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:bronze_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 13
           ingredient: {
             item: "gtceu:wrought_iron_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_electric_piston</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 722
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_electric_piston"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 722
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tin_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 13
           ingredient: {
             item: "gtceu:wrought_iron_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_energy_output_hatch</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 372
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_energy_output_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 372
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tin_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:wrought_iron_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_miner</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1322
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_miner"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1322
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 40
           ingredient: {
             item: "gtceu:wrought_iron_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tin_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_robot_arm</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1605
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_robot_arm"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1605
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 49
           ingredient: {
             item: "gtceu:tin_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 40
           ingredient: {
             item: "gtceu:wrought_iron_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_lv_thermal_centrifuge</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1035
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_thermal_centrifuge"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1035
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:tin_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:wrought_iron_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:small_ash_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 630
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 630
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:aluminium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 562
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 562
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:aluminium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_electric_motor</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 353
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_electric_motor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 353
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_energy_output_hatch</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 202
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_energy_output_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 202
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_fermenter</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 962
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_fermenter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 962
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:bronze_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 31
           ingredient: {
             item: "gtceu:steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 31
           ingredient: {
             item: "gtceu:annealed_copper_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_fluid_solidifier</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1732
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_fluid_solidifier"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1732
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:cupronickel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:bronze_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_gas_collector</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1669
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_gas_collector"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1669
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:cupronickel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:bronze_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_invar_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 554
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 554
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:aluminium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_mixer</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 633
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 633
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:bronze_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_muffler_hatch</summary>

```diff
 {
   type: "gtceu:arc_furnace"
-  duration: 762
+  duration: 799
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_muffler_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
-          amount: 762
+          amount: 799
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:bronze_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 31
           ingredient: {
             item: "gtceu:steel_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "gtceu:aluminium_ingot"
+            item: "gtceu:annealed_copper_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_naquadah_alloy_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 1894
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_naquadah_alloy_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 1894
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:aluminium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:naquadah_alloy_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_stainless_steel_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 550
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_stainless_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 550
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:aluminium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_mv_tungsten_carbide_drill</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 718
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_tungsten_carbide_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 718
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:aluminium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tungsten_carbide_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_prospector.hv</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 711
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:prospector.hv"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 711
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "firmalife:metal/ingot/stainless_steel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 22
           ingredient: {
             item: "gtceu:chromium_nugget"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "tfc:metal/ingot/gold"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "gtceu:small_dark_ash_dust"
+            item: "gtceu:small_ash_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/arc_furnace/arc_sterilizing_filter_casing</summary>

```diff
 {
   type: "gtceu:arc_furnace"
   duration: 2530
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:sterilizing_filter_casing"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     fluid: [
       {
         content: {
           amount: 2530
           value: [
             {
               tag: "forge:oxygen"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:zinc_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:naquadah_alloy_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tritanium_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_ingot"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/centrifuge/endstone_separation</summary>

```diff
 {
   type: "gtceu:centrifuge"
   duration: 320
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             tag: "forge:dusts/endstone"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     fluid: [
       {
         content: {
           amount: 120
           value: [
             {
               fluid: "gtceu:helium"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungstate_dust"
           }
         }
         chance: 0.0315
         tierChanceBoost: 0.011
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:platinum_dust"
           }
         }
         chance: 0.007
         tierChanceBoost: 0.0015
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "tfc:sand/yellow"
           }
         }
         chance: 0.9
         tierChanceBoost: 0.03
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 20
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/centrifuge/grass_block_separation</summary>

```diff
 {
   type: "gtceu:centrifuge"
   duration: 250
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "minecraft:grass_block"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:clay_dust"
           }
         }
         chance: 0.045
         tierChanceBoost: 0.01
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:plant_ball"
           }
         }
         chance: 0.3
         tierChanceBoost: 0.12
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "tfc:sand/yellow"
           }
         }
         chance: 0.5
         tierChanceBoost: 0.12
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/centrifuge/mycelium_separation</summary>

```diff
 {
   type: "gtceu:centrifuge"
   duration: 650
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "minecraft:mycelium"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "minecraft:brown_mushroom"
           }
         }
         chance: 0.25
         tierChanceBoost: 0.09
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:clay_dust"
           }
         }
         chance: 0.045
         tierChanceBoost: 0.01
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "tfc:sand/yellow"
           }
         }
         chance: 0.5
         tierChanceBoost: 0.12
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "minecraft:red_mushroom"
           }
         }
         chance: 0.25
         tierChanceBoost: 0.09
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/centrifuge/soul_sand_separation</summary>

```diff
 {
   type: "gtceu:centrifuge"
   duration: 200
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "minecraft:soul_sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     fluid: [
       {
         content: {
           amount: 80
           value: [
             {
               fluid: "gtceu:oil"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "tfc:sand/yellow"
           }
         }
         chance: 0.9
         tierChanceBoost: 0.013
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:coal_dust"
           }
         }
         chance: 0.0225
         tierChanceBoost: 0.004
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:saltpeter_dust"
           }
         }
         chance: 0.2
         tierChanceBoost: 0.016
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 80
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/create_mixer/black_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:black_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:black_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/blue_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:blue_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:blue_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/cyan_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:cyan_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:cyan_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/fertilizer</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 50
   inputs: {
     fluid: [
       {
         content: {
           amount: 1000
           value: [
             {
               tag: "forge:water"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             tag: "forge:dusts/wood"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             tag: "minecraft:dirt"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:fertilizer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/gray_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:gray_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:gray_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/green_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:green_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:green_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/light_gray_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:light_gray_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:light_gray_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/lime_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:lime_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:lime_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/orange_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:orange_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:orange_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/pink_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:pink_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:pink_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/create_mixer/white_concrete_powder</summary>

```diff
 {
   type: "gtceu:create_mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:white_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:white_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
   recipeConditions: [
     {
       type: "rpm"
       data: {
         rpm: 64
       }
     }
   ]
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_aluminium_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 31
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_aluminium_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 62
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_annealed_copper_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 68
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:annealed_copper_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:annealed_copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_annealed_copper_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 136
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:annealed_copper_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:annealed_copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_black_steel_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 69
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:black_steel_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:black_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_black_steel_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 138
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:black_steel_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:black_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_blue_alloy_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 120
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:blue_alloy_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:blue_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_blue_alloy_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 240
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:blue_alloy_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:blue_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_bronze_large_boiler</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 560
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:bronze_large_boiler"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_cleanroom</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 2168
+  duration: 2576
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:cleanroom"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 10
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:zinc_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:rubber_dust"
+            item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_cobalt_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 64
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:cobalt_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:cobalt_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_cobalt_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 128
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:cobalt_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:cobalt_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_copper_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 68
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:copper_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_copper_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 136
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:copper_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_cracker</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2131
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:cracker"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:small_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_diamond_lens</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 9
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            tag: "forge:lenses/diamond"
+            tag: "forge:lenses/light_blue"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:small_diamond_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_electrum_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 156
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:electrum_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_electrum_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 312
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:electrum_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_emerald_lens</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 13
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            tag: "forge:lenses/green"
+            tag: "forge:lenses/emerald"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:small_emerald_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_europium_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 156
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:europium_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:europium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_block_breaker</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 890
+  duration: 960
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_block_breaker"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
-            item: "gtceu:diamond_dust"
+            item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 721
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_chemical_reactor</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 464
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_chemical_reactor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:polyethylene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 653
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_emitter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 426
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_emitter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:platinum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_energy_input_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 694
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_energy_input_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_energy_output_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 710
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_energy_output_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_fluid_heater</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1221
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_fluid_heater"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:small_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_fluid_solidifier</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1221
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_fluid_solidifier"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:small_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_forming_press</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1196
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_forming_press"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_gas_collector</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1211
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_gas_collector"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:small_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_invar_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 645
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_laser_engraver</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1196
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_laser_engraver"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_mixer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 458
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_muffler_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 598
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_muffler_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_polarizer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 628
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_polarizer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:neodymium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_red_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 697
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_red_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:red_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_rock_crusher</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1176
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ev_rock_crusher"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ev_stainless_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 641
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:ev_stainless_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_gold_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 201
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:gold_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_gold_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 402
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:gold_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_graphene_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 17
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphene_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_graphene_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 34
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphene_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hp_steam_solid_boiler</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1184
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hp_steam_solid_boiler"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stone_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:brick_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hssg_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 103
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hssg_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hssg_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hssg_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 206
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hssg_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:hssg_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 981
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 750
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_chemical_reactor</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 872
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_chemical_reactor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:polyethylene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 682
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 914
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_electric_motor</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 883
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_electric_motor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_electric_piston</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1168
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_electric_piston"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_emitter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 408
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_emitter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:chromium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ender_eye_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_energy_input_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 980
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_energy_input_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:black_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_energy_output_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1166
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_energy_output_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:black_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_extruder</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1471
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_extruder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_fluid_heater</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2141
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_fluid_heater"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:small_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_fluid_solidifier</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2141
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_fluid_solidifier"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:small_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_forming_press</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 2356
+  duration: 2712
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_forming_press"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:silver_dust"
+            item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_gas_collector</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2131
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_gas_collector"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:small_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_invar_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 674
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_item_magnet</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 549
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_item_magnet"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:magnetic_neodymium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_laser_engraver</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 2356
+  duration: 2712
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_laser_engraver"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:silver_dust"
+            item: "gtceu:gold_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_mixer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1052
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_muffler_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 1262
+  duration: 1058
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_muffler_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
-            item: "gtceu:silver_dust"
+            item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_ore_washer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1286
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_ore_washer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_power_unit</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1109
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_power_unit"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 46
           ingredient: {
             item: "gtceu:tiny_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_red_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 726
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:hv_red_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:red_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_rock_crusher</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2081
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_rock_crusher"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_thermal_centrifuge</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1842
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_thermal_centrifuge"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_hv_world_accelerator</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 2888
+  duration: 3260
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:hv_world_accelerator"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:mercury_barium_calcium_cuprate_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 16
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:chromium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:rubber_dust"
+            item: "gtceu:ender_eye_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iron_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 61
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iron_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iron_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iron_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 122
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iron_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:iron_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1169
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:platinum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1013
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 945
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1038
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:platinum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_electric_motor</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 543
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_electric_motor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_emitter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 577
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_emitter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:iridium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_energy_input_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1722
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_energy_input_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:iridium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_energy_output_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1895
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_energy_output_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:iridium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_fluid_heater</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 3431
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_fluid_heater"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 20
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_fluid_solidifier</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2955
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_fluid_solidifier"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 16
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_forming_press</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2682
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_forming_press"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_invar_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 937
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_laser_engraver</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2865
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_laser_engraver"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_lathe</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2228
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_lathe"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_macerator</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2228
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_macerator"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_mixer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1019
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_muffler_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1376
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_muffler_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_power_unit</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1032
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_power_unit"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 46
           ingredient: {
             item: "gtceu:tiny_tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_red_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 989
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_red_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:red_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_rock_crusher</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2223
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_rock_crusher"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 9
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_stainless_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 933
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:iv_stainless_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_iv_thermal_centrifuge</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1572
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iv_thermal_centrifuge"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_kanthal_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 49
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:kanthal_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_kanthal_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 98
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:kanthal_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:kanthal_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_large_chemical_reactor</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 1285
+  duration: 1081
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:large_chemical_reactor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:polytetrafluoroethylene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
-            item: "gtceu:silver_dust"
+            item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_large_mixer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2540
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:large_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:graphene_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:osmiridium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lead_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 212
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lead_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lead_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lp_steam_solar_boiler</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1093
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lp_steam_solar_boiler"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:brick_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 7
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:glass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lp_steam_solid_boiler</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1284
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lp_steam_solid_boiler"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stone_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:brick_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_luv_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 631
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:luv_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:niobium_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:rhodium_plated_palladium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_luv_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 514
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:luv_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:niobium_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rhodium_plated_palladium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_luv_polarizer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 568
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:luv_polarizer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:niobium_nitride_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:vanadium_gallium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:niobium_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_luv_sifter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 453
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:luv_sifter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:zinc_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:niobium_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 672
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_brewery</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1218
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_brewery"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 59
           ingredient: {
             item: "gtceu:tiny_tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 22
           ingredient: {
             item: "gtceu:small_rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_chemical_reactor</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 894
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_chemical_reactor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:glass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 604
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_distillery</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1218
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_distillery"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 59
           ingredient: {
             item: "gtceu:tiny_tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 22
           ingredient: {
             item: "gtceu:small_rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_electric_motor</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 310
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_electric_motor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iron_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_emitter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 274
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_emitter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:brass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:quartzite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_energy_input_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 268
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_energy_input_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:small_magnetic_iron_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_energy_output_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 376
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_energy_output_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:small_magnetic_iron_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_item_magnet</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 296
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_item_magnet"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:magnetic_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_miner</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1114
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_miner"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_mixer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 782
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:iron_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_muffler_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 954
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_muffler_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_power_unit</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 484
+  duration: 422
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_power_unit"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "gtceu:tin_dust"
+            item: "gtceu:iron_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_rock_crusher</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1044
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_rock_crusher"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_sifter</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 1572
+  duration: 1564
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_sifter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 10
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:zinc_dust"
+            item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_lv_world_accelerator</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 2575
+  duration: 2635
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:lv_world_accelerator"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:manganese_phosphide_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 16
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 5
           ingredient: {
             item: "gtceu:brass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
-            item: "gtceu:rubber_dust"
+            item: "gtceu:quartzite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 362
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_blue_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 630
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_blue_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:blue_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_chemical_reactor</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 690
+  duration: 604
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_chemical_reactor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
-            item: "gtceu:copper_dust"
+            item: "gtceu:glass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_cobalt_brass_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 562
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_cobalt_brass_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cobalt_brass_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 324
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_electric_motor</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 339
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_electric_motor"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_emitter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 411
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_emitter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:electrum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:emerald_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_energy_output_hatch</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 206
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_energy_output_hatch"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:small_magnetic_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_forge_hammer</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 688
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_forge_hammer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_forming_press</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1230
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_forming_press"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:cupronickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_invar_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 554
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_invar_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:invar_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_laser_engraver</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1230
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_laser_engraver"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:cupronickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 6
           ingredient: {
             item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_mixer</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 580
+  duration: 617
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:mv_mixer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:cupronickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "gtceu:aluminium_dust"
+            item: "gtceu:copper_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_red_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 606
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_red_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:red_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_mv_stainless_steel_drill</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 550
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             type: "forge:nbt"
             item: "gtceu:mv_stainless_steel_drill"
             count: 1
             nbt: "{GT.Tool:{Damage:0}}"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 37
           ingredient: {
             item: "gtceu:tiny_aluminium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:stainless_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_naquadah_alloy_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 396
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:naquadah_alloy_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:naquadah_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_naquadah_alloy_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 792
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:naquadah_alloy_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:naquadah_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_nichrome_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 61
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:nichrome_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:nichrome_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_nichrome_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 122
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:nichrome_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:nichrome_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_nickel_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 63
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:nickel_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:nickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_nickel_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 126
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:nickel_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:nickel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_niobium_nitride_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 59
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:niobium_nitride_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:niobium_nitride_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_niobium_titanium_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 76
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:niobium_titanium_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:niobium_titanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_osmium_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 195
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:osmium_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:osmium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_osmium_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 390
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:osmium_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:osmium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_platinum_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 200
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:platinum_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:platinum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_platinum_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 400
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:platinum_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:platinum_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_red_alloy_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 85
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:red_alloy_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:red_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_rtm_alloy_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 128
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rtm_alloy_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rtm_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_rtm_alloy_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 256
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rtm_alloy_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rtm_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_sapphire_lens</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 15
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            tag: "forge:lenses/blue"
+            tag: "forge:lenses/sapphire"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:small_sapphire_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_silver_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 112
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:silver_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_silver_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 224
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:silver_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:silver_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_steam_oven</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 3964
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steam_oven"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 32
           ingredient: {
             item: "gtceu:bronze_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 20
           ingredient: {
             item: "gtceu:brick_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:stone_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:invar_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_steel_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 61
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_steel_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 122
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:steel_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 8
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_sterilizing_filter_casing</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2514
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:sterilizing_filter_casing"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 12
           ingredient: {
             item: "gtceu:polybenzimidazole_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:zinc_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:naquadah_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tritanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_tin_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 246
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tin_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tin_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_trinium_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 328
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:trinium_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:trinium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_trinium_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 656
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:trinium_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:trinium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_tritanium_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 604
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tritanium_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tritanium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_tungsten_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 188
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_tungsten_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 376
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_tungsten_steel_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 124
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_steel_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_tungsten_steel_quadruple_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 248
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:tungsten_steel_quadruple_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:tungsten_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_uhv_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 3636
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:uhv_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:europium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:neutronium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_uhv_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 2624
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:uhv_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:europium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:neutronium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_uhv_sifter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 533
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:uhv_sifter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:zinc_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:europium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_ulv_4a_energy_converter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 850
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:ulv_4a_energy_converter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 10
           ingredient: {
             item: "gtceu:red_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 10
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 2
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_uv_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1079
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:uv_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:yttrium_barium_cuprate_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:darmstadtium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_uv_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 786
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:uv_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:yttrium_barium_cuprate_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:darmstadtium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_uv_rock_crusher</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 1233
+  duration: 1194
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:uv_rock_crusher"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "gtceu:yttrium_barium_cuprate_dust"
+            item: "gtceu:diamond_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_uv_sifter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 433
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:uv_sifter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:zinc_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:yttrium_barium_cuprate_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_yttrium_barium_cuprate_double_cable</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 56
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:yttrium_barium_cuprate_double_cable"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:yttrium_barium_cuprate_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_zpm_arc_furnace</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1425
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:zpm_arc_furnace"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:vanadium_gallium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 3
           ingredient: {
             item: "gtceu:naquadah_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:graphite_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_zpm_brewery</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 591
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:zpm_brewery"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:vanadium_gallium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:naquadah_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_zpm_diode</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 1022
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:zpm_diode"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:vanadium_gallium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:naquadah_alloy_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_zpm_distillery</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 591
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:zpm_distillery"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:vanadium_gallium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:naquadah_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_zpm_rock_crusher</summary>

```diff
 {
   type: "gtceu:macerator"
-  duration: 1237
+  duration: 1194
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:zpm_rock_crusher"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "gtceu:vanadium_steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:tungsten_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
-            item: "gtceu:vanadium_gallium_dust"
+            item: "gtceu:diamond_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/macerator/macerate_zpm_sifter</summary>

```diff
 {
   type: "gtceu:macerator"
   duration: 437
   inputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:zpm_sifter"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:zinc_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:steel_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             item: "gtceu:rubber_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             item: "gtceu:vanadium_gallium_dust"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 32
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/black_concrete_powder</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 200
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:black_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:black_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/blue_concrete_powder</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 200
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:blue_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:blue_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/cyan_concrete_powder</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 200
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:cyan_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:cyan_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/fertilizer</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 100
   inputs: {
     fluid: [
       {
         content: {
           amount: 1000
           value: [
             {
               tag: "forge:water"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 1
           ingredient: {
             tag: "minecraft:dirt"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 2
           ingredient: {
             tag: "forge:dusts/wood"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             item: "gtceu:fertilizer"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 30
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/gray_concrete_powder</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 200
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:gray_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:gray_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/lime_concrete_powder</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 200
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:lime_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:lime_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/orange_concrete_powder</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 200
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:orange_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:orange_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>gtceu/mixer/white_concrete_powder</summary>

```diff
 {
   type: "gtceu:mixer"
   duration: 200
   inputs: {
     fluid: [
       {
         content: {
           amount: 144
           value: [
             {
               tag: "forge:white_dye"
             }
           ]
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:sand"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
       {
         content: {
           type: "gtceu:sized"
           count: 4
           ingredient: {
             tag: "forge:gravel"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   outputs: {
     item: [
       {
         content: {
           type: "gtceu:sized"
           count: 8
           ingredient: {
             item: "minecraft:white_concrete_powder"
           }
         }
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickInputs: {
     eu: [
       {
         content: 7
         chance: 1
         tierChanceBoost: 0
       }
     ]
   }
   tickOutputs: {
   }
 }

```


</details>

<details>
<summary>immersiveengineering/arcfurnace/dust_aluminum</summary>

```diff
 {
   type: "immersiveengineering:arc_furnace"
   additives: [
   ]
   energy: 51200
   input: {
     tag: "forge:dusts/aluminum"
   }
   results: [
     {
-      tag: "forge:ingots/aluminum"
+      item: "gtceu:aluminium_ingot"
     }
   ]
   time: 100
 }

```


</details>

<details>
<summary>immersiveengineering/arcfurnace/ore_aluminum</summary>

```diff
 {
   type: "immersiveengineering:arc_furnace"
   additives: [
   ]
   energy: 102400
   input: {
     tag: "forge:ores/aluminum"
   }
   results: [
     {
       base_ingredient: {
-        tag: "forge:ingots/aluminum"
+        item: "gtceu:aluminium_ingot"
       }
       count: 2
     }
   ]
   slag: {
     tag: "forge:slag"
   }
   time: 200
 }

```


</details>

<details>
<summary>immersiveengineering/arcfurnace/raw_block_aluminum</summary>

```diff
 {
   type: "immersiveengineering:arc_furnace"
   additives: [
   ]
   energy: 230400
   input: {
     tag: "forge:storage_blocks/raw_aluminum"
   }
   results: [
     {
       base_ingredient: {
-        tag: "forge:ingots/aluminum"
+        item: "gtceu:aluminium_ingot"
       }
       count: 13
     }
   ]
   secondaries: [
     {
       chance: 0.5
       output: {
-        tag: "forge:ingots/aluminum"
+        item: "gtceu:aluminium_ingot"
       }
     }
   ]
   time: 900
 }

```


</details>

<details>
<summary>immersiveengineering/arcfurnace/raw_ore_aluminum</summary>

```diff
 {
   type: "immersiveengineering:arc_furnace"
   additives: [
   ]
   energy: 25600
   input: {
     tag: "forge:raw_materials/aluminum"
   }
   results: [
     {
-      tag: "forge:ingots/aluminum"
+      item: "gtceu:aluminium_ingot"
     }
   ]
   secondaries: [
     {
       chance: 0.5
       output: {
-        tag: "forge:ingots/aluminum"
+        item: "gtceu:aluminium_ingot"
       }
     }
   ]
   time: 100
 }

```


</details>

<details>
<summary>immersiveengineering/smelting/ingot_aluminum</summary>

```diff
 {
   type: "minecraft:smelting"
   category: "misc"
   cookingtime: 200
   experience: 0.3
   ingredient: {
     tag: "forge:ores/aluminum"
   }
-  result: "immersiveengineering:ingot_aluminum"
+  result: "gtceu:aluminium_ingot"
 }

```


</details>

<details>
<summary>immersiveengineering/smelting/ingot_aluminum3</summary>

```diff
 {
   type: "minecraft:smelting"
   category: "misc"
   cookingtime: 200
   experience: 0.3
   ingredient: {
     tag: "forge:raw_materials/aluminum"
   }
-  result: "immersiveengineering:ingot_aluminum"
+  result: "gtceu:aluminium_ingot"
 }

```


</details>

<details>
<summary>immersiveengineering/smelting/ingot_aluminum_from_blasting3</summary>

```diff
 {
   type: "minecraft:blasting"
   category: "misc"
   cookingtime: 100
   experience: 0.3
   ingredient: {
     tag: "forge:raw_materials/aluminum"
   }
-  result: "immersiveengineering:ingot_aluminum"
+  result: "gtceu:aluminium_ingot"
 }

```


</details>

<details>
<summary>kubejs/kjs/gtceu_bronze_machine_casing</summary>

```diff
 {
   type: "kubejs:shaped"
   result: {
     item: "gtceu:bronze_machine_casing"
     count: 1
   }
   pattern: [
     "PPP"
     "PHP"
     "PPP"
   ]
   key: {
     H: {
       tag: "forge:tools/hammers"
     }
     P: {
-      tag: "gravitas:bronze_plates"
+      tag: "forge:plates/any_bronze"
     }
   }
   kubejs:actions: [
     {
       type: "damage"
       damage: 1
     }
   ]
 }

```


</details>

<details>
<summary>kubejs/kjs/gtceu_bronze_rotor</summary>

```diff
 {
   type: "kubejs:shaped"
   result: {
     item: "gtceu:bronze_rotor"
     count: 1
   }
   pattern: [
     "PHP"
     "SRF"
     "PDP"
   ]
   key: {
     H: {
       tag: "forge:tools/hammers"
     }
     D: {
       tag: "forge:tools/screwdrivers"
     }
     S: {
       tag: "forge:screws/bronze"
     }
     P: {
-      tag: "gravitas:bronze_plates"
+      tag: "forge:plates/any_bronze"
     }
     R: {
       item: "gtceu:bronze_ring"
     }
     F: {
       tag: "forge:tools/files"
     }
   }
   kubejs:actions: [
     {
       type: "damage"
       damage: 1
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/aluminum_ingot_from_smelting</summary>

```diff
 {
   type: "minecraft:smelting"
   cookingtime: 200
   experience: 0.7
   ingredient: {
     item: "thoriumreactors:bauxite_ore"
   }
-  result: "thoriumreactors:aluminum_ingot"
+  result: "gtceu:aluminium_ingot"
 }

```


</details>

<details>
<summary>minecraft/aluminum_ingot_from_smelting_deepslate</summary>

```diff
 {
   type: "minecraft:smelting"
   cookingtime: 200
   experience: 0.7
   ingredient: {
     item: "thoriumreactors:deepslate_bauxite_ore"
   }
-  result: "thoriumreactors:aluminum_ingot"
+  result: "gtceu:aluminium_ingot"
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_brass_ingot</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:brass_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "tfc:metal/ingot/brass"
+      item: "alltheores:brass_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_brass_ingot_2</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:brass_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:brass_ingot"
+      item: "tfc:metal/ingot/brass"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_bronze_ingot</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:bronze_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "railcraft:bronze_ingot"
+      item: "alltheores:bronze_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_bronze_ingot_3</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:bronze_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:bronze_ingot"
+      item: "railcraft:bronze_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_lead_ingot</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:lead_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "immersiveengineering:ingot_lead"
+      item: "alltheores:lead_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_lead_ingot_2</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:lead_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "railcraft:lead_ingot"
+      item: "immersiveengineering:ingot_lead"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_lead_ingot_3</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:lead_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:lead_ingot"
+      item: "railcraft:lead_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_lead_plate</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:lead_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "immersiveengineering:plate_lead"
+      item: "alltheores:lead_plate"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_lead_plate_2</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:lead_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:lead_plate"
+      item: "immersiveengineering:plate_lead"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_silver_ingot</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:silver_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:silver_ingot"
+      item: "tfc:metal/ingot/silver"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_silver_ingot_2</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:silver_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "railcraft:silver_ingot"
+      item: "alltheores:silver_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_silver_ingot_3</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:silver_ingot"
     count: 1
   }
   ingredients: [
     {
-      item: "tfc:metal/ingot/silver"
+      item: "railcraft:silver_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_silver_plate</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:silver_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:silver_plate"
+      item: "tfc:metal/sheet/silver"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_silver_plate_2</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:silver_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "railcraft:silver_plate"
+      item: "alltheores:silver_plate"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_silver_plate_3</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:silver_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "tfc:metal/sheet/silver"
+      item: "railcraft:silver_plate"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_steel_plate</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:steel_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:steel_plate"
+      item: "tfc:metal/sheet/steel"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_steel_plate_2</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:steel_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "tfc:metal/sheet/steel"
+      item: "alltheores:steel_plate"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_zinc_plate</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:zinc_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "alltheores:zinc_plate"
+      item: "tfc:metal/sheet/zinc"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_zinc_plate_2</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:zinc_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "createaddition:zinc_sheet"
+      item: "alltheores:zinc_plate"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/gtceu_zinc_plate_3</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "gtceu:zinc_plate"
     count: 1
   }
   ingredients: [
     {
-      item: "tfc:metal/sheet/zinc"
+      item: "createaddition:zinc_sheet"
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/storagedrawers_obsidian_storage_upgrade</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   result: {
     item: "storagedrawers:obsidian_storage_upgrade"
     count: 1
   }
   ingredients: [
     {
-      tag: "gravitas:bronze_plates"
+      tag: "forge:plates/any_bronze"
     }
     {
-      tag: "gravitas:bronze_plates"
+      tag: "forge:plates/any_bronze"
     }
     {
       item: "storagedrawers:upgrade_template"
     }
   ]
 }

```


</details>

<details>
<summary>tfc/heating/metal/aluminium_ingot</summary>

```diff
 {
   type: "tfc:heating"
   ingredient: {
-    item: "gtceu:aluminium_ingot"
+    tag: "forge:ingots/aluminum"
   }
   temperature: 660
   result_fluid: {
     fluid: "gtceu:aluminium"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/bismuth_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:sheets/bismuth"
+    tag: "forge:plates/bismuth"
   }
   temperature: 270
   result_fluid: {
     fluid: "tfc:metal/bismuth"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/black_steel_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:sheets/black_steel"
+    tag: "forge:plates/black_steel"
   }
   temperature: 1485
   result_fluid: {
     fluid: "tfc:metal/black_steel"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/blue_steel_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:plates/blue_steel"
+    tag: "forge:sheets/blue_steel"
   }
   temperature: 1540
   result_fluid: {
     fluid: "tfc:metal/blue_steel"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/brass_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:sheets/brass"
+    tag: "forge:plates/brass"
   }
   temperature: 930
   result_fluid: {
     fluid: "tfc:metal/brass"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/copper_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:plates/copper"
+    tag: "forge:sheets/copper"
   }
   temperature: 1080
   result_fluid: {
     fluid: "tfc:metal/copper"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/gold_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:sheets/gold"
+    tag: "forge:plates/gold"
   }
   temperature: 1060
   result_fluid: {
     fluid: "tfc:metal/gold"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/red_steel_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:plates/red_steel"
+    tag: "forge:sheets/red_steel"
   }
   temperature: 1540
   result_fluid: {
     fluid: "tfc:metal/red_steel"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/rose_gold_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:sheets/rose_gold"
+    tag: "forge:plates/rose_gold"
   }
   temperature: 960
   result_fluid: {
     fluid: "tfc:metal/rose_gold"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/steel_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:plates/steel"
+    tag: "forge:sheets/steel"
   }
   temperature: 1540
   result_fluid: {
     fluid: "tfc:metal/steel"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/heating/metal/wrought_iron_sheet</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:heating"
   ingredient: {
-    tag: "forge:sheets/wrought_iron"
+    tag: "forge:plates/wrought_iron"
   }
   temperature: 1535
   result_fluid: {
     fluid: "tfc:metal/cast_iron"
     amount: 144
   }
 }

```


</details>

<details>
<summary>tfc/quern/graphite</summary>

```diff
 {
   __comment__: "This file was automatically created by mcresources"
   type: "tfc:quern"
   ingredient: {
-    item: "tfc:ore/graphite"
+    tag: "forge:raw_materials/graphite"
   }
   result: {
     item: "tfc:powder/graphite"
     count: 4
   }
 }

```


</details>

<details>
<summary>thoriumreactors/aluminum_ingot_craft_from_block</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "thoriumreactors:aluminum_block"
     }
   ]
   result: {
     count: 9
-    item: "thoriumreactors:aluminum_ingot"
+    item: "gtceu:aluminium_ingot"
   }
 }

```


</details>

<details>
<summary>thoriumreactors/aluminum_ingot_craft_from_nugget</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
     {
       tag: "forge:nuggets/aluminum"
     }
   ]
   result: {
-    item: "thoriumreactors:aluminum_ingot"
+    item: "gtceu:aluminium_ingot"
   }
 }

```


</details>

<details>
<summary>woodencog/crushing/crushing_graphite.json</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      item: "tfc:ore/graphite"
+      tag: "forge:raw_materials/graphite"
     }
   ]
   results: [
     {
       item: "tfc:powder/graphite"
     }
     {
       item: "tfc:powder/graphite"
     }
     {
       item: "tfc:powder/graphite"
     }
     {
       item: "tfc:powder/graphite"
     }
   ]
   processingTime: 400
 }

```


</details>

<details>
<summary>woodencog/crushing/milling_graphite.json</summary>

```diff
 {
   type: "create:milling"
   ingredients: [
     {
-      item: "tfc:ore/graphite"
+      tag: "forge:raw_materials/graphite"
     }
   ]
   results: [
     {
       item: "tfc:powder/graphite"
     }
     {
       item: "tfc:powder/graphite"
     }
     {
       item: "tfc:powder/graphite"
     }
     {
       item: "tfc:powder/graphite"
     }
   ]
   processingTime: 400
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (14)</summary>
<blockquote>

<details>
<summary>immersiveengineering/crafting/nugget_aluminum_to_ingot_aluminum</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    i: {
-      tag: "forge:nuggets/aluminum"
-    }
-    s: {
-      tag: "forge:nuggets/aluminum"
-    }
-  }
-  pattern: [
-    "sss"
-    "sis"
-    "sss"
-  ]
-  result: {
-    item: "immersiveengineering:ingot_aluminum"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>immersiveengineering/crafting/storage_aluminum_to_ingot_aluminum</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      tag: "forge:storage_blocks/aluminum"
-    }
-  ]
-  result: {
-    count: 9
-    item: "immersiveengineering:ingot_aluminum"
-  }
-}

```


</details>

<details>
<summary>immersiveengineering/smelting/ingot_aluminum_from_blasting</summary>

```diff
-{
-  type: "minecraft:blasting"
-  category: "misc"
-  cookingtime: 100
-  experience: 0.3
-  ingredient: {
-    tag: "forge:ores/aluminum"
-  }
-  result: "immersiveengineering:ingot_aluminum"
-}

```


</details>

<details>
<summary>immersiveengineering/smelting/ingot_aluminum_from_dust</summary>

```diff
-{
-  type: "minecraft:smelting"
-  category: "misc"
-  cookingtime: 200
-  experience: 0
-  ingredient: {
-    tag: "forge:dusts/aluminum"
-  }
-  result: "immersiveengineering:ingot_aluminum"
-}

```


</details>

<details>
<summary>immersiveengineering/smelting/ingot_aluminum_from_dust_from_blasting</summary>

```diff
-{
-  type: "minecraft:blasting"
-  category: "misc"
-  cookingtime: 100
-  experience: 0
-  ingredient: {
-    tag: "forge:dusts/aluminum"
-  }
-  result: "immersiveengineering:ingot_aluminum"
-}

```


</details>

<details>
<summary>railways/crafting/smokestack_caboosestyle</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    #: {
-      tag: "railways:internal/plates/iron_plates"
-    }
-    +: {
-      item: "minecraft:campfire"
-    }
-    .: {
-      tag: "railways:internal/nuggets/iron_nuggets"
-    }
-  }
-  pattern: [
-    ".#."
-    " + "
-  ]
-  result: {
-    item: "railways:smokestack_caboosestyle"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>railways/crafting/smokestack_coalburner</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    #: {
-      tag: "railways:internal/plates/iron_plates"
-    }
-    +: {
-      item: "minecraft:campfire"
-    }
-  }
-  pattern: [
-    "# #"
-    "# #"
-    "#+#"
-  ]
-  result: {
-    item: "railways:smokestack_coalburner"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>railways/crafting/smokestack_diesel</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    #: {
-      tag: "railways:internal/plates/iron_plates"
-    }
-    *: {
-      item: "create:propeller"
-    }
-  }
-  pattern: [
-    "#*#"
-  ]
-  result: {
-    item: "railways:smokestack_diesel"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>railways/crafting/smokestack_long</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    +: {
-      item: "minecraft:campfire"
-    }
-    .: {
-      tag: "railways:internal/nuggets/iron_nuggets"
-    }
-  }
-  pattern: [
-    ".+."
-  ]
-  result: {
-    item: "railways:smokestack_long"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>railways/crafting/smokestack_oilburner</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    #: {
-      tag: "railways:internal/plates/iron_plates"
-    }
-    +: {
-      item: "minecraft:campfire"
-    }
-  }
-  pattern: [
-    "# #"
-    "#+#"
-  ]
-  result: {
-    item: "railways:smokestack_oilburner"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>railways/crafting/smokestack_streamlined</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    #: {
-      tag: "railways:internal/plates/iron_plates"
-    }
-    +: {
-      item: "minecraft:campfire"
-    }
-  }
-  pattern: [
-    "#+#"
-  ]
-  result: {
-    item: "railways:smokestack_streamlined"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>railways/crafting/smokestack_woodburner</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    #: {
-      tag: "railways:internal/plates/iron_plates"
-    }
-    +: {
-      item: "minecraft:campfire"
-    }
-    .: {
-      tag: "railways:internal/nuggets/iron_nuggets"
-    }
-  }
-  pattern: [
-    ".#."
-    "#+#"
-  ]
-  result: {
-    item: "railways:smokestack_woodburner"
-  }
-  show_notification: true
-}

```


</details>

<details>
<summary>tfc/kjs/gej33ltqu46zzf54ccwnbh1m</summary>

```diff
-{
-  type: "tfc:anvil"
-  result: {
-    stack: {
-      item: "gregitas:bronze_pestle"
-      count: 1
-    }
-  }
-  input: {
-    tag: "gravitas:bronze_doubles"
-  }
-  rules: [
-    "shrink_last"
-    "draw_second_last"
-    "hit_third_last"
-  ]
-  tier: 2
-}

```


</details>

<details>
<summary>tfc/quern/graphite_from_gt</summary>

```diff
-{
-  __comment__: "This file was automatically created by mcresources"
-  type: "tfc:quern"
-  ingredient: {
-    tag: "forge:raw_materials/graphite"
-  }
-  result: {
-    item: "tfc:powder/graphite"
-    count: 4
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Added (18)</summary>
<blockquote>

<details>
<summary>minecraft:block/chalk:chalk_cannot_draw_on</summary>

```diff
+[
+  "#minecraft:flowers"
+  "#minecraft:leaves"
+  "#minecraft:saplings"
+  "minecraft:honeycomb_block"
+  "minecraft:scaffolding"
+  "minecraft:sculk"
+  "minecraft:sculk_catalyst"
+  "minecraft:sculk_sensor"
+  "minecraft:sculk_shrieker"
+  "minecraft:slime_block"
+]

```


</details>

<details>
<summary>minecraft:block/chalk:chalk_marks</summary>

```diff
+[
+  "chalk:black_chalk_mark"
+  "chalk:blue_chalk_mark"
+  "chalk:brown_chalk_mark"
+  "chalk:cyan_chalk_mark"
+  "chalk:gray_chalk_mark"
+  "chalk:green_chalk_mark"
+  "chalk:light_blue_chalk_mark"
+  "chalk:light_gray_chalk_mark"
+  "chalk:lime_chalk_mark"
+  "chalk:magenta_chalk_mark"
+  "chalk:orange_chalk_mark"
+  "chalk:pink_chalk_mark"
+  "chalk:purple_chalk_mark"
+  "chalk:red_chalk_mark"
+  "chalk:white_chalk_mark"
+  "chalk:yellow_chalk_mark"
+]

```


</details>

<details>
<summary>minecraft:block/diagonalfences:non_diagonal_fences</summary>

```diff
+[
+  "create_connected:copycat_fence"
+  "create_connected:wrapped_copycat_fence"
+]

```


</details>

<details>
<summary>minecraft:item/chalk:chalks</summary>

```diff
+[
+  "chalk:black_chalk"
+  "chalk:blue_chalk"
+  "chalk:brown_chalk"
+  "chalk:cyan_chalk"
+  "chalk:gray_chalk"
+  "chalk:green_chalk"
+  "chalk:light_blue_chalk"
+  "chalk:light_gray_chalk"
+  "chalk:lime_chalk"
+  "chalk:magenta_chalk"
+  "chalk:orange_chalk"
+  "chalk:pink_chalk"
+  "chalk:purple_chalk"
+  "chalk:red_chalk"
+  "chalk:white_chalk"
+  "chalk:yellow_chalk"
+]

```


</details>

<details>
<summary>minecraft:item/chalk:glowings</summary>

```diff
+[
+  "minecraft:glow_ink_sac"
+  "minecraft:glowstone_dust"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_beam</summary>

```diff
+[
+  "create_connected:copycat_beam"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_block</summary>

```diff
+[
+  "create_connected:copycat_block"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_board</summary>

```diff
+[
+  "create_connected:copycat_board"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_fence</summary>

```diff
+[
+  "create_connected:copycat_fence"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_fence_gate</summary>

```diff
+[
+  "create_connected:copycat_fence_gate"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_slab</summary>

```diff
+[
+  "create_connected:copycat_slab"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_stairs</summary>

```diff
+[
+  "create_connected:copycat_stairs"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_vertical_step</summary>

```diff
+[
+  "create_connected:copycat_vertical_step"
+]

```


</details>

<details>
<summary>minecraft:item/copycats:copycat_wall</summary>

```diff
+[
+  "create_connected:copycat_wall"
+]

```


</details>

<details>
<summary>minecraft:item/forge:chalks</summary>

```diff
+[
+  "chalk:black_chalk"
+  "chalk:blue_chalk"
+  "chalk:brown_chalk"
+  "chalk:cyan_chalk"
+  "chalk:gray_chalk"
+  "chalk:green_chalk"
+  "chalk:light_blue_chalk"
+  "chalk:light_gray_chalk"
+  "chalk:lime_chalk"
+  "chalk:magenta_chalk"
+  "chalk:orange_chalk"
+  "chalk:pink_chalk"
+  "chalk:purple_chalk"
+  "chalk:red_chalk"
+  "chalk:white_chalk"
+  "chalk:yellow_chalk"
+]

```


</details>

<details>
<summary>minecraft:item/forge:double_ingots/any_bronze</summary>

```diff
+[
+  "tfc:metal/double_ingot/bismuth_bronze"
+  "tfc:metal/double_ingot/black_bronze"
+  "tfc:metal/double_ingot/bronze"
+]

```


</details>

<details>
<summary>minecraft:item/forge:plates/any_bronze</summary>

```diff
+[
+  "#forge:plates/bismuth_bronze"
+  "#forge:plates/black_bronze"
+  "#forge:plates/bronze"
+]

```


</details>

<details>
<summary>minecraft:item/forge:raw_materials/graphite</summary>

```diff
+[
+  "tfc:ore/graphite"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (43)</summary>
<blockquote>

<details>
<summary>minecraft:block/create:fan_processing_catalysts/blasting</summary>

```diff
 [
   ... (1 entries)
+  "create_connected:fan_blasting_catalyst"
 ]

```


</details>

<details>
<summary>minecraft:block/create:fan_processing_catalysts/haunting</summary>

```diff
 [
   ... (1 entries)
+  "create_connected:fan_haunting_catalyst"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/create:fan_processing_catalysts/smoking</summary>

```diff
 [
   ... (2 entries)
+  "create_connected:fan_smoking_catalyst"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/create:fan_processing_catalysts/splashing</summary>

```diff
 [
+  "create_connected:fan_splashing_catalyst"
 ]

```


</details>

<details>
<summary>minecraft:block/create:fan_transparent</summary>

```diff
 [
   ... (10 entries)
+  "create_connected:empty_fan_catalyst"
+  "create_connected:fan_blasting_catalyst"
+  "create_connected:fan_haunting_catalyst"
+  "create_connected:fan_smoking_catalyst"
+  "create_connected:fan_splashing_catalyst"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/create:movable_empty_collider</summary>

```diff
 [
   ... (1 entries)
+  "create_connected:copycat_fence_gate"
+  "create_connected:wrapped_copycat_fence_gate"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/create:safe_nbt</summary>

```diff
 [
   ... (25 entries)
+  "create_connected:linked_acacia_button"
+  "create_connected:linked_analog_lever"
+  "create_connected:linked_bamboo_button"
+  "create_connected:linked_birch_button"
+  "create_connected:linked_cherry_button"
+  "create_connected:linked_crimson_button"
+  "create_connected:linked_dark_oak_button"
+  "create_connected:linked_jungle_button"
+  "create_connected:linked_lever"
+  "create_connected:linked_mangrove_button"
+  "create_connected:linked_oak_button"
+  "create_connected:linked_polished_blackstone_button"
+  "create_connected:linked_spruce_button"
+  "create_connected:linked_stone_button"
+  "create_connected:linked_warped_button"
+  "create_connected:sequenced_pulse_generator"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/forge:fence_gates</summary>

```diff
 [
   ... (1 entries)
+  "create_connected:copycat_fence_gate"
+  "create_connected:wrapped_copycat_fence_gate"
 ]

```


</details>

<details>
<summary>minecraft:block/forge:fences</summary>

```diff
 [
   ... (2 entries)
+  "create_connected:copycat_fence"
+  "create_connected:wrapped_copycat_fence"
 ]

```


</details>

<details>
<summary>minecraft:block/forge:glass_panes</summary>

```diff
 [
   ... (16 entries)
+  "create_connected:bamboo_window_pane"
+  "create_connected:cherry_window_pane"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:fence_gates</summary>

```diff
 [
   ... (3 entries)
+  "create_connected:copycat_fence_gate"
+  "create_connected:wrapped_copycat_fence_gate"
   ... (52 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:fences</summary>

```diff
 [
   ... (5 entries)
+  "create_connected:copycat_fence"
+  "create_connected:wrapped_copycat_fence"
   ... (86 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:impermeable</summary>

```diff
 [
   ... (14 entries)
+  "create_connected:bamboo_window"
+  "create_connected:cherry_window"
   ... (40 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (147 entries)
+  "create_connected:brake"
+  "create_connected:brass_gearbox"
+  "create_connected:centrifugal_clutch"
+  "create_connected:copycat_beam"
+  "create_connected:copycat_block"
+  "create_connected:copycat_board"
+  "create_connected:copycat_fence"
+  "create_connected:copycat_fence_gate"
+  "create_connected:copycat_slab"
+  "create_connected:copycat_stairs"
+  "create_connected:copycat_vertical_step"
+  "create_connected:copycat_wall"
+  "create_connected:encased_chain_cogwheel"
+  "create_connected:freewheel_clutch"
+  "create_connected:inverted_clutch"
+  "create_connected:inverted_gearshift"
+  "create_connected:overstress_clutch"
+  "create_connected:parallel_gearbox"
+  "create_connected:six_way_gearbox"
   ... (3030 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (792 entries)
+  "create_connected:brake"
+  "create_connected:brass_gearbox"
+  "create_connected:centrifugal_clutch"
+  "create_connected:copycat_beam"
+  "create_connected:copycat_block"
+  "create_connected:copycat_board"
+  "create_connected:copycat_fence"
+  "create_connected:copycat_fence_gate"
+  "create_connected:copycat_slab"
+  "create_connected:copycat_stairs"
+  "create_connected:copycat_vertical_step"
+  "create_connected:copycat_wall"
+  "create_connected:empty_fan_catalyst"
+  "create_connected:encased_chain_cogwheel"
+  "create_connected:fan_blasting_catalyst"
+  "create_connected:fan_haunting_catalyst"
+  "create_connected:fan_smoking_catalyst"
+  "create_connected:fan_splashing_catalyst"
+  "create_connected:freewheel_clutch"
+  "create_connected:inverted_clutch"
+  "create_connected:inverted_gearshift"
+  "create_connected:item_silo"
+  "create_connected:overstress_clutch"
+  "create_connected:parallel_gearbox"
+  "create_connected:shear_pin"
+  "create_connected:six_way_gearbox"
   ... (4206 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:slabs</summary>

```diff
 [
   ... (66 entries)
+  "create_connected:copycat_slab"
   ... (333 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:stairs</summary>

```diff
 [
   ... (67 entries)
+  "create_connected:copycat_stairs"
+  "create_connected:wrapped_copycat_stairs"
   ... (292 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:unstable_bottom_center</summary>

```diff
 [
   ... (1 entries)
+  "create_connected:copycat_fence_gate"
+  "create_connected:wrapped_copycat_fence_gate"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:walls</summary>

```diff
 [
   ... (76 entries)
+  "create_connected:copycat_wall"
+  "create_connected:wrapped_copycat_wall"
   ... (225 entries)
 ]

```


</details>

<details>
<summary>minecraft:fluid/tfc:usable_in_ingot_mold</summary>

```diff
 [
   ... (2 entries)
+  "gtceu:aluminium"
+  "gtceu:americium"
+  "gtceu:annealed_copper"
+  "gtceu:antimony"
+  "gtceu:battery_alloy"
+  "gtceu:beryllium"
   ... (1 entries)
+  "gtceu:blue_alloy"
   ... (1 entries)
+  "gtceu:cobalt"
+  "gtceu:cobalt_brass"
   ... (1 entries)
+  "gtceu:cupronickel"
+  "gtceu:damascus_steel"
+  "gtceu:darmstadtium"
+  "gtceu:duranium"
+  "gtceu:electrum"
+  "gtceu:enriched_naquadah"
+  "gtceu:enriched_naquadah_trinium_europium_duranide"
+  "gtceu:europium"
+  "gtceu:gallium"
+  "gtceu:gallium_arsenide"
   ... (1 entries)
+  "gtceu:hsse"
+  "gtceu:hssg"
+  "gtceu:hsss"
+  "gtceu:indium"
+  "gtceu:indium_gallium_phosphide"
+  "gtceu:indium_tin_barium_titanium_cuprate"
   ... (1 entries)
+  "gtceu:iridium"
+  "gtceu:kanthal"
+  "gtceu:lead"
+  "gtceu:magnalium"
+  "gtceu:magnesium_diboride"
+  "gtceu:manganese"
+  "gtceu:manganese_phosphide"
+  "gtceu:mercury_barium_calcium_cuprate"
+  "gtceu:molybdenum"
+  "gtceu:naquadah"
+  "gtceu:naquadah_alloy"
+  "gtceu:naquadria"
+  "gtceu:neodymium"
+  "gtceu:neutronium"
+  "gtceu:nichrome"
   ... (1 entries)
+  "gtceu:nickel_zinc_ferrite"
+  "gtceu:niobium"
+  "gtceu:niobium_nitride"
+  "gtceu:niobium_titanium"
+  "gtceu:osmiridium"
+  "gtceu:osmium"
+  "gtceu:palladium"
+  "gtceu:platinum"
+  "gtceu:plutonium"
+  "gtceu:plutonium_241"
+  "gtceu:potin"
+  "gtceu:red_alloy"
+  "gtceu:rhodium"
+  "gtceu:rhodium_plated_palladium"
   ... (1 entries)
+  "gtceu:ruthenium"
+  "gtceu:ruthenium_trinium_americium_neutronate"
+  "gtceu:samarium"
+  "gtceu:samarium_iron_arsenic_oxide"
+  "gtceu:silicon"
   ... (1 entries)
+  "gtceu:soldering_alloy"
+  "gtceu:stainless_steel"
+  "gtceu:tantalum"
+  "gtceu:thorium"
   ... (1 entries)
+  "gtceu:tin_alloy"
+  "gtceu:titanium"
+  "gtceu:trinium"
+  "gtceu:tritanium"
+  "gtceu:tungsten"
+  "gtceu:tungsten_carbide"
+  "gtceu:tungsten_steel"
+  "gtceu:ultimet"
+  "gtceu:uranium"
+  "gtceu:uranium_235"
+  "gtceu:uranium_rhodium_dinaquadide"
+  "gtceu:uranium_triplatinum"
+  "gtceu:vanadium"
+  "gtceu:vanadium_gallium"
+  "gtceu:vanadium_steel"
+  "gtceu:yttrium"
+  "gtceu:yttrium_barium_cuprate"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/create:contraption_controlled</summary>

```diff
 [
   ... (22 entries)
+  "minecraft:jukebox"
+  "minecraft:note_block"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/black</summary>

```diff
 [
+  "chalk:black_chalk"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/blue</summary>

```diff
 [
+  "chalk:blue_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/brown</summary>

```diff
 [
+  "chalk:brown_chalk"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/cyan</summary>

```diff
 [
+  "chalk:cyan_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/gray</summary>

```diff
 [
+  "chalk:gray_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/green</summary>

```diff
 [
+  "chalk:green_chalk"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/light_blue</summary>

```diff
 [
+  "chalk:light_blue_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/light_gray</summary>

```diff
 [
+  "chalk:light_gray_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/lime</summary>

```diff
 [
+  "chalk:lime_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/magenta</summary>

```diff
 [
+  "chalk:magenta_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/orange</summary>

```diff
 [
+  "chalk:orange_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/pink</summary>

```diff
 [
+  "chalk:pink_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/purple</summary>

```diff
 [
+  "chalk:purple_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/red</summary>

```diff
 [
+  "chalk:red_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/white</summary>

```diff
 [
+  "chalk:white_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:dyes/yellow</summary>

```diff
 [
+  "chalk:yellow_chalk"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/forge:glass_panes</summary>

```diff
 [
   ... (16 entries)
+  "create_connected:bamboo_window_pane"
+  "create_connected:cherry_window_pane"
 ]

```


</details>

<details>
<summary>minecraft:item/forge:ingots/aluminum</summary>

```diff
 [
   ... (1 entries)
+  "gtceu:aluminium_ingot"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:axes</summary>

```diff
 [
+  "#tfc:axes"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:creeper_drop_music_discs</summary>

```diff
 [
+  "create_connected:music_disc_elevator"
+  "create_connected:music_disc_interlude"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:logs_that_burn</summary>

```diff
 [
   ... (8 entries)
+  "#tfc:acacia_logs"
+  "#tfc:ash_logs"
+  "#tfc:aspen_logs"
+  "#tfc:birch_logs"
+  "#tfc:blackwood_logs"
+  "#tfc:chestnut_logs"
+  "#tfc:douglas_fir_logs"
+  "#tfc:hickory_logs"
+  "#tfc:kapok_logs"
+  "#tfc:mangrove_logs"
+  "#tfc:maple_logs"
+  "#tfc:oak_logs"
+  "#tfc:palm_logs"
+  "#tfc:pine_logs"
+  "#tfc:rosewood_logs"
+  "#tfc:sequoia_logs"
+  "#tfc:spruce_logs"
+  "#tfc:sycamore_logs"
+  "#tfc:white_cedar_logs"
+  "#tfc:willow_logs"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:music_discs</summary>

```diff
 [
   ... (1 entries)
+  "create_connected:music_disc_elevator"
+  "create_connected:music_disc_interlude"
   ... (4 entries)
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (2)</summary>
<blockquote>

<details>
<summary>minecraft:item/gravitas:bronze_doubles</summary>

```diff
-[
-  "tfc:metal/double_ingot/bismuth_bronze"
-  "tfc:metal/double_ingot/black_bronze"
-  "tfc:metal/double_ingot/bronze"
-]

```


</details>

<details>
<summary>minecraft:item/gravitas:bronze_plates</summary>

```diff
-[
-  "#forge:plates/bismuth_bronze"
-  "#forge:plates/black_bronze"
-  "#forge:plates/bronze"
-]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (4)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (347 entries)
+  "chalk:black_chalk_mark"
+  "chalk:blue_chalk_mark"
+  "chalk:brown_chalk_mark"
+  "chalk:cyan_chalk_mark"
+  "chalk:gray_chalk_mark"
+  "chalk:green_chalk_mark"
+  "chalk:light_blue_chalk_mark"
+  "chalk:light_gray_chalk_mark"
+  "chalk:lime_chalk_mark"
+  "chalk:magenta_chalk_mark"
+  "chalk:orange_chalk_mark"
+  "chalk:pink_chalk_mark"
+  "chalk:purple_chalk_mark"
+  "chalk:red_chalk_mark"
+  "chalk:white_chalk_mark"
+  "chalk:yellow_chalk_mark"
   ... (634 entries)
+  "create_connected:bamboo_window"
+  "create_connected:bamboo_window_pane"
+  "create_connected:brake"
+  "create_connected:brass_gearbox"
+  "create_connected:centrifugal_clutch"
+  "create_connected:cherry_window"
+  "create_connected:cherry_window_pane"
+  "create_connected:copycat_beam"
+  "create_connected:copycat_block"
+  "create_connected:copycat_board"
+  "create_connected:copycat_fence"
+  "create_connected:copycat_fence_gate"
+  "create_connected:copycat_slab"
+  "create_connected:copycat_stairs"
+  "create_connected:copycat_vertical_step"
+  "create_connected:copycat_wall"
+  "create_connected:empty_fan_catalyst"
+  "create_connected:encased_chain_cogwheel"
+  "create_connected:fan_blasting_catalyst"
+  "create_connected:fan_haunting_catalyst"
+  "create_connected:fan_smoking_catalyst"
+  "create_connected:fan_splashing_catalyst"
+  "create_connected:freewheel_clutch"
+  "create_connected:inverted_clutch"
+  "create_connected:inverted_gearshift"
+  "create_connected:item_silo"
+  "create_connected:linked_acacia_button"
+  "create_connected:linked_analog_lever"
+  "create_connected:linked_bamboo_button"
+  "create_connected:linked_birch_button"
+  "create_connected:linked_cherry_button"
+  "create_connected:linked_crimson_button"
+  "create_connected:linked_dark_oak_button"
+  "create_connected:linked_jungle_button"
+  "create_connected:linked_lever"
+  "create_connected:linked_mangrove_button"
+  "create_connected:linked_oak_button"
+  "create_connected:linked_polished_blackstone_button"
+  "create_connected:linked_spruce_button"
+  "create_connected:linked_stone_button"
+  "create_connected:linked_warped_button"
+  "create_connected:overstress_clutch"
+  "create_connected:parallel_gearbox"
+  "create_connected:sequenced_pulse_generator"
+  "create_connected:shear_pin"
+  "create_connected:six_way_gearbox"
+  "create_connected:wrapped_copycat_fence"
+  "create_connected:wrapped_copycat_fence_gate"
+  "create_connected:wrapped_copycat_stairs"
+  "create_connected:wrapped_copycat_wall"
   ... (1741 entries)
+  "gregitas:cane_syrup"
   ... (3 entries)
+  "gregitas:sugar_syrup"
   ... (14040 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (176 entries)
+  "create_connected:brake"
+  "create_connected:brass_gearbox"
+  "create_connected:centrifugal_clutch"
+  "create_connected:copycat"
+  "create_connected:encased_chain_cogwheel"
+  "create_connected:freewheel_clutch"
+  "create_connected:inverted_clutch"
+  "create_connected:inverted_gearshift"
+  "create_connected:item_silo"
+  "create_connected:linked_analog_lever"
+  "create_connected:linked_transmitter"
+  "create_connected:overstress_clutch"
+  "create_connected:parallel_gearbox"
+  "create_connected:sequenced_pulse_generator"
+  "create_connected:shear_pin"
+  "create_connected:six_way_gearbox"
   ... (1791 entries)
 ]

```


</details>

<details>
<summary>fluid</summary>

```diff
 [
   ... (118 entries)
+  "gregitas:cane_syrup"
+  "gregitas:flowing_cane_syrup"
   ... (3 entries)
+  "gregitas:flowing_sugar_syrup"
   ... (3 entries)
+  "gregitas:sugar_syrup"
   ... (1112 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (916 entries)
+  "chalk:black_chalk"
+  "chalk:blue_chalk"
+  "chalk:brown_chalk"
+  "chalk:chalk_box"
+  "chalk:cyan_chalk"
+  "chalk:gray_chalk"
+  "chalk:green_chalk"
+  "chalk:light_blue_chalk"
+  "chalk:light_gray_chalk"
+  "chalk:lime_chalk"
+  "chalk:magenta_chalk"
+  "chalk:orange_chalk"
+  "chalk:pink_chalk"
+  "chalk:purple_chalk"
+  "chalk:red_chalk"
+  "chalk:white_chalk"
+  "chalk:yellow_chalk"
   ... (678 entries)
+  "create_connected:bamboo_window"
+  "create_connected:bamboo_window_pane"
+  "create_connected:brake"
+  "create_connected:brass_gearbox"
+  "create_connected:centrifugal_clutch"
+  "create_connected:cherry_window"
+  "create_connected:cherry_window_pane"
+  "create_connected:control_chip"
+  "create_connected:copycat_beam"
+  "create_connected:copycat_block"
+  "create_connected:copycat_board"
+  "create_connected:copycat_box"
+  "create_connected:copycat_catwalk"
+  "create_connected:copycat_fence"
+  "create_connected:copycat_fence_gate"
+  "create_connected:copycat_slab"
+  "create_connected:copycat_stairs"
+  "create_connected:copycat_vertical_step"
+  "create_connected:copycat_wall"
+  "create_connected:empty_fan_catalyst"
+  "create_connected:encased_chain_cogwheel"
+  "create_connected:fan_blasting_catalyst"
+  "create_connected:fan_haunting_catalyst"
+  "create_connected:fan_smoking_catalyst"
+  "create_connected:fan_splashing_catalyst"
+  "create_connected:freewheel_clutch"
+  "create_connected:incomplete_control_chip"
+  "create_connected:inverted_clutch"
+  "create_connected:inverted_gearshift"
+  "create_connected:item_silo"
+  "create_connected:linked_transmitter"
+  "create_connected:music_disc_elevator"
+  "create_connected:music_disc_interlude"
+  "create_connected:overstress_clutch"
+  "create_connected:parallel_gearbox"
+  "create_connected:sequenced_pulse_generator"
+  "create_connected:shear_pin"
+  "create_connected:six_way_gearbox"
+  "create_connected:vertical_brass_gearbox"
+  "create_connected:vertical_parallel_gearbox"
+  "create_connected:vertical_six_way_gearbox"
   ... (2174 entries)
+  "gregitas:cane_pulp"
+  "gregitas:cane_syrup_bucket"
   ... (152 entries)
+  "gregitas:sugar_syrup_bucket"
   ... (21798 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (53)</summary>
<blockquote>

<details>
<summary>chalk/chests/desert_pyramid_chalk_loot</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      name: "main"
+      rolls: 2
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{Items:[{Count:1b,id:\"chalk:white_chalk\",tag:{Damage:23}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_gray_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:red_chalk\",tag:{Damage:17}},{Count:1b,id:\"minecraft:air\"}]}"
+            }
+          ]
+          name: "chalk:chalk_box"
+        }
+        {
+          type: "minecraft:item"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{GlowUses:2,Items:[{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_gray_chalk\",tag:{Damage:6}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:white_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_blue_chalk\",tag:{Damage:0}},{Count:7b,id:\"minecraft:glowstone_dust\"}]}"
+            }
+          ]
+          name: "chalk:chalk_box"
+        }
+        {
+          type: "minecraft:item"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{Items:[{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_gray_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:green_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"}]}"
+            }
+          ]
+          name: "chalk:chalk_box"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:white_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:light_gray_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:gray_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:black_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:yellow_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:light_blue_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:orange_chalk"
+        }
+        {
+          type: "minecraft:empty"
+          weight: 70
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>chalk/chests/dungeon_chalk_loot</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      name: "main"
+      rolls: 2
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{Items:[{Count:1b,id:\"chalk:white_chalk\",tag:{Damage:23}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_gray_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:red_chalk\",tag:{Damage:17}},{Count:1b,id:\"minecraft:air\"}]}"
+            }
+          ]
+          name: "chalk:chalk_box"
+        }
+        {
+          type: "minecraft:item"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{GlowUses:2,Items:[{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_gray_chalk\",tag:{Damage:6}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:white_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_blue_chalk\",tag:{Damage:0}},{Count:7b,id:\"minecraft:glowstone_dust\"}]}"
+            }
+          ]
+          name: "chalk:chalk_box"
+        }
+        {
+          type: "minecraft:item"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{GlowUses:5,Items:[{Count:1b,id:\"chalk:blue_chalk\",tag:{Damage:3}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:pink_chalk\",tag:{Damage:50}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:yellow_chalk\",tag:{Damage:0}},{Count:5b,id:\"minecraft:glow_ink_sac\"}]}"
+            }
+          ]
+          name: "chalk:chalk_box"
+        }
+        {
+          type: "minecraft:item"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{Items:[{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:light_gray_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"minecraft:air\"},{Count:1b,id:\"chalk:green_chalk\",tag:{Damage:0}},{Count:1b,id:\"minecraft:air\"}]}"
+            }
+          ]
+          name: "chalk:chalk_box"
+        }
+        {
+          type: "minecraft:item"
+          weight: 10
+          name: "chalk:white_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 8
+          name: "chalk:light_gray_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "chalk:black_chalk"
+        }
+        {
+          type: "minecraft:empty"
+          weight: 60
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>chalk/chests/village_chalk_loot</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      name: "main"
+      rolls: 2
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:white_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "chalk:light_gray_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 3
+          name: "chalk:gray_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 2
+          name: "chalk:black_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:yellow_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:light_blue_chalk"
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "chalk:orange_chalk"
+        }
+        {
+          type: "minecraft:empty"
+          weight: 70
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/bamboo_window</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/bamboo_window"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:bamboo_window"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:match_tool"
+          predicate: {
+            enchantments: [
+              {
+                enchantment: "minecraft:silk_touch"
+                levels: {
+                  min: 1
+                }
+              }
+            ]
+          }
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/bamboo_window_pane</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/bamboo_window_pane"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:bamboo_window_pane"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:match_tool"
+          predicate: {
+            enchantments: [
+              {
+                enchantment: "minecraft:silk_touch"
+                levels: {
+                  min: 1
+                }
+              }
+            ]
+          }
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/brake</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/brake"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:brake"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/brass_gearbox</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/brass_gearbox"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:brass_gearbox"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/centrifugal_clutch</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/centrifugal_clutch"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:centrifugal_clutch"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/cherry_window</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/cherry_window"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:cherry_window"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:match_tool"
+          predicate: {
+            enchantments: [
+              {
+                enchantment: "minecraft:silk_touch"
+                levels: {
+                  min: 1
+                }
+              }
+            ]
+          }
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/cherry_window_pane</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/cherry_window_pane"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:cherry_window_pane"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:match_tool"
+          predicate: {
+            enchantments: [
+              {
+                enchantment: "minecraft:silk_touch"
+                levels: {
+                  min: 1
+                }
+              }
+            ]
+          }
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_beam</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_beam"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_beam"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_block</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_block"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_block"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_board</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_board"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_board"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+        {
+          condition: "minecraft:block_state_property"
+          block: "create_connected:copycat_board"
+          properties: {
+            down: "true"
+          }
+        }
+      ]
+    }
+    {
+      name: "pool1"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_board"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+        {
+          condition: "minecraft:block_state_property"
+          block: "create_connected:copycat_board"
+          properties: {
+            up: "true"
+          }
+        }
+      ]
+    }
+    {
+      name: "pool2"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_board"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+        {
+          condition: "minecraft:block_state_property"
+          block: "create_connected:copycat_board"
+          properties: {
+            north: "true"
+          }
+        }
+      ]
+    }
+    {
+      name: "pool3"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_board"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+        {
+          condition: "minecraft:block_state_property"
+          block: "create_connected:copycat_board"
+          properties: {
+            south: "true"
+          }
+        }
+      ]
+    }
+    {
+      name: "pool4"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_board"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+        {
+          condition: "minecraft:block_state_property"
+          block: "create_connected:copycat_board"
+          properties: {
+            west: "true"
+          }
+        }
+      ]
+    }
+    {
+      name: "pool5"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_board"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+        {
+          condition: "minecraft:block_state_property"
+          block: "create_connected:copycat_board"
+          properties: {
+            east: "true"
+          }
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_fence"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_fence"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_fence_gate</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_fence_gate"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_fence_gate"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_slab"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "create_connected:copycat_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+              add: false
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "create_connected:copycat_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_stairs"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_vertical_step</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_vertical_step"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_vertical_step"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/copycat_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/copycat_wall"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:copycat_wall"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/empty_fan_catalyst</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/empty_fan_catalyst"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:empty_fan_catalyst"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/encased_chain_cogwheel</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/encased_chain_cogwheel"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:encased_chain_cogwheel"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/fan_blasting_catalyst</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/fan_blasting_catalyst"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:fan_blasting_catalyst"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/fan_haunting_catalyst</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/fan_haunting_catalyst"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:fan_haunting_catalyst"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/fan_smoking_catalyst</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/fan_smoking_catalyst"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:fan_smoking_catalyst"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/fan_splashing_catalyst</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/fan_splashing_catalyst"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:fan_splashing_catalyst"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/freewheel_clutch</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/freewheel_clutch"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:freewheel_clutch"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/inverted_clutch</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/inverted_clutch"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:inverted_clutch"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/inverted_gearshift</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/inverted_gearshift"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:inverted_gearshift"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/item_silo</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/item_silo"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:item_silo"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_acacia_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_acacia_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_analog_lever</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_analog_lever"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_bamboo_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_bamboo_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_birch_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_birch_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_cherry_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_cherry_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_crimson_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_crimson_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_dark_oak_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_dark_oak_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_jungle_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_jungle_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_lever</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_lever"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_mangrove_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_mangrove_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_oak_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_oak_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_polished_blackstone_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_polished_blackstone_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_spruce_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_spruce_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_stone_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_stone_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/linked_warped_button</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/linked_warped_button"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/overstress_clutch</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/overstress_clutch"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:overstress_clutch"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/parallel_gearbox</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/parallel_gearbox"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:parallel_gearbox"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/sequenced_pulse_generator</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/sequenced_pulse_generator"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:sequenced_pulse_generator"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/shear_pin</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/shear_pin"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:shear_pin"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/six_way_gearbox</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/six_way_gearbox"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "create_connected:six_way_gearbox"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/wrapped_copycat_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/wrapped_copycat_fence"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/wrapped_copycat_fence_gate</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/wrapped_copycat_fence_gate"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/wrapped_copycat_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/wrapped_copycat_stairs"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create_connected/blocks/wrapped_copycat_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "create_connected:blocks/wrapped_copycat_wall"
+  pools: [
+    {
+      name: "main"
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

</blockquote>

</details>

