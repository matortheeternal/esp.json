let {
    IsSSE, float, uint32, def, format, 
    subrecord, struct, req, bytes, string, 
    multiStruct, arrayOfSubrecord, ckFormId, array, unknown, 
    record
} = require('../helpers');

module.exports = game => {
    record('TES4', 'Main File Header', {
        flags: {
            0: 'ESM',
            7: 'Localized',
            9: IsSSE(game, ['ESL', ''])
        },
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
            arrayOfSubrecord('Master Files', 
                multiStruct('Master File', [
                    subrecord('MAST', string('FileName')),
                    subrecord('DATA', bytes('Unknown', 8))
                ])
            ),
            subrecord('ONAM', array('Overridden Forms', 
                ckFormId('Form', [
                    'ACHR',    'LAND',    'NAVM',    'REFR',    'PGRE',
                    'PHZD',    'PMIS',    'PARW',    'PBAR',    'PBEA',
                    'PCON',    'PFLA'
                ])
            )),
            subrecord('SCRN', bytes('Screenshot')),
            subrecord('INTV', unknown()),
            subrecord('INCC', unknown())
        ]
    })
};