let {
    req, def, uint32, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('CMNY', 'Caravan Money', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('YNAM'),
            def('ZNAM'),
            subrecord('DATA', uint32('Absolute Value'))
        ]
    })
};