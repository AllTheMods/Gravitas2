// priority 10

// Shared Java class refs for all NC → GT recipe bridges.
// This file sorts before the bridge files alphabetically and is loaded first.

const $FluidRecipeCapability = Java.loadClass(
  "com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability"
)
const $FluidIngredientJS = Java.loadClass(
  "com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS"
)
const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
