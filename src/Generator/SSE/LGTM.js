let {
    def, float, int32, struct, bytes, 
    size, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('LGTM', 'Lighting Template', {
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('Lighting', [
                def('ByteColors', { name: 'Ambient Color' }),
                def('ByteColors', { name: 'Directional Color' }),
                def('ByteColors', { name: 'Fog Color Near' }),
                float('Fog Near'),
                float('Fog Far'),
                int32('Directional Rotation XY'),
                int32('Directional Rotation Z'),
                float('Directional Fade'),
                float('Fog Clip Dist'),
                float('Fog Power'),
                def('AmbientColors', { name: 'Ambient Colors' }),
                def('ByteColors', { name: 'Fog Color Far' }),
                float('Fog Max'),
                struct('Light Fade Distances', [
                    float('Start'),
                    float('End')
                ]),
                size(4, bytes('Unknown'))
            ]))),
            subrecord('DALC', def('AmbientColors', { name: undefined }))
        ]
    })
};