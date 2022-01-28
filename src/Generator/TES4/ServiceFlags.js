let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('ServiceFlags', 
        flags({
            0: 'Weapons',
            1: 'Armor',
            2: 'Clothing',
            3: 'Books',
            4: 'Ingredients',
            5: '',
            6: '',
            7: 'Lights',
            8: 'Apparatus',
            9: '',
            10: 'Miscellaneous',
            11: 'Spells',
            12: 'Magic Items',
            13: 'Potions',
            14: 'Training',
            15: '',
            16: 'Recharge',
            17: 'Repair'
        })
    );
};