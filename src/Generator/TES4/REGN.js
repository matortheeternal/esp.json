let {
    def, uint8, bytes, size, struct, 
    subrecord, req, ckFormId, uint32, float, 
    array, memberStruct, memberArray, enumeration, format, 
    flags, sortKey, uint16, string, conflictType, 
    sorted, record
} = require('../helpers');

module.exports = () => {
    record('REGN', 'Region', {
        members: [
            def('EDID'),
            def('ICON'),
            req(subrecord('RCLR', struct('Map Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                size(1, bytes('Unused'))
            ]))),
            subrecord('WNAM', ckFormId('Worldspace', ['WRLD'])),
            req(memberArray('Region Areas', 
                memberStruct('Region Area', [
                    subrecord('RPLI', uint32('Edge Fall-off')),
                    subrecord('RPLD', array('Region Point List Data', 
                        struct('Point', [
                            float('X'),
                            float('Y')
                        ])
                    ))
                ])
            )),
            sorted(memberArray('Region Data Entries', 
                sortKey([0], memberStruct('Region Data Entry', [
                    req(subrecord('RDAT', sortKey([0], struct('Data Header', [
                        format(uint32('Type'), enumeration({
                            0: '',
                            1: '',
                            2: 'Objects',
                            3: 'Weather',
                            4: 'Map',
                            5: 'Unknown 5',
                            6: 'Grass',
                            7: 'Sound',
                            8: '',
                            9: ''
                        })),
                        format(uint8('Flags'), flags({
                            0: 'Override'
                        })),
                        uint8('Priority'),
                        size(2, bytes('Unused'))
                    ])))),
                    subrecord('RDOT', array('Objects', 
                        struct('Object', [
                            ckFormId('Object', [
                                'TREE', 'FLOR', 'STAT', 'LTEX'
                            ]),
                            format(uint16('Parent Index'), def('HideFFFF')),
                            size(2, bytes('Unused')),
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
                            size(2, bytes('Unused')),
                            size(4, bytes('Unknown'))
                        ])
                    )),
                    subrecord('RDMP', conflictType('Translate', string('Map Name'))),
                    subrecord('RDGS', sorted(array('Grasses', 
                        sortKey([0], struct('Grass', [
                            ckFormId('Grass', ['GRAS']),
                            size(4, bytes('Unused'))
                        ]))
                    ))),
                    subrecord('RDMD', format(uint32('Music Type'), def('MusicEnum'))),
                    subrecord('RDSD', sorted(array('Sounds', 
                        sortKey([0], struct('Sound', [
                            ckFormId('Sound', ['SOUN']),
                            format(uint32('Flags'), flags({
                                0: 'Pleasant',
                                1: 'Cloudy',
                                2: 'Rainy',
                                3: 'Snowy'
                            })),
                            format(uint32('Chance'), def('ScaledInt4ToStr'))
                        ]))
                    ))),
                    subrecord('RDWT', sorted(array('Weather Types', 
                        sortKey([0], struct('Weather Type', [
                            ckFormId('Weather', ['WTHR']),
                            uint32('Chance')
                        ]))
                    )))
                ]))
            ))
        ]
    })
};