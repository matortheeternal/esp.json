let {
    req, def, flags, uint32, format, 
    float, formId, conflictType, ckFormId, union, 
    opts, enumeration, int32, uint16, bytes, 
    size, struct, subrecord, sorted, memberArray, 
    record
} = require('../helpers');

module.exports = () => {
    record('MGEF', 'Base Effect', {
        members: [
            req(def('EDID')),
            def('FULL'),
            req(def('DESC')),
            def('ICON'),
            def('MODL'),
            req(subrecord('DATA', struct('Data', [
                format(uint32('Flags'), flags({
                    0: 'Hostile',
                    1: 'Recover',
                    2: 'Detrimental',
                    3: '',
                    4: 'Self',
                    5: 'Touch',
                    6: 'Target',
                    7: 'No Duration',
                    8: 'No Magnitude',
                    9: 'No Area',
                    10: 'FX Persist',
                    11: '',
                    12: 'Gory Visuals',
                    13: 'Display Name Only',
                    14: '',
                    15: 'Radio Broadcast ??',
                    16: '',
                    17: '',
                    18: '',
                    19: 'Use skill',
                    20: 'Use attribute',
                    21: '',
                    22: '',
                    23: '',
                    24: 'Painless',
                    25: 'Spray projectile type (or Fog if Bolt is specified as well)',
                    26: 'Bolt projectile type (or Fog if Spray is specified as well)',
                    27: 'No Hit Effect',
                    28: 'No Death Dispel',
                    29: '????'
                })),
                float('Base cost (Unused)'),
                opts(union('Assoc. Item', 'MGEFFAssocItemDecider', [
                    conflictType('Ignore', formId('Unused')),
                    formId('Assoc. Item'),
                    ckFormId('Assoc. Script', ['SCPT', 'NULL']),
                    ckFormId('Assoc. Item', [
                        'WEAP', 'ARMO', 'NULL'
                    ]),
                    ckFormId('Assoc. Creature', ['CREA'])
                ]), {
                    "afterSet": "MGEFFAssocItemAfterSet"
                }),
                format(int32('Magic School (Unused)'), enumeration({
                    "-1": 'None'
                })),
                format(int32('Resistance Type'), def('ActorValueEnum')),
                uint16('Counter effect count'),
                size(2, bytes('Unused')),
                ckFormId('Light', ['LIGH', 'NULL']),
                float('Projectile speed'),
                ckFormId('Effect Shader', ['EFSH', 'NULL']),
                ckFormId('Object Display Shader', ['EFSH', 'NULL']),
                ckFormId('Effect sound', ['NULL', 'SOUN']),
                ckFormId('Bolt sound', ['NULL', 'SOUN']),
                ckFormId('Hit sound', ['NULL', 'SOUN']),
                ckFormId('Area sound', ['NULL', 'SOUN']),
                float('Constant Effect enchantment factor  (Unused)'),
                float('Constant Effect barter factor (Unused)'),
                opts(format(uint32('Archtype'), def('ArchtypeEnum')), {
                    "afterSet": "MGEFArchtypeAfterSet"
                }),
                def('ActorValue')
            ]))),
            opts(sorted(memberArray('Counter Effects', 
                subrecord('ESCE', ckFormId('Effect', ['MGEF']))
            )), {
                "afterSet": "CounterEffectsAfterSet"
            })
        ]
    })
};