let {
    mgefCode, subrecord, uint8, struct, def, 
    format, bytes, size, string, flags, 
    uint32, float, ckFormId, int32, union, 
    uint16, req, sorted, array, opts, 
    record
} = require('../helpers');

module.exports = () => {
    record('MGEF', 'Magic Effect', {
        members: [
            subrecord('EDID', mgefCode('Magic Effect Code')),
            subrecord('OBME', struct('Oblivion Magic Extender', [
                uint8('Record Version'),
                struct('OBME Version', [
                    uint8('Beta'),
                    uint8('Minor'),
                    uint8('Major')
                ]),
                format(uint8('Param A Info'), def('OBMEResolutionInfo')),
                format(uint8('Param B Info'), def('OBMEResolutionInfo')),
                size(2, bytes('Unused')),
                size(4, string('Handler')),
                format(uint32('Flag Overrides'), flags({
                    0: '',
                    1: '',
                    2: 'ParamFlagA',
                    3: 'Beneficial',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: '',
                    9: '',
                    10: '',
                    11: '',
                    12: '',
                    13: '',
                    14: '',
                    15: '',
                    16: 'ParamFlagB',
                    17: 'Magnitude Is Range',
                    18: 'Atomic Resistance',
                    19: 'ParamFlagC',
                    20: 'ParamFlagD',
                    21: '',
                    22: '',
                    23: '',
                    24: '',
                    25: '',
                    26: '',
                    27: '',
                    28: '',
                    29: '',
                    30: 'Hidden'
                })),
                size(4, bytes('ParamB')),
                size(28, bytes('Unused'))
            ])),
            subrecord('EDDX', string('EditorID')),
            def('FULL'),
            def('DESC'),
            def('ICON'),
            def('MODL'),
            req(subrecord('DATA', struct('Data', [
                format(uint32('Flags'), flags({
                    0: 'Hostile',
                    1: 'Recover',
                    2: 'Detrimental',
                    3: 'Magnitude %',
                    4: 'Self',
                    5: 'Touch',
                    6: 'Target',
                    7: 'No duration',
                    8: 'No magnitude',
                    9: 'No area',
                    10: 'FX persist',
                    11: 'Spellmaking',
                    12: 'Enchanting',
                    13: 'No Ingredient',
                    14: 'Unknown 14',
                    15: 'Unknown 15',
                    16: 'Use weapon',
                    17: 'Use armor',
                    18: 'Use creature',
                    19: 'Use skill',
                    20: 'Use attribute',
                    21: 'Unknown 21',
                    22: 'Unknown 22',
                    23: 'Unknown 23',
                    24: 'Use actor value',
                    25: 'Spray projectile type (or Fog if Bolt is specified as well)',
                    26: 'Bolt projectile type',
                    27: 'No hit effect',
                    28: 'Unknown 28',
                    29: 'Unknown 29',
                    30: 'Unknown 30',
                    31: 'Unknown 31'
                })),
                float('Base cost'),
                union('Assoc. Item', 'MGEFFAssocItemDecider', [
                    ckFormId('Unused', ['NULL']),
                    ckFormId('Assoc. Weapon', ['WEAP']),
                    ckFormId('Assoc. Armor', ['ARMO', 'NULL']),
                    ckFormId('Assoc. Creature', [
                        'CREA', 'LVLC', 'NPC_'
                    ]),
                    format(int32('Assoc. Actor Value'), def('ActorValueEnum'))
                ]),
                format(int32('Magic School'), def('MagicSchoolEnum')),
                format(int32('Resist value'), def('ActorValueEnum')),
                uint16('Counter Effect Count'),
                size(2, bytes('Unused')),
                ckFormId('Light', ['LIGH', 'NULL']),
                float('Projectile speed'),
                ckFormId('Effect Shader', ['EFSH', 'NULL']),
                ckFormId('Enchant effect', ['EFSH', 'NULL']),
                ckFormId('Casting sound', ['NULL', 'SOUN']),
                ckFormId('Bolt sound', ['NULL', 'SOUN']),
                ckFormId('Hit sound', ['NULL', 'SOUN']),
                ckFormId('Area sound', ['NULL', 'SOUN']),
                float('Constant Effect enchantment factor'),
                float('Constant Effect barter factor')
            ]))),
            opts(subrecord('ESCE', sorted(array('Counter Effects', 
                size(4, mgefCode('Counter Effect Code'))
            ))), {
                "afterSet": "CounterEffectsAfterSet"
            })
        ]
    })
};