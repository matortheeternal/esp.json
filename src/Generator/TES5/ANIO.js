let {
    def, subrecord, cstring, record
} = require('../helpers');

module.exports = () => {
    record('ANIO', 'Animated Object', {
        flags: {
            "9": "Unknown 9"
        },
        members: [
            def('EDID'),
            def('MODL'),
            subrecord('BNAM', cstring('Unload Event'))
        ]
    })
};