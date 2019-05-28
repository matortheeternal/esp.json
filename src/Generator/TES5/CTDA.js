let {
    addDef, def, uint8, bytes, float, 
    ckFormId, union, uint16, opts, int32, 
    uint32, formId, subrecord, sortKey, struct, 
    string
} = require('../helpers');

module.exports = () => {
    addDef('CTDA', sortKey([0], multiStruct('Condition', undefined)));
};