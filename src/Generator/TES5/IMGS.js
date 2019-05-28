let {
    def, subrecord, unknown, float, struct, 
    bytes, uint16, req, record
} = require('../helpers');

module.exports = () => {
    record('IMGS', 'Image Space', {
        members: [
            def('EDID'),
            subrecord('ENAM', unknown()),
            subrecord('HNAM', struct('HDR', [
                float('Eye Adapt Speed'),
                float('Bloom Blur Radius'),
                float('Bloom Threshold'),
                float('Bloom Scale'),
                float('Receive Bloom Threshold'),
                float('White'),
                float('Sunlight Scale'),
                float('Sky Scale'),
                float('Eye Adapt Strength')
            ])),
            subrecord('CNAM', struct('Cinematic', [
                float('Saturation'),
                float('Brightness'),
                float('Contrast')
            ])),
            subrecord('TNAM', struct('Tint', [
                float('Amount'),
                def('FloatColors', { name: 'Color' })
            ])),
            req(subrecord('DNAM', struct('Depth of Field', [
                float('Strength'),
                float('Distance'),
                float('Range'),
                bytes('Unknown', 2),
                uint16('Sky / Blur Radius', {
                    "16384": "Radius 0",
                    "16576": "No Sky, Radius 0",
                    "16672": "Radius 1",
                    "16736": "No Sky, Radius 1",
                    "16784": "Radius 2",
                    "16816": "No Sky, Radius 2",
                    "16848": "Radius 3",
                    "16880": "No Sky, Radius 3",
                    "16904": "Radius 4",
                    "16920": "No Sky, Radius 4",
                    "16936": "Radius 5",
                    "16952": "No Sky, Radius 5",
                    "16968": "Radius 6",
                    "16984": "No Sky, Radius 6",
                    "17000": "Radius 7",
                    "17016": "No Sky, Radius 7"
                })
            ])))
        ]
    })
};