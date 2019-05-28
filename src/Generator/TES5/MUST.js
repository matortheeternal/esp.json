let {
    def, subrecord, uint32, float, string, 
    array, opts, struct, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('MUST', 'Music Track', {
        members: [
            def('EDID'),
            subrecord('CNAM', uint32('Track Type', {
                "603355331": "Palette",
                "1859641416": "Single Track",
                "2712257749": "Silent Track"
            })),
            subrecord('FLTV', float('Duration')),
            subrecord('DNAM', float('Fade-Out')),
            subrecord('ANAM', string('Track FileName')),
            subrecord('BNAM', string('Finale FileName')),
            opts(subrecord('FNAM', array('Cue Points', float('Point'), undefined)), {
                "includeFlag": "dfNotAlignable"
            }),
            subrecord('LNAM', struct('Loop Data', [
                float('Loop Begins'),
                float('Loop Ends'),
                uint32('Loop Count')
            ])),
            def('CITC'),
            def('CTDAsCount'),
            subrecord('SNAM', array('Tracks', ckFormId('Track', ['MUST', 'NULL']), undefined))
        ]
    })
};