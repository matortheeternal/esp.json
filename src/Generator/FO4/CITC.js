let {
    addDef, uint32, conflictType, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('CITC', 
        subrecord('CITC', conflictType('Benign', uint32('Condition Count')))
    );
};