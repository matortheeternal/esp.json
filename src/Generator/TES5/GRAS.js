let {
    def, req, uint8, bytes, uint16, 
    uint32, format, float, subrecord, struct, 
    record
} = require('../helpers');

module.exports = () => {
    record('GRAS', 'Grass', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('MODL'),
            req(subrecord('DATA', struct('', [
                uint8('Density'),
                uint8('Min Slope'),
                uint8('Max Slope'),
                bytes('Unknown', 1),
                uint16('Units From Water'),
                bytes('Unknown', 2),
                format(uint32('Units From Water Type'), {
                    0: 'Above - At Least',
                    1: 'Above - At Most',
                    2: 'Below - At Least',
                    3: 'Below - At Most',
                    4: 'Either - At Least',
                    5: 'Either - At Most',
                    6: 'Either - At Most Above',
                    7: 'Either - At Most Below'
                }),
                float('Position Range'),
                float('Height Range'),
                float('Color Range'),
                float('Wave Period'),
                format(uint8('Flags'), {
                    0: 'Vertex Lighting',
                    1: 'Uniform Scaling',
                    2: 'Fit to Slope'
                }),
                bytes('Unknown', 3)
            ])))
        ]
    })
};