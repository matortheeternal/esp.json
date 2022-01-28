let {
    def, bytes, size, conflictType, subrecord, 
    float, struct, req, enumeration, uint16, 
    format, string, record
} = require('../helpers');

module.exports = () => {
    record('IMGS', 'Image Space', {
        members: [
            def('EDID'),
            subrecord('ENAM', conflictType('Ignore', size(0, bytes('Unused')))),
            req(subrecord('HNAM', struct('HDR', [
                float('Eye Adapt Speed'),
                float('Tonemap E'),
                float('Bloom Threshold'),
                float('Bloom Scale'),
                float('Auto Exposure Max'),
                float('Auto Exposure Min'),
                float('Sunlight Scale'),
                float('Sky Scale'),
                float('Middle Gray')
            ]))),
            req(subrecord('CNAM', struct('Cinematic', [
                float('Saturation'),
                float('Brightness'),
                float('Contrast')
            ]))),
            req(subrecord('TNAM', struct('Tint', [
                float('Amount'),
                def('FloatColors', { name: 'Color' })
            ]))),
            req(subrecord('DNAM', struct('Depth of Field', [
                float('Strength'),
                float('Distance'),
                float('Range'),
                conflictType('Ignore', size(2, bytes('Unused'))),
                format(uint16('Sky / Blur Radius'), enumeration({
                    0: 'None',
                    16384: 'Radius 0',
                    16576: 'No Sky, Radius 0',
                    16672: 'Radius 1',
                    16736: 'No Sky, Radius 1',
                    16784: 'Radius 2',
                    16816: 'No Sky, Radius 2',
                    16848: 'Radius 3',
                    16880: 'No Sky, Radius 3',
                    16904: 'Radius 4',
                    16920: 'No Sky, Radius 4',
                    16936: 'Radius 5',
                    16952: 'No Sky, Radius 5',
                    16968: 'Radius 6',
                    16984: 'No Sky, Radius 6',
                    17000: 'Radius 7',
                    17016: 'No Sky, Radius 7'
                })),
                float('Vignette Radius'),
                float('Vignette Strength')
            ]))),
            subrecord('TX00', string('LUT'))
        ]
    })
};