let {
    def, subrecord, ckFormId, req, arrayOfSubrecord, 
    unknown, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('DLVW', 'Dialog View', {
        members: [
            def('EDID'),
            req(subrecord('QNAM', ckFormId('Quest', ['QUST']))),
            arrayOfSubrecord('Branches', 
                subrecord('BNAM', ckFormId('Branch', ['DLBR']))
            ),
            arrayOfSubrecord('Unknown TNAM', 
                multiStruct('Unknown', [
                    subrecord('TNAM', unknown())
                ])
            ),
            subrecord('ENAM', unknown()),
            subrecord('DNAM', unknown())
        ]
    })
};