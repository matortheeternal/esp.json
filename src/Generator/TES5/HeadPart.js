let {
    addDef, subrecord, uint32, ckFormId, sortKey, 
    multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('HeadPart', sortKey([0], multiStruct('Head Part', undefined)));
};