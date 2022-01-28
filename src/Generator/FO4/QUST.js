let {
    flags, def, uint16, format, uint8, 
    conflictType, bytes, size, enumeration, uint32, 
    struct, subrecord, string, ckFormId, memberArray, 
    memberStruct, empty, sortKey, localized, opts, 
    sorted, req, int32, formId, int16, 
    array, memberUnion, record
} = require('../helpers');

module.exports = () => {
    record('QUST', 'Quest', {
        flags: flags({
            12: 'Ignored',
            14: 'Partial Form'
        }),
        members: [
            def('EDID'),
            def('VMADFragmentedQUST'),
            def('FULL'),
            subrecord('DNAM', struct('General', [
                format(uint16('Flags'), flags({
                    0: 'Start Game Enabled',
                    1: 'Unknown 2',
                    2: 'Add Idle Topic To Hello',
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
                conflictType('Ignore', uint8('Form Version')),
                size(4, bytes('Unknown')),
                format(uint32('Type'), enumeration({
                    0: 'None',
                    1: 'Main Quest',
                    2: 'Brotherhood of Steel',
                    3: 'Institute',
                    4: 'Minutemen',
                    5: 'Railroad',
                    6: 'Miscellaneous',
                    7: 'Side Quests',
                    8: 'DLC01',
                    9: 'DLC02',
                    10: 'DLC03',
                    11: 'DLC04',
                    12: 'DLC05',
                    13: 'DLC06',
                    14: 'DLC07'
                }))
            ])),
            subrecord('ENAM', size(4, string('Event'))),
            subrecord('LNAM', ckFormId('Location', ['LCTN'])),
            subrecord('XNAM', ckFormId('Quest Completion XP', ['GLOB'])),
            memberArray('Text Display Globals', 
                subrecord('QTGL', ckFormId('Global', ['GLOB']))
            ),
            def('FLTR'),
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
                            1: 'Run On Start',
                            2: 'Run On Stop',
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
                            subrecord('NAM2', string('Note')),
                            opts(subrecord('CNAM', conflictType('Translate', localized(string('Log Entry')))), {
                                "keepCase": true
                            }),
                            subrecord('NAM0', ckFormId('Next Quest', ['QUST']))
                        ])
                    )
                ]))
            )),
            memberArray('Objectives', 
                memberStruct('Objective', [
                    subrecord('QOBJ', uint16('Objective Index')),
                    subrecord('FNAM', format(uint32('Flags'), flags({
                        0: 'ORed With Previous',
                        1: 'No Stats Tracking'
                    }))),
                    opts(req(subrecord('NNAM', conflictType('Translate', localized(string('Display Text'))))), {
                        "keepCase": true
                    }),
                    memberArray('Targets', 
                        memberStruct('Target', [
                            subrecord('QSTA', struct('Target', [
                                format(int32('Alias'), def('QuestAliasToStr')),
                                format(uint32('Flags'), flags({
                                    0: 'Compass Marker Ignores Locks',
                                    1: 'Hostile',
                                    2: 'Use Straight Line Pathing'
                                })),
                                ckFormId('Keyword', ['KYWD', 'NULL'])
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
                                0: 'Linked From',
                                1: 'Linked Ref'
                            })))
                        ]),
                        memberStruct('Find Matching Reference From Event', [
                            subrecord('ALFE', size(4, string('From Event'))),
                            subrecord('ALFD', bytes('Event Data'))
                        ]),
                        subrecord('ALCC', format(int32('Closest To Alias'), def('QuestAliasToStr'))),
                        def('CTDAs'),
                        def('KSIZ'),
                        def('KWDAs'),
                        def('COCT'),
                        def('CNTOs'),
                        subrecord('SPOR', ckFormId('Spectator override package list', ['FLST'])),
                        subrecord('OCOR', ckFormId('Observe dead body override package list', ['FLST'])),
                        subrecord('GWOR', ckFormId('Guard warn override package list', ['FLST'])),
                        subrecord('ECOR', ckFormId('Combat override package list', ['FLST'])),
                        subrecord('ALLA', array('Linked Aliases', 
                            struct('Linked Alias', [
                                ckFormId('Keyword', ['KYWD', 'NULL']),
                                format(int32('Alias'), def('QuestAliasToStr'))
                            ])
                        )),
                        subrecord('ALDN', ckFormId('Display Name', ['MESG'])),
                        subrecord('ALFV', ckFormId('Forced Voice', ['VTYP'])),
                        subrecord('ALDI', ckFormId('Death Item', ['LVLI'])),
                        sorted(memberArray('Alias Spells', 
                            subrecord('ALSP', ckFormId('Spell', ['SPEL']))
                        )),
                        sorted(memberArray('Alias Factions', 
                            subrecord('ALFC', ckFormId('Faction', ['FACT']))
                        )),
                        memberArray('Alias Package Data', 
                            subrecord('ALPC', ckFormId('Package', ['PACK']))
                        ),
                        subrecord('VTCK', ckFormId('Voice Types', [
                            'NPC_', 'FACT', 'FLST', 'VTYP', 'NULL'
                        ])),
                        req(subrecord('ALED', empty('Alias End')))
                    ])),
                    sortKey([0], memberStruct('Alias', [
                        subrecord('ALLS', uint32('Location Alias ID')),
                        subrecord('ALID', string('Alias Name')),
                        def('QUSTAliasFlags'),
                        subrecord('ALFI', format(int32('Force Into Alias When Filled'), def('QuestAliasToStr'))),
                        subrecord('ALFL', ckFormId('Specific Location', ['LCTN'])),
                        memberStruct('Reference Alias Location', [
                            subrecord('ALFA', format(int32('Alias'), def('QuestAliasToStr'))),
                            subrecord('KNAM', ckFormId('Keyword', ['KYWD']))
                        ]),
                        memberStruct('External Alias Location', [
                            subrecord('ALEQ', ckFormId('Quest', ['QUST'])),
                            subrecord('ALEA', format(int32('Alias'), def('QuestExternalAliasToStr')))
                        ]),
                        memberStruct('Find Matching Location From Event', [
                            subrecord('ALFE', size(4, string('From Event'))),
                            subrecord('ALFD', bytes('Event Data'))
                        ]),
                        def('CTDAs'),
                        subrecord('ALCC', format(int32('Closest To Alias'), def('QuestAliasToStr'))),
                        req(subrecord('ALED', empty('Alias End')))
                    ])),
                    sortKey([0], memberStruct('Alias', [
                        subrecord('ALCS', uint32('Collection Alias ID')),
                        subrecord('ALMI', uint8('Max Initial Fill Count'))
                    ]))
                ])
            ),
            subrecord('NNAM', conflictType('Translate', string('Description'))),
            subrecord('GNAM', ckFormId('Quest Group', ['KYWD'])),
            subrecord('SNAM', string('SWF File'))
        ]
    })
};