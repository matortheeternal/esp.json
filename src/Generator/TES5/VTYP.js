let {
    def, subrecord, uint8, record
} = require('../helpers');

module.exports = () => {
    record('VTYP', 'Voice Type', {
        members: [
            def('EDID'),
            subrecord('DNAM', uint8('Flags', {
                "0": "Allow Default Dialog",
                "1": "Female"
            }))
        ]
    })
};