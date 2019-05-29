let {
    def, req, subrecord, cstring, uint8, 
    format, record
} = require('../helpers');

module.exports = () => {
    record('EYES', 'Eyes', {
        flags: {
            2: 'Non-Playable'
        },
        members: [
            def('EDID'),
            req(def('FULL')),
            req(subrecord('ICON', cstring('Texture'))),
            subrecord('DATA', format(uint8('Flags'), {
                0: 'Playable',
                1: 'Not Male',
                2: 'Not Female',
                3: 'Unknown 4',
                4: 'Unknown 5',
                5: 'Unknown 6',
                6: 'Unknown 7',
                7: 'Unknown 8'
            }))
        ]
    })
};