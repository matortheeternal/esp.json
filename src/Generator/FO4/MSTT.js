let {
    flags, def, req, uint8, format, 
    subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('MSTT', 'Moveable Static', {
        flags: flags({
            8: 'Must Update Anims',
            9: 'Hidden From Local Map',
            11: 'Used As Platform',
            12: 'Ignored',
            13: 'Pack-In Use Only',
            15: 'Has Distant LOD',
            16: 'Random Anim Start',
            19: 'Has Currents',
            25: 'Obstacle',
            26: 'NavMesh Generation - Filter',
            27: 'NavMesh Generation - Bounding Box',
            30: 'NavMesh Generation - Ground'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            def('PRPS'),
            req(subrecord('DATA', format(uint8('On Local Map'), def('BoolEnum')))),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR']))
        ]
    })
};