let {
    addDef
} = require('../helpers');

module.exports = game => {
    addDef('CriticalStageEnum', 
        {
            '0': 'None',
            '1': 'Goo Start',
            '2': 'Goo End',
            '3': 'Disintegrate Start',
            '4': 'Disintegrate End',
        }
    );
};