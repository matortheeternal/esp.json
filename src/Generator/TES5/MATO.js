let {
    def, bytes, size, conflict, subrecord, 
    memberArray, float, struct, flags, uint32, 
    format, uint8, req, IsSSE, record
} = require('../helpers');

module.exports = game => {
    record('MATO', 'Material Object', {
        members: [
            def('EDID'),
            def('MODL'),
            memberArray('Property Data', 
                subrecord('DNAM', conflict('Ignore', size(0, bytes('Data'))))
            ),
            IsSSE(game, [
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
                    })),
                    format(uint8('Flags'), flags({
                        0: 'Snow'
                    })),
                    conflict('Ignore', size(3, bytes('Unused')))
                ]))),
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
            ])
        ]
    })
};