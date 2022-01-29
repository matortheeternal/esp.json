let {
    flags, def, string, subrecord, unknown, 
    ckFormId, req, bytes, size, conflictType, 
    uint8, format, array, opts, memberStruct, 
    float, struct, uint32, enumeration, memberArray, 
    sorted, record
} = require('../helpers');

module.exports = () => {
    record('WTHR', 'Weather', {
        flags: flags({
            9: 'Unknown 9',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            subrecord('\x300TX', string('Cloud Texture Layer #0')),
            subrecord('\x310TX', string('Cloud Texture Layer #1')),
            subrecord('\x320TX', string('Cloud Texture Layer #2')),
            subrecord('\x330TX', string('Cloud Texture Layer #3')),
            subrecord('\x340TX', string('Cloud Texture Layer #4')),
            subrecord('\x350TX', string('Cloud Texture Layer #5')),
            subrecord('\x360TX', string('Cloud Texture Layer #6')),
            subrecord('\x370TX', string('Cloud Texture Layer #7')),
            subrecord('\x380TX', string('Cloud Texture Layer #8')),
            subrecord('\x390TX', string('Cloud Texture Layer #9')),
            subrecord('\x3A0TX', string('Cloud Texture Layer #10')),
            subrecord('\x3B0TX', string('Cloud Texture Layer #11')),
            subrecord('\x3C0TX', string('Cloud Texture Layer #12')),
            subrecord('\x3D0TX', string('Cloud Texture Layer #13')),
            subrecord('\x3E0TX', string('Cloud Texture Layer #14')),
            subrecord('\x3F0TX', string('Cloud Texture Layer #15')),
            subrecord('\x400TX', string('Cloud Texture Layer #16')),
            subrecord('A0TX', string('Cloud Texture Layer #17')),
            subrecord('B0TX', string('Cloud Texture Layer #18')),
            subrecord('C0TX', string('Cloud Texture Layer #19')),
            subrecord('D0TX', string('Cloud Texture Layer #20')),
            subrecord('E0TX', string('Cloud Texture Layer #21')),
            subrecord('F0TX', string('Cloud Texture Layer #22')),
            subrecord('G0TX', string('Cloud Texture Layer #23')),
            subrecord('H0TX', string('Cloud Texture Layer #24')),
            subrecord('I0TX', string('Cloud Texture Layer #25')),
            subrecord('J0TX', string('Cloud Texture Layer #26')),
            subrecord('K0TX', string('Cloud Texture Layer #27')),
            subrecord('L0TX', string('Cloud Texture Layer #28')),
            subrecord('LNAM', unknown()),
            subrecord('MNAM', ckFormId('Precipitation Type', ['SPGD', 'NULL'])),
            req(subrecord('NNAM', ckFormId('Visual Effect', ['RFCT', 'NULL']))),
            subrecord('ONAM', conflictType('Ignore', size(0, bytes('Unused')))),
            memberStruct('Cloud Speed', [
                opts(subrecord('RNAM', array('Y Speed', 
                    format(uint8('Layer'), def('CloudSpeedToStr'))
                )), {
                    "defFlags": [
                        "notAlignable"
                    ]
                }),
                opts(subrecord('QNAM', array('X Speed', 
                    format(uint8('Layer'), def('CloudSpeedToStr'))
                )), {
                    "defFlags": [
                        "notAlignable"
                    ]
                })
            ]),
            opts(subrecord('PNAM', array('Cloud Colors', 
                def('WeatherColors', { name: 'Layer' })
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            opts(subrecord('JNAM', array('Cloud Alphas', 
                struct('Layer', [
                    float('Sunrise'),
                    float('Day'),
                    float('Sunset'),
                    float('Night'),
                    float('EarlySunrise'),
                    float('LateSunrise'),
                    float('EarlySunset'),
                    float('LateSunset')
                ])
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            req(subrecord('NAM0', struct('Weather Colors', [
                def('WeatherColors', { name: 'Sky-Upper' }),
                def('WeatherColors', { name: 'Fog Near' }),
                def('WeatherColors', { name: 'Unknown' }),
                def('WeatherColors', { name: 'Ambient' }),
                def('WeatherColors', { name: 'Sunlight' }),
                def('WeatherColors', { name: 'Sun' }),
                def('WeatherColors', { name: 'Stars' }),
                def('WeatherColors', { name: 'Sky-Lower' }),
                def('WeatherColors', { name: 'Horizon' }),
                def('WeatherColors', { name: 'Effect Lighting' }),
                def('WeatherColors', { name: 'Cloud LOD Diffuse' }),
                def('WeatherColors', { name: 'Cloud LOD Ambient' }),
                def('WeatherColors', { name: 'Fog Far' }),
                def('WeatherColors', { name: 'Sky Statics' }),
                def('WeatherColors', { name: 'Water Multiplier' }),
                def('WeatherColors', { name: 'Sun Glare' }),
                def('WeatherColors', { name: 'Moon Glare' }),
                def('WeatherColors', { name: 'Fog Near High' }),
                def('WeatherColors', { name: 'Fog Far High' })
            ]))),
            opts(subrecord('NAM4', array('Unknown', 
                float('Unknown')
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            req(subrecord('FNAM', struct('Fog Distance', [
                float('Day - Near'),
                float('Day - Far'),
                float('Night - Near'),
                float('Night - Far'),
                float('Day - Power'),
                float('Night - Power'),
                float('Day - Max'),
                float('Night - Max'),
                float('Day - Near Height Mid'),
                float('Day - Near Height Range'),
                float('Night - Near Height Mid'),
                float('Night - Near Height Range'),
                float('Day - High Density Scale'),
                float('Night - High Density Scale'),
                float('Day - Far Height Mid'),
                float('Day - Far Height Range'),
                float('Night - Far Height Mid'),
                float('Night - Far Height Range')
            ]))),
            req(subrecord('DATA', struct('Data', [
                uint8('Wind Speed'),
                size(2, bytes('Unknown')),
                uint8('Trans Delta'),
                uint8('Sun Glare'),
                uint8('Sun Damage'),
                uint8('Precipitation - Begin Fade In'),
                uint8('Precipitation - End Fade Out'),
                uint8('Thunder/Lightning - Begin Fade In'),
                uint8('Thunder/Lightning - End Fade Out'),
                uint8('Thunder/Lightning - Frequency'),
                format(uint8('Flags'), flags({
                    0: 'Weather - Pleasant',
                    1: 'Weather - Cloudy',
                    2: 'Weather - Rainy',
                    3: 'Weather - Snow',
                    4: 'Sky Statics - Always Visible',
                    5: 'Sky Statics - Follows Sun Position',
                    6: 'Rain Occlusion',
                    7: 'HUD Rain Effects'
                })),
                struct('Lightning Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue')
                ]),
                uint8('Visual Effect - Begin'),
                uint8('Visual Effect - End'),
                uint8('Wind Direction'),
                uint8('Wind Direction Range'),
                uint8('Unknown')
            ]))),
            subrecord('NAM1', format(uint32('Disabled Cloud Layers'), flags({
                0: '0',
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13',
                14: '14',
                15: '15',
                16: '16',
                17: '17',
                18: '18',
                19: '19',
                20: '20',
                21: '21',
                22: '22',
                23: '23',
                24: '24',
                25: '25',
                26: '26',
                27: '27',
                28: '28',
                29: '29',
                30: '30',
                31: '31'
            }))),
            memberArray('Sounds', 
                subrecord('SNAM', struct('Sound', [
                    ckFormId('Sound', ['SNDR', 'NULL']),
                    format(uint32('Type'), enumeration({
                        0: 'Default',
                        1: 'Precipitation',
                        2: 'Wind',
                        3: 'Thunder'
                    }))
                ]))
            ),
            sorted(memberArray('Sky Statics', 
                subrecord('TNAM', ckFormId('Static', ['STAT', 'NULL']))
            )),
            req(subrecord('IMSP', struct('Image Spaces', [
                ckFormId('Sunrise', ['IMGS', 'NULL']),
                ckFormId('Day', ['IMGS', 'NULL']),
                ckFormId('Sunset', ['IMGS', 'NULL']),
                ckFormId('Night', ['IMGS', 'NULL']),
                ckFormId('EarlySunrise', ['IMGS', 'NULL']),
                ckFormId('LateSunrise', ['IMGS', 'NULL']),
                ckFormId('EarlySunset', ['IMGS', 'NULL']),
                ckFormId('LateSunset', ['IMGS', 'NULL'])
            ]))),
            subrecord('WGDR', struct('God Rays', [
                ckFormId('Sunrise', ['GDRY', 'NULL']),
                ckFormId('Day', ['GDRY', 'NULL']),
                ckFormId('Sunset', ['GDRY', 'NULL']),
                ckFormId('Night', ['GDRY', 'NULL']),
                ckFormId('EarlySunrise', ['GDRY', 'NULL']),
                ckFormId('LateSunrise', ['GDRY', 'NULL']),
                ckFormId('EarlySunset', ['GDRY', 'NULL']),
                ckFormId('LateSunset', ['GDRY', 'NULL'])
            ])),
            req(memberStruct('Directional Ambient Lighting Colors', [
                subrecord('DALC', def('AmbientColors', { name: 'Sunrise' })),
                subrecord('DALC', def('AmbientColors', { name: 'Day' })),
                subrecord('DALC', def('AmbientColors', { name: 'Sunset' })),
                subrecord('DALC', def('AmbientColors', { name: 'Night' })),
                subrecord('DALC', def('AmbientColors', { name: 'EarlySunrise' })),
                subrecord('DALC', def('AmbientColors', { name: 'LateSunrise' })),
                subrecord('DALC', def('AmbientColors', { name: 'EarlySunset' })),
                subrecord('DALC', def('AmbientColors', { name: 'LateSunset' }))
            ])),
            memberStruct('Aurora', [
                def('MODL')
            ]),
            subrecord('GNAM', ckFormId('Sun Glare Lens Flare', ['LENS'])),
            subrecord('UNAM', struct('Magic', [
                ckFormId('On Lightning Strike - Spell', ['SPEL', 'NULL']),
                float('On Lightning Strike - Threshold'),
                ckFormId('On Weather Activate - Spell', ['SPEL', 'NULL']),
                float('On Weather Activate - Threshold'),
                size(4, bytes('Unknown')),
                float('Unknown')
            ])),
            subrecord('VNAM', float('Volatility Mult')),
            subrecord('WNAM', float('Visibility Mult'))
        ]
    })
};