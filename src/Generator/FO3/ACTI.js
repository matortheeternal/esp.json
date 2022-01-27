let {
    req, def, ckFormId, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ACTI', 'Activator', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            def('DEST'),
            subrecord('SNAM', ckFormId('Sound - Looping', ['SOUN'])),
            subrecord('VNAM', ckFormId('Sound - Activation', ['SOUN'])),
            subrecord('RNAM', ckFormId('Radio Station', ['TACT'])),
            subrecord('WNAM', ckFormId('Water Type', ['WATR']))
        ]
    })
};