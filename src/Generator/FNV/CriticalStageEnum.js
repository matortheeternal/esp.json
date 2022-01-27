let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('CriticalStageEnum', 
        enumeration({
            0: 'None',
            1: 'Goo Start',
            2: 'Goo End',
            3: 'Disintegrate Start',
            4: 'Disintegrate End'
        })
    );
};