let {
    def, float, int32, bytes, size, 
    conflictType, struct, subrecord, req, ckFormId, 
    record
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
                float('Fog Clip Distance'),
                float('Fog Power'),
                conflictType('Ignore', size(32, bytes('Unused'))),
                def('ByteColors', { name: 'Fog Color Far' }),
                float('Fog Max'),
                float('Light Fade Begin'),
                float('Light Fade End'),
                conflictType('Ignore', size(4, bytes('Unused'))),
                float('Near Height Mid'),
                float('Near Height Range'),
                def('ByteColors', { name: 'Fog Color High Near' }),
                def('ByteColors', { name: 'Fog Color High Far' }),
                float('High Density Scale'),
                float('Fog Near Scale'),
                float('Fog Far Scale'),
                float('Fog High Near Scale'),
                float('Fog High Far Scale'),
                float('Far Height Mid'),
                float('Far Height Range')
            ]))),
            subrecord('DALC', def('AmbientColors', { name: undefined })),
            subrecord('WGDR', ckFormId('God Rays', ['GDRY']))
        ]
    })
};