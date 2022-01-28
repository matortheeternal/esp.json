let {
    def, string, subrecord, req, uint8, 
    flags, format, ckFormId, float, bytes, 
    size, struct, uint16, record
} = require('../helpers');

module.exports = () => {
    record('WATR', 'Water', {
        members: [
            def('EDID'),
            req(subrecord('TNAM', string('Texture'))),
            req(subrecord('ANAM', uint8('Opacity'))),
            req(subrecord('FNAM', format(uint8('Flags'), flags({
                0: 'Causes Damage',
                1: 'Reflective'
            })))),
            req(subrecord('MNAM', string('Material ID'))),
            subrecord('SNAM', ckFormId('Sound', ['SOUN'])),
            req(subrecord('DATA', struct('', [
                float('Wind Velocity'),
                float('Wind Direction'),
                float('Wave Amplitude'),
                float('Wave Frequency'),
                float('Sun Power'),
                float('Reflectivity Amount'),
                float('Fresnel Amount'),
                float('Scroll X Speed'),
                float('Scroll Y Speed'),
                float('Fog Distance - Near Plane'),
                float('Fog Distance - Far Plane'),
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
                uint8('Texture Blend'),
                size(3, bytes('Unused')),
                float('Rain Simulator - Force'),
                float('Rain Simulator - Velocity'),
                float('Rain Simulator - Falloff'),
                float('Rain Simulator - Dampner'),
                float('Rain Simulator - Starting Size'),
                float('Displacement Simulator - Force'),
                float('Displacement Simulator - Velocity'),
                float('Displacement Simulator - Falloff'),
                float('Displacement Simulator - Dampner'),
                float('Displacement Simulator - Starting Size'),
                uint16('Damage')
            ]))),
            subrecord('GNAM', struct('Related Waters', [
                ckFormId('Daytime', ['WATR', 'NULL']),
                ckFormId('Nighttime', ['WATR', 'NULL']),
                ckFormId('Underwater', ['WATR', 'NULL'])
            ]))
        ]
    })
};