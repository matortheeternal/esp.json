let {
    flags, def, uint8, bytes, size, 
    subrecord, struct, req, ckFormId, uint32, 
    float, array, multiStruct, arrayOfSubrecord, enumeration, 
    format, sortKey, localized, string, uint16, 
    record
} = require('../helpers');

module.exports = () => {
    record('REGN', 'Region', {
        flags: flags({
            6: 'Border Region'
        }),
        members: [
            def('EDID'),
            req(subrecord('RCLR', struct('Map Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                size(1, bytes('Unknown'))
            ]))),
            subrecord('WNAM', ckFormId('Worldspace', ['WRLD'])),
            arrayOfSubrecord('Region Areas', 
                multiStruct('Region Area', [
                    subrecord('RPLI', uint32('Edge Fall-off')),
                    subrecord('RPLD', array('Region Point List Data', 
                        struct('Point', [
                            float('X'),
                            float('Y')
                        ])
                    ))
                ])
            ),
            arrayOfSubrecord('Region Data Entries', 
                sortKey([0], multiStruct('Region Data Entry', [
                    subrecord('RDAT', sortKey([0], struct('Data Header', [
                        format(uint32('Type'), enumeration({
                            0: 'Unknown 0',
                            1: 'Unknown 1',
                            2: 'Objects',
                            3: 'Weather',
                            4: 'Map',
                            5: 'Land',
                            6: 'Grass',
                            7: 'Sound',
                            8: 'Imposter',
                            9: 'Unknown 10',
                            10: 'Unknown 11',
                            11: 'Unknown 12',
                            12: 'Unknown 13',
                            13: 'Unknown 14',
                            14: 'Unknown 15',
                            15: 'Unknown 16'
                        })),
                        format(uint8('Flags'), flags({
                            0: 'Override'
                        })),
                        uint8('Priority'),
                        bytes('Unknown')
                    ]))),
                    def('ICON'),
                    req(subrecord('RDMO', ckFormId('Music', ['MUSC']))),
                    subrecord('RDSA', array('Sounds', 
                        sortKey([0], struct('Sound', [
                            ckFormId('Sound', ['SNDR', 'NULL']),
                            format(uint32('Flags'), flags({
                                0: 'Pleasant',
                                1: 'Cloudy',
                                2: 'Rainy',
                                3: 'Snowy'
                            })),
                            float('Chance')
                        ]))
                    )),
                    req(subrecord('RDMP', localized(string('Map Name')))),
                    subrecord('RDOT', array('Objects', 
                        struct('Object', [
                            ckFormId('Object', [
                                'TREE',    'FLOR',    'STAT',    'LTEX',    'MSTT'
                            ]),
                            format(uint16('Parent Index'), def('HideFFFF')),
                            size(2, bytes('Unknown')),
                            float('Density'),
                            uint8('Clustering'),
                            uint8('Min Slope'),
                            uint8('Max Slope'),
                            format(uint8('Flags'), flags({
                                0: 'Conform to slope',
                                1: 'Paint Vertices',
                                2: 'Size Variance +/-',
                                3: 'X +/-',
                                4: 'Y +/-',
                                5: 'Z +/-',
                                6: 'Tree',
                                7: 'Huge Rock'
                            })),
                            uint16('Radius wrt Parent'),
                            uint16('Radius'),
                            float('Min Height'),
                            float('Max Height'),
                            float('Sink'),
                            float('Sink Variance'),
                            float('Size Variance'),
                            struct('Angle Variance', [
                                uint16('X'),
                                uint16('Y'),
                                uint16('Z')
                            ]),
                            size(2, bytes('Unknown')),
                            size(4, bytes('Unknown'))
                        ])
                    )),
                    subrecord('RDGS', array('Grasses', 
                        sortKey([0], struct('Grass', [
                            ckFormId('Grass', ['GRAS']),
                            size(4, bytes('Unknown'))
                        ]))
                    )),
                    subrecord('RDWT', array('Weather Types', 
                        sortKey([0], struct('Weather Type', [
                            ckFormId('Weather', ['WTHR']),
                            uint32('Chance'),
                            ckFormId('Global', ['GLOB', 'NULL'])
                        ]))
                    ))
                ]))
            )
        ]
    })
};