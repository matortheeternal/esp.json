let {
    flags, def, string, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ANIO', 'Animated Object', {
        flags: flags({
            9: 'Unknown 9',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('MODL'),
            subrecord('BNAM', string('Unload Event'))
        ]
    })
};