let {
    addDef, def, uint8, format, opts, 
    bytes, size, conflictType, float, ckFormId, 
    union, uint16, uint32, int32, formId, 
    enumeration, sortKey, struct, subrecord, string, 
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
                    opts(size(4, bytes('Unknown')), {
                        "zeroSortKey": 1
                    }),
                    opts(conflictType('Ignore', size(4, bytes('None'))), {
                        "zeroSortKey": 1
                    }),
                    format(uint32('String'), def('CTDAParam1StringToString')),
                    int32('Integer'),
                    float('Float'),
                    ckFormId('Actor', [
                        'NULL', 'PLYR', 'ACHR', 'REFR'
                    ]),
                    ckFormId('Actor Base', ['NPC_']),
                    def('ActorValue'),
                    format(uint32('Player Action'), def('AdvanceActionEnum')),
                    format(int32('Alias'), def('ConditionAliasToStr')),
                    format(uint32('Alignment'), def('AlignmentEnum')),
                    ckFormId('Association Type', ['ASTP']),
                    format(uint32('Axis'), def('AxisEnum')),
                    format(uint32('Casting Type'), def('CastingSourceEnum')),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Critical Stage'), def('CriticalStageEnum')),
                    ckFormId('Encounter Zone', ['ECZN']),
                    ckFormId('Equip Type', ['EQUP']),
                    format(uint32('Event'), def('EventFunctionAndMemberToStr')),
                    formId('Event Data'),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Form List', ['FLST']),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    ckFormId('Furniture', ['FURN', 'FLST']),
                    format(uint32('Furniture Anim'), def('FurnitureAnimTypeEnum')),
                    format(uint32('Furniture Entry'), enumeration({
                        65536: 'Front',
                        131072: 'Behind',
                        262144: 'Right',
                        524288: 'Left',
                        1048576: 'Up'
                    })),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Idle', ['IDLE']),
                    ckFormId('Inventory Object', def('sigBaseObjects')),
                    ckFormId('Keyword', [
                        'KYWD', 'FLST', 'NULL'
                    ]),
                    ckFormId('Location', ['LCTN']),
                    ckFormId('Base Effect', ['MGEF']),
                    ckFormId('Effect Item', [
                        'SPEL', 'ENCH', 'ALCH', 'INGR', 'SCRL'
                    ]),
                    format(uint32('Misc Stat'), def('MiscStatEnum')),
                    ckFormId('Object Reference', def('sigReferences')),
                    ckFormId('Owner', [
                        'NULL', 'FACT', 'NPC_'
                    ]),
                    ckFormId('Package', ['PACK']),
                    uint32('Packdata ID'),
                    ckFormId('Perk', ['PERK']),
                    opts(ckFormId('Quest', ['QUST']), {
                        "overlayCallback": "CTDAParamQuestOverlay"
                    }),
                    format(uint32('Quest Stage'), def('CTDAParam2QuestStageToStr')),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Referenceable Object', def('sigBaseObjects')),
                    ckFormId('Location Ref Type', ['LCRT']),
                    ckFormId('Region', ['REGN']),
                    ckFormId('Scene', ['NULL', 'SCEN']),
                    format(uint32('Sex'), def('SexEnum')),
                    ckFormId('Shout', ['SHOU']),
                    opts(conflictType('Ignore', size(4, bytes('Variable Name (unused)'))), {
                        "zeroSortKey": 1
                    }),
                    format(uint32('VATS Value Function'), def('VATSValueFunctionEnum')),
                    opts(uint32('VATS Value Param (unused)'), {
                        "zeroSortKey": 1
                    }),
                    ckFormId('Voice Type', ['VTYP', 'FLST']),
                    format(uint32('Ward State'), def('WardStateEnum')),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Worldspace', ['WRLD', 'FLST']),
                    ckFormId('Damage Type', ['DMGT', 'FLST'])
                ]),
                union('Parameter #2', 'CTDAParam2Decider', [
                    opts(size(4, bytes('Unknown')), {
                        "zeroSortKey": 1
                    }),
                    opts(conflictType('Ignore', size(4, bytes('None'))), {
                        "zeroSortKey": 1
                    }),
                    format(uint32('String'), def('CTDAParam2StringToString')),
                    int32('Integer'),
                    float('Float'),
                    ckFormId('Actor', [
                        'NULL', 'PLYR', 'ACHR', 'REFR'
                    ]),
                    ckFormId('Actor Base', ['NPC_']),
                    def('ActorValue'),
                    format(uint32('Player Action'), def('AdvanceActionEnum')),
                    format(int32('Alias'), def('ConditionAliasToStr')),
                    format(uint32('Alignment'), def('AlignmentEnum')),
                    ckFormId('Association Type', ['ASTP']),
                    format(uint32('Axis'), def('AxisEnum')),
                    format(uint32('Casting Type'), def('CastingSourceEnum')),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Critical Stage'), def('CriticalStageEnum')),
                    ckFormId('Encounter Zone', ['ECZN']),
                    ckFormId('Equip Type', ['EQUP']),
                    format(uint32('Event'), def('EventFunctionAndMemberToStr')),
                    formId('Event Data'),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Form List', ['FLST']),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    ckFormId('Furniture', ['FURN', 'FLST']),
                    format(uint32('Furniture Anim'), def('FurnitureAnimTypeEnum')),
                    format(uint32('Furniture Entry'), enumeration({
                        65536: 'Front',
                        131072: 'Behind',
                        262144: 'Right',
                        524288: 'Left',
                        1048576: 'Up'
                    })),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Idle', ['IDLE']),
                    ckFormId('Inventory Object', def('sigBaseObjects')),
                    ckFormId('Keyword', [
                        'KYWD', 'FLST', 'NULL'
                    ]),
                    ckFormId('Location', ['LCTN']),
                    ckFormId('Base Effect', ['MGEF']),
                    ckFormId('Effect Item', [
                        'SPEL', 'ENCH', 'ALCH', 'INGR', 'SCRL'
                    ]),
                    format(uint32('Misc Stat'), def('MiscStatEnum')),
                    ckFormId('Object Reference', def('sigReferences')),
                    ckFormId('Owner', [
                        'NULL', 'FACT', 'NPC_'
                    ]),
                    ckFormId('Package', ['PACK']),
                    uint32('Packdata ID'),
                    ckFormId('Perk', ['PERK']),
                    ckFormId('Quest', ['QUST']),
                    format(uint32('Quest Stage'), def('CTDAParam2QuestStageToStr')),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Referenceable Object', def('sigBaseObjects')),
                    ckFormId('Location Ref Type', ['LCRT']),
                    ckFormId('Region', ['REGN']),
                    ckFormId('Scene', ['NULL', 'SCEN']),
                    format(uint32('Sex'), def('SexEnum')),
                    ckFormId('Shout', ['SHOU']),
                    conflictType('Ignore', size(4, bytes('Variable Name (unused)'))),
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
                    ckFormId('Voice Type', ['VTYP', 'FLST']),
                    format(uint32('Ward State'), def('WardStateEnum')),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Worldspace', ['WRLD', 'FLST']),
                    ckFormId('Damage Type', ['DMGT', 'FLST'])
                ]),
                opts(format(uint32('Run On'), enumeration({
                    0: 'Subject',
                    1: 'Target',
                    2: 'Reference',
                    3: 'Combat Target',
                    4: 'Linked Reference',
                    5: 'Quest Alias',
                    6: 'Package Data',
                    7: 'Event Data',
                    8: 'Command Target',
                    9: 'Event Camera Ref',
                    10: 'My Killer'
                })), {
                    "afterSet": "CTDARunOnAfterSet"
                }),
                union('Reference', 'CTDAReferenceDecider', [
                    conflictType('Ignore', uint32('Unused')),
                    ckFormId('Reference', def('sigReferences'))
                ]),
                int32('Parameter #3')
            ]))),
            subrecord('CIS1', string('Parameter #1')),
            subrecord('CIS2', string('Parameter #2'))
        ]))
    );
};