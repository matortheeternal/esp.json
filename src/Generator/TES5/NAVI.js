let {
    def, subrecord, uint32, ckFormId, bytes, 
    size, float, array, struct, uint8, 
    format, union, int16, arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('NAVI', 'Navigation Mesh Info Map', {
        members: [
            def('EDID'),
            subrecord('NVER', uint32('Version')),
            arrayOfSubrecord('Navigation Map Infos', 
                subrecord('NVMI', struct('Navigation Map Info', [
                    ckFormId('Navigation Mesh', ['NAVM']),
                    size(4, bytes('Unknown')),
                    float('X'),
                    float('Y'),
                    float('Z'),
                    uint32('Preferred Merges Flag'),
                    array('Merged To', 
                        ckFormId('Mesh', ['NAVM'])
                    , -1),
                    array('Preferred Merges', 
                        ckFormId('Mesh', ['NAVM'])
                    , -1),
                    array('Linked Doors', 
                        struct('Door', [
                            size(4, bytes('Unknown')),
                            ckFormId('Door Ref', ['REFR'])
                        ])
                    , -1),
                    format(uint8('Is Island'), {
                        0: 'False',
                        1: 'True'
                    }),
                    union('Island', [
                        def('Null'),
                        def('NAVIslandData')
                    ]),
                    size(4, bytes('Unknown')),
                    ckFormId('Parent Worldspace', ['WRLD', 'NULL']),
                    union('Parent', [
                        struct('Coordinates', [
                            int16('Grid Y'),
                            int16('Grid X')
                        ]),
                        ckFormId('Parent Cell', ['CELL'])
                    ])
                ]))
            ),
            subrecord('NVPP', struct('Preferred Pathing', [
                array('NavMeshes', 
                    array('Set', 
                        ckFormId('', ['NAVM'])
                    , -1)
                , -1),
                array('NavMesh Tree?', 
                    struct('', [
                        ckFormId('NavMesh', ['NAVM']),
                        uint32('Index/Node')
                    ])
                , -1)
            ])),
            subrecord('NVSI', array('Unknown', 
                ckFormId('Navigation Mesh', ['NAVM'])
            ))
        ]
    })
};