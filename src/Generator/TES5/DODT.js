let {
    addDef, float, uint8, struct, format, 
    bytes, size, def, subrecord
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
            format(uint8('Flags'), {
                0: 'Parallax',
                1: 'Alpha - Blending',
                2: 'Alpha - Testing',
                3: 'No Subtextures'
            }),
            size(2, bytes('Unknown')),
            def('ByteColors', { name: 'Color' })
        ]))
    );
};