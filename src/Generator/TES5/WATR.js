let {
    def, subrecord, cstring, req, arrayOfSubrecord, 
    uint8, IsSSE, format, bytes, ckFormId, 
    uint16, float, struct, record
} = require('../helpers');

module.exports = game => {
    record('WATR', 'Water', {
        members: [
            def('EDID'),
            def('FULL'),
            arrayOfSubrecord('Unused', 
                req(subrecord('NNAM', cstring('Noise Map')))
            ),
            subrecord('ANAM', uint8('Opacity')),
            subrecord('FNAM', format(uint8('Flags'), {
                0: 'Causes Damage',
                1: 'Unknown 1',
                2: 'Unknown 2',
                3: IsSSE(game, ['Enable Flowmap', 'Unknown 3']),
                4: IsSSE(game, ['Blend Normals', 'Unknown 4']),
                5: 'Unknown 5',
                6: 'Unknown 6',
                7: 'Unknown 7'
            })),
            subrecord('MNAM', bytes('Unused')),
            subrecord('TNAM', ckFormId('Material', ['MATT'])),
            subrecord('SNAM', ckFormId('Open Sound', ['SNDR', 'NULL'])),
            subrecord('XNAM', ckFormId('Spell', ['SPEL'])),
            subrecord('INAM', ckFormId('Image Space', ['IMGS'])),
            subrecord('DATA', uint16('Damage Per Second')),
            IsSSE(game, [
                req(subrecord('DNAM', struct('Visual Data', [
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Specular Properties - Sun Specular Power'),
                    float('Water Properties - Reflectivity Amount'),
                    float('Water Properties - Fresnel Amount'),
                    bytes('Unknown', 4),
                    float('Fog Properties - Above Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Above Water - Fog Distance - Far Plane'),
                    def('ByteColors', { name: 'Shallow Color' }),
                    def('ByteColors', { name: 'Deep Color' }),
                    def('ByteColors', { name: 'Reflection Color' }),
                    bytes('Unknown', 4),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Displacement Simulator - Starting Size'),
                    float('Displacement Simulator - Force'),
                    float('Displacement Simulator - Velocity'),
                    float('Displacement Simulator - Falloff'),
                    float('Displacement Simulator - Dampner'),
                    float('Unknown'),
                    float('Noise Properties - Noise Falloff'),
                    float('Noise Properties - Layer One - Wind Direction'),
                    float('Noise Properties - Layer Two - Wind Direction'),
                    float('Noise Properties - Layer Three - Wind Direction'),
                    float('Noise Properties - Layer One - Wind Speed'),
                    float('Noise Properties - Layer Two - Wind Speed'),
                    float('Noise Properties - Layer Three - Wind Speed'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Fog Properties - Above Water - Fog Amount'),
                    float('Unknown'),
                    float('Fog Properties - Under Water - Fog Amount'),
                    float('Fog Properties - Under Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Under Water - Fog Distance - Far Plane'),
                    float('Water Properties - Refraction Magnitude'),
                    float('Specular Properties - Specular Power'),
                    float('Unknown'),
                    float('Specular Properties - Specular Radius'),
                    float('Specular Properties - Specular Brightness'),
                    float('Noise Properties - Layer One - UV Scale'),
                    float('Noise Properties - Layer Two - UV Scale'),
                    float('Noise Properties - Layer Three - UV Scale'),
                    float('Noise Properties - Layer One - Amplitude Scale'),
                    float('Noise Properties - Layer Two - Amplitude Scale'),
                    float('Noise Properties - Layer Three - Amplitude Scale'),
                    float('Water Properties - Reflection Magnitude'),
                    float('Specular Properties - Sun Sparkle Magnitude'),
                    float('Specular Properties - Sun Specular Magnitude'),
                    float('Depth Properties - Reflections'),
                    float('Depth Properties - Refraction'),
                    float('Depth Properties - Normals'),
                    float('Depth Properties - Specular Lighting'),
                    float('Specular Properties - Sun Sparkle Power'),
                    float('Noise Properties - Flowmap Scale')
                ]))),
                subrecord('DNAM', struct('Visual Data', [
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Specular Properties - Sun Specular Power'),
                    float('Water Properties - Reflectivity Amount'),
                    float('Water Properties - Fresnel Amount'),
                    bytes('Unknown', 4),
                    float('Fog Properties - Above Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Above Water - Fog Distance - Far Plane'),
                    def('ByteColors', { name: 'Shallow Color' }),
                    def('ByteColors', { name: 'Deep Color' }),
                    def('ByteColors', { name: 'Reflection Color' }),
                    bytes('Unknown', 4),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Displacement Simulator - Starting Size'),
                    float('Displacement Simulator - Force'),
                    float('Displacement Simulator - Velocity'),
                    float('Displacement Simulator - Falloff'),
                    float('Displacement Simulator - Dampner'),
                    float('Unknown'),
                    float('Noise Properties - Noise Falloff'),
                    float('Noise Properties - Layer One - Wind Direction'),
                    float('Noise Properties - Layer Two - Wind Direction'),
                    float('Noise Properties - Layer Three - Wind Direction'),
                    float('Noise Properties - Layer One - Wind Speed'),
                    float('Noise Properties - Layer Two - Wind Speed'),
                    float('Noise Properties - Layer Three - Wind Speed'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Fog Properties - Above Water - Fog Amount'),
                    float('Unknown'),
                    float('Fog Properties - Under Water - Fog Amount'),
                    float('Fog Properties - Under Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Under Water - Fog Distance - Far Plane'),
                    float('Water Properties - Refraction Magnitude'),
                    float('Specular Properties - Specular Power'),
                    float('Unknown'),
                    float('Specular Properties - Specular Radius'),
                    float('Specular Properties - Specular Brightness'),
                    float('Noise Properties - Layer One - UV Scale'),
                    float('Noise Properties - Layer Two - UV Scale'),
                    float('Noise Properties - Layer Three - UV Scale'),
                    float('Noise Properties - Layer One - Amplitude Scale'),
                    float('Noise Properties - Layer Two - Amplitude Scale'),
                    float('Noise Properties - Layer Three - Amplitude Scale'),
                    float('Water Properties - Reflection Magnitude'),
                    float('Specular Properties - Sun Sparkle Magnitude'),
                    float('Specular Properties - Sun Specular Magnitude'),
                    float('Depth Properties - Reflections'),
                    float('Depth Properties - Refraction'),
                    float('Depth Properties - Normals'),
                    float('Depth Properties - Specular Lighting'),
                    float('Specular Properties - Sun Sparkle Power')
                ]))
            ]),
            subrecord('GNAM', bytes('Unused')),
            req(subrecord('NAM0', struct('Linear Velocity', [
                float('X'),
                float('Y'),
                float('Z')
            ]))),
            req(subrecord('NAM1', struct('Angular Velocity', [
                float('X'),
                float('Y'),
                float('Z')
            ]))),
            req(subrecord('NAM2', cstring('Noise Layer One - Noise Texture'))),
            req(subrecord('NAM3', cstring('Noise Layer Two - Noise Texture'))),
            req(subrecord('NAM4', cstring('Noise Layer Three - Noise Texture'))),
            req(subrecord('NAM5', cstring('Flow Normals - Noise Texture')))
        ]
    })
};