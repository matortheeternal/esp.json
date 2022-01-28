let {
    def, enumeration, uint8, format, subrecord, 
    req, uint32, float, struct, bytes, 
    size, ckFormId, union, string, record
} = require('../helpers');

module.exports = () => {
    record('NOTE', 'Note', {
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBND'),
            def('PTRN'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DNAM', format(uint8('Type'), enumeration({
                0: 'Sound',
                1: 'Voice',
                2: 'Program',
                3: 'Terminal'
            })))),
            subrecord('DATA', struct('', [
                uint32('Value'),
                float('Weight')
            ])),
            subrecord('SNAM', union('Data', 'NOTEDataDecider', [
                size(4, bytes('Unused')),
                ckFormId('Sound', ['SNDR']),
                ckFormId('Scene', ['SCEN']),
                ckFormId('Terminal', ['TERM'])
            ])),
            subrecord('PNAM', string('Program File'))
        ]
    })
};