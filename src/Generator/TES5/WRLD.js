let {
    flags, def, IsSSE, int16, ckFormId, 
    struct, array, prefix, opts, subrecord, 
    memberArray, req, uint8, format, bytes, 
    size, memberStruct, float, string, int32, 
    div, record
} = require('../helpers');

module.exports = game => {
    record('WRLD', 'Worldspace', {
        flags: flags({
            12: 'Ignored',
            19: 'Can\'t Wait'
        }),
        members: [
            def('EDID'),
            opts(req(memberArray(IsSSE(game, ['Large References', 'Unused RNAM']), 
                subrecord('RNAM', struct('Grid', [
                    int16('Y'),
                    int16('X'),
                    opts(prefix(4, array('References', 
                        struct('Reference', [
                            ckFormId('Ref', ['REFR']),
                            int16('Y'),
                            int16('X')
                        ])
                    )), {
                        "notAlignable": 1
                    })
                ]))
            )), {
                "notAlignable": 1
            }),
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
            req(subrecord('MNAM', struct('Map Data', [
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
                ]),
                struct('Camera Data', [
                    float('Min Height'),
                    float('Max Height'),
                    float('Initial Pitch')
                ])
            ]))),
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
                req(subrecord('NAM0', struct('Min', [
                    req(format(float('X'), div(4096))),
                    req(format(float('Y'), div(4096)))
                ]))),
                req(subrecord('NAM9', struct('Max', [
                    req(format(float('X'), div(4096))),
                    req(format(float('Y'), div(4096)))
                ])))
            ]),
            subrecord('ZNAM', ckFormId('Music', ['MUSC'])),
            subrecord('NNAM', string('Canopy Shadow (unused)')),
            subrecord('XNAM', string('Water Noise Texture')),
            subrecord('TNAM', string('HD LOD Diffuse Texture')),
            subrecord('UNAM', string('HD LOD Normal Texture')),
            subrecord('XWEM', string('Water Environment Map (unused)')),
            def('OFST')
        ]
    })
};