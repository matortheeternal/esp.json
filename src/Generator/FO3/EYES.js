let {
    req, def, string, subrecord, flags, 
    uint8, format, record
} = require('../helpers');

module.exports = () => {
    record('EYES', 'Eyes', {
        members: [
            req(def('EDID')),
            req(def('FULL')),
            subrecord('ICON', string('Texture')),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Playable',
                1: 'Not Male',
                2: 'Not Female'
            }))))
        ]
    })
};