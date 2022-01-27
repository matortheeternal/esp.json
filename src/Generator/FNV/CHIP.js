let {
    req, def, record
} = require('../helpers');

module.exports = () => {
    record('CHIP', 'Casino Chip', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM')
        ]
    })
};