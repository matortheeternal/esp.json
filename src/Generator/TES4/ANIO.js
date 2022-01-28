let {
    def, ckFormId, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('ANIO', 'Animated Object', {
        members: [
            def('EDID'),
            def('MODL'),
            req(subrecord('DATA', ckFormId('IDLE animation', ['IDLE'])))
        ]
    })
};