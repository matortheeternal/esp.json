let {
    def, IsSSE, flags, uint32, format, 
    subrecord, req, uint16, div, struct, 
    float, ckFormId, array, record
} = require('../helpers');

module.exports = game => {
    record('MUSC', 'Music Type', {
        members: [
            def('EDID'),
            req(subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Plays One Selection',
                1: 'Abrupt Transition',
                2: 'Cycle Tracks',
                3: 'Maintain Track Order',
                4: 'Unknown 4',
                5: 'Ducks Current Track',
                6: IsSSE(game, ['Doesn\'t Queue', 'Unknown 6'])
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