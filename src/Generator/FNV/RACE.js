let {
    req, def, int8, format, sortKey, 
    struct, sorted, array, count, bytes, 
    size, float, flags, uint32, subrecord, 
    ckFormId, empty, enumeration, uint8, memberStruct, 
    memberArray, uint16, record
} = require('../helpers');

module.exports = () => {
    record('RACE', 'Race', {
        members: [
            req(def('EDID')),
            req(def('FULL')),
            req(def('DESC')),
            def('XNAMs'),
            req(subrecord('DATA', struct('', [
                count(7, sorted(array('Skill Boosts', 
                    sortKey([0], struct('Skill Boost', [
                        format(int8('Skill'), def('ActorValueEnum')),
                        int8('Boost')
                    ]))
                ))),
                size(2, bytes('Unused')),
                float('Male Height'),
                float('Female Height'),
                float('Male Weight'),
                float('Female Weight'),
                format(uint32('Flags'), flags({
                    0: 'Playable',
                    1: '',
                    2: 'Child'
                }))
            ]))),
            subrecord('ONAM', ckFormId('Older', ['RACE'])),
            subrecord('YNAM', ckFormId('Younger', ['RACE'])),
            req(subrecord('NAM2', empty('Unknown Marker'))),
            req(subrecord('VTCK', struct('Voices', [
                ckFormId('Male', ['VTYP']),
                ckFormId('Female', ['VTYP'])
            ]))),
            req(subrecord('DNAM', struct('Default Hair Styles', [
                ckFormId('Male', ['HAIR', 'NULL']),
                ckFormId('Female', ['HAIR', 'NULL'])
            ]))),
            req(subrecord('CNAM', struct('Default Hair Colors', [
                format(uint8('Male'), enumeration({
                    0: 'Bleached',
                    1: 'Brown',
                    2: 'Chocolate',
                    3: 'Platinum',
                    4: 'Cornsilk',
                    5: 'Suede',
                    6: 'Pecan',
                    7: 'Auburn',
                    8: 'Ginger',
                    9: 'Honey',
                    10: 'Gold',
                    11: 'Rosewood',
                    12: 'Black',
                    13: 'Chestnut',
                    14: 'Steel',
                    15: 'Champagne'
                })),
                format(uint8('Female'), enumeration({
                    0: 'Bleached',
                    1: 'Brown',
                    2: 'Chocolate',
                    3: 'Platinum',
                    4: 'Cornsilk',
                    5: 'Suede',
                    6: 'Pecan',
                    7: 'Auburn',
                    8: 'Ginger',
                    9: 'Honey',
                    10: 'Gold',
                    11: 'Rosewood',
                    12: 'Black',
                    13: 'Chestnut',
                    14: 'Steel',
                    15: 'Champagne'
                }))
            ]))),
            req(subrecord('PNAM', float('FaceGen - Main clamp'))),
            req(subrecord('UNAM', float('FaceGen - Face clamp'))),
            req(subrecord('ATTR', size(0, bytes('Unused')))),
            req(memberStruct('Head Data', [
                req(subrecord('NAM0', empty('Head Data Marker'))),
                req(memberStruct('Male Head Data', [
                    req(subrecord('MNAM', empty('Male Data Marker'))),
                    req(sorted(memberArray('Parts', 
                        sortKey([0], memberStruct('Part', [
                            subrecord('INDX', format(uint32('Index'), def('HeadPartIndexEnum'))),
                            req(def('MODL')),
                            def('ICON')
                        ]))
                    )))
                ])),
                req(memberStruct('Female Head Data', [
                    req(subrecord('FNAM', empty('Female Data Marker'))),
                    req(sorted(memberArray('Parts', 
                        sortKey([0], memberStruct('Part', [
                            subrecord('INDX', format(uint32('Index'), def('HeadPartIndexEnum'))),
                            req(def('MODL')),
                            def('ICON')
                        ]))
                    )))
                ]))
            ])),
            req(memberStruct('Body Data', [
                req(subrecord('NAM1', empty('Body Data Marker'))),
                req(memberStruct('Male Body Data', [
                    subrecord('MNAM', empty('Male Data Marker')),
                    req(sorted(memberArray('Parts', 
                        sortKey([0], memberStruct('Part', [
                            subrecord('INDX', format(uint32('Index'), def('BodyPartIndexEnum'))),
                            def('ICON'),
                            req(def('MODL'))
                        ]))
                    )))
                ])),
                req(memberStruct('Female Body Data', [
                    req(subrecord('FNAM', empty('Female Data Marker'))),
                    req(sorted(memberArray('Parts', 
                        sortKey([0], memberStruct('Part', [
                            subrecord('INDX', format(uint32('Index'), def('BodyPartIndexEnum'))),
                            def('ICON'),
                            req(def('MODL'))
                        ]))
                    )))
                ]))
            ])),
            req(subrecord('HNAM', sorted(array('Hairs', 
                ckFormId('Hair', ['HAIR'])
            )))),
            req(subrecord('ENAM', sorted(array('Eyes', 
                ckFormId('Eye', ['EYES'])
            )))),
            req(memberStruct('FaceGen Data', [
                req(memberStruct('Male FaceGen Data', [
                    req(subrecord('MNAM', empty('Male Data Marker'))),
                    def('FaceGen'),
                    req(subrecord('SNAM', uint16('Unknown')))
                ])),
                req(memberStruct('Female FaceGen Data', [
                    req(subrecord('FNAM', empty('Female Data Marker'))),
                    def('FaceGen'),
                    req(subrecord('SNAM', uint16('Unknown')))
                ]))
            ]))
        ]
    })
};