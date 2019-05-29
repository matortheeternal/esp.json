let {
    addDef, subrecord, float
} = require('../helpers');

module.exports = () => {
    addDef('XSCL', 
        subrecord('XSCL', float('Scale'))
    );
};