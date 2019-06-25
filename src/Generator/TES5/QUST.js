let {
    def, flags, uint16, format, uint8, 
    bytes, size, uint32, subrecord, struct, 
    string, ckFormId, arrayOfSubrecord, multiStruct, req, 
    empty, sortKey, localized, sorted, int32, 
    formId, int16, enumeration, multiUnion, record
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
                uint8('Form Version'),
                size(4, bytes('Unknown')),
                format(uint32('Type'), def('QuestTypeEnum'))
            ])),
            subrecord('ENAM', size(4, string('Event'))),
            arrayOfSubrecord('Text Display Globals', 
                subrecord('QTGL', ckFormId('Global', ['GLOB']))
            ),
            subrecord('FLTR', string('Object Window Filter')),
            req(multiStruct('Quest Dialogue Conditions', [
                def('CTDAs')
            ])),
            subrecord('NEXT', empty('Marker')),
            def('CTDAs'),
            sorted(arrayOfSubrecord('Stages', 
                sortKey([0], multiStruct('Stage', [
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
                    arrayOfSubrecord('Log Entries', 
                        multiStruct('Log Entry', [
                            subrecord('QSDT', format(uint8('Stage Flags'), flags({
                                0: 'Complete Quest',
                                1: 'Fail Quest'
                            }))),
                            def('CTDAs'),
                            subrecord('CNAM', localized(string('Log Entry'))),
                            subrecord('NAM0', ckFormId('Next Quest', ['QUST'])),
                            subrecord('SCHR', bytes('Unused')),
                            subrecord('SCTX', bytes('Unused')),
                            subrecord('QNAM', bytes('Unused'))
                        ])
                    )
                ]))
            )),
            arrayOfSubrecord('Objectives', 
                multiStruct('Objective', [
                    subrecord('QOBJ', uint16('Objective Index')),
                    subrecord('FNAM', format(uint32('Flags'), flags({
                        0: 'ORed With Previous'
                    }))),
                    req(subrecord('NNAM', localized(string('Display Text')))),
                    arrayOfSubrecord('Targets', 
                        multiStruct('Target', [
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
            arrayOfSubrecord('Aliases', 
                multiUnion('Alias', [
                    req(sortKey([0], multiStruct('Alias', [
                        subrecord('ALST', uint32('Reference Alias ID')),
                        subrecord('ALID', string('Alias Name')),
                        def('QUSTAliasFlags'),
                        subrecord('ALFI', format(int32('Force Into Alias When Filled'), def('QuestAliasToStr'))),
                        subrecord('ALFL', ckFormId('Specific Location', ['LCTN'])),
                        subrecord('ALFR', formId('Forced Reference')),
                        subrecord('ALUA', ckFormId('Unique Actor', ['NPC_'])),
                        multiStruct('Location Alias Reference', [
                            subrecord('ALFA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('KNAM', ckFormId('Keyword', ['KYWD'])),
                            subrecord('ALRT', ckFormId('Ref Type', ['LCRT']))
                        ]),
                        multiStruct('External Alias Reference', [
                            subrecord('ALEQ', ckFormId('Quest', ['QUST'])),
                            subrecord('ALEA', format(int32('Alias'), def('QuestExternalAliasToStr')))
                        ]),
                        multiStruct('Create Reference to Object', [
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
                        multiStruct('Find Matching Reference Near Alias', [
                            subrecord('ALNA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('ALNT', format(uint32('Type'), enumeration({
                                0: 'Linked Ref Child'
                            })))
                        ]),
                        multiStruct('Find Matching Reference From Event', [
                            subrecord('ALFE', size(4, string('From Event'))),
                            subrecord('ALFD', bytes('Event Data'))
                        ]),
                        def('CTDAs'),
                        def('KSIZ'),
                        def('KWDAs'),
                        def('COCT'),
                        def('CNTOs'),
                        req(subrecord('SPOR', ckFormId('Spectator override package list', ['FLST']))),
                        req(subrecord('OCOR', ckFormId('Observe dead body override package list', ['FLST']))),
                        req(subrecord('GWOR', ckFormId('Guard warn override package list', ['FLST']))),
                        req(subrecord('ECOR', ckFormId('Combat override package list', ['FLST']))),
                        subrecord('ALDN', ckFormId('Display Name', ['MESG'])),
                        arrayOfSubrecord('Alias Spells', 
                            subrecord('ALSP', ckFormId('Spell', ['SPEL']))
                        ),
                        arrayOfSubrecord('Alias Factions', 
                            subrecord('ALFC', ckFormId('Faction', ['FACT']))
                        ),
                        arrayOfSubrecord('Alias Package Data', 
                            subrecord('ALPC', ckFormId('Package', ['PACK']))
                        ),
                        subrecord('VTCK', ckFormId('Voice Types', [
                            'NPC_', 'FLST', 'NULL'
                        ])),
                        req(subrecord('ALED', empty('Alias End')))
                    ]))),
                    req(sortKey([0], multiStruct('Alias', [
                        subrecord('ALLS', uint32('Location Alias ID')),
                        subrecord('ALID', string('Alias Name')),
                        def('QUSTAliasFlags'),
                        subrecord('ALFI', format(int32('Force Into Alias When Filled'), def('QuestAliasToStr'))),
                        subrecord('ALFL', ckFormId('Specific Location', ['LCTN'])),
                        subrecord('ALFR', formId('Forced Reference')),
                        subrecord('ALUA', ckFormId('Unique Actor', ['NPC_'])),
                        multiStruct('Location Alias Reference', [
                            subrecord('ALFA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('KNAM', ckFormId('Keyword', ['KYWD'])),
                            subrecord('ALRT', ckFormId('Ref Type', ['LCRT']))
                        ]),
                        multiStruct('External Alias Reference', [
                            subrecord('ALEQ', ckFormId('Quest', ['QUST'])),
                            subrecord('ALEA', format(int32('Alias'), def('QuestExternalAliasToStr')))
                        ]),
                        multiStruct('Create Reference to Object', [
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
                        multiStruct('Find Matching Reference Near Alias', [
                            subrecord('ALNA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('ALNT', format(uint32('Type'), enumeration({
                                0: 'Linked Ref Child'
                            })))
                        ]),
                        multiStruct('Find Matching Reference From Event', [
                            subrecord('ALFE', size(4, string('From Event'))),
                            subrecord('ALFD', bytes('Event Data'))
                        ]),
                        def('CTDAs'),
                        def('KSIZ'),
                        def('KWDAs'),
                        def('COCT'),
                        def('CNTOs'),
                        req(subrecord('SPOR', ckFormId('Spectator override package list', ['FLST']))),
                        req(subrecord('OCOR', ckFormId('Observe dead body override package list', ['FLST']))),
                        req(subrecord('GWOR', ckFormId('Guard warn override package list', ['FLST']))),
                        req(subrecord('ECOR', ckFormId('Combat override package list', ['FLST']))),
                        subrecord('ALDN', ckFormId('Display Name', ['MESG'])),
                        arrayOfSubrecord('Alias Spells', 
                            subrecord('ALSP', ckFormId('Spell', ['SPEL']))
                        ),
                        arrayOfSubrecord('Alias Factions', 
                            subrecord('ALFC', ckFormId('Faction', ['FACT']))
                        ),
                        arrayOfSubrecord('Alias Package Data', 
                            subrecord('ALPC', ckFormId('Package', ['PACK']))
                        ),
                        subrecord('VTCK', ckFormId('Voice Types', [
                            'NPC_', 'FLST', 'NULL'
                        ])),
                        req(subrecord('ALED', empty('Alias End')))
                    ])))
                ])
            ),
            req(subrecord('NNAM', string('Description'))),
            arrayOfSubrecord('Targets', 
                multiStruct('Target', [
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