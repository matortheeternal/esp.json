let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('HeadPartIndexEnum', 
        enumeration({
            0: 'Head',
            1: 'Ears',
            2: 'Mouth',
            3: 'Teeth Lower',
            4: 'Teeth Upper',
            5: 'Tongue',
            6: 'Left Eye',
            7: 'Right Eye'
        })
    );
};