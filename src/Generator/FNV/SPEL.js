let {
    req, def, enumeration, uint32, format, 
    flags, uint8, bytes, size, struct, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('SPEL', 'Actor Effect', {
        members: [
            req(def('EDID')),
            def('FULL'),
            req(subrecord('SPIT', struct('', [
                format(uint32('Type'), enumeration({
                    0: 'Actor Effect',
                    1: 'Disease',
                    2: 'Power',
                    3: 'Lesser Power',
                    4: 'Ability',
                    5: 'Poison',
                    6: '',
                    7: '',
                    8: '',
                    9: '',
                    10: 'Addiction'
                })),
                uint32('Cost (Unused)'),
                format(uint32('Level (Unused)'), enumeration({
                    0: 'Unused'
                })),
                format(uint8('Flags'), flags({
                    0: 'No Auto-Calc',
                    1: 'Immune to Silence 1?',
                    2: 'PC Start Effect',
                    3: 'Immune to Silence 2?',
                    4: 'Area Effect Ignores LOS',
                    5: 'Script Effect Always Applies',
                    6: 'Disable Absorb/Reflect',
                    7: 'Force Touch Explode'
                })),
                size(3, bytes('Unused'))
            ]))),
            req(def('Effects'))
        ]
    })
};