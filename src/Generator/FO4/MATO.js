let {
    def, bytes, size, conflictType, subrecord, 
    memberArray, float, struct, flags, uint32, 
    format, req, record
} = require('../helpers');

module.exports = () => {
    record('MATO', 'Material Object', {
        members: [
            def('EDID'),
            def('MODL'),
            memberArray('Property Data', 
                subrecord('DNAM', conflictType('Ignore', size(0, bytes('Data'))))
            ),
            req(subrecord('DATA', struct('Directional Material Data', [
                float('Falloff Scale'),
                float('Falloff Bias'),
                float('Noise UV Scale'),
                float('Material UV Scale'),
                struct('Projection Vector', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ]),
                float('Normal Dampener'),
                def('FloatColors', { name: 'Single Pass Color' }),
                format(uint32('Flags'), flags({
                    0: 'Single Pass'
                }))
            ])))
        ]
    })
};