let {
    def, string, subrecord, req, flags, 
    uint8, format, record
} = require('../helpers');

module.exports = () => {
    record('HAIR', 'Hair', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            req(subrecord('ICON', string('Texture'))),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Playable',
                1: 'Not Male',
                2: 'Not Female',
                3: 'Fixed'
            }))))
        ]
    })
};