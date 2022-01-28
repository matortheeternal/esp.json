let {
    def, uint8, struct, bytes, size, 
    subrecord, enumeration, uint32, format, flags, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('SPEL', 'Spell', {
        members: [
            def('EDID'),
            subrecord('OBME', struct('Oblivion Magic Extender', [
                uint8('Record Version'),
                struct('OBME Version', [
                    uint8('Beta'),
                    uint8('Minor'),
                    uint8('Major')
                ]),
                size(28, bytes('Unused'))
            ])),
            def('FULL'),
            req(subrecord('SPIT', struct('', [
                format(uint32('Type'), enumeration({
                    0: 'Spell',
                    1: 'Disease',
                    2: 'Power',
                    3: 'Lesser Power',
                    4: 'Ability',
                    5: 'Poison'
                })),
                uint32('Cost'),
                format(uint32('Level'), enumeration({
                    0: 'Novice',
                    1: 'Apprentice',
                    2: 'Journeyman',
                    3: 'Expert',
                    4: 'Master'
                })),
                format(uint8('Flags'), flags({
                    0: 'Manual Spell Cost',
                    1: 'Immune to Silence 1',
                    2: 'Player Start Spell',
                    3: 'Immune to Silence 2',
                    4: 'Area Effect Ignores LOS',
                    5: 'Script Effect Always Applies',
                    6: 'Disallow Spell Absorb/Reflect',
                    7: 'Touch Spell Explodes w/ no Target'
                })),
                size(3, bytes('Unused'))
            ]))),
            def('Effects')
        ]
    })
};