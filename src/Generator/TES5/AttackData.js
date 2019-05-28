let {
    addDef, float, ckFormId, uint32, subrecord, 
    struct, string, sortKey, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('AttackData', sortKey([1], multiStruct('Attack', undefined)));
};