let {
    addDef, uint32, conflictType, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('KSIZ', 
        subrecord('KSIZ', conflictType('Benign', uint32('Keyword Count')))
    );
};