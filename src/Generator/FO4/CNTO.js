let {
    addDef, def, ckFormId, int32, sortKey, 
    struct, subrecord, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('CNTO', 
        sortKey([0], memberStruct('Item', [
            subrecord('CNTO', sortKey([0], struct('Item', [
                ckFormId('Item', def('sigBaseObjects')),
                int32('Count')
            ]))),
            def('COED')
        ]))
    );
};