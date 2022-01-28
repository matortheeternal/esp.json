let {
    def, int8, format, sortKey, struct, 
    sorted, array, count, bytes, size, 
    float, flags, uint32, subrecord, req, 
    ckFormId, uint8, empty, enumeration, memberStruct, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('RACE', 'Race', {
        members: [
            def('EDID'),
            def('FULL'),
            def('DESC'),
            def('SPLOs'),
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
                    0: 'Playable'
                }))
            ]))),
            subrecord('VNAM', struct('Voice', [
                ckFormId('Male', ['RACE', 'NULL']),
                ckFormId('Female', ['RACE', 'NULL'])
            ])),
            subrecord('DNAM', struct('Default Hair', [
                ckFormId('Male', ['HAIR']),
                ckFormId('Female', ['HAIR'])
            ])),
            req(subrecord('CNAM', uint8('Default Hair Color'))),
            req(subrecord('PNAM', float('FaceGen - Main clamp'))),
            req(subrecord('UNAM', float('FaceGen - Face clamp'))),
            subrecord('ATTR', struct('Base Attributes', [
                struct('Male', [
                    uint8('Strength'),
                    uint8('Intelligence'),
                    uint8('Willpower'),
                    uint8('Agility'),
                    uint8('Speed'),
                    uint8('Endurance'),
                    uint8('Personality'),
                    uint8('Luck')
                ]),
                struct('Female', [
                    uint8('Strength'),
                    uint8('Intelligence'),
                    uint8('Willpower'),
                    uint8('Agility'),
                    uint8('Speed'),
                    uint8('Endurance'),
                    uint8('Personality'),
                    uint8('Luck')
                ])
            ])),
            req(memberStruct('Face Data', [
                subrecord('NAM0', empty('Face Data Marker')),
                sorted(memberArray('Parts', 
                    sortKey([0], memberStruct('Part', [
                        subrecord('INDX', format(uint32('Index'), enumeration({
                            0: 'Head',
                            1: 'Ear (Male)',
                            2: 'Ear (Female)',
                            3: 'Mouth',
                            4: 'Teeth (Lower)',
                            5: 'Teeth (Upper)',
                            6: 'Tongue',
                            7: 'Eye (Left)',
                            8: 'Eye (Right)'
                        }))),
                        def('MODL'),
                        def('ICON')
                    ]))
                ))
            ])),
            req(subrecord('NAM1', empty('Body Data Marker'))),
            req(memberStruct('Male Body Data', [
                subrecord('MNAM', empty('Male Body Data Marker')),
                def('MODL'),
                sorted(memberArray('Parts', 
                    sortKey([0], memberStruct('Part', [
                        def('BodyDataIndex'),
                        def('ICON')
                    ]))
                ))
            ])),
            req(memberStruct('Female Body Data', [
                subrecord('FNAM', empty('Female Body Data Marker')),
                def('MODL'),
                sorted(memberArray('Parts', 
                    sortKey([0], memberStruct('Part', [
                        def('BodyDataIndex'),
                        def('ICON')
                    ]))
                ))
            ])),
            req(subrecord('HNAM', sorted(array('Hairs', 
                ckFormId('Hair', ['HAIR'])
            )))),
            req(subrecord('ENAM', sorted(array('Eyes', 
                ckFormId('Eye', ['EYES'])
            )))),
            def('FaceGen'),
            req(subrecord('SNAM', size(2, bytes('Unknown'))))
        ]
    })
};