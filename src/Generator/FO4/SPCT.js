let {
    addDef, uint32, conflictType, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SPCT', 
        subrecord('SPCT', conflictType('Benign', uint32('Count')))
    );
};