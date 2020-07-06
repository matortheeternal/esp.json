let {
    flags, def, req, uint8, format, 
    float, subrecord, struct, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('CONT', 'Container', {
        flags: flags({
            12: 'Ignored',
            15: 'Has Distant LOD',
            16: 'Random Anim Start',
            25: 'Obstacle',
            26: 'NavMesh Generation - Filter',
            27: 'NavMesh Generation - Bounding Box',
            30: 'NavMesh Generation - Ground'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('COCT'),
            def('CNTOs'),
            def('DEST'),
            req(subrecord('DATA', struct('', [
                format(uint8('Flags'), flags({
                    0: 'Allow Sounds When Animation',
                    1: 'Respawns',
                    2: 'Show Owner'
                })),
                float('Weight')
            ]))),
            subrecord('SNAM', ckFormId('Sound - Open', ['SNDR'])),
            subrecord('QNAM', ckFormId('Sound - Close', ['SNDR']))
        ]
    })
};