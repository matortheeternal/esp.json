let {
    def, flags, uint16, format, uint8, 
    conflict, bytes, size, uint32, struct, 
    subrecord, string, ckFormId, memberArray, memberStruct, 
    empty, sortKey, localized, opts, sorted, 
    req, int32, formId, int16, enumeration, 
    memberUnion, record
} = require('../helpers');

module.exports = () => {
    record('QUST', 'Quest', {
        members: [
            def('EDID'),
            def('VMADFragmentedQUST'),
            def('FULL'),
            subrecord('DNAM', struct('General', [
                format(uint16('Flags'), flags({
                    0: 'Start Game Enabled',
                    1: 'Unknown 2',
                    2: 'Unknown 3',
                    3: 'Allow repeated stages',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8',
                    8: 'Run Once',
                    9: 'Exclude from dialogue export',
                    10: 'Warn on alias fill failure',
                    11: 'Unknown 12',
                    12: 'Unknown 13'
                })),
                uint8('Priority'),
                conflict('Ignore', uint8('Form Version')),
                size(4, bytes('Unknown')),
                format(uint32('Type'), def('QuestTypeEnum'))
            ])),
            subrecord('ENAM', size(4, string('Event'))),
            memberArray('Text Display Globals', 
                subrecord('QTGL', ckFormId('Global', ['GLOB']))
            ),
            subrecord('FLTR', conflict('Translate', string('Object Window Filter'))),
            memberStruct('Quest Dialogue Conditions', [
                def('CTDAs')
            ]),
            subrecord('NEXT', empty('Marker')),
            def('CTDAs'),
            sorted(memberArray('Stages', 
                sortKey([0], memberStruct('Stage', [
                    subrecord('INDX', sortKey([0], struct('Stage Index', [
                        uint16('Stage Index'),
                        format(uint8('Flags'), flags({
                            0: 'Unknown 1',
                            1: 'Start Up Stage',
                            2: 'Shut Down Stage',
                            3: 'Keep Instance Data From Here On'
                        })),
                        uint8('Unknown')
                    ]))),
                    memberArray('Log Entries', 
                        memberStruct('Log Entry', [
                            subrecord('QSDT', format(uint8('Stage Flags'), flags({
                                0: 'Complete Quest',
                                1: 'Fail Quest'
                            }))),
                            def('CTDAs'),
                            opts(subrecord('CNAM', conflict('Translate', localized(string('Log Entry')))), {
                                "keepCase": true
                            }),
                            subrecord('NAM0', ckFormId('Next Quest', ['QUST'])),
                            subrecord('SCHR', conflict('Ignore', size(0, bytes('Unused')))),
                            subrecord('SCTX', conflict('Ignore', size(0, bytes('Unused')))),
                            subrecord('QNAM', conflict('Ignore', size(0, bytes('Unused'))))
                        ])
                    )
                ]))
            )),
            memberArray('Objectives', 
                memberStruct('Objective', [
                    subrecord('QOBJ', uint16('Objective Index')),
                    subrecord('FNAM', format(uint32('Flags'), flags({
                        0: 'ORed With Previous'
                    }))),
                    opts(req(subrecord('NNAM', conflict('Translate', localized(string('Display Text'))))), {
                        "keepCase": true
                    }),
                    memberArray('Targets', 
                        memberStruct('Target', [
                            subrecord('QSTA', struct('Target', [
                                format(int32('Alias'), def('QuestAliasToStr')),
                                format(uint8('Flags'), flags({
                                    0: 'Compass Marker Ignores Locks'
                                })),
                                size(3, bytes('Unused'))
                            ])),
                            def('CTDAs')
                        ])
                    )
                ])
            ),
            subrecord('ANAM', uint32('Next Alias ID')),
            memberArray('Aliases', 
                memberUnion('Alias', [
                    sortKey([0], memberStruct('Alias', [
                        subrecord('ALST', uint32('Reference Alias ID')),
                        subrecord('ALID', string('Alias Name')),
                        def('QUSTAliasFlags'),
                        subrecord('ALFI', format(int32('Force Into Alias When Filled'), def('QuestAliasToStr'))),
                        subrecord('ALFL', ckFormId('Specific Location', ['LCTN'])),
                        subrecord('ALFR', formId('Forced Reference')),
                        subrecord('ALUA', ckFormId('Unique Actor', ['NPC_'])),
                        memberStruct('Location Alias Reference', [
                            subrecord('ALFA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('KNAM', ckFormId('Keyword', ['KYWD'])),
                            subrecord('ALRT', ckFormId('Ref Type', ['LCRT']))
                        ]),
                        memberStruct('External Alias Reference', [
                            subrecord('ALEQ', ckFormId('Quest', ['QUST'])),
                            subrecord('ALEA', format(int32('Alias'), def('QuestExternalAliasToStr')))
                        ]),
                        memberStruct('Create Reference to Object', [
                            subrecord('ALCO', formId('Object')),
                            subrecord('ALCA', struct('Alias', [
                                format(int16('Alias'), def('QuestAliasToStr')),
                                format(uint16('Create'), enumeration({
                                    0: 'At',
                                    32768: 'In'
                                }))
                            ])),
                            subrecord('ALCL', format(uint32('Level'), enumeration({
                                0: 'Easy',
                                1: 'Medium',
                                2: 'Hard',
                                3: 'Very Hard',
                                4: 'None'
                            })))
                        ]),
                        memberStruct('Find Matching Reference Near Alias', [
                            subrecord('ALNA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('ALNT', format(uint32('Type'), enumeration({
                                0: 'Linked Ref Child'
                            })))
                        ]),
                        memberStruct('Find Matching Reference From Event', [
                            subrecord('ALFE', size(4, string('From Event'))),
                            subrecord('ALFD', bytes('Event Data'))
                        ]),
                        def('CTDAs'),
                        def('KSIZ'),
                        def('KWDAs'),
                        def('COCT'),
                        def('CNTOs'),
                        subrecord('SPOR', ckFormId('Spectator override package list', ['FLST'])),
                        subrecord('OCOR', ckFormId('Observe dead body override package list', ['FLST'])),
                        subrecord('GWOR', ckFormId('Guard warn override package list', ['FLST'])),
                        subrecord('ECOR', ckFormId('Combat override package list', ['FLST'])),
                        subrecord('ALDN', ckFormId('Display Name', ['MESG'])),
                        memberArray('Alias Spells', 
                            subrecord('ALSP', ckFormId('Spell', ['SPEL']))
                        ),
                        memberArray('Alias Factions', 
                            subrecord('ALFC', ckFormId('Faction', ['FACT']))
                        ),
                        memberArray('Alias Package Data', 
                            subrecord('ALPC', ckFormId('Package', ['PACK']))
                        ),
                        subrecord('VTCK', ckFormId('Voice Types', [
                            'NPC_', 'FLST', 'NULL'
                        ])),
                        req(subrecord('ALED', empty('Alias End')))
                    ])),
                    sortKey([0], memberStruct('Alias', [
                        subrecord('ALLS', uint32('Location Alias ID')),
                        subrecord('ALID', string('Alias Name')),
                        def('QUSTAliasFlags'),
                        subrecord('ALFI', format(int32('Force Into Alias When Filled'), def('QuestAliasToStr'))),
                        subrecord('ALFL', ckFormId('Specific Location', ['LCTN'])),
                        subrecord('ALFR', formId('Forced Reference')),
                        subrecord('ALUA', ckFormId('Unique Actor', ['NPC_'])),
                        memberStruct('Location Alias Reference', [
                            subrecord('ALFA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('KNAM', ckFormId('Keyword', ['KYWD'])),
                            subrecord('ALRT', ckFormId('Ref Type', ['LCRT']))
                        ]),
                        memberStruct('External Alias Reference', [
                            subrecord('ALEQ', ckFormId('Quest', ['QUST'])),
                            subrecord('ALEA', format(int32('Alias'), def('QuestExternalAliasToStr')))
                        ]),
                        memberStruct('Create Reference to Object', [
                            subrecord('ALCO', formId('Object')),
                            subrecord('ALCA', struct('Alias', [
                                format(int16('Alias'), def('QuestAliasToStr')),
                                format(uint16('Create'), enumeration({
                                    0: 'At',
                                    32768: 'In'
                                }))
                            ])),
                            subrecord('ALCL', format(uint32('Level'), enumeration({
                                0: 'Easy',
                                1: 'Medium',
                                2: 'Hard',
                                3: 'Very Hard',
                                4: 'None'
                            })))
                        ]),
                        memberStruct('Find Matching Reference Near Alias', [
                            subrecord('ALNA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('ALNT', format(uint32('Type'), enumeration({
                                0: 'Linked Ref Child'
                            })))
                        ]),
                        memberStruct('Find Matching Reference From Event', [
                            subrecord('ALFE', size(4, string('From Event'))),
                            subrecord('ALFD', bytes('Event Data'))
                        ]),
                        def('CTDAs'),
                        def('KSIZ'),
                        def('KWDAs'),
                        def('COCT'),
                        def('CNTOs'),
                        subrecord('SPOR', ckFormId('Spectator override package list', ['FLST'])),
                        subrecord('OCOR', ckFormId('Observe dead body override package list', ['FLST'])),
                        subrecord('GWOR', ckFormId('Guard warn override package list', ['FLST'])),
                        subrecord('ECOR', ckFormId('Combat override package list', ['FLST'])),
                        subrecord('ALDN', ckFormId('Display Name', ['MESG'])),
                        memberArray('Alias Spells', 
                            subrecord('ALSP', ckFormId('Spell', ['SPEL']))
                        ),
                        memberArray('Alias Factions', 
                            subrecord('ALFC', ckFormId('Faction', ['FACT']))
                        ),
                        memberArray('Alias Package Data', 
                            subrecord('ALPC', ckFormId('Package', ['PACK']))
                        ),
                        subrecord('VTCK', ckFormId('Voice Types', [
                            'NPC_', 'FLST', 'NULL'
                        ])),
                        req(subrecord('ALED', empty('Alias End')))
                    ]))
                ])
            ),
            subrecord('NNAM', string('Description')),
            memberArray('Targets', 
                memberStruct('Target', [
                    subrecord('QSTA', struct('Target', [
                        ckFormId('Target', [
                            'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS',
                            'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA'
                        ]),
                        format(uint8('Flags'), flags({
                            0: 'Compass Marker Ignores Locks'
                        })),
                        size(3, bytes('Unknown'))
                    ])),
                    def('CTDAs')
                ])
            )
        ]
    })
};