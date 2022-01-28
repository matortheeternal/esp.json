let {
    flags, def, formId, subrecord, uint16, 
    array, record
} = require('../helpers');

module.exports = () => {
    record('NAVM', 'Navigation Mesh', {
        flags: flags({
            12: 'Ignored',
            18: 'Compressed',
            26: 'AutoGen'
        }),
        members: [
            def('EDID'),
            def('NVNM'),
            subrecord('ONAM', formId(undefined)),
            subrecord('NNAM', array('Unknown', 
                uint16('Unknown')
            )),
            def('MNAMNAVM')
        ]
    })
};