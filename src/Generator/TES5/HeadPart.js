let {
    addDef, subrecord, uint32, ckFormId, sortKey, 
    multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('HeadPart', 
        sortKey([0], multiStruct('Head Part', [
            subrecord('INDX', uint32('Head Part Number')),
            subrecord('HEAD', ckFormId('Head', ['HDPT', 'NULL']))
        ]))
    );
};