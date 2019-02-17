let {
    addDef, record, subrecord, req, subrecordArray, 
    unknown, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef(record('TACT', 'Talking Activator', {
        flags: {
            9: 'Hidden From Local Map',     // 0x00000200
            16: 'Random Anim Start',        // 0x00010000
            17: 'Radio Station',            // 0x00020000
        },
        elements: [
            subrecord('EDID'),
            subrecord('VMAD'),
            req(subrecord('OBND')),
            subrecord('FULL'),
            subrecord('MODL'),
            subrecord('DEST'),
            subrecord('KSIZ'),
            subrecordArray('KWDAs', 'KWDAs'),
            subrecord('PNAM', unknown()),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR'])),
            subrecord('FNAM', unknown()),
            subrecord('VNAM', ckFormId('Voice Type', ['VTYP'])),
        ]
    }));
};