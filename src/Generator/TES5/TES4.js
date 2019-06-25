let {
    IsSSE, flags, float, uint32, def, 
    format, subrecord, struct, req, bytes, 
    string, size, memberStruct, memberArray, ckFormId, 
    array, unknown, record
} = require('../helpers');

module.exports = game => {
    record('TES4', 'Main File Header', {
        flags: flags({
            0: 'ESM',
            5: 'Deleted',
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
            subrecord('OFST', bytes('Unknown')),
            subrecord('DELE', bytes('Unknown')),
            req(subrecord('CNAM', string('Author'))),
            subrecord('SNAM', string('Description')),
            memberArray('Master Files', 
                memberStruct('Master File', [
                    subrecord('MAST', string('FileName')),
                    subrecord('DATA', size(8, bytes('Unknown')))
                ])
            ),
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