let {
    flags, def, req, int32, uint32, 
    format, float, scale, struct, subrecord, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('LIGH', 'Light', {
        flags: flags({
            12: 'Ignored',
            16: 'Random Anim Start',
            17: 'Portal-strict',
            25: 'Obstacle'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('MODL'),
            def('DEST'),
            def('FULL'),
            def('ICON'),
            req(subrecord('DATA', struct('', [
                int32('Time'),
                uint32('Radius'),
                def('ByteColors'),
                format(uint32('Flags'), flags({
                    0: 'Dynamic',
                    1: 'Can be Carried',
                    2: 'Negative',
                    3: 'Flicker',
                    4: 'Unknown',
                    5: 'Off By Default',
                    6: 'Flicker Slow',
                    7: 'Pulse',
                    8: 'Pulse Slow',
                    9: 'Spot Light',
                    10: 'Shadow Spotlight',
                    11: 'Shadow Hemisphere',
                    12: 'Shadow Omnidirectional',
                    13: 'Portal-strict'
                })),
                float('Falloff Exponent'),
                float('FOV'),
                float('Near Clip'),
                struct('Flicker Effect', [
                    scale(0.01, float('Period')),
                    float('Intensity Amplitude'),
                    float('Movement Amplitude')
                ]),
                uint32('Value'),
                float('Weight')
            ]))),
            req(subrecord('FNAM', float('Fade value'))),
            subrecord('SNAM', ckFormId('Sound', ['SNDR']))
        ]
    })
};