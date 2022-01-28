let {
    def, ckFormId, subrecord, string, float, 
    scale, req, struct, flags, uint32, 
    format, record
} = require('../helpers');

module.exports = () => {
    record('MATT', 'Material Type', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Material Parent', ['MATT', 'NULL'])),
            subrecord('MNAM', string('Material Name')),
            subrecord('CNAM', struct('Havok Display Color', [
                req(scale(255, float('Red'))),
                req(scale(255, float('Green'))),
                req(scale(255, float('Blue')))
            ])),
            subrecord('BNAM', float('Buoyancy')),
            subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Stair Material',
                1: 'Arrows Stick',
                2: 'Can Tunnel'
            }))),
            subrecord('HNAM', ckFormId('Havok Impact Data Set', ['IPDS'])),
            subrecord('ANAM', string('Breakable FX')),
            def('MODT')
        ]
    })
};