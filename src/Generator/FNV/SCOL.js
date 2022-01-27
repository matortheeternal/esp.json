let {
    req, def, ckFormId, subrecord, float, 
    struct, format, sorted, array, memberArray, 
    memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('SCOL', 'Static Collection', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(def('MODL')),
            req(memberArray('Parts', 
                memberStruct('Part', [
                    subrecord('ONAM', ckFormId('Static', ['STAT'])),
                    req(subrecord('DATA', sorted(array('Placements', 
                        struct('Placement', [
                            struct('Position', [
                                float('X'),
                                float('Y'),
                                float('Z')
                            ]),
                            struct('Rotation', [
                                req(format(float('X'), def('RotationFactor'))),
                                req(format(float('Y'), def('RotationFactor'))),
                                req(format(float('Z'), def('RotationFactor')))
                            ]),
                            float('Scale')
                        ])
                    ))))
                ])
            ))
        ]
    })
};