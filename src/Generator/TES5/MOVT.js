let {
    def, subrecord, string, float, req, 
    struct, record
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
                req(req(float('Rotate in Place Walk'))),
                req(req(float('Rotate in Place Run'))),
                req(req(float('Rotate while Moving Run')))
            ]))),
            subrecord('INAM', struct('Anim Change Thresholds', [
                req(req(float('Directional'))),
                float('Movement Speed'),
                req(req(float('Rotation Speed')))
            ]))
        ]
    })
};