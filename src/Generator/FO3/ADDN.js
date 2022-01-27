let {
    req, def, int32, subrecord, ckFormId, 
    uint16, bytes, size, struct, record
} = require('../helpers');

module.exports = () => {
    record('ADDN', 'Addon Node', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(def('MODL')),
            req(subrecord('DATA', int32('Node Index'))),
            subrecord('SNAM', ckFormId('Sound', ['SOUN'])),
            req(subrecord('DNAM', struct('Data', [
                uint16('Master Particle System Cap'),
                size(2, bytes('Unknown'))
            ])))
        ]
    })
};