let {
    req, def, flags, uint8, format, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('VTYP', 'Voice Type', {
        members: [
            req(def('EDID')),
            subrecord('DNAM', format(uint8('Flags'), flags({
                0: 'Allow Default Dialog',
                1: 'Female'
            })))
        ]
    })
};