let {
    def, flags, uint32, format, subrecord, 
    req, uint16, div, struct, float, 
    ckFormId, array, record
} = require('../helpers');

module.exports = () => {
    record('MUSC', 'Music Type', {
        members: [
            def('EDID'),
            req(subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Plays One Selection',
                1: 'Abrupt Transition',
                2: 'Cycle Tracks',
                3: 'Maintain Track Order',
                4: 'Unknown 5',
                5: 'Ducks Current Track',
                6: 'Doesn\'t Queue'
            })))),
            subrecord('PNAM', struct('Data', [
                uint16('Priority'),
                format(uint16('Ducking (dB)'), div(100))
            ])),
            subrecord('WNAM', float('Fade Duration')),
            subrecord('TNAM', array('Music Tracks', 
                ckFormId('Track', ['MUST', 'NULL'])
            ))
        ]
    })
};