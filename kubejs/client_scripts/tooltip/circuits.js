const circuits = [
    //ULV
        {
            id: 'gtceu:vacuum_tube',
            text: 'Your first ULV circuit.',
            tier: 'ULV-Tier Circuit',
            colour: 0xFFFFFF
        },
        {
            id: 'gtceu:nand_chip',
            text: 'Your final ULV circuit.',
            tier: 'ULV-Tier Circuit',
            colour: 0xFFFFFF
        },
    //LV
        {
            id: 'gtceu:basic_electronic_circuit',
            text: 'Your first LV circuit.',
            tier: 'LV-Tier Circuit',
            colour: 0xFFFFFF
        },
        {
            id: 'gtceu:basic_integrated_circuit',
            text: 'Your second LV circuit.',
            tier: 'LV-Tier Circuit',
            colour: 0xFFFFFF
        },
        {
            id: 'gtceu:microchip_processor',
            text: 'Your final LV circuit.',
            tier: 'LV-Tier Circuit',
            colour: 0xFFFFFF
        },
    //MV
        {
            id: 'gtceu:good_electronic_circuit',
            text: 'Your first MV circuit.',
            tier: 'MV-Tier Circuit',
            colour: 0x55FFFF
        },
        {
            id: 'gtceu:good_integrated_circuit',
            text: 'Your second MV circuit.',
            tier: 'MV-Tier Circuit',
            colour: 0x55FFFF
        },
        {
            id: 'gtceu:micro_processor',
            text: 'Your final MV circuit.',
            tier: 'MV-Tier Circuit',
            colour: 0x55FFFF
        },
    //HV
        {
            id: 'gtceu:advanced_integrated_circuit',
            text: 'Your first HV circuit.',
            tier: 'HV-Tier Circuit',
            colour: 0xFFAA00
        },
        {
            id: 'gtceu:micro_processor_assembly',
            text: 'Your second HV circuit.',
            tier: 'HV-Tier Circuit',
            colour: 0xFFAA00
        },
        {
            id: 'gtceu:nano_processor',
            text: 'Your final HV circuit.',
            tier: 'HV-Tier Circuit',
            colour: 0xFFAA00
        },
    //EV
        {
            id: 'gtceu:micro_processor_computer',
            text: 'Your first EV circuit.',
            tier: 'EV-Tier Circuit',
            colour: 0xAA00AA
        },
        {
            id: 'gtceu:nano_processor_assembly',
            text: 'Your second EV circuit.',
            tier: 'EV-Tier Circuit',
            colour: 0xAA00AA
        },
        {
            id: 'gtceu:quantum_processor',
            text: 'Your final EV circuit.',
            tier: 'EV-Tier Circuit',
            colour: 0xAA00AA
        },
    //IV
        {
            id: 'gtceu:micro_processor_mainframe',
            text: 'Your first IV circuit.',
            tier: 'IV-Tier Circuit',
            colour: 0x0000AA
        },
        {
            id: 'gtceu:nano_processor_computer',
            text: 'Your second IV circuit.',
            tier: 'IV-Tier Circuit',
            colour: 0x0000AA
        },
        {
            id: 'gtceu:quantum_processor_assembly',
            text: 'Your third IV circuit.',
            tier: 'IV-Tier Circuit',
            colour: 0x0000AA
        },
        {
            id: 'gtceu:crystal_processor',
            text: 'Your final IV circuit.',
            tier: 'IV-Tier Circuit',
            colour: 0x0000AA
        },
    //LuV
        {
            id: 'gtceu:nano_processor_mainframe',
            text: 'Your first LuV circuit.',
            tier: 'LuV-Tier Circuit',
            colour: 0xFF55FF
        },
        {
            id: 'gtceu:quantum_processor_computer',
            text: 'Your second LuV circuit.',
            tier: 'LuV-Tier Circuit',
            colour: 0xFF55FF
        },
        {
            id: 'gtceu:crystal_processor_assembly',
            text: 'Your third LuV circuit.',
            tier: 'LuV-Tier Circuit',
            colour: 0xFF55FF
        },
        {
            id: 'gtceu:wetware_processor',
            text: 'Your final LuV circuit.',
            tier: 'LuV-Tier Circuit',
            colour: 0xFF55FF
        },
    //ZPM
        {
            id: 'gtceu:quantum_processor_mainframe',
            text: 'Your first ZPM circuit.',
            tier: 'ZPM-Tier Circuit',
            colour: 0xFF5555
        },
        {
            id: 'gtceu:crystal_processor_computer',
            text: 'Your second ZPM circuit.',
            tier: 'ZPM-Tier Circuit',
            colour: 0xFF5555
        },
        {
            id: 'gtceu:wetware_processor_assembly',
            text: 'Your final ZPM circuit.',
            tier: 'ZPM-Tier Circuit',
            colour: 0xFF5555
        },
    //UV
        {
            id: 'gtceu:crystal_processor_mainframe',
            text: 'Your first UV circuit.',
            tier: 'UV-Tier Circuit',
            colour: 0x00AAAA
        },
        {
            id: 'gtceu:wetware_processor_computer',
            text: 'Your final UV circuit.',
            tier: 'UV-Tier Circuit',
            colour: 0x00AAAA
        },
    //UHV
        {
            id: 'gtceu:wetware_processor_mainframe',
            text: 'Your first and only UHV circuit.',
            tier: 'UHV-Tier Circuit',
            colour: 0xAA0000
        }
]

const circuitTooltips = (/** @type {Internal.ItemTooltipEventJS} */ event) => {
    circuits.forEach((circuit) => {
        event.add(circuit.id, 
                [
                    Text.of(circuit.text),
                    Text.of(circuit.tier).color(circuit.colour)
                ]
            )
        }
    )
}