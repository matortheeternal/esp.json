let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('SoundLevelEnum', 
        enumeration({
            0: 'Loud',
            1: 'Normal',
            2: 'Silent',
            3: 'Very Loud',
            4: 'Quiet'
        })
    );
};