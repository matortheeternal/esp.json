let {
    req, def, bytes, size, subrecord, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('MSTT', 'Moveable Static', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            req(def('MODL')),
            def('DEST'),
            req(subrecord('DATA', size(1, bytes('Unknown')))),
            subrecord('SNAM', ckFormId('Sound', ['SOUN']))
        ]
    })
};