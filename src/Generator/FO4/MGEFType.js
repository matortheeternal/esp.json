let {
    addDef, enumeration, uint32, format, opts
} = require('../helpers');

module.exports = () => {
    addDef('MGEFType', 
        opts(format(uint32('Archetype'), enumeration({
            0: 'Value Modifier',
            1: 'Script',
            2: 'Dispel',
            3: 'Cure Disease',
            4: 'Absorb',
            5: 'Dual Value Modifier',
            6: 'Calm',
            7: 'Demoralize',
            8: 'Frenzy',
            9: 'Disarm',
            10: 'Command Summoned',
            11: 'Invisibility',
            12: 'Light',
            13: 'Darkness',
            14: 'Nighteye',
            15: 'Lock',
            16: 'Open',
            17: 'Bound Weapon',
            18: 'Summon Creature',
            19: 'Detect Life',
            20: 'Telekinesis',
            21: 'Paralysis',
            22: 'Reanimate',
            23: 'Soul Trap',
            24: 'Turn Undead',
            25: 'Guide',
            26: 'Unknown 26',
            27: 'Cure Paralysis',
            28: 'Cure Addiction',
            29: 'Cure Poison',
            30: 'Concussion',
            31: 'Stimpack',
            32: 'Accumulate Magnitude',
            33: 'Stagger',
            34: 'Peak Value Modifier',
            35: 'Cloak',
            36: 'Unknown 36',
            37: 'Slow Time',
            38: 'Rally',
            39: 'Enhance Weapon',
            40: 'Spawn Hazard',
            41: 'Etherealize',
            42: 'Banish',
            43: 'Spawn Scripted Ref',
            44: 'Disguise',
            45: 'Damage',
            46: 'Immunity',
            47: 'Permanent Reanimate',
            48: 'Jetpack',
            49: 'Chameleon'
        })), {
            "afterSet": "MGEFArchtypeAfterSet"
        })
    );
};