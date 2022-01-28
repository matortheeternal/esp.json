let {
    def, string, subrecord, uint8, bytes, 
    size, struct, req, float, format, 
    ckFormId, enumeration, uint32, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('WTHR', 'Weather', {
        members: [
            def('EDID'),
            subrecord('CNAM', string('Texture Lower Layer')),
            subrecord('DNAM', string('Texture Upper Layer')),
            def('MODL'),
            req(subrecord('NAM0', struct('Colors by Types/Times', [
                struct('Sky-Upper', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Fog', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Clouds-Lower', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Ambient', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Sunlight', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Sun', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Stars', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Sky-Lower', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Horizon', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ]),
                struct('Clouds-Upper', [
                    struct('Sunrise', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Day', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Sunset', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ]),
                    struct('Night', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        size(1, bytes('Unused'))
                    ])
                ])
            ]))),
            req(subrecord('FNAM', struct('Fog Distance', [
                float('Day Near'),
                float('Day Far'),
                float('Night Near'),
                float('Night Far')
            ]))),
            req(subrecord('HNAM', struct('HDR Data', [
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
                float('Tree Dimmer')
            ]))),
            req(subrecord('DATA', struct('', [
                uint8('Wind Speed'),
                uint8('Cloud Speed (Lower)'),
                uint8('Cloud Speed (Upper)'),
                uint8('Trans Delta'),
                uint8('Sun Glare'),
                uint8('Sun Damage'),
                uint8('Precipitation - Begin Fade In'),
                uint8('Precipitation - End Fade Out'),
                uint8('Thunder/Lightning - Begin Fade In'),
                uint8('Thunder/Lightning - End Fade Out'),
                uint8('Thunder/Lightning - Frequency'),
                format(uint8('Weather Classification'), def('WthrDataClassification')),
                struct('Lightning Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue')
                ])
            ]))),
            memberArray('Sounds', 
                subrecord('SNAM', struct('Sound', [
                    ckFormId('Sound', ['SOUN']),
                    format(uint32('Type'), enumeration({
                        0: 'Default',
                        1: 'Precip',
                        2: 'Wind',
                        3: 'Thunder'
                    }))
                ]))
            )
        ]
    })
};