let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('CrimeTypeEnum', 
        enumeration({
            0: 'Steal',
            1: 'Pickpocket',
            2: 'Trespass',
            3: 'Attack',
            4: 'Murder',
            5: 'Escape Jail',
            6: 'Werewolf Transformation',
            "-1": 'None'
        })
    );
};