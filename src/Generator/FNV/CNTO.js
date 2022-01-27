let {
    addDef, ckFormId, int32, sortKey, struct, 
    subrecord, def, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('CNTO', 
        sortKey([0], memberStruct('Item', [
            subrecord('CNTO', sortKey([0], struct('Item', [
                ckFormId('Item', [
                    'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                    'LVLI', 'KEYM', 'ALCH', 'NOTE', 'IMOD',
                    'CMNY', 'CCRD', 'LIGH', 'CHIP'
                ]),
                int32('Count')
            ]))),
            def('COED')
        ]))
    );
};