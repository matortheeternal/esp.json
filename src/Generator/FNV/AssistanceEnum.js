let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('AssistanceEnum', 
        enumeration({
            0: 'Helps Nobody',
            1: 'Helps Allies',
            2: 'Helps Friends and Allies'
        })
    );
};