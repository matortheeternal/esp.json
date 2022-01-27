let {
    req, def, string, subrecord, uint8, 
    flags, format, ckFormId, uint16, float, 
    bytes, size, struct, empty, memberUnion, 
    record
} = require('../helpers');

module.exports = () => {
    record('WATR', 'Water', {
        members: [
            req(def('EDID')),
            def('FULL'),
            req(subrecord('NNAM', string('Noise Map'))),
            req(subrecord('ANAM', uint8('Opacity'))),
            req(subrecord('FNAM', format(uint8('Flags'), flags({
                0: 'Causes Damage',
                1: 'Reflective'
            })))),
            req(subrecord('MNAM', string('Material ID'))),
            subrecord('SNAM', ckFormId('Sound', ['SOUN'])),
            subrecord('XNAM', ckFormId('Actor Effect', ['SPEL'])),
            req(subrecord('DATA', uint16('Damage'))),
            req(memberUnion('Visual Data', [
                req(subrecord('DNAM', struct('Visual Data', [
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Water Properties - Sun Power'),
                    float('Water Properties - Reflectivity Amount'),
                    float('Water Properties - Fresnel Amount'),
                    size(4, bytes('Unused')),
                    float('Fog Properties - Above Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Above Water - Fog Distance - Far Plane'),
                    struct('Shallow Color', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Deep Color', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Reflection Color', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    size(4, bytes('Unused')),
                    float('Rain Simulator - Force'),
                    float('Rain Simulator - Velocity'),
                    float('Rain Simulator - Falloff'),
                    float('Rain Simulator - Dampner'),
                    float('Displacement Simulator - Starting Size'),
                    float('Displacement Simulator - Force'),
                    float('Displacement Simulator - Velocity'),
                    float('Displacement Simulator - Falloff'),
                    float('Displacement Simulator - Dampner'),
                    float('Rain Simulator - Starting Size'),
                    float('Noise Properties - Normals - Noise Scale'),
                    float('Noise Properties - Noise Layer One - Wind Direction'),
                    float('Noise Properties - Noise Layer Two - Wind Direction'),
                    float('Noise Properties - Noise Layer Three - Wind Direction'),
                    float('Noise Properties - Noise Layer One - Wind Speed'),
                    float('Noise Properties - Noise Layer Two - Wind Speed'),
                    float('Noise Properties - Noise Layer Three - Wind Speed'),
                    float('Noise Properties - Normals - Depth Falloff Start'),
                    float('Noise Properties - Normals - Depth Falloff End'),
                    float('Fog Properties - Above Water - Fog Amount'),
                    float('Noise Properties - Normals - UV Scale'),
                    float('Fog Properties - Under Water - Fog Amount'),
                    float('Fog Properties - Under Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Under Water - Fog Distance - Far Plane'),
                    float('Water Properties - Distortion Amount'),
                    float('Water Properties - Shininess'),
                    float('Water Properties - Reflection HDR Multiplier'),
                    float('Water Properties - Light Radius'),
                    float('Water Properties - Light Brightness'),
                    float('Noise Properties - Noise Layer One - UV Scale'),
                    float('Noise Properties - Noise Layer Two - UV Scale'),
                    float('Noise Properties - Noise Layer Three - UV Scale'),
                    float('Noise Properties - Noise Layer One - Amplitude Scale'),
                    float('Noise Properties - Noise Layer Two - Amplitude Scale'),
                    float('Noise Properties - Noise Layer Three - Amplitude Scale')
                ]))),
                req(subrecord('DATA', struct('Visual Data', [
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Unknown'),
                    float('Water Properties - Sun Power'),
                    float('Water Properties - Reflectivity Amount'),
                    float('Water Properties - Fresnel Amount'),
                    size(4, bytes('Unused')),
                    float('Fog Properties - Above Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Above Water - Fog Distance - Far Plane'),
                    struct('Shallow Color', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Deep Color', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Reflection Color', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    size(4, bytes('Unused')),
                    float('Rain Simulator - Force'),
                    float('Rain Simulator - Velocity'),
                    float('Rain Simulator - Falloff'),
                    float('Rain Simulator - Dampner'),
                    float('Displacement Simulator - Starting Size'),
                    float('Displacement Simulator - Force'),
                    float('Displacement Simulator - Velocity'),
                    float('Displacement Simulator - Falloff'),
                    float('Displacement Simulator - Dampner'),
                    float('Rain Simulator - Starting Size'),
                    float('Noise Properties - Normals - Noise Scale'),
                    float('Noise Properties - Noise Layer One - Wind Direction'),
                    float('Noise Properties - Noise Layer Two - Wind Direction'),
                    float('Noise Properties - Noise Layer Three - Wind Direction'),
                    float('Noise Properties - Noise Layer One - Wind Speed'),
                    float('Noise Properties - Noise Layer Two - Wind Speed'),
                    float('Noise Properties - Noise Layer Three - Wind Speed'),
                    float('Noise Properties - Normals - Depth Falloff Start'),
                    float('Noise Properties - Normals - Depth Falloff End'),
                    float('Fog Properties - Above Water - Fog Amount'),
                    float('Noise Properties - Normals - UV Scale'),
                    float('Fog Properties - Under Water - Fog Amount'),
                    float('Fog Properties - Under Water - Fog Distance - Near Plane'),
                    float('Fog Properties - Under Water - Fog Distance - Far Plane'),
                    float('Water Properties - Distortion Amount'),
                    float('Water Properties - Shininess'),
                    float('Water Properties - Reflection HDR Multiplier'),
                    float('Water Properties - Light Radius'),
                    float('Water Properties - Light Brightness'),
                    float('Noise Properties - Noise Layer One - UV Scale'),
                    float('Noise Properties - Noise Layer Two - UV Scale'),
                    float('Noise Properties - Noise Layer Three - UV Scale'),
                    empty('Noise Properties - Noise Layer One - Amplitude Scale'),
                    empty('Noise Properties - Noise Layer Two - Amplitude Scale'),
                    empty('Noise Properties - Noise Layer Three - Amplitude Scale'),
                    uint16('Damage (Old Format)')
                ])))
            ])),
            req(subrecord('GNAM', struct('Related Waters (Unused)', [
                ckFormId('Daytime', ['WATR', 'NULL']),
                ckFormId('Nighttime', ['WATR', 'NULL']),
                ckFormId('Underwater', ['WATR', 'NULL'])
            ])))
        ]
    })
};