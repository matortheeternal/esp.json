let {
    addDef, enumeration, uint8, format, def, 
    uint32, struct, bytes, size, subrecord, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('AIDT', 
        req(subrecord('AIDT', struct('AI Data', [
            format(uint8('Aggression'), enumeration({
                0: 'Unaggressive',
                1: 'Aggressive',
                2: 'Very Aggressive',
                3: 'Frenzied'
            })),
            format(uint8('Confidence'), enumeration({
                0: 'Cowardly',
                1: 'Cautious',
                2: 'Average',
                3: 'Brave',
                4: 'Foolhardy'
            })),
            uint8('Energy Level'),
            format(uint8('Responsibility'), enumeration({
                0: 'Any crime',
                1: 'Violence against enemies',
                2: 'Property crime only',
                3: 'No crime'
            })),
            format(uint8('Mood'), enumeration({
                0: 'Neutral',
                1: 'Angry',
                2: 'Fear',
                3: 'Happy',
                4: 'Sad',
                5: 'Surprised',
                6: 'Puzzled',
                7: 'Disgusted'
            })),
            format(uint8('Assistance'), enumeration({
                0: 'Helps Nobody',
                1: 'Helps Allies',
                2: 'Helps Friends and Allies'
            })),
            struct('Aggro', [
                format(uint8('Aggro Radius Behavior'), def('BoolEnum')),
                uint8('Unknown'),
                uint32('Warn'),
                uint32('Warn/Attack'),
                uint32('Attack')
            ]),
            size(4, bytes('Unknown'))
        ])))
    );
};