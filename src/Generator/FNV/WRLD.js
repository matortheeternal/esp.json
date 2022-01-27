let {
    req, def, ckFormId, subrecord, flags, 
    uint16, format, memberStruct, float, struct, 
    int32, int16, uint8, div, conflictType, 
    string, uint32, sortKey, sorted, memberArray, 
    size, array, customCounter, record
} = require('../helpers');

module.exports = () => {
    record('WRLD', 'Worldspace', {
        members: [
            req(def('EDID')),
            def('FULL'),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            memberStruct('Parent', [
                subrecord('WNAM', ckFormId('Worldspace', ['WRLD'])),
                req(subrecord('PNAM', format(uint16('Flags'), flags({
                    0: 'Use Land Data',
                    1: 'Use LOD Data',
                    2: 'Use Map Data',
                    3: 'Use Water Data',
                    4: 'Use Climate Data',
                    5: 'Use Image Space Data'
                }))))
            ]),
            subrecord('CNAM', ckFormId('Climate', ['CLMT'])),
            subrecord('NAM2', ckFormId('Water', ['WATR'])),
            subrecord('NAM3', ckFormId('LOD Water Type', ['WATR'])),
            subrecord('NAM4', float('LOD Water Height')),
            subrecord('DNAM', struct('Land Data', [
                float('Default Land Height'),
                float('Default Water Height')
            ])),
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
            req(subrecord('ONAM', struct('World Map Offset Data', [
                float('World Map Scale'),
                float('Cell X Offset'),
                float('Cell Y Offset')
            ]))),
            subrecord('INAM', ckFormId('Image Space', ['IMGS'])),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Small World',
                1: 'Can\'t Fast Travel',
                2: '',
                3: '',
                4: 'No LOD Water',
                5: 'No LOD Noise',
                6: 'Don\'t Allow NPC Fall Damage',
                7: 'Needs Water Adjustment'
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
            req(subrecord('NNAM', string('Canopy Shadow'))),
            req(subrecord('XNAM', string('Water Noise Texture'))),
            sorted(memberArray('Swapped Impacts', 
                subrecord('IMPS', sortKey([0, 1], struct('Swapped Impact', [
                    format(uint32('Material Type'), def('ImpactMaterialTypeEnum')),
                    ckFormId('Old', ['IPCT']),
                    ckFormId('New', ['IPCT', 'NULL'])
                ])))
            )),
            subrecord('IMPF', struct('Footstep Materials', [
                size(30, string('ConcSolid')),
                size(30, string('ConcBroken')),
                size(30, string('MetalSolid')),
                size(30, string('MetalHollow')),
                size(30, string('MetalSheet')),
                size(30, string('Wood')),
                size(30, string('Sand')),
                size(30, string('Dirt')),
                size(30, string('Grass')),
                size(30, string('Water'))
            ])),
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