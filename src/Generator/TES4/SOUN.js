let {
    def, string, subrecord, mul, uint8, 
    format, int8, bytes, size, flags, 
    uint16, div, struct, req, empty, 
    memberUnion, record
} = require('../helpers');

module.exports = () => {
    record('SOUN', 'Sound', {
        members: [
            def('EDID'),
            subrecord('FNAM', string('Sound FileName')),
            req(memberUnion('Sound Data', [
                req(subrecord('SNDX', struct('Sound Data', [
                    format(uint8('Minimum attenuation distance'), mul(5)),
                    format(uint8('Maximum attenuation distance'), mul(100)),
                    int8('Frequency adjustment %'),
                    size(1, bytes('Unused')),
                    format(uint16('Flags'), flags({
                        0: 'Random Frequency Shift',
                        1: 'Play At Random',
                        2: 'Environment Ignored',
                        3: 'Random Location',
                        4: 'Loop',
                        5: 'Menu Sound',
                        6: '2D',
                        7: '360 LFE'
                    })),
                    size(2, bytes('Unused')),
                    format(uint16('Static Attenuation (db)'), div(100)),
                    uint8('Stop time'),
                    uint8('Start time')
                ]))),
                req(subrecord('SNDD', struct('Sound Data', [
                    format(uint8('Minimum attenuation distance'), mul(5)),
                    format(uint8('Maximum attenuation distance'), mul(100)),
                    int8('Frequency adjustment %'),
                    size(1, bytes('Unused')),
                    format(uint16('Flags'), flags({
                        0: 'Random Frequency Shift',
                        1: 'Play At Random',
                        2: 'Environment Ignored',
                        3: 'Random Location',
                        4: 'Loop',
                        5: 'Menu Sound',
                        6: '2D',
                        7: '360 LFE'
                    })),
                    size(2, bytes('Unused')),
                    empty('Unused'),
                    empty('Unused'),
                    empty('Unused')
                ])))
            ]))
        ]
    })
};