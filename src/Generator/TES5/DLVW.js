let {
    def, subrecord, ckFormId, req, arrayOfSubrecord, 
    unknown, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('DLVW', 'Dialog View', {
        members: [
            def('EDID'),
            req(subrecord('QNAM', ckFormId('Quest', ['QUST']))),
            arrayOfSubrecord('Branches', undefined),
            arrayOfSubrecord('Unknown TNAM', undefined),
            subrecord('ENAM', unknown()),
            subrecord('DNAM', unknown())
        ]
    })
};