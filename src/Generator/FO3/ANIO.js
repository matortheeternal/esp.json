let {
    req, def, ckFormId, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ANIO', 'Animated Object', {
        members: [
            req(def('EDID')),
            req(def('MODL')),
            req(subrecord('DATA', ckFormId('Animation', ['IDLE'])))
        ]
    })
};