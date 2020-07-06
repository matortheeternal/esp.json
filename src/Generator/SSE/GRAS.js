let {
    def, req, uint8, bytes, size, 
    uint16, enumeration, uint32, format, float, 
    flags, subrecord, struct, record
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
                size(1, bytes('Unknown')),
                uint16('Units From Water'),
                size(2, bytes('Unknown')),
                format(uint32('Units From Water Type'), enumeration({
                    0: 'Above - At Least',
                    1: 'Above - At Most',
                    2: 'Below - At Least',
                    3: 'Below - At Most',
                    4: 'Either - At Least',
                    5: 'Either - At Most',
                    6: 'Either - At Most Above',
                    7: 'Either - At Most Below'
                })),
                float('Position Range'),
                float('Height Range'),
                float('Color Range'),
                float('Wave Period'),
                format(uint8('Flags'), flags({
                    0: 'Vertex Lighting',
                    1: 'Uniform Scaling',
                    2: 'Fit to Slope'
                })),
                size(3, bytes('Unknown'))
            ])))
        ]
    })
};