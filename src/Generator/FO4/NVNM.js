let {
    addDef, uint32, opts, bytes, size, 
    ckFormId, int16, struct, union, float, 
    array, prefix, def, format, uint8, 
    flags, uint16, conflictType, sortKey, sorted, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('NVNM', 
        subrecord('NVNM', struct('Navmesh Geometry', [
            opts(uint32('Version'), {
                "defaultData": 15
            }),
            struct('Pathing Cell', [
                opts(size(4, bytes('Magic')), {
                    "defaultValue": "3C A0 E9 A5"
                }),
                ckFormId('Parent Worldspace', ['WRLD', 'NULL']),
                union('Parent', 'NVNMParentDecider', [
                    struct('Coordinates', [
                        int16('Grid Y'),
                        int16('Grid X')
                    ]),
                    ckFormId('Parent Cell', ['CELL'])
                ])
            ]),
            opts(prefix(4, array('Vertices', 
                struct('Vertex', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            opts(prefix(4, array('Triangles', 
                struct('Triangle', [
                    opts(format(int16('Vertex 0'), def('VertexToStr0')), {
                        "linksToCallback": "VertexLinksTo"
                    }),
                    opts(format(int16('Vertex 1'), def('VertexToStr1')), {
                        "linksToCallback": "VertexLinksTo"
                    }),
                    opts(format(int16('Vertex 2'), def('VertexToStr2')), {
                        "linksToCallback": "VertexLinksTo"
                    }),
                    opts(format(int16('Edge 0-1'), def('EdgeToStr0')), {
                        "linksToCallback": "EdgeLinksTo0"
                    }),
                    opts(format(int16('Edge 1-2'), def('EdgeToStr1')), {
                        "linksToCallback": "EdgeLinksTo1"
                    }),
                    opts(format(int16('Edge 2-0'), def('EdgeToStr2')), {
                        "linksToCallback": "EdgeLinksTo2"
                    }),
                    float('Height'),
                    uint8('Unknown'),
                    format(uint16('Flags'), flags({
                        0: 'Edge 0-1 link',
                        1: 'Edge 1-2 link',
                        2: 'Edge 2-0 link',
                        3: '',
                        4: 'No Large Creatures',
                        5: 'Overlapping',
                        6: 'Preferred',
                        7: '',
                        8: 'Unknown 9',
                        9: 'Water',
                        10: 'Door',
                        11: 'Found',
                        12: 'Unknown 13',
                        13: '',
                        14: '',
                        15: ''
                    })),
                    format(uint16('Cover Flags'), flags({
                        0: 'Edge 0-1 Cover Value 1/4',
                        1: 'Edge 0-1 Cover Value 2/4',
                        2: 'Edge 0-1 Cover Value 3/4',
                        3: 'Edge 0-1 Cover Value 4/4',
                        4: 'Edge 0-1 Left',
                        5: 'Edge 0-1 Right',
                        6: 'Edge 1-2 Cover Value 1/4',
                        7: 'Edge 1-2 Cover Value 2/4',
                        8: 'Edge 1-2 Cover Value 3/4',
                        9: 'Edge 1-2 Cover Value 4/4',
                        10: 'Edge 1-2 Left',
                        11: 'Edge 1-2 Right',
                        12: 'Unknown 13',
                        13: 'Unknown 14',
                        14: 'Unknown 15',
                        15: 'Unknown 16'
                    }))
                ])
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            opts(conflictType('Ignore', prefix(4, array('Edge Links', 
                conflictType('Ignore', struct('Edge Link', [
                    conflictType('Ignore', size(4, bytes('Unknown'))),
                    conflictType('Ignore', ckFormId('Mesh', ['NAVM'])),
                    conflictType('Ignore', int16('Triangle')),
                    conflictType('Ignore', size(1, bytes('Unknown')))
                ]))
            ))), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            prefix(4, sorted(array('Door Triangles', 
                sortKey([0, 2], struct('Door Triangle', [
                    opts(uint16('Triangle before door'), {
                        "linksToCallback": "TriangleLinksTo"
                    }),
                    uint32('DTUnknown'),
                    union('Door', 'DoorTriangleDoorTriangleDecider', [
                        def('Null'),
                        ckFormId('Door', ['REFR'])
                    ])
                ]))
            ))),
            opts(prefix(4, array('Unknown 5', 
                struct('Unknown', [
                    uint16('Unknown'),
                    uint16('Unknown'),
                    uint32('Unknown')
                ])
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            opts(prefix(4, array('Unknown 6', 
                struct('Unknown', [
                    uint16('Unknown'),
                    opts(uint16('Triangle'), {
                        "linksToCallback": "TriangleLinksTo"
                    })
                ])
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            opts(prefix(4, array('Waypoints', 
                struct('Waypoint', [
                    float('X'),
                    float('Y'),
                    float('Z'),
                    opts(uint16('Triangle'), {
                        "linksToCallback": "TriangleLinksTo"
                    }),
                    uint32('Unknown')
                ])
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            struct('Navmesh Grid', [
                uint32('Navmesh Grid Size'),
                float('Max X Distance'),
                float('Max Y Distance'),
                float('Min X'),
                float('Min Y'),
                float('Min Z'),
                float('Max X'),
                float('Max Y'),
                float('Max Z'),
                opts(array('NavMesh Grid Arrays', 
                    opts(prefix(4, array('NavMeshGridCell', 
                        opts(int16('Triangle'), {
                            "linksToCallback": "TriangleLinksTo"
                        })
                    )), {
                        "defFlags": [
                            "notAlignable"
                        ]
                    })
                ), {
                    "defFlags": [
                        "notAlignable"
                    ]
                })
            ])
        ]))
    );
};