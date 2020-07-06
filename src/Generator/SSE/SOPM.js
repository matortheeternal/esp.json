let {
    def, flags, uint8, format, bytes, 
    size, subrecord, struct, unknown, enumeration, 
    uint32, array, float, record
} = require('../helpers');

module.exports = () => {
    record('SOPM', 'Sound Output Model', {
        members: [
            def('EDID'),
            subrecord('NAM1', struct('Data', [
                format(uint8('Flags'), flags({
                    0: 'Attenuates With Distance',
                    1: 'Allows Rumble'
                })),
                size(2, bytes('Unknown')),
                uint8('Reverb Send %')
            ])),
            subrecord('FNAM', unknown()),
            subrecord('MNAM', format(uint32('Type'), enumeration({
                0: 'Uses HRTF',
                1: 'Defined Speaker Output'
            }))),
            subrecord('CNAM', unknown()),
            subrecord('SNAM', unknown()),
            subrecord('ONAM', struct('Output Values', [
                array('Channels', 
                    struct('', [
                        uint8('L'),
                        uint8('R'),
                        uint8('C'),
                        uint8('LFE'),
                        uint8('RL'),
                        uint8('RR'),
                        uint8('BL'),
                        uint8('BR')
                    ])
                )
            ])),
            subrecord('ANAM', struct('Attenuation Values', [
                size(4, bytes('Unknown')),
                float('Min Distance'),
                float('Max Distance'),
                size(5, array('Curve', 
                    uint8('Value')
                )),
                bytes('Unknown')
            ]))
        ]
    })
};