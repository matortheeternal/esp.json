let {
    def, flags, uint8, format, bytes, 
    size, struct, subrecord, enumeration, uint32, 
    div, int16, float, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('SOPM', 'Sound Output Model', {
        members: [
            def('EDID'),
            subrecord('NAM1', struct('Data', [
                format(uint8('Flags'), flags({
                    0: 'Attenuates With Distance',
                    1: 'Allows Rumble',
                    2: 'Applies Doppler',
                    3: 'Applies Distance Delay',
                    4: 'Player Output Model',
                    5: 'Try Play on Controller',
                    6: 'Causes Ducking',
                    7: 'Avoids Ducking'
                })),
                size(2, bytes('Unknown')),
                uint8('Reverb Send %')
            ])),
            subrecord('MNAM', format(uint32('Type'), enumeration({
                0: 'Uses HRTF',
                1: 'Defined Speaker Output'
            }))),
            subrecord('VNAM', format(int16('Static Attenuation'), div(100))),
            subrecord('ONAM', struct('Output Values', [
                struct('Channels', [
                    struct('Channel 0', [
                        uint8('FL'),
                        uint8('FR'),
                        uint8('C'),
                        uint8('LFE'),
                        uint8('RL'),
                        uint8('RR'),
                        uint8('SL'),
                        uint8('SR')
                    ]),
                    struct('Channel 1', [
                        uint8('FL'),
                        uint8('FR'),
                        uint8('C'),
                        uint8('LFE'),
                        uint8('RL'),
                        uint8('RR'),
                        uint8('SL'),
                        uint8('SR')
                    ]),
                    struct('Channel 2? (unused)', [
                        uint8('FL'),
                        uint8('FR'),
                        uint8('C'),
                        uint8('LFE'),
                        uint8('RL'),
                        uint8('RR'),
                        uint8('SL'),
                        uint8('SR')
                    ])
                ])
            ])),
            subrecord('ATTN', struct('Attenuation Values', [
                float('Fade In Distance - Start'),
                float('Fade In Distance - End'),
                float('Fade Out Distance - Start'),
                float('Fade Out Distance - End'),
                struct('Fade In Curve', [
                    uint8('Value 1'),
                    uint8('Value 2'),
                    uint8('Value 3'),
                    uint8('Value 4')
                ]),
                struct('Fade Out Curve', [
                    uint8('Value 1'),
                    uint8('Value 2'),
                    uint8('Value 3'),
                    uint8('Value 4')
                ])
            ])),
            subrecord('ENAM', ckFormId('Effect Chain', ['AECH']))
        ]
    })
};