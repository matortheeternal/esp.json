let {
    IsSSE, float, uint32, def, format, 
    subrecord, struct, req, bytes, cstring, 
    multiStruct, arrayOfSubrecord, ckFormId, array, unknown, 
    record
} = require('../helpers');

module.exports = game => {
    record('TES4', 'Main File Header', {
        flags: {
            "0": "ESM",
            "7": "Localized",
            "9": "IsSSE(game, [\n    'ESL',\n    ''\n])"
        },
        members: [
            req(subrecord('HEDR', struct('Header', [
                float('Version'),
                uint32('Number of Records'),
                format(uint32('Next Object ID'), def('NextObjectIDToString'))
            ]))),
            subrecord('OFST', bytes('Unknown', 0)),
            subrecord('DELE', bytes('Unknown', 0)),
            req(subrecord('CNAM', cstring('Author'))),
            subrecord('SNAM', cstring('Description')),
            arrayOfSubrecord('Master Files', multiStruct('Master File', [
                subrecord('MAST', cstring('FileName')),
                subrecord('DATA', bytes('Unknown', 8))
            ])),
            subrecord('ONAM', array('Overridden Forms', ckFormId('Form', ['ACHR', 'LAND', 'NAVM', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']))),
            subrecord('SCRN', bytes('Screenshot', 0)),
            subrecord('INTV', unknown()),
            subrecord('INCC', unknown())
        ]
    })
};