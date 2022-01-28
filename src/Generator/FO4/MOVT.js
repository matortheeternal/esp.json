let {
    def, string, subrecord, float, format, 
    req, struct, record
} = require('../helpers');

module.exports = () => {
    record('MOVT', 'Movement Type', {
        members: [
            def('EDID'),
            subrecord('MNAM', string('Name')),
            def('SPED'),
            subrecord('INAM', struct('Anim Change Thresholds (unused)', [
                req(format(float('Directional'), def('180DivPi'))),
                float('Movement Speed'),
                req(format(float('Rotation Speed'), def('180DivPi')))
            ])),
            subrecord('JNAM', float('Float Height')),
            subrecord('LNAM', float('Flight - Angle Gain'))
        ]
    })
};