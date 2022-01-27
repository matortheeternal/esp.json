let {
    req, def, uint32, format, uint8, 
    bytes, size, flags, uint16, empty, 
    conflictType, union, struct, subrecord, enumeration, 
    int32, ckFormId, opts, memberStruct, unordered, 
    int8, float, array, record
} = require('../helpers');

module.exports = () => {
    record('PACK', 'Package', {
        members: [
            req(def('EDID')),
            req(subrecord('PKDT', struct('General', [
                format(uint32('General Flags'), def('PKDTFlags')),
                format(uint8('Type'), def('PKDTType')),
                size(1, bytes('Unused')),
                format(uint16('Fallout Behavior Flags'), flags({
                    0: 'Hellos To Player',
                    1: 'Random Conversations',
                    2: 'Observe Combat Behavior',
                    3: 'Unknown 4',
                    4: 'Reaction To Player Actions',
                    5: 'Friendly Fire Comments',
                    6: 'Aggro Radius Behavior',
                    7: 'Allow Idle Chatter',
                    8: 'Avoid Radiation'
                })),
                union('Type Specific Flags', 'PKDTSpecificFlagsDecider', [
                    conflictType('Ignore', empty('Type Specific Flags (missing)')),
                    format(uint16('Type Specific Flags - Find'), flags({
                        0: '',
                        1: '',
                        2: '',
                        3: '',
                        4: '',
                        5: '',
                        6: '',
                        7: '',
                        8: 'Find - Allow Buying',
                        9: 'Find - Allow Killing',
                        10: 'Find - Allow Stealing'
                    })),
                    format(uint16('Type Specific Flags - Follow'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - Escort'), flags({
                        0: '',
                        1: '',
                        2: '',
                        3: '',
                        4: '',
                        5: '',
                        6: '',
                        7: '',
                        8: 'Escort - Allow Buying',
                        9: 'Escort - Allow Killing',
                        10: 'Escort - Allow Stealing'
                    })),
                    format(uint16('Type Specific Flags - Eat'), flags({
                        0: '',
                        1: '',
                        2: '',
                        3: '',
                        4: '',
                        5: '',
                        6: '',
                        7: '',
                        8: 'Eat - Allow Buying',
                        9: 'Eat - Allow Killing',
                        10: 'Eat - Allow Stealing'
                    })),
                    format(uint16('Type Specific Flags - Sleep'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - Wander'), flags({
                        0: 'Wander - No Eating',
                        1: 'Wander - No Sleeping',
                        2: 'Wander - No Conversation',
                        3: 'Wander - No Idle Markers',
                        4: 'Wander - No Furniture',
                        5: 'Wander - No Wandering'
                    })),
                    format(uint16('Type Specific Flags - Travel'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - Accompany'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - Use Item At'), flags({
                        0: '',
                        1: 'Use Item At - Sit Down',
                        2: '',
                        3: '',
                        4: '',
                        5: '',
                        6: '',
                        7: '',
                        8: 'Use Item At - Allow Buying',
                        9: 'Use Item At - Allow Killing',
                        10: 'Use Item At - Allow Stealing'
                    })),
                    format(uint16('Type Specific Flags - Ambush'), flags({
                        0: 'Ambush - Hide While Ambushing'
                    })),
                    format(uint16('Type Specific Flags - Flee Not Combat'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - ?'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - Sandbox'), flags({
                        0: 'Sandbox - No Eating',
                        1: 'Sandbox - No Sleeping',
                        2: 'Sandbox - No Conversation',
                        3: 'Sandbox - No Idle Markers',
                        4: 'Sandbox - No Furniture',
                        5: 'Sandbox - No Wandering'
                    })),
                    format(uint16('Type Specific Flags - Patrol'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - Guard'), flags({
                        0: '',
                        1: '',
                        2: 'Guard - Remain Near Reference to Guard'
                    })),
                    format(uint16('Type Specific Flags - Dialogue'), flags({
                    
                    })),
                    format(uint16('Type Specific Flags - Use Weapon'), flags({
                    
                    }))
                ]),
                size(2, bytes('Unused'))
            ]))),
            unordered(memberStruct('Locations', [
                subrecord('PLDT', struct('Location 1', [
                    format(int32('Type'), enumeration({
                        0: 'Near reference',
                        1: 'In cell',
                        2: 'Near current location',
                        3: 'Near editor location',
                        4: 'Object ID',
                        5: 'Object Type',
                        6: 'Near linked reference',
                        7: 'At package location'
                    })),
                    union('Location', 'PxDTLocationDecider', [
                        opts(ckFormId('Reference', [
                            'REFR', 'PGRE', 'PMIS', 'PBEA', 'ACHR',
                            'ACRE', 'PLYR'
                        ]), {
                            "persistent": true
                        }),
                        ckFormId('Cell', ['CELL']),
                        conflictType('Ignore', size(4, bytes('Unused'))),
                        conflictType('Ignore', size(4, bytes('Unused'))),
                        ckFormId('Object ID', [
                            'ACTI', 'DOOR', 'STAT', 'FURN', 'CREA',
                            'SPEL', 'NPC_', 'CONT', 'ARMO', 'AMMO',
                            'MISC', 'WEAP', 'BOOK', 'KEYM', 'ALCH',
                            'LIGH'
                        ]),
                        format(uint32('Object Type'), def('ObjectTypeEnum')),
                        conflictType('Ignore', size(4, bytes('Unused'))),
                        conflictType('Ignore', size(4, bytes('Unused')))
                    ]),
                    int32('Radius')
                ])),
                subrecord('PLD2', struct('Location 2', [
                    format(int32('Type'), enumeration({
                        0: 'Near reference',
                        1: 'In cell',
                        2: 'Near current location',
                        3: 'Near editor location',
                        4: 'Object ID',
                        5: 'Object Type',
                        6: 'Near linked reference',
                        7: 'At package location'
                    })),
                    union('Location', 'PxDTLocationDecider', [
                        opts(ckFormId('Reference', [
                            'REFR', 'PGRE', 'PMIS', 'PBEA', 'ACHR',
                            'ACRE', 'PLYR'
                        ]), {
                            "persistent": true
                        }),
                        ckFormId('Cell', ['CELL']),
                        conflictType('Ignore', size(4, bytes('Unused'))),
                        conflictType('Ignore', size(4, bytes('Unused'))),
                        ckFormId('Object ID', [
                            'ACTI', 'DOOR', 'STAT', 'FURN', 'CREA',
                            'SPEL', 'NPC_', 'CONT', 'ARMO', 'AMMO',
                            'MISC', 'WEAP', 'BOOK', 'KEYM', 'ALCH',
                            'LIGH'
                        ]),
                        format(uint32('Object Type'), def('ObjectTypeEnum')),
                        conflictType('Ignore', size(4, bytes('Unused'))),
                        conflictType('Ignore', size(4, bytes('Unused')))
                    ]),
                    int32('Radius')
                ]))
            ])),
            req(subrecord('PSDT', struct('Schedule', [
                int8('Month'),
                format(int8('Day of week'), enumeration({
                    0: 'Sunday',
                    1: 'Monday',
                    2: 'Tuesday',
                    3: 'Wednesday',
                    4: 'Thursday',
                    5: 'Friday',
                    6: 'Saturday',
                    7: 'Weekdays',
                    8: 'Weekends',
                    9: 'Monday, Wednesday, Friday',
                    10: 'Tuesday, Thursday',
                    "-1": 'Any'
                })),
                uint8('Date'),
                int8('Time'),
                int32('Duration')
            ]))),
            subrecord('PTDT', struct('Target 1', [
                format(int32('Type'), enumeration({
                    0: 'Specific Reference',
                    1: 'Object ID',
                    2: 'Object Type',
                    3: 'Linked Reference'
                })),
                union('Target', 'PxDTLocationDecider', [
                    opts(ckFormId('Reference', [
                        'ACHR', 'ACRE', 'REFR', 'PGRE', 'PMIS',
                        'PBEA', 'PLYR'
                    ]), {
                        "persistent": true
                    }),
                    ckFormId('Object ID', [
                        'ACTI', 'DOOR', 'STAT', 'FURN', 'CREA',
                        'SPEL', 'NPC_', 'LVLN', 'LVLC', 'CONT',
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                        'KEYM', 'ALCH', 'LIGH', 'FACT', 'FLST'
                    ]),
                    format(uint32('Object Type'), def('ObjectTypeEnum')),
                    conflictType('Ignore', size(4, bytes('Unused')))
                ]),
                int32('Count / Distance'),
                float('Unknown')
            ])),
            def('CTDAs'),
            memberStruct('Idle Animations', [
                req(subrecord('IDLF', format(uint8('Flags'), flags({
                    0: 'Run in Sequence',
                    1: '',
                    2: 'Do Once'
                })))),
                req(subrecord('IDLC', struct('', [
                    uint8('Animation Count'),
                    size(3, bytes('Unused'))
                ]))),
                req(subrecord('IDLT', float('Idle Timer Setting'))),
                opts(req(subrecord('IDLA', array('Animations', 
                    ckFormId('Animation', ['IDLE'])
                ))), {
                    "afterSet": "IDLAsAfterSet"
                }),
                subrecord('IDLB', conflictType('Ignore', size(4, bytes('Unused'))))
            ]),
            subrecord('CNAM', ckFormId('Combat Style', ['CSTY'])),
            subrecord('PKED', empty('Eat Marker')),
            subrecord('PKE2', uint32('Escort Distance')),
            subrecord('PKFD', float('Follow - Start Location - Trigger Radius')),
            subrecord('PKPT', struct('Patrol Flags', [
                format(uint8('Repeatable'), enumeration({
                    0: 'No',
                    1: 'Yes'
                })),
                size(1, bytes('Unused'))
            ])),
            subrecord('PKW3', struct('Use Weapon Data', [
                format(uint32('Flags'), flags({
                    0: 'Always Hit',
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: 'Do No Damage',
                    9: '',
                    10: '',
                    11: '',
                    12: '',
                    13: '',
                    14: '',
                    15: '',
                    16: 'Crouch To Reload',
                    17: '',
                    18: '',
                    19: '',
                    20: '',
                    21: '',
                    22: '',
                    23: '',
                    24: 'Hold Fire When Blocked'
                })),
                format(uint8('Fire Rate'), enumeration({
                    0: 'Auto Fire',
                    1: 'Volley Fire'
                })),
                format(uint8('Fire Count'), enumeration({
                    0: 'Number of Bursts',
                    1: 'Repeat Fire'
                })),
                uint16('Number of Bursts'),
                struct('Shoots Per Volleys', [
                    uint16('Min'),
                    uint16('Max')
                ]),
                struct('Pause Between Volleys', [
                    float('Min'),
                    float('Max')
                ]),
                size(4, bytes('Unused'))
            ])),
            subrecord('PTD2', struct('Target 2', [
                format(int32('Type'), enumeration({
                    0: 'Specific reference',
                    1: 'Object ID',
                    2: 'Object Type',
                    3: 'Linked Reference'
                })),
                union('Target', 'PxDTLocationDecider', [
                    opts(ckFormId('Reference', [
                        'ACHR', 'ACRE', 'REFR', 'PGRE', 'PMIS',
                        'PBEA', 'PLYR'
                    ]), {
                        "persistent": true
                    }),
                    ckFormId('Object ID', [
                        'ACTI', 'DOOR', 'STAT', 'FURN', 'CREA',
                        'SPEL', 'NPC_', 'LVLN', 'LVLC', 'CONT',
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                        'KEYM', 'ALCH', 'LIGH', 'FACT', 'FLST'
                    ]),
                    format(uint32('Object Type'), def('ObjectTypeEnum')),
                    conflictType('Ignore', size(4, bytes('Unused')))
                ]),
                int32('Count / Distance'),
                float('Unknown')
            ])),
            subrecord('PUID', empty('Use Item Marker')),
            subrecord('PKAM', empty('Ambush Marker')),
            subrecord('PKDD', struct('Dialogue Data', [
                float('FOV'),
                ckFormId('Topic', ['DIAL', 'NULL']),
                format(uint32('Flags'), flags({
                    0: 'No Headtracking',
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: 'Don\'t Control Target Movement'
                })),
                size(4, bytes('Unused')),
                format(uint32('Dialogue Type'), enumeration({
                    0: 'Conversation',
                    1: 'Say To'
                })),
                size(4, bytes('Unknown'))
            ])),
            subrecord('PLD2', struct('Location 2 (again??)', [
                format(int32('Type'), enumeration({
                    0: 'Near reference',
                    1: 'In cell',
                    2: 'Near current location',
                    3: 'Near editor location',
                    4: 'Object ID',
                    5: 'Object Type',
                    6: 'Near linked reference',
                    7: 'At package location'
                })),
                union('Location', 'PxDTLocationDecider', [
                    opts(ckFormId('Reference', [
                        'REFR', 'PGRE', 'PMIS', 'PBEA', 'ACHR',
                        'ACRE', 'PLYR'
                    ]), {
                        "persistent": true
                    }),
                    ckFormId('Cell', ['CELL']),
                    conflictType('Ignore', size(4, bytes('Unused'))),
                    conflictType('Ignore', size(4, bytes('Unused'))),
                    ckFormId('Object ID', [
                        'ACTI', 'DOOR', 'STAT', 'FURN', 'CREA',
                        'SPEL', 'NPC_', 'CONT', 'ARMO', 'AMMO',
                        'MISC', 'WEAP', 'BOOK', 'KEYM', 'ALCH',
                        'LIGH'
                    ]),
                    format(uint32('Object Type'), def('ObjectTypeEnum')),
                    conflictType('Ignore', size(4, bytes('Unused'))),
                    conflictType('Ignore', size(4, bytes('Unused')))
                ]),
                int32('Radius')
            ])),
            req(memberStruct('OnBegin', [
                req(subrecord('POBA', empty('OnBegin Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                req(def('EmbeddedScript')),
                req(subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL'])))
            ])),
            req(memberStruct('OnEnd', [
                req(subrecord('POEA', empty('OnEnd Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                req(def('EmbeddedScript')),
                req(subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL'])))
            ])),
            req(memberStruct('OnChange', [
                req(subrecord('POCA', empty('OnChange Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                req(def('EmbeddedScript')),
                req(subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL'])))
            ]))
        ]
    })
};