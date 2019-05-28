let {
    IsSSE, float, uint32, def, subrecord, 
    struct, req, bytes, string, multiStruct, 
    arrayOfSubrecord, ckFormId, array, unknown, record
} = require('../helpers');

module.exports = game => {
    record('TES4', 'Main File Header', {
        flags: {
            "0": "ESM",
            "7": "Localized",
            "9": "IsSSE(game, [\n    ESL,\n    \n])"
        },
        members: [
            req(subrecord('HEDR', struct('Header', [
                float('Version'),
                uint32('Number of Records'),
                uint32('Next Object ID', def('NextObjectIDToString'))
            ]))),
            subrecord('OFST', bytes('Unknown', 0)),
            subrecord('DELE', bytes('Unknown', 0)),
            req(subrecord('CNAM', string('Author'))),
            subrecord('SNAM', string('Description')),
            arrayOfSubrecord('Master Files', undefined),
            subrecord('ONAM', array('Overridden Forms', ckFormId('Form', ['ACHR', 'LAND', 'NAVM', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']), 0)),
            subrecord('SCRN', bytes('Screenshot', 0)),
            subrecord('INTV', unknown()),
            subrecord('INCC', unknown())
        ]
    })
};