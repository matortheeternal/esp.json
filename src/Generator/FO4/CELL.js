let {
    flags, def, uint16, format, subrecord, 
    req, opts, int32, uint32, struct, 
    bytes, size, ckFormId, float, uint8, 
    sorted, array, conflictType, string, customCounter, 
    elementCounter, sortKey, record
} = require('../helpers');

module.exports = () => {
    record('CELL', 'Cell', {
        flags: flags({
            7: 'No Pre Vis',
            10: 'Persistent',
            12: 'Ignored',
            17: 'Off Limits',
            18: 'Compressed',
            19: 'Can\'t Wait'
        }),
        members: [
            def('EDID'),
            def('FULL'),
            opts(req(subrecord('DATA', format(uint16('Flags'), flags({
                0: 'Is Interior Cell',
                1: 'Has Water',
                2: 'Can\'t Travel From Here',
                3: 'No LOD Water',
                4: 'Unknown 5',
                5: 'Public Area',
                6: 'Hand Changed',
                7: 'Show Sky',
                8: 'Use Sky Lighting',
                9: 'Unknown 10',
                10: 'Unknown 11',
                11: 'Sunlight Shadows',
                12: 'Distant LOD only',
                13: 'Player Followers Can\'t Travel Here',
                14: 'Unknown 15',
                15: 'Unknown 16'
            })))), {
                "afterSet": "CELLDATAAfterSet"
            }),
            subrecord('XCLC', struct('Grid', [
                int32('X'),
                int32('Y'),
                format(uint32('Force Hide Land'), flags({
                    0: 'Quad 1',
                    1: 'Quad 2',
                    2: 'Quad 3',
                    3: 'Quad 4'
                }))
            ])),
            subrecord('VISI', size(2, bytes('PreVis Files Timestamp'))),
            subrecord('RVIS', ckFormId('In PreVis File Of', ['CELL'])),
            subrecord('PCMB', size(2, bytes('PreCombined Files Timestamp'))),
            subrecord('XCLL', struct('Lighting', [
                def('ByteColors', { name: 'Ambient Color' }),
                def('ByteColors', { name: 'Directional Color' }),
                def('ByteColors', { name: 'Fog Color Near' }),
                float('Fog Near'),
                float('Fog Far'),
                int32('Directional Rotation XY'),
                int32('Directional Rotation Z'),
                float('Directional Fade'),
                float('Fog Clip Distance'),
                float('Fog Power'),
                def('AmbientColors'),
                def('ByteColors', { name: 'Fog Color Far' }),
                float('Fog Max'),
                float('Light Fade Begin'),
                float('Light Fade End'),
                format(uint32('Inherits'), flags({
                    0: 'Ambient Color',
                    1: 'Directional Color',
                    2: 'Fog Color',
                    3: 'Fog Near',
                    4: 'Fog Far',
                    5: 'Directional Rotation',
                    6: 'Directional Fade',
                    7: 'Clip Distance',
                    8: 'Fog Power',
                    9: 'Fog Max',
                    10: 'Light Fade Distances'
                })),
                float('Near Height Mid'),
                float('Near Height Range'),
                def('ByteColors', { name: 'Fog Color High Near' }),
                def('ByteColors', { name: 'Fog Color High Far' }),
                float('High Density Scale'),
                float('Fog Near Scale'),
                float('Fog Far Scale'),
                float('Fog High Near Scale'),
                float('Fog High Far Scale'),
                float('Far Height Mid'),
                float('Far Height Range')
            ])),
            subrecord('CNAM', uint8('Precombined Object Level XY')),
            subrecord('ZNAM', uint8('Precombined Object Level Z')),
            subrecord('TVDT', size(0, bytes('Unknown'))),
            def('MaxHeightDataCELL'),
            req(subrecord('LTMP', ckFormId('Lighting Template', ['LGTM', 'NULL']))),
            subrecord('XCLW', float('Water Height')),
            subrecord('XCLR', sorted(array('Regions', 
                ckFormId('Region', ['REGN'])
            ))),
            subrecord('XLCN', ckFormId('Location', ['LCTN'])),
            subrecord('XWCN', conflictType('Ignore', size(0, bytes('Unknown')))),
            subrecord('XWCU', struct('Water Velocity', [
                float('X Offset'),
                float('Y Offset'),
                float('Z Offset'),
                size(4, bytes('Unknown')),
                float('X Angle'),
                float('Y Angle'),
                float('Z Angle'),
                size(0, bytes('Unknown'))
            ])),
            subrecord('XCWT', ckFormId('Water', ['WATR'])),
            def('XOWN'),
            def('XRNK'),
            subrecord('XILL', ckFormId('Lock List', ['FLST', 'NPC_'])),
            subrecord('XILW', struct('Exterior LOD', [
                ckFormId('Worldspace', ['WRLD']),
                float('Offset X'),
                float('Offset Y'),
                float('Offset Z')
            ])),
            subrecord('XWEM', string('Water Environment Map')),
            subrecord('XCCM', ckFormId('Sky/Weather from Region', ['REGN'])),
            subrecord('XCAS', ckFormId('Acoustic Space', ['ASPC'])),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            subrecord('XCMO', ckFormId('Music Type', ['MUSC'])),
            subrecord('XCIM', ckFormId('Image Space', ['IMGS'])),
            subrecord('XGDR', ckFormId('God Rays', ['GDRY'])),
            subrecord('XPRI', sorted(array('Physics References', 
                ckFormId('Reference', [
                    'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW',
                    'PBAR', 'PBEA', 'PCON', 'PFLA'
                ])
            ))),
            subrecord('XCRI', struct('Combined References', [
                uint32('Meshes Count'),
                uint32('References Count'),
                elementCounter('Meshes Count', 
                    customCounter('CELLCombinedMeshesCounter', 
                        sorted(array('Meshes', 
                            format(uint32('Combined Mesh'), def('CombinedMeshIDToStr'))
                        ))
                    )
                ),
                opts(customCounter('CELLCombinedRefsCounter', 
                    sorted(array('References', 
                        sortKey([0], struct('Reference', [
                            ckFormId('Reference', [
                                'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW',
                                'PBAR', 'PBEA', 'PCON', 'PFLA'
                            ]),
                            format(uint32('Combined Mesh'), def('CombinedMeshIDToStr'))
                        ]))
                    ))
                ), {
                    "afterSet": "CELLCombinedRefsAfterSet"
                })
            ]))
        ]
    })
};