let {
    def, ckFormId, subrecord, memberStruct, int32, 
    struct, int16, flags, uint8, format, 
    req, float, div, conflictType, uint32, 
    array, customCounter, record
} = require('../helpers');

module.exports = () => {
    record('WRLD', 'Worldspace', {
        members: [
            def('EDID'),
            def('FULL'),
            memberStruct('Parent', [
                subrecord('WNAM', ckFormId('Worldspace', ['WRLD']))
            ]),
            subrecord('CNAM', ckFormId('Climate', ['CLMT'])),
            subrecord('NAM2', ckFormId('Water', ['WATR'])),
            def('ICON'),
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
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Small world',
                1: 'Can\'t fast travel',
                2: 'Oblivion worldspace',
                3: '',
                4: 'No LOD water'
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
            subrecord('SNAM', format(uint32('Music'), def('MusicEnum'))),
            subrecord('OFST', array('Offset Data', 
                customCounter('OffsetDataColsCounter', 
                    array('Rows', 
                        uint32('Offset')
                    )
                )
            ))
        ]
    })
};