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
            "-1": 'None'
        })
    );
};