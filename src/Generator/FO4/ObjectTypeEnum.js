let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ObjectTypeEnum', 
        enumeration({
            0: ' NONE',
            1: 'Activators',
            2: 'Armor',
            3: 'Books',
            4: 'Containers',
            5: 'Doors',
            6: 'Ingredients',
            7: 'Lights',
            8: 'Miscellaneous',
            9: 'Flora',
            10: 'Furniture',
            11: 'Weapons: Any',
            12: 'Ammo',
            13: 'Keys',
            14: 'Alchemy',
            15: 'Food',
            16: 'Clothing',
            17: 'All: Wearable',
            18: 'Weapons: NONE',
            19: 'Weapons: Melee',
            20: 'Weapons: Ranged',
            21: 'Spells: Any',
            22: 'Spells: Range Target',
            23: 'Spells: Range Touch',
            24: 'Spells: Range Self',
            25: 'Actors: Any',
            26: 'Furniture: Beds',
            27: 'Furniture: Chairs',
            28: 'Shouts',
            29: 'Headtrack Markers'
        })
    );
};