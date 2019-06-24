let {
    def, flags, subrecord, uint8, format, 
    record
} = require('../helpers');

module.exports = () => {
    record('VTYP', 'Voice Type', {
        members: [
            def('EDID'),
            subrecord('DNAM', format(uint8('Flags'), flags({
                0: 'Allow Default Dialog',
                1: 'Female'
            })))
        ]
    })
};