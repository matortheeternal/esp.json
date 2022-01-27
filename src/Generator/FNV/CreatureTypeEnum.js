let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('CreatureTypeEnum', 
        enumeration({
            0: 'Animal',
            1: 'Mutated Animal',
            2: 'Mutated Insect',
            3: 'Abomination',
            4: 'Super Mutant',
            5: 'Feral Ghoul',
            6: 'Robot',
            7: 'Giant'
        })
    );
};