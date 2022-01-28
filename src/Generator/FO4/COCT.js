let {
    addDef, uint32, conflictType, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('COCT', 
        subrecord('COCT', conflictType('Benign', uint32('Count')))
    );
};