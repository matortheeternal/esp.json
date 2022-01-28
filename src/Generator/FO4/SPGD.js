let {
    def, float, bytes, size, uint32, 
    enumeration, format, unknown, struct, subrecord, 
    req, string, record
} = require('../helpers');

module.exports = () => {
    record('SPGD', 'Shader Particle Geometry', {
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('Data', [
                float('Gravity Velocity'),
                size(4, bytes('Unknown')),
                float('Rotation Velocity'),
                size(4, bytes('Unknown')),
                float('Particle Size X'),
                float('Center Offset Min'),
                float('Particle Size Y'),
                size(4, bytes('Unknown')),
                float('Center Offset Min'),
                size(4, bytes('Unknown')),
                float('Center Offset Max'),
                size(4, bytes('Unknown')),
                float('Initial Rotation'),
                size(4, bytes('Unknown')),
                uint32('# of Subtextures X'),
                size(4, bytes('Unknown')),
                uint32('# of Subtextures Y'),
                size(4, bytes('Unknown')),
                format(uint32('Type'), enumeration({
                    0: 'Rain',
                    1: 'Snow'
                })),
                size(4, bytes('Unknown')),
                uint32('Box Size'),
                size(4, bytes('Unknown')),
                float('Particle Density'),
                unknown()
            ]))),
            subrecord('MNAM', string('Particle Texture'))
        ]
    })
};