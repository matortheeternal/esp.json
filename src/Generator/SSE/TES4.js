let {
    IsSSE, flags, float, uint32, def, 
    format, struct, subrecord, req, bytes, 
    size, string, memberStruct, memberArray, opts, 
    ckFormId, array, unknown, record
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
            subrecord('OFST', size(0, bytes('Unknown'))),
            subrecord('DELE', size(0, bytes('Unknown'))),
            req(subrecord('CNAM', string('Author'))),
            subrecord('SNAM', string('Description')),
            opts(memberArray('Master Files', 
                memberStruct('Master File', [
                    req(subrecord('MAST', string('FileName'))),
                    req(subrecord('DATA', size(8, bytes('Unknown'))))
                ])
            ), {
                "protected": 1
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