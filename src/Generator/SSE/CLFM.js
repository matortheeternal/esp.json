let {
    flags, def, req, enumeration, uint32, 
    format, subrecord, record
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
            req(subrecord('FNAM', format(uint32('Playable'), enumeration({
                0: 'False',
                1: 'True'
            }))))
        ]
    })
};