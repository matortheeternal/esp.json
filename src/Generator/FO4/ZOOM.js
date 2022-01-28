let {
    def, float, enumeration, uint32, format, 
    ckFormId, struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ZOOM', 'Zoom', {
        members: [
            def('EDID'),
            subrecord('GNAM', struct('Data', [
                float('FOV Mult'),
                format(uint32('Overlay'), enumeration({
                    0: 'Default',
                    1: 'Fine',
                    2: 'Duplex',
                    3: 'German',
                    4: 'Dot',
                    5: 'Mil-Dot',
                    6: 'Circle',
                    7: 'Old Rangefind',
                    8: 'Modern Rangefind',
                    9: 'SVD',
                    10: 'Hand Painted',
                    11: 'Binoculars',
                    12: 'Cross',
                    13: 'Double Zero',
                    14: 'Rangefinder 1',
                    15: 'Rangefinder 2',
                    16: 'Rectangle'
                })),
                ckFormId('Imagespace Modifier', ['IMAD', 'NULL']),
                struct('Camera Offset', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            ]))
        ]
    })
};