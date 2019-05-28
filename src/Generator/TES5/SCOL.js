let {
    def, subrecord, ckFormId, float, struct, 
    req, array, arrayOfMultiStruct, sortKey, multiStruct, 
    record
} = require('../helpers');

module.exports = () => {
    record('SCOL', 'Static Collection', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('MODLReq'),
            req(arrayOfMultiStruct('Parts', multiStruct(Part, [
                subrecord('ONAM', ckFormId('Static', ['STAT'])),
                subrecord('DATA', array('Placements', struct('Placement', [
                    struct('Position', [
                        float('X'),
                        float('Y'),
                        float('Z')
                    ]),
                    struct('Rotation', [
                        req(float('X')),
                        req(float('Y')),
                        req(float('Z'))
                    ]),
                    float('Scale')
                ]), 0))
            ])))
        ]
    })
};