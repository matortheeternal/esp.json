let {
    def, enumeration, uint32, format, subrecord, 
    req, float, string, struct, array, 
    opts, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('MUST', 'Music Track', {
        members: [
            def('EDID'),
            req(subrecord('CNAM', format(uint32('Track Type'), enumeration({
                603355331: 'Palette',
                1859641416: 'Single Track',
                2712257749: 'Silent Track'
            })))),
            subrecord('FLTV', float('Duration')),
            subrecord('DNAM', float('Fade-Out')),
            subrecord('ANAM', string('Track FileName')),
            subrecord('BNAM', string('Finale FileName')),
            subrecord('LNAM', struct('Loop Data', [
                float('Loop Begins'),
                float('Loop Ends'),
                uint32('Loop Count')
            ])),
            opts(subrecord('FNAM', array('Cue Points', 
                float('Point')
            )), {
                "defFlags": [
                    "notAlignable"
                ]
            }),
            def('CITC'),
            def('CTDAsCount'),
            subrecord('SNAM', array('Tracks', 
                ckFormId('Track', ['MUST', 'NULL'])
            ))
        ]
    })
};