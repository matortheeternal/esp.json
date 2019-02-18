let {
    addDef
} = require('../helpers');

module.exports = game => {
    addDef('CastingSourceEnum', 
        {
            '0': 'Left',
            '1': 'Right',
            '2': 'Voice',
            '3': 'Instant',
        }
    );
};