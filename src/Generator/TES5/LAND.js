let {
    flags, subrecord, uint32, format, uint8, 
    struct, array, size, float, bytes, 
    ckFormId, def, int16, sortKey, multiStruct, 
    uint16, sorted, multiUnion, arrayOfSubrecord, unknown, 
    record
} = require('../helpers');

module.exports = () => {
    record('LAND', 'Landscape', {
        flags: flags({
            18: 'Compressed'
        }),
        members: [
            subrecord('DATA', format(uint32('Flags'), flags({
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
            }))),
            subrecord('VNML', size(33, array('Vertex Normals', 
                struct('Row', [
                    size(33, array('Columns', 
                        struct('Column', [
                            uint8('X'),
                            uint8('Y'),
                            uint8('Z')
                        ])
                    ))
                ])
            ))),
            subrecord('VHGT', struct('Vertext Height Map', [
                float('Offset'),
                size(33, array('Rows', 
                    struct('Row', [
                        size(33, array('Columns', 
                            uint8('Column')
                        ))
                    ])
                )),
                size(3, bytes('Unused'))
            ])),
            subrecord('VCLR', size(33, array('Vertex Colours', 
                struct('Row', [
                    size(33, array('Columns', 
                        struct('Column', [
                            uint8('X'),
                            uint8('Y'),
                            uint8('Z')
                        ])
                    ))
                ])
            ))),
            sorted(arrayOfSubrecord('Layers', 
                multiUnion('Layer', [
                    sortKey([0], multiStruct('Base Layer', [
                        subrecord('BTXT', sortKey([1, 3], struct('Base Layer Header', [
                            ckFormId('Texture', ['LTEX', 'NULL']),
                            format(uint8('Quadrant'), def('QuadrantEnum')),
                            size(1, bytes('Unused')),
                            int16('Layer')
                        ])))
                    ])),
                    sortKey([0], multiStruct('Alpha Layer', [
                        subrecord('ATXT', sortKey([1, 3], struct('Alpha Layer Header', [
                            ckFormId('Texture', ['LTEX', 'NULL']),
                            format(uint8('Quadrant'), def('QuadrantEnum')),
                            size(1, bytes('Unused')),
                            int16('Layer')
                        ]))),
                        subrecord('VTXT', sorted(array('Alpha Layer Data', 
                            sortKey([0], struct('Cell', [
                                format(uint16('Position'), def('AtxtPosition')),
                                size(2, bytes('Unused')),
                                float('Opacity')
                            ]))
                        )))
                    ]))
                ])
            )),
            subrecord('VTEX', array('Textures', 
                ckFormId('Texture', ['LTEX', 'NULL'])
            )),
            arrayOfSubrecord('Unknown', 
                subrecord('MPCD', unknown())
            )
        ]
    })
};