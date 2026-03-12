const dfcColors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink',
    'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
  ]

const dfcTileColors = [
    'plain', 'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink',
    'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
  ]

const dfcTileTypes = ['normal', 'glazed', 'small']

const dfcReplaceableMetals = [
  "bismuth", "bismuth_bronze", "black_bronze", "bronze", "brass",
  "copper", "gold", "nickel", "rose_gold", "silver", "tin", "zinc",
  "sterling_silver", "wrought_iron", "steel", "black_steel",
  "blue_steel", "red_steel", "aluminum", "lead", "platinum"
]

const dfcCopyMetals = ["lead", "aluminum", "platinum"] 

const dfcMetals = dfcCopyMetals.concat("alumina")

const dfcAllMetals = dfcReplaceableMetals.concat(["cast_iron", "pewter", "alumina"])

const dfcOresToRemove = ["galena", "bauxite", "native_platinum", "native_aluminum"]

const tfcOreTypes = ["small", "rich", "poor", "normal"]
