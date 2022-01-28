let {
    flags, def, ckFormId, subrecord, uint32, 
    record
} = require('../helpers');

module.exports = () => {
    record('PKIN', 'Pack-In', {
        flags: flags({
            9: 'Prefab',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('OBND'),
            def('FLTR'),
            subrecord('CNAM', ckFormId('Cell', ['CELL'])),
            subrecord('VNAM', uint32('Version'))
        ]
    })
};