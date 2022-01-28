let {
    flags, def, req, float, ckFormId, 
    struct, subrecord, string, size, record
} = require('../helpers');

module.exports = () => {
    record('STAT', 'Static', {
        flags: flags({
            0: '',
            1: '',
            2: 'Heading Marker',
            3: '',
            4: 'Non Occluder',
            5: 'Deleted',
            6: 'Has Tree LOD',
            7: 'Add-On LOD Object',
            8: '',
            9: 'Hidden From Local Map',
            10: 'Headtrack Marker',
            11: 'Used as Platform',
            12: '',
            13: 'Pack-In Use Only',
            14: '',
            15: 'Has Distant LOD',
            16: '',
            17: 'Uses HD LOD Texture',
            18: '',
            19: 'Has Currents',
            20: '',
            21: '',
            22: '',
            23: 'Is Marker',
            24: '',
            25: 'Obstacle',
            26: 'NavMesh Generation - Filter',
            27: 'NavMesh Generation - Bounding Box',
            28: 'Show In World Map (Sky Cell Only)',
            29: '',
            30: 'NavMesh Generation - Ground',
            31: ''
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('FTYP'),
            def('MODL'),
            def('PRPS'),
            def('FULL'),
            req(subrecord('DNAM', struct('Direction Material', [
                float('Max Angle (30-120)'),
                ckFormId('Material', ['MATO', 'NULL']),
                float('Leaf Amplitude'),
                float('Leaf Frequency')
            ]))),
            def('NVNM'),
            subrecord('MNAM', struct('Distant LOD', [
                struct('Level 0', [
                    size(260, string('Mesh'))
                ]),
                struct('Level 1', [
                    size(260, string('Mesh'))
                ]),
                struct('Level 2', [
                    size(260, string('Mesh'))
                ]),
                struct('Level 3', [
                    size(260, string('Mesh'))
                ])
            ]))
        ]
    })
};