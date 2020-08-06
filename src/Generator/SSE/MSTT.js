let {
    flags, def, req, uint8, format, 
    subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('MSTT', 'Moveable Static', {
        flags: flags({
            8: 'Must Update Anims',
            9: 'Hidden From Local Map',
            12: 'Ignored',
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
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'On Local Map',
                1: 'Unknown 1',
                2: 'Unknown 2'
            })))),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR']))
        ]
    })
};