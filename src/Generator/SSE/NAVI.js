let {
    def, uint32, subrecord, ckFormId, bytes, 
    size, float, array, prefix, struct, 
    enumeration, uint8, format, union, int16, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('NAVI', 'Navigation Mesh Info Map', {
        members: [
            def('EDID'),
            subrecord('NVER', uint32('Version')),
            memberArray('Navigation Map Infos', 
                subrecord('NVMI', struct('Navigation Map Info', [
                    ckFormId('Navigation Mesh', ['NAVM']),
                    size(4, bytes('Unknown')),
                    float('X'),
                    float('Y'),
                    float('Z'),
                    uint32('Preferred Merges Flag'),
                    prefix(4, array('Merged To', 
                        ckFormId('Mesh', ['NAVM'])
                    )),
                    prefix(4, array('Preferred Merges', 
                        ckFormId('Mesh', ['NAVM'])
                    )),
                    prefix(4, array('Linked Doors', 
                        struct('Door', [
                            size(4, bytes('Unknown')),
                            ckFormId('Door Ref', ['REFR'])
                        ])
                    )),
                    format(uint8('Is Island'), enumeration({
                        0: 'False',
                        1: 'True'
                    })),
                    union('Island', 'NAVIIslandDataDecider', [
                        def('Null'),
                        def('NAVIslandData')
                    ]),
                    size(4, bytes('Unknown')),
                    ckFormId('Parent Worldspace', ['WRLD', 'NULL']),
                    union('Parent', 'NAVIParentDecider', [
                        struct('Coordinates', [
                            int16('Grid Y'),
                            int16('Grid X')
                        ]),
                        ckFormId('Parent Cell', ['CELL'])
                    ])
                ]))
            ),
            subrecord('NVPP', struct('Preferred Pathing', [
                prefix(4, array('NavMeshes', 
                    prefix(4, array('Set', 
                        ckFormId('', ['NAVM'])
                    ))
                )),
                prefix(4, array('NavMesh Tree?', 
                    struct('', [
                        ckFormId('NavMesh', ['NAVM']),
                        uint32('Index/Node')
                    ])
                ))
            ])),
            subrecord('NVSI', array('Unknown', 
                ckFormId('Navigation Mesh', ['NAVM'])
            ))
        ]
    })
};