let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('CastingSourceEnum', 
        enumeration({
            0: 'Left',
            1: 'Right',
            2: 'Voice',
            3: 'Instant'
        })
    );
};