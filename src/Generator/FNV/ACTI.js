let {
    req, def, ckFormId, subrecord, string, 
    opts, record
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
            subrecord('INAM', ckFormId('Radio Template', ['SOUN'])),
            subrecord('RNAM', ckFormId('Radio Station', ['TACT'])),
            subrecord('WNAM', ckFormId('Water Type', ['WATR'])),
            opts(subrecord('XATO', string('Activation Prompt')), {
                "transform": "keepcase"
            })
        ]
    })
};