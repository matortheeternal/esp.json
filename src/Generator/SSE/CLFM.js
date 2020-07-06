let {
    flags, def, req, enumeration, subrecord, 
    uint32, format, record
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
            req(def('CNAM')),
            subrecord('FNAM', format(uint32('Playable'), enumeration({
                0: 'False',
                1: 'True'
            })))
        ]
    })
};