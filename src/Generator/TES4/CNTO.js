let {
    addDef, ckFormId, int32, sortKey, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('CNTO', 
        subrecord('CNTO', sortKey([0], struct('Item', [
            ckFormId('Item', [
                'ARMO', 'AMMO', 'MISC', 'WEAP', 'INGR',
                'SLGM', 'SGST', 'BOOK', 'LVLI', 'KEYM',
                'CLOT', 'ALCH', 'APPA', 'LIGH'
            ]),
            int32('Count')
        ])))
    );
};