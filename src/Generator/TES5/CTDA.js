let {
    addDef, def, uint8, format, opts, 
    bytes, size, conflictType, float, ckFormId, 
    union, uint16, int32, uint32, enumeration, 
    formId, sortKey, struct, subrecord, string, 
    memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('CTDA', 
        sortKey([0], memberStruct('Condition', [
            subrecord('CTDA', sortKey([3, 5], struct('', [
                opts(format(uint8('Type'), def('CtdaTypeToStr')), {
                    "afterSet": "CtdaTypeAfterSet"
                }),
                conflictType('Ignore', size(3, bytes('Unused'))),
                union('Comparison Value', 'CTDACompValueDecider', [
                    float('Comparison Value - Float'),
                    ckFormId('Comparison Value - Global', ['GLOB'])
                ]),
                format(uint16('Function'), def('CTDAFunctionToStr')),
                conflictType('Ignore', size(2, bytes('Unused'))),
                union('Parameter #1', 'CTDAParam1Decider', [
                    size(4, bytes('Unknown')),
                    opts(conflictType('Ignore', size(4, bytes('None'))), {
                        "zeroSortKey": 1
                    }),
                    int32('Integer'),
                    float('Float'),
                    format(uint32('Variable Name'), def('CTDAParam1StringToString')),
                    format(uint32('Sex'), def('SexEnum')),
                    format(int32('Actor Value'), def('ActorValueEnum')),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Axis'), def('AxisEnum')),
                    opts(int32('Quest Stage (unused)'), {
                        "zeroSortKey": 1
                    }),
                    format(uint32('Misc Stat'), def('MiscStatEnum')),
                    format(uint32('Alignment'), def('AlignmentEnum')),
                    ckFormId('Equip Type', ['EQUP']),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    format(uint32('Critical Stage'), def('CriticalStageEnum')),
                    ckFormId('Object Reference', [
                        'NULL', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                        'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                        'PCON', 'PFLA'
                    ]),
                    ckFormId('Inventory Object', [
                        'ARMO', 'BOOK', 'MISC', 'WEAP', 'AMMO',
                        'KEYM', 'ALCH', 'SCRL', 'SLGM', 'INGR',
                        'FLST', 'LIGH', 'LVLI', 'COBJ'
                    ]),
                    ckFormId('Actor', [
                        'NULL', 'PLYR', 'ACHR', 'REFR'
                    ]),
                    ckFormId('Voice Type', ['VTYP', 'FLST']),
                    ckFormId('Idle', ['IDLE']),
                    ckFormId('Form List', ['FLST']),
                    ckFormId('Quest', ['QUST']),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Actor Base', ['NPC_']),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Package', ['PACK']),
                    ckFormId('Encounter Zone', ['ECZN']),
                    ckFormId('Perk', ['PERK']),
                    ckFormId('Owner', [
                        'NULL', 'FACT', 'NPC_'
                    ]),
                    ckFormId('Furniture', ['FURN', 'FLST']),
                    ckFormId('Effect Item', [
                        'SPEL', 'ENCH', 'ALCH', 'INGR', 'SCRL'
                    ]),
                    ckFormId('Base Effect', ['MGEF']),
                    ckFormId('Worldspace', ['WRLD', 'FLST']),
                    format(uint32('VATS Value Function'), def('VATSValueFunctionEnum')),
                    opts(uint32('VATS Value Param (INVALID)'), {
                        "zeroSortKey": 1
                    }),
                    opts(ckFormId('Referenceable Object', [
                        'NULL', 'NPC_', 'PROJ', 'TREE', 'SOUN',
                        'ACTI', 'DOOR', 'STAT', 'FURN', 'CONT',
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                        'KEYM', 'ALCH', 'LIGH', 'GRAS', 'ASPC',
                        'IDLM', 'ARMA', 'MSTT', 'TACT', 'LVLI',
                        'LVSP', 'SPEL', 'SCRL', 'SHOU', 'SLGM',
                        'ENCH', 'FLOR', 'FLST'
                    ]), {
                        "validateFlstRefs": true
                    }),
                    ckFormId('Region', ['REGN']),
                    ckFormId('Keyword', ['KYWD', 'NULL']),
                    format(uint32('Player Action'), def('AdvanceActionEnum')),
                    format(uint32('Casting Type'), def('CastingSourceEnum')),
                    ckFormId('Shout', ['SHOU']),
                    ckFormId('Location', ['LCTN']),
                    ckFormId('Location Ref Type', ['LCRT']),
                    format(int32('Alias'), def('ConditionAliasToStr')),
                    uint32('Packdata ID'),
                    ckFormId('Association Type', ['ASTP']),
                    format(uint32('Furniture Anim'), def('FurnitureAnimTypeEnum')),
                    format(uint32('Furniture Entry'), enumeration({
                        65536: 'Front',
                        131072: 'Behind',
                        262144: 'Right',
                        524288: 'Left',
                        1048576: 'Up'
                    })),
                    ckFormId('Scene', ['NULL', 'SCEN']),
                    format(uint32('Ward State'), def('WardStateEnum')),
                    format(uint32('Event'), def('EventFunctionAndMemberToStr')),
                    formId('Event Data'),
                    ckFormId('Knowable', ['MGEF', 'WOOP'])
                ]),
                union('Parameter #2', 'CTDAParam2Decider', [
                    size(4, bytes('Unknown')),
                    opts(conflictType('Ignore', size(4, bytes('None'))), {
                        "zeroSortKey": 1
                    }),
                    int32('Integer'),
                    float('Float'),
                    format(uint32('Variable Name'), def('CTDAParam2StringToString')),
                    format(uint32('Sex'), def('SexEnum')),
                    format(int32('Actor Value'), def('ActorValueEnum')),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Axis'), def('AxisEnum')),
                    format(int32('Quest Stage'), def('CTDAParam2QuestStageToStr')),
                    format(uint32('Misc Stat'), def('MiscStatEnum')),
                    format(uint32('Alignment'), def('AlignmentEnum')),
                    ckFormId('Equip Type', ['EQUP']),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    format(uint32('Critical Stage'), def('CriticalStageEnum')),
                    ckFormId('Object Reference', [
                        'NULL', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                        'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                        'PCON', 'PFLA'
                    ]),
                    ckFormId('Inventory Object', [
                        'ARMO', 'BOOK', 'MISC', 'WEAP', 'AMMO',
                        'KEYM', 'ALCH', 'SCRL', 'SLGM', 'INGR',
                        'FLST', 'LIGH', 'LVLI', 'COBJ'
                    ]),
                    ckFormId('Actor', [
                        'NULL', 'PLYR', 'ACHR', 'REFR'
                    ]),
                    ckFormId('Voice Type', ['VTYP', 'FLST']),
                    ckFormId('Idle', ['IDLE']),
                    ckFormId('Form List', ['FLST']),
                    ckFormId('Quest', ['QUST']),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Actor Base', ['NPC_']),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Package', ['PACK']),
                    ckFormId('Encounter Zone', ['ECZN']),
                    ckFormId('Perk', ['PERK']),
                    ckFormId('Owner', [
                        'NULL', 'FACT', 'NPC_'
                    ]),
                    ckFormId('Furniture', ['FURN', 'FLST']),
                    ckFormId('Effect Item', [
                        'SPEL', 'ENCH', 'ALCH', 'INGR', 'SCRL'
                    ]),
                    ckFormId('Base Effect', ['MGEF']),
                    ckFormId('Worldspace', ['WRLD', 'FLST']),
                    format(uint32('VATS Value Function'), def('VATSValueFunctionEnum')),
                    union('VATS Value Param', 'CTDAParam2VATSValueParamDecider', [
                        ckFormId('Weapon', ['WEAP']),
                        opts(ckFormId('Weapon List', ['FLST']), {
                            "validateFlstRefs": true
                        }),
                        ckFormId('Target', ['NPC_']),
                        opts(ckFormId('Target List', ['FLST']), {
                            "validateFlstRefs": true
                        }),
                        conflictType('Ignore', size(4, bytes('Unknown'))),
                        format(int32('Target Part'), def('ActorValueEnum')),
                        format(uint32('VATS Action'), enumeration({
                            0: 'Unarmed Attack',
                            1: 'One Hand Melee Attack',
                            2: 'Two Hand Melee Attack',
                            3: 'Magic Attack',
                            4: 'Ranged Attack',
                            5: 'Reload',
                            6: 'Crouch',
                            7: 'Stand',
                            8: 'Switch Weapon',
                            9: 'Toggle Weapon Drawn',
                            10: 'Heal',
                            11: 'Player Death'
                        })),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        ckFormId('Critical Effect', ['SPEL']),
                        opts(ckFormId('Critical Effect List', ['FLST']), {
                            "validateFlstRefs": true
                        }),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        format(uint32('Weapon Type'), def('WeaponAnimTypeEnum')),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        opts(conflictType('Ignore', size(4, bytes('Unknown'))), {
                            "zeroSortKey": 1
                        }),
                        format(uint32('Projectile Type'), enumeration({
                            0: 'Missile',
                            1: 'Lobber',
                            2: 'Beam',
                            3: 'Flame',
                            4: 'Cone',
                            5: 'Barrier',
                            6: 'Arrow'
                        })),
                        format(uint32('Delivery Type'), def('TargetEnum')),
                        format(uint32('Casting Type'), def('CastEnum'))
                    ]),
                    opts(ckFormId('Referenceable Object', [
                        'NULL', 'NPC_', 'PROJ', 'TREE', 'SOUN',
                        'ACTI', 'DOOR', 'STAT', 'FURN', 'CONT',
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                        'KEYM', 'ALCH', 'LIGH', 'GRAS', 'ASPC',
                        'IDLM', 'ARMA', 'MSTT', 'TACT', 'FLST',
                        'LVLI', 'LVSP', 'SPEL', 'SCRL', 'SHOU',
                        'SLGM', 'ENCH'
                    ]), {
                        "validateFlstRefs": true
                    }),
                    ckFormId('Region', ['REGN']),
                    ckFormId('Keyword', ['KYWD', 'NULL']),
                    format(uint32('Player Action'), def('AdvanceActionEnum')),
                    format(uint32('Casting Type'), def('CastingSourceEnum')),
                    ckFormId('Shout', ['SHOU']),
                    ckFormId('Location', ['LCTN']),
                    ckFormId('Location Ref Type', ['LCRT']),
                    format(int32('Alias'), def('ConditionAliasToStr')),
                    uint32('Packdata ID'),
                    ckFormId('Association Type', ['ASTP']),
                    format(uint32('Furniture Anim'), def('FurnitureAnimTypeEnum')),
                    format(uint32('Furniture Entry'), enumeration({
                        65536: 'Front',
                        131072: 'Behind',
                        262144: 'Right',
                        524288: 'Left',
                        1048576: 'Up'
                    })),
                    ckFormId('Scene', ['NULL', 'SCEN']),
                    format(uint32('Ward State'), def('WardStateEnum')),
                    format(uint32('Event'), def('EventFunctionAndMemberToStr')),
                    formId('Event Data'),
                    ckFormId('Knowable', ['MGEF', 'WOOP'])
                ]),
                opts(format(uint32('Run On'), enumeration({
                    0: 'Subject',
                    1: 'Target',
                    2: 'Reference',
                    3: 'Combat Target',
                    4: 'Linked Reference',
                    5: 'Quest Alias',
                    6: 'Package Data',
                    7: 'Event Data'
                })), {
                    "afterSet": "CTDARunOnAfterSet"
                }),
                union('Reference', 'CTDAReferenceDecider', [
                    conflictType('Ignore', uint32('Unused')),
                    ckFormId('Reference', [
                        'NULL', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                        'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                        'PCON', 'PFLA'
                    ])
                ]),
                int32('Parameter #3')
            ]))),
            subrecord('CIS1', string('Parameter #1')),
            subrecord('CIS2', string('Parameter #2'))
        ]))
    );
};