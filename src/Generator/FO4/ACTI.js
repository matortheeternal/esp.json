let {
    flags, def, req, uint8, struct, 
    subrecord, ckFormId, uint16, format, float, 
    record
} = require('../helpers');

module.exports = () => {
    record('ACTI', 'Activator', {
        flags: flags({
            2: 'Never Fades',
            4: 'Non Occluder',
            6: 'Unknown 6',
            7: 'Heading Marker',
            8: 'Must Update Anims',
            9: 'Hidden From Local Map',
            10: 'Headtrack Marker',
            11: 'Used as Platform',
            12: 'Ignored',
            13: 'Pack-In Use Only',
            15: 'Has Distant LOD',
            16: 'Random Anim Start',
            17: 'Dangerous',
            20: 'Ignore Object Interaction',
            23: 'Is Marker',
            25: 'Obstacle',
            26: 'NavMesh Generation - Filter',
            27: 'NavMesh Generation - Bounding Box',
            29: 'Child Can Use',
            30: 'NavMesh Generation - Ground'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('STCP'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            def('PRPS'),
            def('NTRM'),
            def('FTYP'),
            subrecord('PNAM', struct('Marker Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                uint8('Unused')
            ])),
            subrecord('SNAM', ckFormId('Sound - Looping', ['SNDR'])),
            subrecord('VNAM', ckFormId('Sound - Activation', ['SNDR'])),
            subrecord('WNAM', ckFormId('Water Type', ['WATR'])),
            def('ATTX'),
            subrecord('FNAM', format(uint16('Flags'), flags({
                0: 'No Displacement',
                1: 'Ignored by Sandbox',
                2: 'Unknown 2',
                3: 'Unknown 3',
                4: 'Is a Radio'
            }))),
            subrecord('KNAM', ckFormId('Interaction Keyword', ['KYWD'])),
            subrecord('RADR', struct('Radio Receiver', [
                ckFormId('Sound Model', ['SOPM', 'NULL']),
                float('Frequency'),
                float('Volume'),
                format(uint8('Starts Active'), def('BoolEnum')),
                format(uint8('No Signal Static'), def('BoolEnum'))
            ])),
            def('CITC'),
            def('CTDAs'),
            def('NVNM')
        ]
    })
};