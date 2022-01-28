let {
    def, uint32, subrecord, unknown, memberArray, 
    string, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('NOCM', 'Navigation Mesh Obstacle Manager', {
        members: [
            def('EDID'),
            memberArray('Unknown', 
                memberStruct('Unknown', [
                    subrecord('INDX', uint32('Index')),
                    memberArray('Unknown', 
                        subrecord('DATA', unknown())
                    ),
                    subrecord('INTV', unknown()),
                    subrecord('NAM1', string('Model'))
                ])
            )
        ]
    })
};