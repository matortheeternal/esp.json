let {
    def, uint32, subrecord, ckFormId, struct, 
    float, array, opts, int16, count, 
    format, flags, uint16, bytes, size, 
    prefix, record
} = require('../helpers');

module.exports = () => {
    record('NAVM', 'Navigation Mesh', {
        members: [
            def('EDID'),
            subrecord('NVER', uint32('Version')),
            subrecord('DATA', struct('', [
                ckFormId('Cell', ['CELL']),
                uint32('Vertex Count'),
                uint32('Triangle Count'),
                uint32('External Connections Count'),
                uint32('Cover Triangle Count'),
                uint32('Doors Count')
            ])),
            opts(subrecord('NVVX', array('Vertices', 
                struct('Vertex', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            )), {
                "notAlignable": 1
            }),
            opts(subrecord('NVTR', array('Triangles', 
                struct('Triangle', [
                    count(3, array('Vertices', 
                        int16('Vertex')
                    )),
                    struct('Edges', [
                        format(int16('0 <-> 1'), def('NVTREdgeToStr')),
                        format(int16('1 <-> 2'), def('NVTREdgeToStr')),
                        format(int16('2 <-> 0'), def('NVTREdgeToStr'))
                    ]),
                    format(uint16('Flags'), flags({
                        0: 'Edge 0 <-> 1 external',
                        1: 'Edge 1 <-> 2 external',
                        2: 'Edge 2 <-> 0 external',
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
                        0: 'Edge 0 <-> 1 Cover Value 1/4',
                        1: 'Edge 0 <-> 1 Cover Value 2/4',
                        2: 'Edge 0 <-> 1 Cover Value 3/4',
                        3: 'Edge 0 <-> 1 Cover Value 4/4',
                        4: 'Edge 0 <-> 1 Left',
                        5: 'Edge 0 <-> 1 Right',
                        6: 'Edge 1 <-> 2 Cover Value 1/4',
                        7: 'Edge 1 <-> 2 Cover Value 2/4',
                        8: 'Edge 1 <-> 2 Cover Value 3/4',
                        9: 'Edge 1 <-> 2 Cover Value 4/4',
                        10: 'Edge 1 <-> 2 Left',
                        11: 'Edge 1 <-> 2 Right',
                        12: 'Unknown 13',
                        13: 'Unknown 14',
                        14: 'Unknown 15',
                        15: 'Unknown 16'
                    }))
                ])
            )), {
                "notAlignable": 1
            }),
            opts(subrecord('NVCA', array('Cover Triangles', 
                int16('Cover Triangle')
            )), {
                "notAlignable": 1
            }),
            opts(subrecord('NVDP', array('Doors', 
                struct('Door', [
                    ckFormId('Reference', ['REFR']),
                    uint16('Triangle'),
                    size(2, bytes('Unused'))
                ])
            )), {
                "notAlignable": 1
            }),
            subrecord('NVGD', struct('NavMesh Grid', [
                uint32('NavMeshGrid Divisor'),
                float('Max X Distance'),
                float('Max Y Distance'),
                float('Min X'),
                float('Min Y'),
                float('Min Z'),
                float('Max X'),
                float('Max Y'),
                float('Max Z'),
                opts(array('Cells', 
                    prefix(2, array('Cell', 
                        opts(int16('Triangle'), {
                            "notAlignable": 1
                        })
                    ))
                ), {
                    "notAlignable": 1
                })
            ])),
            opts(subrecord('NVEX', array('External Connections', 
                struct('Connection', [
                    size(4, bytes('Unknown')),
                    ckFormId('Navigation Mesh', ['NAVM']),
                    uint16('Triangle')
                ])
            )), {
                "notAlignable": 1
            })
        ]
    })
};