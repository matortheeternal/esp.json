let {
    addDef, float, uint8, struct, flags, 
    format, uint16, def, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DODT', 
        subrecord('DODT', struct('Decal Data', [
            float('Min Width'),
            float('Max Width'),
            float('Min Height'),
            float('Max Height'),
            float('Depth'),
            float('Shininess'),
            struct('Parallax', [
                float('Scale'),
                uint8('Passes')
            ]),
            format(uint8('Flags'), flags({
                0: 'POM Shadows',
                1: 'Alpha - Blending',
                2: 'Alpha - Testing',
                3: 'No Subtextures'
            })),
            uint16('Alpha Threshold?'),
            def('ByteColors', { name: 'Color' })
        ]))
    );
};