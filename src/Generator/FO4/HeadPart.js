let {
    addDef, uint32, subrecord, ckFormId, sortKey, 
    memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('HeadPart', 
        sortKey([0], memberStruct('Head Part', [
            subrecord('INDX', uint32('Head Part Number')),
            subrecord('HEAD', ckFormId('Head', ['HDPT', 'NULL']))
        ]))
    );
};