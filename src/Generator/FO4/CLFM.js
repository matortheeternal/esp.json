let {
    flags, def, uint32, format, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('CLFM', 'Color', {
        flags: flags({
            2: 'Non-Playable',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('FULL'),
            subrecord('CNAM', format(uint32('Color/Index'), def('CLFMColorToStr'))),
            req(subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Playable',
                1: 'Remapping Index',
                2: 'Extended LUT'
            })))),
            def('CTDAs')
        ]
    })
};