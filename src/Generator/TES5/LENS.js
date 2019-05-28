let {
    def, subrecord, float, uint32, cstring, 
    format, struct, multiStruct, arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('LENS', 'Lens Flare', {
        members: [
            def('EDID'),
            subrecord('CNAM', float('Color Influence')),
            subrecord('DNAM', float('Fade Distance Radius Scale')),
            subrecord('LFSP', uint32('Count')),
            arrayOfSubrecord('Lens Flare Sprites', multiStruct('Flare', [
                subrecord('DNAM', cstring('Lens Flare Sprite ID')),
                subrecord('FNAM', cstring('Texture')),
                subrecord('LFSD', struct('Lens Flare Data', [
                    def('FloatColors', { name: 'Tint' }),
                    float('Width'),
                    float('Height'),
                    float('Position'),
                    float('Angular Fade'),
                    float('Opacity'),
                    format(uint32('Flags'), {
                        "0": "Rotates",
                        "1": "Shrinks When Occluded"
                    })
                ]))
            ]))
        ]
    })
};