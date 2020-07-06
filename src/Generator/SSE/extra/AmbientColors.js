let {
    addDef, def, struct, float
} = require('../../helpers');

module.exports = () => {
    addDef('AmbientColors',
        struct('Directional Ambient Lighting Colors', [
            struct('Directional', [
                def('ByteColors', { name: 'X+' }),
                def('ByteColors', { name: 'X-' }),
                def('ByteColors', { name: 'Y+' }),
                def('ByteColors', { name: 'Y-' }),
                def('ByteColors', { name: 'Z+' }),
                def('ByteColors', { name: 'Z-' })
            ]),
            def('ByteColors', { name: 'Specular' }),
            float('Scale')
        ])
    );
};
