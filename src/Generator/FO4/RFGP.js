let {
    def, string, subrecord, ckFormId, unknown, 
    record
} = require('../helpers');

module.exports = () => {
    record('RFGP', 'Reference Group', {
        members: [
            def('EDID'),
            subrecord('NNAM', string('Name')),
            subrecord('RNAM', ckFormId('Reference', def('sigReferences'))),
            subrecord('PNAM', unknown())
        ]
    })
};