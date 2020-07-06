let {
    def, req, subrecord, ckFormId, float, 
    struct, sorted, array, memberArray, memberStruct, 
    record
} = require('../helpers');

module.exports = () => {
    record('SCOL', 'Static Collection', {
        members: [
            def('EDID'),
            req(def('OBND')),
            req(def('MODL')),
            req(memberArray('Parts', 
                memberStruct('Part', [
                    subrecord('ONAM', ckFormId('Static', ['STAT'])),
                    subrecord('DATA', sorted(array('Placements', 
                        struct('Placement', [
                            struct('Position', [
                                float('X'),
                                float('Y'),
                                float('Z')
                            ]),
                            struct('Rotation', [
                                req(req(float('X'))),
                                req(req(float('Y'))),
                                req(req(float('Z')))
                            ]),
                            float('Scale')
                        ])
                    )))
                ])
            ))
        ]
    })
};