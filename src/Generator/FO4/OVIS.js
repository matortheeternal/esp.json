let {
    def, ckFormId, subrecord, float, struct, 
    memberStruct, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('OVIS', 'Object Visibility Manager', {
        members: [
            def('EDID'),
            memberArray('Unknown', 
                memberStruct('Unknown', [
                    subrecord('INDX', ckFormId('Object', ['STAT'])),
                    subrecord('DATA', struct('Object Bounds', [
                        float('X1'),
                        float('Y1'),
                        float('Z1'),
                        float('X2'),
                        float('Y2'),
                        float('Z2')
                    ]))
                ])
            )
        ]
    })
};