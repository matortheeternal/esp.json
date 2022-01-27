let {
    req, def, record
} = require('../helpers');

module.exports = () => {
    record('MICN', 'Menu Icon', {
        members: [
            req(def('EDID')),
            req(def('ICON'))
        ]
    })
};