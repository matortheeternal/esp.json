let {
    flags, def, req, subrecord, unknown, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('TACT', 'Talking Activator', {
        flags: flags({
            9: 'Hidden From Local Map',
            12: 'Ignored',
            16: 'Random Anim Start',
            17: 'Radio Station'
        }),
        members: [
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
            subrecord('VNAM', ckFormId('Voice Type', ['VTYP']))
        ]
    })
};