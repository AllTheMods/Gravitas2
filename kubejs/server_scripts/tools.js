ServerEvents.recipes(event => {
//a lot of this can be done with for loops, I'll figure that out later ;3
//item heats will have to be datagen its too fkn much 
event.remove({"id": "tfc:anvil/wrought_iron_rod"})
event.remove({"id": "gtceu:shaped/stick_wrought_iron"})
event.remove({"id": "gtceu:shaped/stick_long_wrought_iron"})
event.remove({"id": "gtceu:shaped/screw_wrought_iron"})
event.remove({"id": "gtceu:shaped/wire_cutter_wrought_iron"})

//this can probably just be an event.replace... not sure will try later
event.custom({
    type:"tfc:anvil",
    "input": {"tag": "forge:ingots/wrought_iron"},
    "result": {
        "item": "gtceu:wrought_iron_rod",
        "count": 2
    },
    "tier": 3,
    "rules": [
        "bend_last", 
        "draw_second_last", 
        "draw_third_last"]
})
event.custom({
        type: "tfc:welding",
        "first_input": {"item": "gtceu:wrought_iron_rod"},
        "second_input": {"item": "gtceu:wrought_iron_rod"},
        "tier": 3,
        "result": {"item" : "kubejs:cutter_head"}
})
//this probably isnt a realistic way to do this but i'll fix that later
//need to add heat capacity to wrought_iron_bolt
event.custom({
    type:"tfc:welding",
    "first_input": {"item": "gtceu:wrought_iron_bolt"},
    "second_input": {"item" : "gtceu:wrought_iron_bolt"},
    "tier": 3,
    "result": {"item": "gtceu:wrought_iron_screw"}
})
event.shaped("gtceu:wrought_iron_wire_cutter", [' F ','HCD','RSR'], {
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        C: 'kubejs:cutter_head',
        D: '#forge:tools/screwdrivers',
        R: 'gtceu:wrought_iron_rod',
        S: 'gtceu:wrought_iron_screw'
})
})