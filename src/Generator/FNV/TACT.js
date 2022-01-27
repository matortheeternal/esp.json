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
            subrecord('SNAM', ckFormId('Looping Sound', ['SOUN'])),
            subrecord('VNAM', ckFormId('Voice Type', ['VTYP'])),
            subrecord('INAM', ckFormId('Radio Template', ['SOUN']))
        ]
    })
};