let {
    def, ckFormId, struct, subrecord, req, 
    flags, uint8, format, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('CPTH', 'Camera Path', {
        members: [
            def('EDID'),
            def('CTDAs'),
            req(subrecord('ANAM', struct('Related Camera Paths', [
                ckFormId('Parent', ['CPTH', 'NULL']),
                ckFormId('Previous Sibling', ['CPTH', 'NULL'])
            ]))),
            req(subrecord('DATA', format(uint8('Camera Zoom / Flags'), flags({
                0: 'Disable',
                1: 'Shot List',
                2: 'Dynamic Camera Times',
                3: 'Unknown 3',
                4: 'Unknown 4',
                5: 'Unknown 5',
                6: 'Randomize Paths',
                7: 'Not Must Have Camera Shots'
            })))),
            memberArray('Camera Shots', 
                subrecord('SNAM', ckFormId('Camera Shot', ['CAMS']))
            )
        ]
    })
};