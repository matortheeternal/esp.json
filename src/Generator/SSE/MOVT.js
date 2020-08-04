let {
    def, subrecord, string, float, format, 
    req, struct, record
} = require('../helpers');

module.exports = () => {
    record('MOVT', 'Movement Type', {
        members: [
            def('EDID'),
            subrecord('MNAM', string('Name')),
            req(subrecord('SPED', struct('Default Data', [
                float('Left Walk'),
                float('Left Run'),
                float('Right Walk'),
                float('Right Run'),
                float('Forward Walk'),
                float('Forward Run'),
                float('Back Walk'),
                float('Back Run'),
                req(req(format(float('Rotate in Place Walk'), 'RotationFactor'))),
                req(req(format(float('Rotate in Place Run'), 'RotationFactor'))),
                req(req(format(float('Rotate while Moving Run'), 'RotationFactor')))
            ]))),
            subrecord('INAM', struct('Anim Change Thresholds', [
                req(req(format(float('Directional'), '180DivPi'))),
                float('Movement Speed'),
                req(req(format(float('Rotation Speed'), '180DivPi')))
            ]))
        ]
    })
};