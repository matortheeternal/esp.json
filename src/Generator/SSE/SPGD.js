let {
    def, float, uint32, enumeration, format, 
    struct, subrecord, req, string, record
} = require('../helpers');

module.exports = () => {
    record('SPGD', 'Shader Particle Geometry', {
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('Data', [
                float('Gravity Velocity'),
                float('Rotation Velocity'),
                float('Particle Size X'),
                float('Particle Size Y'),
                float('Center Offset Min'),
                float('Center Offset Max'),
                float('Initial Rotation Range'),
                uint32('# of Subtextures X'),
                uint32('# of Subtextures Y'),
                format(uint32('Type'), enumeration({
                    0: 'Rain',
                    1: 'Snow'
                })),
                uint32('Box Size'),
                float('Particle Density')
            ]))),
            subrecord('ICON', string('Particle Texture'))
        ]
    })
};