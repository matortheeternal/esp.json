let {
    flags, def, req, string, subrecord, 
    uint8, format, struct, ckFormId, enumeration, 
    opts, sortKey, uint16, conflictType, union, 
    int8, memberArray, memberStruct, localized, bytes, 
    float, empty, record
} = require('../helpers');

module.exports = () => {
    record('PERK', 'Perk', {
        flags: flags({
            2: 'Non-Playable',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('VMADFragmentedPERK'),
            def('FULL'),
            req(def('DESC')),
            subrecord('ICON', string('Image')),
            def('CTDAs'),
            req(subrecord('DATA', struct('Data', [
                format(uint8('Trait'), def('BoolEnum')),
                uint8('Level'),
                uint8('Num Ranks'),
                format(uint8('Playable'), def('BoolEnum')),
                format(uint8('Hidden'), def('BoolEnum'))
            ]))),
            subrecord('SNAM', ckFormId('Sound', ['SNDR'])),
            subrecord('NNAM', ckFormId('Next Perk', ['PERK', 'NULL'])),
            subrecord('FNAM', string('SWF')),
            memberArray('Effects', 
                sortKey([0, 1], memberStruct('Effect', [
                    subrecord('PRKE', sortKey([1, 2, 0], struct('Header', [
                        opts(format(uint8('Type'), enumeration({
                            0: 'Quest + Stage',
                            1: 'Ability',
                            2: 'Entry Point'
                        })), {
                            "afterSet": "PERKPRKETypeAfterSet"
                        }),
                        uint8('Rank'),
                        uint8('Priority')
                    ]))),
                    req(subrecord('DATA', union('Effect Data', 'PerkDATADecider', [
                        sortKey([0, 1], struct('Quest + Stage', [
                            ckFormId('Quest', ['QUST']),
                            format(uint16('Quest Stage'), def('PerkDATAQuestStageToStr'))
                        ])),
                        ckFormId('Ability', ['SPEL']),
                        sortKey([0, 1], struct('Entry Point', [
                            req(format(uint8('Entry Point'), def('EntryPointsEnum'))),
                            format(uint8('Function'), enumeration({
                                0: 'Unknown 0',
                                1: 'Set Value',
                                2: 'Add Value',
                                3: 'Multiply Value',
                                4: 'Add Range To Value',
                                5: 'Add Actor Value Mult',
                                6: 'Absolute Value',
                                7: 'Negative Absolute Value',
                                8: 'Add Leveled List',
                                9: 'Add Activate Choice',
                                10: 'Select Spell',
                                11: 'Select Text',
                                12: 'Set to Actor Value Mult',
                                13: 'Multiply Actor Value Mult',
                                14: 'Multiply 1 + Actor Value Mult',
                                15: 'Set Text'
                            })),
                            conflictType('Ignore', uint8('Perk Condition Tab Count'))
                        ]))
                    ]))),
                    memberArray('Perk Conditions', 
                        sortKey([0], memberStruct('Perk Condition', [
                            subrecord('PRKC', int8('Run On (Tab Index)')),
                            req(def('CTDAs'))
                        ]))
                    ),
                    memberStruct('Function Parameters', [
                        subrecord('EPFT', format(uint8('Type'), enumeration({
                            0: 'None',
                            1: 'Float',
                            2: 'Float/AV,Float',
                            3: 'LVLI',
                            4: 'SPEL,lstring,flags',
                            5: 'SPEL',
                            6: 'string',
                            7: 'lstring',
                            8: 'AVIF'
                        }))),
                        subrecord('EPFB', uint16('Perk Entry ID (unique)')),
                        subrecord('EPF2', conflictType('Translate', localized(string('Button Label')))),
                        subrecord('EPF3', struct('Script Flags', [
                            format(uint16('Script Flags'), flags({
                                0: 'Run Immediately',
                                1: 'Replace Default'
                            }))
                        ])),
                        subrecord('EPFD', union('Data', 'EPFDDecider', [
                            bytes('Unknown'),
                            float('Float'),
                            struct('Float, Float', [
                                float('Float 1'),
                                float('Float 2')
                            ]),
                            ckFormId('Leveled Item', ['LVLI']),
                            ckFormId('Spell', ['SPEL']),
                            ckFormId('Spell', ['SPEL']),
                            conflictType('Translate', string('Text')),
                            conflictType('Translate', localized(string('Text'))),
                            struct('Actor Value, Float', [
                                def('ActorValue'),
                                float('Float')
                            ])
                        ]))
                    ]),
                    req(subrecord('PRKF', conflictType('Ignore', empty('End Marker'))))
                ]))
            )
        ]
    })
};