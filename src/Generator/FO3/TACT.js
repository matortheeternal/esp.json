let {
    req, def, ckFormId, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('TACT', 'Talking Activator', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            req(def('MODL')),
            def('SCRI'),
            def('DEST'),
            subrecord('SNAM', ckFormId('Sound', ['SOUN'])),
            subrecord('VNAM', ckFormId('Voice Type', ['VTYP']))
        ]
    })
};