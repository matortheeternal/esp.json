let {
    req, def, ckFormId, subrecord, string, 
    bytes, size, uint8, array, count, 
    struct, float, conflictType, format, enumeration, 
    uint32, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('WTHR', 'Weather', {
        members: [
            req(def('EDID')),
            subrecord('\x00IAD', ckFormId('Sunrise Image Space Modifier', ['IMAD'])),
            subrecord('\x01IAD', ckFormId('Day Image Space Modifier', ['IMAD'])),
            subrecord('\x02IAD', ckFormId('Sunset Image Space Modifier', ['IMAD'])),
            subrecord('\x03IAD', ckFormId('Night Image Space Modifier', ['IMAD'])),
            req(subrecord('DNAM', string('Cloud Textures - Layer 0'))),
            req(subrecord('CNAM', string('Cloud Textures - Layer 1'))),
            req(subrecord('ANAM', string('Cloud Textures - Layer 2'))),
            req(subrecord('BNAM', string('Cloud Textures - Layer 3'))),
            def('MODL'),
            req(subrecord('LNAM', size(4, bytes('Unknown')))),
            req(subrecord('ONAM', count(4, array('Cloud Speed', 
                uint8('Layer')
            )))),
            subrecord('PNAM', count(4, array('Cloud Layer Colors', 
                struct('Layer', [
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
            ))),
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
                struct('Unused', [
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
                struct('Unused', [
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
                float('Day - Near'),
                float('Day - Far'),
                float('Night - Near'),
                float('Night - Far'),
                float('Day - Power'),
                float('Night - Fower')
            ]))),
            req(subrecord('INAM', conflictType('Ignore', size(304, bytes('Unused'))))),
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