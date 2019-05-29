let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('SexEnum', 
        {
            0: 'Male',
            1: 'Female'
        }
    );
};