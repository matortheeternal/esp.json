let {
    addDef, uint8, conflictType, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('LLCT', 
        subrecord('LLCT', conflictType('Benign', uint8('Count')))
    );
};