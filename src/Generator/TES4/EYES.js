let {
    def, string, subrecord, req, flags, 
    uint8, format, record
} = require('../helpers');

module.exports = () => {
    record('EYES', 'Eyes', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('ICON', string('Texture'))),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Playable'
            }))))
        ]
    })
};