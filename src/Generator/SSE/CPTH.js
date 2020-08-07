let {
    def, ckFormId, struct, subrecord, req, 
    enumeration, uint8, format, memberArray, record
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
            req(subrecord('DATA', format(uint8('Camera Zoom'), enumeration({
                0: 'Default, Must Have Camera Shots',
                1: 'Disable, Must Have Camera Shots',
                2: 'Shot List, Must Have Camera Shots',
                128: 'Default',
                129: 'Disable',
                130: 'Shot List'
            })))),
            memberArray('Camera Shots', 
                subrecord('SNAM', ckFormId('Camera Shot', ['CAMS']))
            )
        ]
    })
};