let {
    flags, def, req, ckFormId, subrecord, 
    float, struct, format, sorted, array, 
    memberArray, sortKey, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('SCOL', 'Static Collection', {
        flags: flags({
            4: 'Non Occluder',
            9: 'Hidden From Local Map',
            10: 'Unknown 10',
            11: 'Used as Platform',
            12: 'Ignored',
            15: 'Has Distant LOD',
            25: 'Obstacle',
            26: 'NavMesh Generation - Filter',
            27: 'NavMesh Generation - Bounding Box',
            30: 'NavMesh Generation - Ground'
        }),
        members: [
            def('EDID'),
            req(def('OBND')),
            def('PTRN'),
            def('MODL'),
            def('FULL'),
            def('FLTR'),
            req(memberArray('Parts', 
                sortKey([0], memberStruct('Part', [
                    subrecord('ONAM', ckFormId('Static', [
                        'ACTI', 'ALCH', 'AMMO', 'BOOK', 'CONT',
                        'DOOR', 'FURN', 'MISC', 'MSTT', 'STAT',
                        'TERM', 'WEAP'
                    ])),
                    req(subrecord('DATA', sorted(array('Placements', 
                        struct('Placement', [
                            struct('Position', [
                                float('X'),
                                float('Y'),
                                float('Z')
                            ]),
                            struct('Rotation', [
                                req(format(float('X'), def('RotationFactor'))),
                                req(format(float('Y'), def('RotationFactor'))),
                                req(format(float('Z'), def('RotationFactor')))
                            ]),
                            float('Scale')
                        ])
                    ))))
                ]))
            ))
        ]
    })
};