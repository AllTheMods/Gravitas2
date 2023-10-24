WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "railcraft:lead_ore",
      "railcraft:deepslate_lead_ore",
      "railcraft:nickel_ore",
      "railcraft:deepslate_nickel_ore",
      "railcraft:tin_ore",
      "railcraft:deepslate_tin_ore",
      "railcraft:silver_ore",
      "railcraft:deepslate_silver_ore",
      "railcraft:zinc_ore",
      "railcraft:deepslate_zinc_ore",
      "railcraft:sulfer_ore",
      "create:zinc_ore",
      "create:deepslate_zinc_ore",
      "create_new_age:thorium_ore",
      "alltheores:aluminum_ore",
      "alltheores:lead_ore",
      "alltheores:zinc_ore",
      "alltheores:tin_ore",
      "alltheores:platinum_ore",
      "alltheores:silver_ore",
      "alltheores:nickel_ore",
      "alltheores:uranium_ore",
      "alltheores:iridium_ore",
      "alltheores:osmium_ore"
    ];
  });
});
