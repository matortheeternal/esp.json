let {
    addDef
} = require('../helpers');

module.exports = game => {
    addDef('SexEnum', 
        {
            '0': 'Male',
            '1': 'Female',
        }
    );
};