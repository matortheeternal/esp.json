let {
    def, formId, subrecord, ckFormId, uint16, 
    record
} = require('../helpers');

module.exports = () => {
    record('COBJ', 'Constructible Object', {
        members: [
            def('EDID'),
            def('COCT'),
            def('CNTOsNoReach'),
            def('CTDAs'),
            subrecord('CNAM', formId('Created Object')),
            subrecord('BNAM', ckFormId('Workbench Keyword', ['KYWD'])),
            subrecord('NAM1', uint16('Created Object Count'))
        ]
    })
};