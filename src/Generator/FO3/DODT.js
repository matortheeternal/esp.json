let {
    addDef, float, uint8, struct, flags, 
    format, bytes, size, subrecord
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
                0: 'Parallax',
                1: 'Alpha - Blending',
                2: 'Alpha - Testing'
            })),
            size(2, bytes('Unused')),
            struct('Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                size(1, bytes('Unused'))
            ])
        ]))
    );
};