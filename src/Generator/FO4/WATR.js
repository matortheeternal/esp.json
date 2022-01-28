let {
    def, uint8, subrecord, flags, format, 
    req, ckFormId, bytes, size, float, 
    struct, string, record
} = require('../helpers');

module.exports = () => {
    record('WATR', 'Water', {
        members: [
            def('EDID'),
            def('FULL'),
            subrecord('ANAM', uint8('Opacity (unused)')),
            req(subrecord('FNAM', format(uint8('Flags'), flags({
                0: 'Dangerous',
                1: 'Unknown 1',
                2: 'Directional Sound'
            })))),
            subrecord('TNAM', ckFormId('Material (unused)', ['MATT'])),
            subrecord('SNAM', ckFormId('Open Sound', ['SNDR', 'NULL'])),
            subrecord('XNAM', ckFormId('Consume Spell', ['SPEL'])),
            subrecord('YNAM', ckFormId('Contact Spell', ['SPEL'])),
            subrecord('INAM', ckFormId('Image Space', ['IMGS'])),
            subrecord('DATA', size(0, bytes('Unused'))),
            req(subrecord('DNAM', struct('Visual Data', [
                struct('Fog Properties', [
                    float('Depth Amount'),
                    def('ByteColors', { name: 'Shallow Color' }),
                    def('ByteColors', { name: 'Deep Color' }),
                    float('Color Shallow Range'),
                    float('Color Deep Range'),
                    float('Shallow Alpha'),
                    float('Deep Alpha'),
                    float('Alpha Shallow Range'),
                    float('Alpha Deep Range'),
                    def('ByteColors', { name: 'Underwater Color' }),
                    float('Underwater Fog Amount'),
                    float('Underwater Near Fog'),
                    float('Underwater Far Fog')
                ]),
                struct('Physical Properties', [
                    float('Normal Magnitude'),
                    float('Shallow Normal Falloff'),
                    float('Deep Normal Falloff'),
                    float('Reflectivity Amount'),
                    float('Fresnel Amount'),
                    float('Surface Effect Falloff'),
                    struct('Displacement Simulator', [
                        float('Force'),
                        float('Velocity'),
                        float('Falloff'),
                        float('Dampener'),
                        float('Starting Size')
                    ]),
                    def('ByteColors', { name: 'Reflection Color' })
                ]),
                struct('Specular Properties', [
                    float('Sun Specular Power'),
                    float('Sun Specular Magnitude'),
                    float('Sun Sparkle Power'),
                    float('Sun Sparkle Magnitude'),
                    float('Interior Specular Radius'),
                    float('Interior Specular Brightness'),
                    float('Interior Specular Power')
                ]),
                struct('Noise Properties', [
                    float('Layer 1 - Wind Direction'),
                    float('Layer 2 - Wind Direction'),
                    float('Layer 3 - Wind Direction'),
                    float('Layer 1 - Wind Speed'),
                    float('Layer 2 - Wind Speed'),
                    float('Layer 3 - Wind Speed'),
                    float('Layer 1 - Amplitude Scale'),
                    float('Layer 2 - Amplitude Scale'),
                    float('Layer 3 - Amplitude Scale'),
                    float('Layer 1 - UV Scale'),
                    float('Layer 2 - UV Scale'),
                    float('Layer 3 - UV Scale'),
                    float('Layer 1 - Noise Falloff'),
                    float('Layer 2 - Noise Falloff'),
                    float('Layer 3 - Noise Falloff')
                ]),
                struct('Silt Properties', [
                    float('Silt Amount'),
                    def('ByteColors', { name: 'Light Color' }),
                    def('ByteColors', { name: 'Dark Color' })
                ]),
                format(uint8('Screen Space Reflections'), def('BoolEnum'))
            ]))),
            subrecord('GNAM', size(0, bytes('Unused'))),
            subrecord('NAM0', struct('Linear Velocity', [
                float('X'),
                float('Y'),
                float('Z')
            ])),
            subrecord('NAM1', struct('Angular Velocity', [
                float('X'),
                float('Y'),
                float('Z')
            ])),
            subrecord('NAM2', string('Layer 1 Noise Texture')),
            subrecord('NAM3', string('Layer 2 Noise Texture')),
            subrecord('NAM4', string('Layer 3 Noise Texture'))
        ]
    })
};