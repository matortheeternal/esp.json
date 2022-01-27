let {
    req, def, uint8, bytes, size, 
    struct, float, int32, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('LGTM', 'Lighting Template', {
        members: [
            req(def('EDID')),
            req(subrecord('DATA', struct('Lighting', [
                struct('Ambient Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                struct('Directional Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                struct('Fog Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                float('Fog Near'),
                float('Fog Far'),
                int32('Directional Rotation XY'),
                int32('Directional Rotation Z'),
                float('Directional Fade'),
                float('Fog Clip Dist'),
                float('Fog Power')
            ])))
        ]
    })
};