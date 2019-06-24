let {
    flags, def, subrecord, unknown, record
} = require('../helpers');

module.exports = () => {
    record('NAVM', 'Navigation Mesh', {
        flags: flags({
            18: 'Compressed',
            26: 'AutoGen',
            31: 'NavmeshGenCell'
        }),
        members: [
            def('EDID'),
            def('NVNM'),
            subrecord('ONAM', unknown()),
            subrecord('PNAM', unknown()),
            subrecord('NNAM', unknown())
        ]
    })
};