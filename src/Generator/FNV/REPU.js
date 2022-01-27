let {
    req, def, float, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('REPU', 'Reputation', {
        members: [
            req(def('EDID')),
            def('FULL'),
            def('ICON'),
            subrecord('DATA', float('Value'))
        ]
    })
};