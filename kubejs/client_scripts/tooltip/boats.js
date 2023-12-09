
const boats = [
        {
            id: 'tfc:wood/boat/acacia',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/ash',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/aspen',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/birch',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/blackwood',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/chestnut',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/douglas_fir',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/hickory',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/kapok',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/mangrove',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/maple',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/oak',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/pine',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/rosewood',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/sequoia',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/spruce',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/sycamore',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/white_cedar',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        },
        {
            id: 'tfc:wood/boat/willow',
            text: 'Functionality Disabled.',
            alt: 'Crafting Ingredient ONLY!',
            colour: 0xFF0000
        }
]

const boatTooltips = (/** @type {Internal.ItemTooltipEventJS} */ event) => {
    boats.forEach((boat) => {
        event.add(boat.id,
                [
                    Text.of(boat.text),
                    Text.of(boat.alt).color(boat.colour)
                ]
            )
        }
    )
}