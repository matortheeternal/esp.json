let {
    req, def, string, subrecord, uint8, 
    mul, format, int8, bytes, size, 
    flags, uint32, int16, array, count, 
    int32, struct, memberUnion, record
} = require('../helpers');

module.exports = () => {
    record('SOUN', 'Sound', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            subrecord('FNAM', string('Sound FileName')),
            subrecord('RNAM', uint8('Random Chance %')),
            req(memberUnion('Sound Data', [
                req(subrecord('SNDD', struct('Sound Data', [
                    format(uint8('Minimum Attentuation Distance'), mul(5)),
                    format(uint8('Maximum Attentuation Distance'), mul(100)),
                    int8('Frequency Adjustment %'),
                    size(1, bytes('Unused')),
                    format(uint32('Flags'), flags({
                        0: 'Random Frequency Shift',
                        1: 'Play At Random',
                        2: 'Environment Ignored',
                        3: 'Random Location',
                        4: 'Loop',
                        5: 'Menu Sound',
                        6: '2D',
                        7: '360 LFE',
                        8: 'Dialogue Sound',
                        9: 'Envelope Fast',
                        10: 'Envelope Slow',
                        11: '2D Radius',
                        12: 'Mute When Submerged',
                        13: 'Start at Random Position'
                    })),
                    int16('Static attentuation cdB'),
                    format(uint8('Stop time '), def('AlocTime')),
                    format(uint8('Start time '), def('AlocTime')),
                    count(5, array('Attenuation Curve', 
                        int16('Point')
                    )),
                    int16('Reverb Attenuation Control'),
                    int32('Priority'),
                    struct('Loop Points', [
                        int32('Begin'),
                        int32('End')
                    ])
                ]))),
                req(subrecord('SNDX', struct('Sound Data', [
                    format(uint8('Minimum attentuation distance'), mul(5)),
                    format(uint8('Maximum attentuation distance'), mul(100)),
                    int8('Frequency adjustment %'),
                    size(1, bytes('Unused')),
                    format(uint32('Flags'), flags({
                        0: 'Random Frequency Shift',
                        1: 'Play At Random',
                        2: 'Environment Ignored',
                        3: 'Random Location',
                        4: 'Loop',
                        5: 'Menu Sound',
                        6: '2D',
                        7: '360 LFE',
                        8: 'Dialogue Sound',
                        9: 'Envelope Fast',
                        10: 'Envelope Slow',
                        11: '2D Radius',
                        12: 'Mute When Submerged'
                    })),
                    int16('Static attentuation cdB'),
                    uint8('Stop time '),
                    uint8('Start time ')
                ])))
            ])),
            subrecord('ANAM', count(5, array('Attenuation Curve', 
                int16('Point')
            ))),
            subrecord('GNAM', int16('Reverb Attenuation Control')),
            subrecord('HNAM', int32('Priority'))
        ]
    })
};