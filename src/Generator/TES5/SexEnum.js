let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('SexEnum', 
        enumeration({
            0: 'Male',
            1: 'Female'
        })
    );
};