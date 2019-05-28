let {
    def, subrecord, int32, ckFormId, uint16, 
    struct, req, record
} = require('../helpers');

module.exports = () => {
    record('ADDN', 'Addon Node', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('MODL'),
            subrecord('DATA', int32('Node Index', null)),
            subrecord('SNAM', ckFormId('Sound', ['SNDR', 'NULL'])),
            req(subrecord('DNAM', struct('Data', [
                uint16('Master Particle System Cap'),
                uint16('Flags', {
                    "1": "Unknown 1",
                    "3": "Always Loaded"
                })
            ])))
        ]
    })
};