let {
    req, def, record
} = require('../helpers');

module.exports = () => {
    record('STAT', 'Static', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('MODL')
        ]
    })
};