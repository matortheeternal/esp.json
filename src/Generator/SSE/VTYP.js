let {
    def, flags, uint8, format, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('VTYP', 'Voice Type', {
        members: [
            def('EDID'),
            req(subrecord('DNAM', format(uint8('Flags'), flags({
                0: 'Allow Default Dialog',
                1: 'Female'
            }))))
        ]
    })
};