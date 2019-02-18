let {
    addDef, record, subrecord, req, def,
    unknown, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('TACT', record('TACT', 'Talking Activator', {
        flags: {
            9: 'Hidden From Local Map',     // 0x00000200
            16: 'Random Anim Start',        // 0x00010000
            17: 'Radio Station',            // 0x00020000
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
            subrecord('PNAM', unknown()),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR'])),
            subrecord('FNAM', unknown()),
            subrecord('VNAM', ckFormId('Voice Type', ['VTYP'])),
        ]
    }));
};