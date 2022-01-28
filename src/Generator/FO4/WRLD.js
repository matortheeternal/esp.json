let {
    flags, def, unknown, subrecord, memberArray, 
    conflictType, int16, struct, ckFormId, uint8, 
    format, bytes, size, req, memberStruct, 
    float, string, int32, div, int8, 
    record
} = require('../helpers');

module.exports = () => {
    record('WRLD', 'Worldspace', {
        flags: flags({
            12: 'Ignored',
            19: 'Can\'t Wait'
        }),
        members: [
            def('EDID'),
            conflictType('Ignore', memberArray('Unused RNAM', 
                subrecord('RNAM', unknown())
            )),
            def('MaxHeightDataWRLD'),
            def('FULL'),
            subrecord('WCTR', struct('Fixed Dimensions Center Cell', [
                int16('X'),
                int16('Y')
            ])),
            subrecord('LTMP', ckFormId('Interior Lighting', ['LGTM'])),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN', 'NULL'])),
            subrecord('XLCN', ckFormId('Location', ['LCTN', 'NULL'])),
            memberStruct('Parent', [
                subrecord('WNAM', ckFormId('Worldspace', ['WRLD'])),
                req(subrecord('PNAM', struct('', [
                    format(uint8('Flags'), flags({
                        0: 'Use Land Data',
                        1: 'Use LOD Data',
                        2: 'Use Map Data',
                        3: 'Use Water Data',
                        4: 'Use Climate Data',
                        5: 'Use Image Space Data (unused)',
                        6: 'Use Sky Cell'
                    })),
                    size(1, bytes('Unknown'))
                ])))
            ]),
            subrecord('CNAM', ckFormId('Climate', ['CLMT'])),
            subrecord('NAM2', ckFormId('Water', ['WATR'])),
            subrecord('NAM3', ckFormId('LOD Water Type', ['WATR'])),
            subrecord('NAM4', float('LOD Water Height')),
            subrecord('DNAM', struct('Land Data', [
                float('Default Land Height'),
                float('Default Water Height')
            ])),
            subrecord('ICON', string('Map Image')),
            memberStruct('Cloud Model', [
                def('MODL')
            ]),
            subrecord('MNAM', struct('Map Data', [
                struct('Usable Dimensions', [
                    int32('X'),
                    int32('Y')
                ]),
                struct('Cell Coordinates', [
                    struct('NW Cell', [
                        int16('X'),
                        int16('Y')
                    ]),
                    struct('SE Cell', [
                        int16('X'),
                        int16('Y')
                    ])
                ])
            ])),
            req(subrecord('ONAM', struct('World Map Offset Data', [
                float('World Map Scale'),
                float('Cell X Offset'),
                float('Cell Y Offset'),
                float('Cell Z Offset')
            ]))),
            subrecord('NAMA', float('Distant LOD Multiplier')),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Small World',
                1: 'Can\'t Fast Travel',
                2: 'Unknown 3',
                3: 'No LOD Water',
                4: 'No Landscape',
                5: 'No Sky',
                6: 'Fixed Dimensions',
                7: 'No Grass'
            })))),
            memberStruct('Object Bounds', [
                req(subrecord('NAM0', conflictType('Ignore', struct('Min', [
                    format(float('X'), div(4096)),
                    format(float('Y'), div(4096))
                ])))),
                req(subrecord('NAM9', conflictType('Ignore', struct('Max', [
                    format(float('X'), div(4096)),
                    format(float('Y'), div(4096))
                ]))))
            ]),
            subrecord('ZNAM', ckFormId('Music', ['MUSC'])),
            subrecord('NNAM', conflictType('Ignore', string('Canopy Shadow (unused)'))),
            subrecord('XWEM', string('Water Environment Map')),
            subrecord('TNAM', string('HD LOD Diffuse Texture')),
            subrecord('UNAM', string('HD LOD Normal Texture')),
            memberStruct('World Default Level Data', [
                subrecord('WLEV', struct('Dimension', [
                    struct('NW Cell', [
                        int8('X'),
                        int8('Y')
                    ]),
                    struct('Size', [
                        uint8('Width'),
                        uint8('Height')
                    ])
                ])),
                subrecord('WLEV', bytes('Data'))
            ]),
            def('OFST'),
            subrecord('CLSZ', unknown())
        ]
    })
};