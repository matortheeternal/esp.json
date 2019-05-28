let {
    def, subrecord, ckFormId, string, float, 
    req, struct, uint32, record
} = require('../helpers');

module.exports = () => {
    record('MATT', 'Material Type', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Material Parent', ['MATT', 'NULL'])),
            subrecord('MNAM', string('Material Name')),
            subrecord('CNAM', struct('Havok Display Color', [
                req(float('Red')),
                req(float('Green')),
                req(float('Blue'))
            ])),
            subrecord('BNAM', float('Buoyancy')),
            subrecord('FNAM', uint32('Flags', {
                "0": "Stair Material",
                "1": "Arrows Stick"
            })),
            subrecord('HNAM', ckFormId('Havok Impact Data Set', ['IPDS', 'NULL']))
        ]
    })
};