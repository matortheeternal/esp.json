let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('WeaponAnimTypeEnum', 
        {
            0: 'HandToHandMelee',
            1: 'OneHandSword',
            2: 'OneHandDagger',
            3: 'OneHandAxe',
            4: 'OneHandMace',
            5: 'TwoHandSword',
            6: 'TwoHandAxe',
            7: 'Bow',
            8: 'Staff',
            9: 'Crossbow'
        }
    );
};