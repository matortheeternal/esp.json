let {
    def, ckFormId, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('LAYR', 'Layer', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Parent', ['LAYR']))
        ]
    })
};