let {
    flags, def, req, float, ckFormId, 
    uint8, format, bytes, size, subrecord, 
    struct, IsSSE, string, array, record
} = require('../helpers');

module.exports = game => {
    record('STAT', 'Static', {
        flags: flags({
            0: '',
            1: '',
            2: 'Never Fades',
            3: '',
            4: '',
            5: 'Deleted',
            6: 'Has Tree LOD',
            7: 'Add-On LOD Object',
            8: '',
            9: 'Hidden From Local Map',
            10: '',
            11: 'Unknown 11',
            12: '',
            13: '',
            14: '',
            15: 'Has Distant LOD',
            16: 'Unknown 16',
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
            28: 'Show In World Map',
            29: '',
            30: 'NavMesh Generation - Ground',
            31: ''
        }),
        members: [
            def('EDID'),
            req(def('OBND')),
            def('MODL'),
            IsSSE(game, [
                req(subrecord('DNAM', struct('Direction Material', [
                    float('Max Angle (30-120)'),
                    ckFormId('Material', ['MATO', 'NULL']),
                    format(uint8('Flags'), flags({
                        0: 'Considered Snow'
                    })),
                    size(3, bytes('Unused'))
                ]))),
                req(subrecord('DNAM', struct('Direction Material', [
                    float('Max Angle (30-120)'),
                    ckFormId('Material', ['MATO', 'NULL'])
                ])))
            ]),
            subrecord('MNAM', array('Distant LOD', 
                struct('LOD', [
                    size(260, string('Mesh'))
                ])
            ))
        ]
    })
};