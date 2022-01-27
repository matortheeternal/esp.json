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
            9: 'Guns',
            10: 'Sneak',
            11: 'Speech',
            12: 'Survival',
            13: 'Unarmed',
            "-1": 'None'
        })
    );
};