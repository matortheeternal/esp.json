let {
    addDef, float, uint8, struct, bytes, 
    def, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DODT', subrecord('DODT', struct('Decal Data', [
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
        uint8('Flags', {
            "0": "Parallax",
            "1": "Alpha - Blending",
            "2": "Alpha - Testing",
            "3": "No Subtextures"
        }),
        bytes('Unknown', 2),
        def('ByteColors', { name: 'Color' })
    ])));
};