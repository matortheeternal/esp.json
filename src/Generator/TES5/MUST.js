let {
    def, subrecord, uint32, format, float, 
    cstring, array, opts, struct, ckFormId, 
    record
} = require('../helpers');

module.exports = () => {
    record('MUST', 'Music Track', {
        members: [
            def('EDID'),
            subrecord('CNAM', format(uint32('Track Type'), {
                "603355331": "Palette",
                "1859641416": "Single Track",
                "2712257749": "Silent Track"
            })),
            subrecord('FLTV', float('Duration')),
            subrecord('DNAM', float('Fade-Out')),
            subrecord('ANAM', cstring('Track FileName')),
            subrecord('BNAM', cstring('Finale FileName')),
            opts(subrecord('FNAM', array('Cue Points', float('Point'))), {
                "includeFlag": "dfNotAlignable"
            }),
            subrecord('LNAM', struct('Loop Data', [
                float('Loop Begins'),
                float('Loop Ends'),
                uint32('Loop Count')
            ])),
            def('CITC'),
            def('CTDAsCount'),
            subrecord('SNAM', array('Tracks', ckFormId('Track', ['MUST', 'NULL'])))
        ]
    })
};