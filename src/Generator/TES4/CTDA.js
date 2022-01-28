let {
    addDef, def, uint8, format, bytes, 
    size, float, ckFormId, union, uint16, 
    conflictType, opts, int32, uint32, sortKey, 
    struct, subrecord, empty, memberUnion
} = require('../helpers');

module.exports = () => {
    addDef('CTDA', 
        memberUnion('Condition', [
            subrecord('CTDA', sortKey([3, 4], struct('Condition', [
                format(uint8('Type'), def('CtdaType')),
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
                    ckFormId('Actor Value', ['ACVA']),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Axis'), def('AxisEnum')),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    opts(int32('Quest Stage (INVALID)'), {
                        "zeroSortKey": 1
                    }),
                    ckFormId('Object Reference', [
                        'PLYR', 'REFR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Inventory Object', [
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'INGR',
                        'SLGM', 'SGST', 'BOOK', 'KEYM', 'CLOT',
                        'ALCH', 'APPA', 'LIGH'
                    ]),
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Quest', ['QUST']),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Actor Base', [
                        'NPC_', 'CREA', 'ACTI'
                    ]),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Package', ['PACK']),
                    ckFormId('Owner', ['FACT', 'NPC_']),
                    ckFormId('Birthsign', ['BSGN']),
                    ckFormId('Furniture', ['FURN']),
                    ckFormId('Magic Item', ['SPEL']),
                    ckFormId('Magic Effect', ['MGEF']),
                    ckFormId('Worldspace', ['WRLD']),
                    ckFormId('Referenceable Object', [
                        'CREA', 'NPC_', 'TREE', 'SBSP', 'LVLC',
                        'SOUN', 'ACTI', 'DOOR', 'FLOR', 'STAT',
                        'FURN', 'CONT', 'ARMO', 'AMMO', 'MISC',
                        'WEAP', 'INGR', 'SLGM', 'SGST', 'BOOK',
                        'KEYM', 'CLOT', 'ALCH', 'APPA', 'LIGH',
                        'GRAS'
                    ])
                ]),
                union('Parameter #2', 'CTDAParam2Decider', [
                    size(4, bytes('Unknown')),
                    opts(conflictType('Ignore', size(4, bytes('None'))), {
                        "zeroSortKey": 1
                    }),
                    int32('Integer'),
                    format(int32('Variable Name'), def('CTDAParam2VariableNameToStr')),
                    format(uint32('Sex'), def('SexEnum')),
                    ckFormId('Actor Value', ['ACVA']),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Axis'), def('AxisEnum')),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    format(int32('Quest Stage'), def('CTDAParam2QuestStageToStr')),
                    ckFormId('Object Reference', [
                        'PLYR', 'REFR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Inventory Object', [
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'INGR',
                        'SLGM', 'SGST', 'BOOK', 'KEYM', 'CLOT',
                        'ALCH', 'APPA', 'LIGH'
                    ]),
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Quest', ['QUST']),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Actor Base', [
                        'NPC_', 'CREA', 'ACTI'
                    ]),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Package', ['PACK']),
                    ckFormId('Owner', ['FACT', 'NPC_']),
                    ckFormId('Birthsign', ['BSGN']),
                    ckFormId('Furniture', ['FURN']),
                    ckFormId('Magic Item', ['SPEL']),
                    ckFormId('Magic Effect', ['MGEF']),
                    ckFormId('Worldspace', ['WRLD']),
                    ckFormId('Referenceable Object', [
                        'CREA', 'NPC_', 'TREE', 'SBSP', 'LVLC',
                        'SOUN', 'ACTI', 'DOOR', 'FLOR', 'STAT',
                        'FURN', 'CONT', 'ARMO', 'AMMO', 'MISC',
                        'WEAP', 'INGR', 'SLGM', 'SGST', 'BOOK',
                        'KEYM', 'CLOT', 'ALCH', 'APPA', 'LIGH',
                        'GRAS'
                    ])
                ]),
                conflictType('Ignore', uint32('Unused'))
            ]))),
            subrecord('CTDT', sortKey([3, 4], struct('Condition (old format)', [
                format(uint8('Type'), def('CtdaType')),
                size(3, bytes('Unused')),
                union('Comparison Value', 'CTDACompValueDecider', [
                    float('Comparison Value - Float'),
                    ckFormId('Comparison Value - Global', ['GLOB'])
                ]),
                format(uint16('Function'), def('CTDAFunctionToStr')),
                conflictType('Ignore', size(2, bytes('Unused'))),
                union('Parameter #1', 'CTDAParam1Decider', [
                    size(4, bytes('Unknown')),
                    conflictType('Ignore', size(4, bytes('None'))),
                    int32('Integer'),
                    int32('Variable Name (INVALID)'),
                    format(uint32('Sex'), def('SexEnum')),
                    ckFormId('Actor Value', ['ACVA']),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Axis'), def('AxisEnum')),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    int32('Quest Stage (INVALID)'),
                    ckFormId('Object Reference', [
                        'PLYR', 'REFR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Inventory Object', [
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'INGR',
                        'SLGM', 'SGST', 'BOOK', 'KEYM', 'CLOT',
                        'ALCH', 'APPA', 'LIGH'
                    ]),
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Quest', ['QUST']),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Actor Base', [
                        'NPC_', 'CREA', 'ACTI'
                    ]),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Package', ['PACK']),
                    ckFormId('Owner', ['FACT', 'NPC_']),
                    ckFormId('Birthsign', ['BSGN']),
                    ckFormId('Furniture', ['FURN']),
                    ckFormId('Magic Item', ['SPEL']),
                    ckFormId('Magic Effect', ['MGEF']),
                    ckFormId('Worldspace', ['WRLD']),
                    ckFormId('Referenceable Object', [
                        'CREA', 'NPC_', 'TREE', 'SBSP', 'LVLC',
                        'SOUN', 'ACTI', 'DOOR', 'FLOR', 'STAT',
                        'FURN', 'CONT', 'ARMO', 'AMMO', 'MISC',
                        'WEAP', 'INGR', 'SLGM', 'SGST', 'BOOK',
                        'KEYM', 'CLOT', 'ALCH', 'APPA', 'LIGH',
                        'GRAS'
                    ])
                ]),
                union('Parameter #2', 'CTDAParam2Decider', [
                    size(4, bytes('Unknown')),
                    conflictType('Ignore', size(4, bytes('None'))),
                    int32('Integer'),
                    format(int32('Variable Name'), def('CTDAParam2VariableNameToStr')),
                    format(uint32('Sex'), def('SexEnum')),
                    ckFormId('Actor Value', ['ACVA']),
                    format(uint32('Crime Type'), def('CrimeTypeEnum')),
                    format(uint32('Axis'), def('AxisEnum')),
                    format(uint32('Form Type'), def('FormTypeEnum')),
                    format(int32('Quest Stage'), def('CTDAParam2QuestStageToStr')),
                    ckFormId('Object Reference', [
                        'PLYR', 'REFR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Inventory Object', [
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'INGR',
                        'SLGM', 'SGST', 'BOOK', 'KEYM', 'CLOT',
                        'ALCH', 'APPA', 'LIGH'
                    ]),
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'ACRE', 'TRGT'
                    ]),
                    ckFormId('Quest', ['QUST']),
                    ckFormId('Faction', ['FACT']),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Class', ['CLAS']),
                    ckFormId('Race', ['RACE']),
                    ckFormId('Actor Base', [
                        'NPC_', 'CREA', 'ACTI'
                    ]),
                    ckFormId('Global', ['GLOB']),
                    ckFormId('Weather', ['WTHR']),
                    ckFormId('Package', ['PACK']),
                    ckFormId('Owner', ['FACT', 'NPC_']),
                    ckFormId('Birthsign', ['BSGN']),
                    ckFormId('Furniture', ['FURN']),
                    ckFormId('Magic Item', ['SPEL']),
                    ckFormId('Magic Effect', ['MGEF']),
                    ckFormId('Worldspace', ['WRLD']),
                    ckFormId('Referenceable Object', [
                        'CREA', 'NPC_', 'TREE', 'SBSP', 'LVLC',
                        'SOUN', 'ACTI', 'DOOR', 'FLOR', 'STAT',
                        'FURN', 'CONT', 'ARMO', 'AMMO', 'MISC',
                        'WEAP', 'INGR', 'SLGM', 'SGST', 'BOOK',
                        'KEYM', 'CLOT', 'ALCH', 'APPA', 'LIGH',
                        'GRAS'
                    ])
                ]),
                conflictType('Ignore', empty('Unused'))
            ])))
        ])
    );
};