let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('EquipType', 
        flags({
            0: 'Hand To Hand Melee',
            1: 'One Hand Sword',
            2: 'One Hand Dagger',
            3: 'One Hand Axe',
            4: 'One Hand Mace',
            5: 'Two Hand Sword',
            6: 'Two Hand Axe',
            7: 'Bow',
            8: 'Staff',
            9: 'Spell',
            10: 'Shield',
            11: 'Torch',
            12: 'Crossbow'
        })
    );
};