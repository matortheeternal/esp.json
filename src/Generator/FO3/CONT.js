let {
    req, def, flags, uint8, format, 
    float, struct, subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('CONT', 'Container', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            def('CNTOs'),
            def('DEST'),
            req(subrecord('DATA', struct('', [
                format(uint8('Flags'), flags({
                    0: '',
                    1: 'Respawns'
                })),
                float('Weight')
            ]))),
            subrecord('SNAM', ckFormId('Sound - Open', ['SOUN'])),
            subrecord('QNAM', ckFormId('Sound - Close', ['SOUN']))
        ]
    })
};