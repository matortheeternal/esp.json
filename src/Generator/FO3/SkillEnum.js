let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('SkillEnum', 
        enumeration({
            0: 'Barter',
            1: 'Big Guns',
            2: 'Energy Weapons',
            3: 'Explosives',
            4: 'Lockpick',
            5: 'Medicine',
            6: 'Melee Weapons',
            7: 'Repair',
            8: 'Science',
            9: 'Small Guns',
            10: 'Sneak',
            11: 'Speech',
            12: 'Throwing (unused)',
            13: 'Unarmed',
            "-1": 'None'
        })
    );
};