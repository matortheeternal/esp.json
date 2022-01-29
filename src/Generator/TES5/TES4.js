let {
    IsSSE, flags, float, uint32, def, 
    format, struct, subrecord, req, bytes, 
    size, conflictType, string, memberStruct, memberArray, 
    opts, ckFormId, array, unknown, record
} = require('../helpers');

module.exports = game => {
    record('TES4', 'Main File Header', {
        flags: flags({
            0: 'ESM',
            7: 'Localized',
            9: IsSSE(game, ['ESL', '']),
            12: 'Ignored'
        }),
        members: [
            req(subrecord('HEDR', struct('Header', [
                float('Version'),
                uint32('Number of Records'),
                format(uint32('Next Object ID'), def('NextObjectIDToString'))
            ]))),
            subrecord('OFST', conflictType('Ignore', size(0, bytes('Unknown')))),
            subrecord('DELE', conflictType('Ignore', size(0, bytes('Unknown')))),
            req(subrecord('CNAM', conflictType('Translate', string('Author')))),
            subrecord('SNAM', conflictType('Translate', string('Description'))),
            opts(memberArray('Master Files', 
                memberStruct('Master File', [
                    req(subrecord('MAST', string('FileName'))),
                    req(subrecord('DATA', conflictType('Ignore', size(8, bytes('Unknown')))))
                ])
            ), {
                "defFlags": [
                    "protected"
                ]
            }),
            subrecord('ONAM', array('Overridden Forms', 
                ckFormId('Form', [
                    'ACHR', 'LAND', 'NAVM', 'REFR', 'PGRE',
                    'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                    'PCON', 'PFLA'
                ])
            )),
            subrecord('SCRN', bytes('Screenshot')),
            subrecord('INTV', unknown()),
            subrecord('INCC', unknown())
        ]
    })
};