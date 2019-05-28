let {
    def, subrecord, float, uint32, string, 
    struct, multiStruct, arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('LENS', 'Lens Flare', {
        members: [
            def('EDID'),
            subrecord('CNAM', float('Color Influence')),
            subrecord('DNAM', float('Fade Distance Radius Scale')),
            subrecord('LFSP', uint32('Count', null)),
            arrayOfSubrecord('Lens Flare Sprites', undefined)
        ]
    })
};