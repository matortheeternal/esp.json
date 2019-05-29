let {
    def, subrecord, ckFormId, req, uint32, 
    format, record
} = require('../helpers');

module.exports = () => {
    record('DLBR', 'Dialog Branch', {
        members: [
            def('EDID'),
            req(subrecord('QNAM', ckFormId('Quest', ['QUST']))),
            subrecord('TNAM', uint32('Unknown')),
            subrecord('DNAM', format(uint32('Flags'), {
                0: 'Top-Level',
                1: 'Blocking',
                2: 'Exclusive'
            })),
            req(subrecord('SNAM', ckFormId('Starting Topic', ['DIAL'])))
        ]
    })
};