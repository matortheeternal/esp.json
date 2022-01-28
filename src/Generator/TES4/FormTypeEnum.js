let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('FormTypeEnum', 
        enumeration({
            3: 'Game Setting',
            4: 'Global',
            5: 'Class',
            6: 'Faction',
            7: 'Hair',
            8: 'Eyes',
            9: 'Race',
            10: 'Sound',
            11: 'Skill',
            12: 'Magic Effect',
            13: 'Script',
            14: 'Land Texture',
            15: 'Enchantment',
            16: 'Spell',
            17: 'BirthSign',
            18: 'Activator',
            19: 'Apparatus',
            20: 'Armor',
            21: 'Book',
            22: 'Clothing',
            23: 'Container',
            24: 'Door',
            25: 'Ingredient',
            26: 'Light',
            27: 'Misc',
            28: 'Static',
            29: 'Grass',
            30: 'Tree',
            31: 'Flora',
            32: 'Furniture',
            33: 'Weapon',
            34: 'Ammi',
            35: 'NPC',
            36: 'Creature',
            37: 'Leveled Creature',
            38: 'Soul Gem',
            39: 'Key',
            40: 'Alchemy',
            41: 'SubSpace',
            42: 'Sigil Stone',
            43: 'Leveled Item',
            45: 'Weather',
            46: 'Climate',
            47: 'Region',
            48: 'Cell',
            49: 'Placed Object',
            50: 'Placed NPC',
            51: 'Placed Creature',
            52: 'Path Grid',
            53: 'Worldspace',
            54: 'Landscape',
            56: 'Road',
            57: 'Dialog Topic',
            58: 'Dialog Response',
            59: 'Quest',
            60: 'Idle Animation',
            61: 'Package',
            62: 'Combat Style',
            63: 'Load Screen',
            64: 'Leveled Spell',
            65: 'Animated Object',
            66: 'Water',
            67: 'Effect Shader'
        })
    );
};