let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('SkillEnum', 
        enumeration({
            0: 'Armorer',
            1: 'Athletics',
            2: 'Blade',
            3: 'Block',
            4: 'Blunt',
            5: 'Hand To Hand',
            6: 'Heavy Armor',
            7: 'Alchemy',
            8: 'Alteration',
            9: 'Conjuration',
            10: 'Destruction',
            11: 'Illusion',
            12: 'Mysticism',
            13: 'Restoration',
            14: 'Acrobatics',
            15: 'Light Armor',
            16: 'Marksman',
            17: 'Mercantile',
            18: 'Security',
            19: 'Sneak',
            20: 'Speechcraft',
            "-1": 'None'
        })
    );
};