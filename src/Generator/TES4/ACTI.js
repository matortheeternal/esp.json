let {
    def, ckFormId, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ACTI', 'Activator', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            subrecord('SNAM', ckFormId('Sound', ['SOUN']))
        ]
    })
};