let {
    req, def, enumeration, uint32, format, 
    float, struct, bytes, size, subrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('LSCT', 'Load Screen Type', {
        members: [
            req(def('EDID')),
            subrecord('DATA', struct('Data', [
                format(uint32('Type'), enumeration({
                    0: 'None',
                    1: 'XP Progress',
                    2: 'Objective',
                    3: 'Tip',
                    4: 'Stats'
                })),
                struct('Data 1', [
                    uint32('X'),
                    uint32('Y'),
                    uint32('Width'),
                    uint32('Height'),
                    req(format(float('Orientation'), def('RotationFactor'))),
                    format(uint32('Font'), enumeration({
                        0: '',
                        1: '2',
                        2: '3',
                        3: '4',
                        4: '5',
                        5: '6',
                        6: '7',
                        7: '8'
                    })),
                    struct('Font Color', [
                        float('R'),
                        float('G'),
                        float('B')
                    ]),
                    format(uint32('Font'), enumeration({
                        0: '',
                        1: 'Left',
                        2: 'Center',
                        3: '',
                        4: 'Right'
                    }))
                ]),
                size(20, bytes('Unknown')),
                struct('Data 2', [
                    format(uint32('Font'), enumeration({
                        0: '',
                        1: '2',
                        2: '3',
                        3: '4',
                        4: '5',
                        5: '6',
                        6: '7',
                        7: '8'
                    })),
                    struct('Font Color', [
                        float('R'),
                        float('G'),
                        float('B')
                    ]),
                    size(4, bytes('')),
                    format(uint32('Stats'), enumeration({
                        0: '',
                        1: '2',
                        2: '3',
                        3: '4',
                        4: '5',
                        5: '6',
                        6: '7',
                        7: '8'
                    }))
                ])
            ]))
        ]
    })
};