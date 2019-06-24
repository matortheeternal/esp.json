let {
    def, req, subrecord, int32, ckFormId, 
    uint16, enumeration, format, struct, record
} = require('../helpers');

module.exports = () => {
    record('ADDN', 'Addon Node', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('MODL'),
            subrecord('DATA', int32('Node Index')),
            subrecord('SNAM', ckFormId('Sound', ['SNDR', 'NULL'])),
            req(subrecord('DNAM', struct('Data', [
                uint16('Master Particle System Cap'),
                format(uint16('Flags'), enumeration({
                    1: 'Unknown 1',
                    3: 'Always Loaded'
                }))
            ])))
        ]
    })
};