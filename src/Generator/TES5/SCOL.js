let {
    def, req, subrecord, ckFormId, float, 
    struct, array, arrayOfStruct, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('SCOL', 'Static Collection', {
        members: [
            def('EDID'),
            req(def('OBND')),
            req(def('MODL')),
            req(arrayOfStruct('Parts', multiStruct('Part', [
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
                ])))
            ])))
        ]
    })
};