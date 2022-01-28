let {
    flags, def, req, int32, uint32, 
    format, float, struct, subrecord, string, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('LIGH', 'Light', {
        flags: flags({
            12: 'Ignored',
            16: 'Random Anim Start',
            17: 'Unknown 17',
            25: 'Obstacle',
            28: 'Portal-strict'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('MODL'),
            def('KSIZ'),
            def('KWDAs'),
            def('DEST'),
            def('PRPS'),
            def('FULL'),
            def('ICON'),
            def('MICO'),
            req(subrecord('DATA', struct('', [
                int32('Time'),
                uint32('Radius'),
                def('ByteColors', { name: 'Color' }),
                format(uint32('Flags'), flags({
                    0: 'Unknown 0',
                    1: 'Can be Carried',
                    2: 'Unknown 2',
                    3: 'Flicker',
                    4: 'Unknown 4',
                    5: 'Off By Default',
                    6: 'Unknown 6',
                    7: 'Pulse',
                    8: 'Unknown 8',
                    9: 'Unknown 9',
                    10: 'Shadow Spotlight',
                    11: 'Shadow Hemisphere',
                    12: 'Shadow OmniDirectional',
                    13: 'Unknown 13',
                    14: 'NonShadow Spotlight',
                    15: 'Non Specular',
                    16: 'Attenuation Only',
                    17: 'NonShadow Box',
                    18: 'Ignore Roughness',
                    19: 'No Rim Lighting',
                    20: 'Ambient Only',
                    21: 'Unknown 21'
                })),
                float('Falloff Exponent'),
                float('FOV'),
                float('Near Clip'),
                struct('Flicker Effect', [
                    float('Period'),
                    float('Intensity Amplitude'),
                    float('Movement Amplitude')
                ]),
                float('Constant'),
                float('Scalar'),
                float('Exponent'),
                float('God Rays - Near Clip'),
                uint32('Value'),
                float('Weight')
            ]))),
            req(subrecord('FNAM', float('Fade value'))),
            subrecord('NAM0', string('Gobo')),
            subrecord('LNAM', ckFormId('Lens', ['LENS'])),
            subrecord('WGDR', ckFormId('God Rays', ['GDRY'])),
            subrecord('SNAM', ckFormId('Sound', ['SNDR']))
        ]
    })
};