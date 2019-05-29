let {
    subrecord, uint32, format, uint8, struct, 
    array, float, bytes, ckFormId, def, 
    int16, sortKey, multiStruct, uint16, multiUnion, 
    arrayOfSubrecord, unknown, record
} = require('../helpers');

module.exports = () => {
    record('LAND', 'Landscape', {
        flags: {
            18: 'Compressed'
        },
        members: [
            subrecord('DATA', format(uint32('Flags'), {
                0: 'Vertex Normals / Height Map',
                1: 'Vertex Colours',
                2: 'Layers',
                3: 'Unknown 4',
                4: 'Unknown 5',
                5: '',
                6: '',
                7: '',
                8: '',
                9: '',
                10: 'MPCD'
            })),
            subrecord('VNML', array('Vertex Normals', 
                struct('Row', [
                    array('Columns', 
                        struct('Column', [
                            uint8('X'),
                            uint8('Y'),
                            uint8('Z')
                        ])
                    , 33)
                ])
            , 33)),
            subrecord('VHGT', struct('Vertext Height Map', [
                float('Offset'),
                array('Rows', 
                    struct('Row', [
                        array('Columns', 
                            uint8('Column')
                        , 33)
                    ])
                , 33),
                bytes('Unused', 3)
            ])),
            subrecord('VCLR', array('Vertex Colours', 
                struct('Row', [
                    array('Columns', 
                        struct('Column', [
                            uint8('X'),
                            uint8('Y'),
                            uint8('Z')
                        ])
                    , 33)
                ])
            , 33)),
            arrayOfSubrecord('Layers', 
                multiUnion('Layer', [
                    sortKey([0], multiStruct('Base Layer', [
                        subrecord('BTXT', sortKey([1, 3], struct('Base Layer Header', [
                            ckFormId('Texture', ['LTEX', 'NULL']),
                            format(uint8('Quadrant'), def('QuadrantEnum')),
                            bytes('Unused', 1),
                            int16('Layer')
                        ])))
                    ])),
                    sortKey([0], multiStruct('Alpha Layer', [
                        subrecord('ATXT', sortKey([1, 3], struct('Alpha Layer Header', [
                            ckFormId('Texture', ['LTEX', 'NULL']),
                            format(uint8('Quadrant'), def('QuadrantEnum')),
                            bytes('Unused', 1),
                            int16('Layer')
                        ]))),
                        subrecord('VTXT', array('Alpha Layer Data', 
                            sortKey([0], struct('Cell', [
                                format(uint16('Position'), def('AtxtPosition')),
                                bytes('Unused', 2),
                                float('Opacity')
                            ]))
                        ))
                    ]))
                ])
            ),
            subrecord('VTEX', array('Textures', 
                ckFormId('Texture', ['LTEX', 'NULL'])
            )),
            arrayOfSubrecord('Unknown', 
                subrecord('MPCD', unknown())
            )
        ]
    })
};