let {
    req, def, ckFormId, struct, subrecord, 
    enumeration, uint8, format, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('CPTH', 'Camera Path', {
        members: [
            req(def('EDID')),
            def('CTDAs'),
            req(subrecord('ANAM', struct('Related Camera Paths', [
                ckFormId('Parent', ['CPTH', 'NULL']),
                ckFormId('Previous Sibling', ['CPTH', 'NULL'])
            ]))),
            req(subrecord('DATA', format(uint8('Camera Zoom'), enumeration({
                0: 'Default',
                1: 'Disable',
                2: 'Shot List'
            })))),
            memberArray('Camera Shots', 
                subrecord('SNAM', ckFormId('Camera Shot', ['CAMS']))
            )
        ]
    })
};