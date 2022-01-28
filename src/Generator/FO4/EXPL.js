let {
    def, req, ckFormId, subrecord, formId, 
    float, bytes, size, union, flags, 
    uint32, format, enumeration, struct, record
} = require('../helpers');

module.exports = () => {
    record('EXPL', 'Explosion', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('EITM'),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD'])),
            req(subrecord('DATA', struct('Data', [
                ckFormId('Light', ['LIGH', 'NULL']),
                ckFormId('Sound 1', ['SNDR', 'NULL']),
                ckFormId('Sound 2', ['SNDR', 'NULL']),
                ckFormId('Impact Data Set', ['IPDS', 'NULL']),
                formId('Placed Object'),
                ckFormId('Spawn Projectile', ['PROJ', 'NULL']),
                float('Force'),
                float('Damage'),
                float('Inner Radius'),
                float('Outer Radius'),
                float('IS Radius'),
                union('Vertical Offset Mult', 'DeciderFormVersion99', [
                    size(4, bytes('Unknown')),
                    float('Vertical Offset Mult')
                ]),
                format(uint32('Flags'), flags({
                    0: 'Unknown 0',
                    1: 'Always Uses World Orientation',
                    2: 'Knock Down - Always',
                    3: 'Knock Down - By Formula',
                    4: 'Ignore LOS Check',
                    5: 'Push Explosion Source Ref Only',
                    6: 'Ignore Image Space Swap',
                    7: 'Chain',
                    8: 'No Controller Vibration',
                    9: 'Placed Object Persists',
                    10: 'Skip Underwater Tests'
                })),
                format(uint32('Sound Level'), def('SoundLevelEnum')),
                float('Placed Object AutoFade Delay'),
                format(uint32('Stagger'), enumeration({
                    0: 'None',
                    1: 'Small',
                    2: 'Medium',
                    3: 'Large',
                    4: 'Extra Large'
                })),
                struct('Spawn', [
                    float('X'),
                    float('Y'),
                    float('Z'),
                    float('Spread Degrees'),
                    uint32('Count')
                ])
            ])))
        ]
    })
};