let {
    def, subrecord, uint32, ckFormId, div, 
    uint16, record
} = require('../helpers');

module.exports = () => {
    record('SNCT', 'Sound Category', {
        members: [
            def('EDID'),
            def('FULL'),
            subrecord('FNAM', uint32('Flags', {
                "0": "Mute When Submerged",
                "1": "Should Appear on Menu"
            })),
            subrecord('PNAM', ckFormId('Parent', ['SNCT'])),
            subrecord('VNAM', uint16('Static Volume Multiplier', div(65535))),
            subrecord('UNAM', uint16('Default Menu Value', div(65535)))
        ]
    })
};