let {
    addDef, record, def, subrecord, zstring
} = require('../helpers');

module.exports = game => {
    addDef('ANIO', record('ANIO', 'Animated Object', {
        flags: {
            9: 'Unknown 9',                                 // 0x00000200
        },
        elements: [
            def('EDID'),
            def('MODL'),
            subrecord('BNAM', zstring('Unload Event')),
        ]
    }));
};