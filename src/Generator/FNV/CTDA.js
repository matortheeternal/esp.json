let {
    addDef, def, uint8, format, opts, 
    bytes, size, float, ckFormId, union, 
    uint16, conflictType, int32, uint32, formId, 
    enumeration, sortKey, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('CTDA', 
        subrecord('CTDA', sortKey([3, 4], struct('Condition', [
            opts(format(uint8('Type'), def('CtdaTypeToStr')), {
                "afterSet": "CtdaTypeAfterSet"
            }),
            size(3, bytes('Unused')),
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
                opts(int32('Variable Name (INVALID)'), {
                    "zeroSortKey": 1
                }),
                format(uint32('Sex'), def('SexEnum')),
                format(int32('Actor Value'), def('ActorValueEnum')),
                format(uint32('Crime Type'), def('CrimeTypeEnum')),
                format(uint32('Axis'), def('AxisEnum')),
                opts(int32('Quest Stage (INVALID)'), {
                    "zeroSortKey": 1
                }),
                format(uint32('Misc Stat'), def('MiscStatEnum')),
                format(uint32('Alignment'), def('AlignmentEnum')),
                format(uint32('Equip Type'), def('EquipTypeEnum')),
                format(uint32('Form Type'), def('FormTypeEnum')),
                format(uint32('Critical Stage'), def('CriticalStageEnum')),
                opts(ckFormId('Object Reference', [
                    'PLYR', 'REFR', 'ACHR', 'ACRE', 'PGRE',
                    'PMIS', 'PBEA', 'TRGT'
                ]), {
                    "persistent": true
                }),
                ckFormId('Inventory Object', [
                    'ARMO', 'BOOK', 'MISC', 'WEAP', 'AMMO',
                    'KEYM', 'ALCH', 'NOTE', 'FLST', 'CHIP',
                    'CMNY', 'IMOD'
                ]),
                opts(ckFormId('Actor', [
                    'PLYR', 'ACHR', 'ACRE', 'TRGT'
                ]), {
                    "persistent": true
                }),
                ckFormId('Voice Type', ['VTYP']),
                ckFormId('Idle', ['IDLE']),
                ckFormId('Form List', ['FLST']),
                ckFormId('Note', ['NOTE']),
                ckFormId('Quest', ['QUST']),
                ckFormId('Faction', ['FACT']),
                ckFormId('Weapon', ['WEAP']),
                ckFormId('Cell', ['CELL']),
                ckFormId('Class', ['CLAS']),
                ckFormId('Race', ['RACE']),
                ckFormId('Actor Base', [
                    'NPC_', 'CREA', 'ACTI', 'TACT', 'NULL'
                ]),
                ckFormId('Global', ['GLOB']),
                ckFormId('Weather', ['WTHR']),
                ckFormId('Package', ['PACK']),
                ckFormId('Encounter Zone', ['ECZN']),
                ckFormId('Perk', ['PERK']),
                ckFormId('Owner', ['FACT', 'NPC_']),
                ckFormId('Furniture', ['FURN', 'FLST']),
                ckFormId('Effect Item', [
                    'SPEL', 'ENCH', 'ALCH', 'INGR'
                ]),
                ckFormId('Base Effect', ['MGEF']),
                ckFormId('Worldspace', ['WRLD']),
                format(uint32('VATS Value Function'), def('VATSValueFunctionEnum')),
                opts(uint32('VATS Value Param (INVALID)'), {
                    "zeroSortKey": 1
                }),
                format(uint32('Creature Type'), def('CreatureTypeEnum')),
                format(uint32('Menu Mode'), def('MenuModeEnum')),
                format(uint32('Player Action'), def('PlayerActionEnum')),
                format(int32('Body Location'), def('BodyLocationEnum')),
                opts(ckFormId('Referenceable Object', [
                    'CREA', 'NPC_', 'PROJ', 'TREE', 'SOUN',
                    'ACTI', 'DOOR', 'STAT', 'FURN', 'CONT',
                    'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                    'KEYM', 'ALCH', 'LIGH', 'GRAS', 'ASPC',
                    'IDLM', 'ARMA', 'MSTT', 'NOTE', 'PWAT',
                    'SCOL', 'TACT', 'TERM', 'FLST', 'CHIP',
                    'CMNY', 'CCRD', 'IMOD', 'LVLC', 'LVLN'
                ]), {
                    "validateFlstRefs": true
                }),
                opts(int32('Quest Objective (INVALID)'), {
                    "zeroSortKey": 1
                }),
                ckFormId('Reputation', ['REPU']),
                ckFormId('Region', ['REGN']),
                ckFormId('Challenge', ['CHAL']),
                ckFormId('Casino', ['CSNO']),
                formId('Form')
            ]),
            union('Parameter #2', 'CTDAParam2Decider', [
                size(4, bytes('Unknown')),
                conflictType('Ignore', size(4, bytes('None'))),
                int32('Integer'),
                format(int32('Variable Name'), def('CTDAParam2VariableNameToStr')),
                format(uint32('Sex'), def('SexEnum')),
                format(int32('Actor Value'), def('ActorValueEnum')),
                format(uint32('Crime Type'), def('CrimeTypeEnum')),
                format(uint32('Axis'), def('AxisEnum')),
                format(int32('Quest Stage'), def('CTDAParam2QuestStageToStr')),
                format(uint32('Misc Stat'), def('MiscStatEnum')),
                format(uint32('Alignment'), def('AlignmentEnum')),
                format(uint32('Equip Type'), def('EquipTypeEnum')),
                format(uint32('Form Type'), def('FormTypeEnum')),
                format(uint32('Critical Stage'), def('CriticalStageEnum')),
                opts(ckFormId('Object Reference', [
                    'PLYR', 'REFR', 'PMIS', 'PBEA', 'ACHR',
                    'ACRE', 'PGRE', 'TRGT'
                ]), {
                    "persistent": true
                }),
                ckFormId('Inventory Object', [
                    'ARMO', 'BOOK', 'MISC', 'WEAP', 'AMMO',
                    'KEYM', 'ALCH', 'NOTE', 'FLST', 'CHIP',
                    'CMNY', 'CCRD', 'IMOD'
                ]),
                opts(ckFormId('Actor', [
                    'PLYR', 'ACHR', 'ACRE', 'TRGT'
                ]), {
                    "persistent": true
                }),
                ckFormId('Voice Type', ['VTYP']),
                ckFormId('Idle', ['IDLE']),
                ckFormId('Form List', ['FLST']),
                ckFormId('Note', ['NOTE']),
                ckFormId('Quest', ['QUST']),
                ckFormId('Faction', ['FACT']),
                ckFormId('Weapon', ['WEAP']),
                ckFormId('Cell', ['CELL']),
                ckFormId('Class', ['CLAS']),
                ckFormId('Race', ['RACE']),
                ckFormId('Actor Base', [
                    'NPC_', 'CREA', 'ACTI', 'TACT'
                ]),
                ckFormId('Global', ['GLOB']),
                ckFormId('Weather', ['WTHR']),
                ckFormId('Package', ['PACK']),
                ckFormId('Encounter Zone', ['ECZN']),
                ckFormId('Perk', ['PERK']),
                ckFormId('Owner', ['FACT', 'NPC_']),
                ckFormId('Furniture', ['FURN', 'FLST']),
                ckFormId('Effect Item', [
                    'SPEL', 'ENCH', 'ALCH', 'INGR'
                ]),
                ckFormId('Base Effect', ['MGEF']),
                ckFormId('Worldspace', ['WRLD']),
                uint32('VATS Value Function (INVALID)'),
                union('VATS Value Param', 'CTDAParam2VATSValueParam', [
                    ckFormId('Weapon', ['WEAP']),
                    opts(ckFormId('Weapon List', ['FLST']), {
                        "validateFlstRefs": true
                    }),
                    ckFormId('Target', ['NPC_', 'CREA']),
                    opts(ckFormId('Target List', ['FLST']), {
                        "validateFlstRefs": true
                    }),
                    conflictType('Ignore', size(4, bytes('Unused'))),
                    format(int32('Target Part'), def('ActorValueEnum')),
                    format(uint32('VATS Action'), enumeration({
                        0: 'Unarmed Attack',
                        1: 'One Hand Melee Attack',
                        2: 'Two Hand Melee Attack',
                        3: 'Fire Pistol',
                        4: 'Fire Rifle',
                        5: 'Fire Handle Weapon',
                        6: 'Fire Launcher',
                        7: 'Throw Grenade',
                        8: 'Place Mine',
                        9: 'Reload',
                        10: 'Crouch',
                        11: 'Stand',
                        12: 'Switch Weapon',
                        13: 'Toggle Weapon Drawn',
                        14: 'Heal',
                        15: 'Player Death',
                        16: 'Special Weapon Attack',
                        17: 'Special Unarmed Attack',
                        18: 'Kill Camera Shot',
                        19: 'Throw Weapon'
                    })),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    }),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    }),
                    ckFormId('Critical Effect', ['SPEL']),
                    opts(ckFormId('Critical Effect List', ['FLST']), {
                        "validateFlstRefs": true
                    }),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    }),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    }),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    }),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    }),
                    format(uint32('Weapon Type'), def('WeaponAnimTypeEnum')),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    }),
                    opts(conflictType('Ignore', size(4, bytes('Unused'))), {
                        "zeroSortKey": 1
                    })
                ]),
                format(uint32('Creature Type'), def('CreatureTypeEnum')),
                format(uint32('Menu Mode'), def('MenuModeEnum')),
                format(uint32('Player Action'), def('PlayerActionEnum')),
                format(int32('Body Location'), def('BodyLocationEnum')),
                opts(ckFormId('Referenceable Object', [
                    'CREA', 'NPC_', 'PROJ', 'TREE', 'SOUN',
                    'ACTI', 'DOOR', 'STAT', 'FURN', 'CONT',
                    'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                    'KEYM', 'ALCH', 'LIGH', 'GRAS', 'ASPC',
                    'IDLM', 'ARMA', 'MSTT', 'NOTE', 'PWAT',
                    'SCOL', 'TACT', 'TERM', 'FLST', 'CHIP',
                    'CMNY', 'CCRD', 'IMOD', 'LVLC', 'LVLN'
                ]), {
                    "validateFlstRefs": true
                }),
                format(int32('Quest Objective'), def('CTDAParam2QuestObjectiveToStr')),
                ckFormId('Reputation', ['REPU']),
                ckFormId('Region', ['REGN']),
                ckFormId('Challenge', ['CHAL']),
                ckFormId('Casino', ['CSNO']),
                formId('Form')
            ]),
            union('Run On', 'CTDARunOnDecider', [
                opts(format(uint32('Run On'), enumeration({
                    0: 'Subject',
                    1: 'Target',
                    2: 'Reference',
                    3: 'Combat Target',
                    4: 'Linked Reference'
                })), {
                    "afterSet": "CTDARunOnAfterSet"
                }),
                format(uint32('Run On'), enumeration({
                    0: 'Idle',
                    1: 'Movement',
                    2: 'Left Arm',
                    3: 'Left Hand',
                    4: 'Weapon',
                    5: 'Weapon Up',
                    6: 'Weapon Down',
                    7: 'Special Idle',
                    20: 'Whole Body',
                    21: 'Upper Body'
                }))
            ]),
            union('Reference', 'CTDAReferenceDecider', [
                conflictType('Ignore', uint32('Unused')),
                opts(ckFormId('Reference', [
                    'PLYR', 'ACHR', 'ACRE', 'REFR', 'PMIS',
                    'PBEA', 'PGRE', 'NULL'
                ]), {
                    "persistent": true
                })
            ])
        ])))
    );
};