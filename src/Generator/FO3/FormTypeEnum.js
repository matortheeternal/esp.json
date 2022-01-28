let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('FormTypeEnum', 
        enumeration({
            4: 'Texture Set',
            5: 'Menu Icon',
            6: 'Global',
            7: 'Class',
            8: 'Faction',
            9: 'Head Part',
            10: 'Hair',
            11: 'Eyes',
            12: 'Race',
            13: 'Sound',
            14: 'Acoustic Space',
            15: 'Skill',
            16: 'Base Effect',
            17: 'Script',
            18: 'Landscape Texture',
            19: 'Object Effect',
            20: 'Actor Effect',
            21: 'Activator',
            22: 'Talking Activator',
            23: 'Terminal',
            24: 'Armor',
            25: 'Book',
            26: 'Clothing',
            27: 'Container',
            28: 'Door',
            29: 'Ingredient',
            30: 'Light',
            31: 'Misc',
            32: 'Static',
            33: 'Static Collection',
            34: 'Movable Static',
            35: 'Placeable Water',
            36: 'Grass',
            37: 'Tree',
            38: 'Flora',
            39: 'Furniture',
            40: 'Weapon',
            41: 'Ammo',
            42: 'NPC',
            43: 'Creature',
            44: 'Leveled Creature',
            45: 'Leveled NPC',
            46: 'Key',
            47: 'Ingestible',
            48: 'Idle Marker',
            49: 'Note',
            50: 'Constructible Object',
            51: 'Projectile',
            52: 'Leveled Item',
            53: 'Weather',
            54: 'Climate',
            55: 'Region',
            57: 'Cell',
            58: 'Placed Object',
            59: 'Placed Character',
            60: 'Placed Creature',
            62: 'Placed Grenade',
            65: 'Worldspace',
            66: 'Landscape',
            67: 'Navigation Mesh',
            69: 'Dialog Topic',
            70: 'Dialog Response',
            71: 'Quest',
            72: 'Idle Animation',
            73: 'Package',
            74: 'Combat Style',
            75: 'Load Screen',
            76: 'Leveled Spell',
            77: 'Animated Object',
            78: 'Water',
            79: 'Effect Shader',
            81: 'Explosion',
            82: 'Debris',
            83: 'Image Space',
            84: 'Image Space Modifier',
            85: 'FormID List',
            86: 'Perk',
            87: 'Body Part Data',
            88: 'Addon Node',
            89: 'Actor Value Info',
            90: 'Radiation Stage',
            91: 'Camera Shot',
            92: 'Camera Path',
            93: 'Voice Type',
            94: 'Impact Data',
            95: 'Impact DataSet',
            96: 'Armor Addon',
            97: 'Encounter Zone',
            98: 'Message',
            99: 'Ragdoll',
            100: 'Default Object Manager',
            101: 'Lighting Template',
            102: 'Music Type'
        })
    );
};