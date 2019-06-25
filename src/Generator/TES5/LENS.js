let {
    def, subrecord, float, uint32, string, 
    flags, format, struct, memberStruct, memberArray, 
    record
} = require('../helpers');

module.exports = () => {
    record('LENS', 'Lens Flare', {
        members: [
            def('EDID'),
            subrecord('CNAM', float('Color Influence')),
            subrecord('DNAM', float('Fade Distance Radius Scale')),
            subrecord('LFSP', uint32('Count')),
            memberArray('Lens Flare Sprites', 
                memberStruct('Flare', [
                    subrecord('DNAM', string('Lens Flare Sprite ID')),
                    subrecord('FNAM', string('Texture')),
                    subrecord('LFSD', struct('Lens Flare Data', [
                        def('FloatColors', { name: 'Tint' }),
                        float('Width'),
                        float('Height'),
                        float('Position'),
                        float('Angular Fade'),
                        float('Opacity'),
                        format(uint32('Flags'), flags({
                            0: 'Rotates',
                            1: 'Shrinks When Occluded'
                        }))
                    ]))
                ])
            )
        ]
    })
};