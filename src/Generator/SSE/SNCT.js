let {
    def, flags, subrecord, uint32, format, 
    ckFormId, div, uint16, record
} = require('../helpers');

module.exports = () => {
    record('SNCT', 'Sound Category', {
        members: [
            def('EDID'),
            def('FULL'),
            subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Mute When Submerged',
                1: 'Should Appear on Menu'
            }))),
            subrecord('PNAM', ckFormId('Parent', ['SNCT'])),
            subrecord('VNAM', format(uint16('Static Volume Multiplier'), div(65535))),
            subrecord('UNAM', format(uint16('Default Menu Value'), div(65535)))
        ]
    })
};