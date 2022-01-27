let {
    req, def, float, empty, conflictType, 
    union, struct, scale, bytes, size, 
    flags, uint8, format, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('IMGS', 'Image Space', {
        members: [
            req(def('EDID')),
            req(subrecord('DNAM', struct('', [
                struct('HDR', [
                    float('Eye Adapt Speed'),
                    float('Blur Radius'),
                    float('Blur Passes'),
                    float('Emissive Mult'),
                    float('Target LUM'),
                    float('Upper LUM Clamp'),
                    float('Bright Scale'),
                    float('Bright Clamp'),
                    float('LUM Ramp No Tex'),
                    float('LUM Ramp Min'),
                    float('LUM Ramp Max'),
                    float('Sunlight Dimmer'),
                    float('Grass Dimmer'),
                    float('Tree Dimmer'),
                    union('Skin Dimmer', 'IMGSSkinDimmerDecider', [
                        float('Skin Dimmer'),
                        conflictType('Ignore', empty('Skin Dimmer'))
                    ])
                ]),
                struct('Bloom', [
                    float('Blur Radius'),
                    float('Alpha Mult Interior'),
                    float('Alpha Mult Exterior')
                ]),
                struct('Get Hit', [
                    float('Blur Radius'),
                    float('Blur Damping Constant'),
                    float('Damping Constant')
                ]),
                struct('Night Eye', [
                    struct('Tint Color', [
                        scale(255, float('Red')),
                        scale(255, float('Green')),
                        scale(255, float('Blue'))
                    ]),
                    float('Brightness')
                ]),
                struct('Cinematic', [
                    float('Saturation'),
                    struct('Contrast', [
                        float('Avg Lum Value'),
                        float('Value')
                    ]),
                    float('Cinematic - Brightness - Value'),
                    struct('Tint', [
                        struct('Color', [
                            scale(255, float('Red')),
                            scale(255, float('Green')),
                            scale(255, float('Blue'))
                        ]),
                        float('Value')
                    ])
                ]),
                size(4, bytes('Unused')),
                size(4, bytes('Unused')),
                size(4, bytes('Unused')),
                size(4, bytes('Unused')),
                format(uint8('Flags'), flags({
                    0: 'Saturation',
                    1: 'Contrast',
                    2: 'Tint',
                    3: 'Brightness'
                })),
                size(3, bytes('Unused'))
            ])))
        ]
    })
};