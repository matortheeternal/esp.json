let {
    addDef, ckFormId, int32, subrecord, sortKey, 
    struct, def, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('CNTONoReach', 
        sortKey([0], multiStruct('Item', [
            subrecord('CNTO', sortKey([0], struct('Item', [
                ckFormId('Item', [
                    'ARMO',    'AMMO',    'APPA',    'MISC',    'WEAP',
                    'BOOK',    'LVLI',    'KEYM',    'ALCH',    'INGR',
                    'LIGH',    'SLGM',    'SCRL'
                ]),
                int32('Count')
            ]))),
            def('COED')
        ]))
    );
};