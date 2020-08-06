let {
    addDef, float, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XSCL', 
        subrecord('XSCL', float('Scale'))
    );
};