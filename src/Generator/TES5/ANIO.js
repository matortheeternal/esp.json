let {
    def, subrecord, string, record
} = require('../helpers');

module.exports = () => {
    record('ANIO', 'Animated Object', {
        flags: {
            "9": "Unknown 9"
        },
        members: [
            def('EDID'),
            def('MODL'),
            subrecord('BNAM', string('Unload Event'))
        ]
    })
};