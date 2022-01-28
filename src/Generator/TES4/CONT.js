let {
    def, flags, uint8, format, float, 
    struct, subrecord, req, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('CONT', 'Container', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            def('CNTOs'),
            req(subrecord('DATA', struct('', [
                format(uint8('Flags'), flags({
                    0: '',
                    1: 'Respawns'
                })),
                float('Weight')
            ]))),
            subrecord('SNAM', ckFormId('Open sound', ['SOUN'])),
            subrecord('QNAM', ckFormId('Close sound', ['SOUN']))
        ]
    })
};