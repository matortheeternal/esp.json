let {
    addDef, flags, uint32, format, float, 
    formId, ckFormId, union, req, opts, 
    def, int32, uint16, bytes, size, 
    struct, subrecord, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('MGEFData', 
        memberStruct('Magic Effect Data', [
            req(subrecord('DATA', struct('Data', [
                format(uint32('Flags'), flags({
                    0: 'Hostile',
                    1: 'Recover',
                    2: 'Detrimental',
                    3: 'Snap to Navmesh',
                    4: 'No Hit Event',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8',
                    8: 'Dispel with Keywords',
                    9: 'No Duration',
                    10: 'No Magnitude',
                    11: 'No Area',
                    12: 'FX Persist',
                    13: 'Unknown 14',
                    14: 'Gory Visuals',
                    15: 'Hide in UI',
                    16: 'Unknown 17',
                    17: 'No Recast',
                    18: 'Unknown 19',
                    19: 'Unknown 20',
                    20: 'Unknown 21',
                    21: 'Power Affects Magnitude',
                    22: 'Power Affects Duration',
                    23: 'Unknown 24',
                    24: 'Unknown 25',
                    25: 'Unknown 26',
                    26: 'Painless',
                    27: 'No Hit Effect',
                    28: 'No Death Dispel',
                    29: 'Unknown 30',
                    30: 'Unknown 31',
                    31: 'Unknown 32'
                })),
                float('Base Cost'),
                opts(req(union('Assoc. Item', 'MGEFAssocItemDecider', [
                    formId('Unused'),
                    ckFormId('Assoc. Item', ['LIGH', 'NULL']),
                    ckFormId('Assoc. Item', [
                        'WEAP', 'ARMO', 'NULL'
                    ]),
                    ckFormId('Assoc. Item', ['NPC_', 'NULL']),
                    ckFormId('Assoc. Item', ['HAZD', 'NULL']),
                    ckFormId('Assoc. Item', ['SPEL', 'NULL']),
                    ckFormId('Assoc. Item', ['RACE', 'NULL']),
                    ckFormId('Assoc. Item', ['ENCH', 'NULL']),
                    ckFormId('Assoc. Item', ['KYWD', 'NULL'])
                ])), {
                    "afterSet": "MGEFAssocItemAfterSet"
                }),
                format(int32('Magic Skill'), def('ActorValueEnum')),
                format(int32('Resist Value'), def('ActorValueEnum')),
                uint16('Counter Effect count'),
                size(2, bytes('Unused')),
                ckFormId('Casting Light', ['LIGH', 'NULL']),
                float('Taper Weight'),
                ckFormId('Hit Shader', ['EFSH', 'NULL']),
                ckFormId('Enchant Shader', ['EFSH', 'NULL']),
                uint32('Minimum Skill Level'),
                struct('Spellmaking', [
                    uint32('Area'),
                    float('Casting Time')
                ]),
                float('Taper Curve'),
                float('Taper Duration'),
                req(float('Second AV Weight')),
                def('MGEFType'),
                def('ActorValue'),
                ckFormId('Projectile', ['PROJ', 'NULL']),
                ckFormId('Explosion', ['EXPL', 'NULL']),
                format(uint32('Casting Type'), def('CastEnum')),
                format(uint32('Delivery'), def('TargetEnum')),
                format(int32('Second Actor Value'), def('ActorValueEnum')),
                ckFormId('Casting Art', ['ARTO', 'NULL']),
                ckFormId('Hit Effect Art', ['ARTO', 'NULL']),
                ckFormId('Impact Data', ['IPDS', 'NULL']),
                float('Skill Usage Multiplier'),
                struct('Dual Casting', [
                    ckFormId('Art', ['DUAL', 'NULL']),
                    float('Scale')
                ]),
                ckFormId('Enchant Art', ['ARTO', 'NULL']),
                formId('Unknown'),
                formId('Unknown'),
                ckFormId('Equip Ability', ['SPEL', 'NULL']),
                ckFormId('Image Space Modifier', ['IMAD', 'NULL']),
                ckFormId('Perk to Apply', ['PERK', 'NULL']),
                format(uint32('Casting Sound Level'), def('SoundLevelEnum')),
                struct('Script Effect AI', [
                    float('Score'),
                    float('Delay Time')
                ])
            ])))
        ])
    );
};