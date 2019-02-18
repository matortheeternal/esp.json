let {
    addDef, record, subrecord, req, def,
    struct, uint8, ckFormId, lstring, flags16
} = require('../helpers');

module.exports = () => {
    addDef('ACTI', record('ACTI', 'Activator', {
        flags: {
            6: 'Has Tree LOD',                          // 0x00000040
            8: 'Must Update Anims',                     // 0x00000100
            9: 'Hidden From Local Map',                 // 0x00000200
            15: 'Has Distant LOD',                      // 0x00008000
            16: 'Random Anim Start',                    // 0x00010000
            17: 'Dangerous',                            // 0x00020000
            20: 'Ignore Object Interaction',            // 0x00100000
            23: 'Is Marker',                            // 0x00800000
            25: 'Obstacle',                             // 0x02000000
            26: 'NavMesh Generation - Filter',          // 0x04000000
            27: 'NavMesh Generation - Bounding Box',    // 0x08000000
            29: 'Child Can Use',                        // 0x20000000
            30: 'NavMesh Generation - Ground',          // 0x40000000
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
            subrecord('PNAM', struct('Marker Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                uint8('Unused'),
            ])),
            subrecord('SNAM', ckFormId('Sound - Looping', ['SNDR'])),
            subrecord('VNAM', ckFormId('Sound - Activation', ['SNDR'])),
            subrecord('WNAM', ckFormId('Water Type', ['WATR'])),
            subrecord('RNAM', lstring('Activate Text Override')),
            subrecord('FNAM', flags16('Flags', [
                'No Displacement',
                'Ignored by Sandbox',
            ])),
            subrecord('KNAM', ckFormId('Interaction Keyword', ['KYWD'])),
        ]
    }));
};