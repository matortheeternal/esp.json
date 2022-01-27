let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ArchtypeEnum', 
        enumeration({
            0: 'Value Modifier',
            1: 'Script',
            2: 'Dispel',
            3: 'Cure Disease',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
            10: '',
            11: 'Invisibility',
            12: 'Chameleon',
            13: 'Light',
            14: '',
            15: '',
            16: 'Lock',
            17: 'Open',
            18: 'Bound Item',
            19: 'Summon Creature',
            20: '',
            21: '',
            22: '',
            23: '',
            24: 'Paralysis',
            25: '',
            26: '',
            27: '',
            28: '',
            29: '',
            30: 'Cure Paralysis',
            31: 'Cure Addiction',
            32: 'Cure Poison',
            33: 'Concussion',
            34: 'Value And Parts',
            35: 'Limb Condition',
            36: 'Turbo'
        })
    );
};