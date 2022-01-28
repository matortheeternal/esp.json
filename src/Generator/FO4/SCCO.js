let {
    def, ckFormId, subrecord, int32, struct, 
    memberStruct, memberArray, unknown, req, record
} = require('../helpers');

module.exports = () => {
    record('SCCO', 'Scene Collection', {
        members: [
            def('EDID'),
            subrecord('QNAM', ckFormId('Quest', ['QUST'])),
            memberArray('Scenes', 
                memberStruct('Scene', [
                    subrecord('SNAM', ckFormId('Scene', ['SCEN'])),
                    subrecord('XNAM', struct('Unknown', [
                        int32('Unknown'),
                        int32('Unknown')
                    ]))
                ])
            ),
            req(subrecord('VNAM', unknown())),
            memberArray('Unknown', 
                subrecord('XNAM', struct('Unknown', [
                    int32('Unknown'),
                    int32('Unknown')
                ]))
            ),
            req(subrecord('VNAM', unknown()))
        ]
    })
};