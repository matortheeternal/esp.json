let {
    def, ckFormId, subrecord, req, memberArray, 
    unknown, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('DLVW', 'Dialog View', {
        members: [
            def('EDID'),
            req(subrecord('QNAM', ckFormId('Quest', ['QUST']))),
            memberArray('Branches', 
                subrecord('BNAM', ckFormId('Branch', ['DLBR']))
            ),
            memberArray('Unknown TNAM', 
                memberStruct('Unknown', [
                    subrecord('TNAM', unknown())
                ])
            ),
            subrecord('ENAM', unknown()),
            subrecord('DNAM', unknown())
        ]
    })
};