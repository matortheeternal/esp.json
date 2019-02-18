let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('CastingSourceEnum', 
        {
            '0': 'Left',
            '1': 'Right',
            '2': 'Voice',
            '3': 'Instant',
        }
    );
};