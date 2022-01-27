let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('PlayerActionEnum', 
        enumeration({
            0: '',
            1: 'Swinging Melee Weapon',
            2: 'Throwing Grenade',
            3: 'Fire Weapon',
            4: 'Lay Mine',
            5: 'Z Key Object',
            6: 'Jumping',
            7: 'Knocking over Objects',
            8: 'Stand on Table/Chair',
            9: 'Iron Sites',
            10: 'Destroying Object'
        })
    );
};