let {
    addDef, record, def, req, subrecord, 
    unknown, ckFormId
} = require('../helpers');

module.exports = game => {
    addDef(record('TACT', 'Talking Activator', {
        flags: {
            9: 'Hidden From Local Map',                     // 0x00000200
            16: 'Random Anim Start',                        // 0x00010000
            17: 'Radio Station',                            // 0x00020000
        },
        elements: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('PNAM', unknown())),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR'])),
            req(subrecord('FNAM', unknown())),
            subrecord('VNAM', ckFormId('Voice Type', ['VTYP'])),
        ]
    }));
};