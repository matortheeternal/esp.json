let {
    def, req, int32, subrecord, ckFormId, 
    uint16, enumeration, format, struct, record
} = require('../helpers');

module.exports = () => {
    record('ADDN', 'Addon Node', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('MODL'),
            req(subrecord('DATA', int32('Node Index'))),
            subrecord('SNAM', ckFormId('Sound', ['SNDR'])),
            subrecord('LNAM', ckFormId('Light', ['LIGH'])),
            req(subrecord('DNAM', struct('Data', [
                uint16('Master Particle System Cap'),
                format(uint16('Flags'), enumeration({
                    0: 'No Master Particle System',
                    1: 'Master Particle System',
                    2: 'Always Loaded',
                    3: 'Master Particle System and Always Loaded'
                }))
            ])))
        ]
    })
};