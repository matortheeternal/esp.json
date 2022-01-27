let {
    req, def, ckFormId, subrecord, flags, 
    uint8, format, record
} = require('../helpers');

module.exports = () => {
    record('DOOR', 'Door', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            req(def('MODL')),
            def('SCRI'),
            def('DEST'),
            subrecord('SNAM', ckFormId('Sound - Open', ['SOUN'])),
            subrecord('ANAM', ckFormId('Sound - Close', ['SOUN'])),
            subrecord('BNAM', ckFormId('Sound - Looping', ['SOUN'])),
            req(subrecord('FNAM', format(uint8('Flags'), flags({
                0: '',
                1: 'Automatic Door',
                2: 'Hidden',
                3: 'Minimal Use',
                4: 'Sliding Door'
            }))))
        ]
    })
};