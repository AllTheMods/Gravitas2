GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("improved_coke_oven")
    .category("gregitas")
    .setEUIO("in")
    .setMaxIOSize(1, 1, 0, 1)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FIRE)
})

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("improved_coke_oven", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("improved_coke_oven")
    .pattern((definition) =>
      FactoryBlockPattern.start()
        .aisle("bbb", "ccc", "bbb")
        .aisle("bbb", "c c", "bbb")
        .aisle("bkb", "ccc", "bbb")
        .where("k", Predicates.controller(Predicates.blocks(definition.get())))
        .where("c", Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
        .where(" ", Predicates.any())
        .where(
          "b",
          Predicates.blocks("gregitas:bronze_plated_bricks")
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
        )
        .build()
    )
    .workableCasingRenderer("kubejs:block/casings/bronze_plated_bricks", "gtceu:block/multiblock/coke_oven", false)
})
