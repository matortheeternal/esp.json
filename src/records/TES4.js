let {
    generateRecordDef,
    subrecord, multiArray, struct, array,
    bytes, unknown, zstring, float, int32, formId
} = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`TES4 record definitions are not available for ${game}`);

    let SSE = game === 'SSE';

    generateRecordDef('TES4', game, {
        name: 'File Header',
        flags: {
            0: 'ESM',           // 0x00000001
            7: 'Localized',     // 0x00000080
            9: SSE ? 'ESL' : '' // 0x00000200
        },
        elements: [
            req(subrecord('HEDR', struct('Header', [
                float('Version'),
                int32('Number of Records'),
                int32('Next Object ID')
            ]))),
            subrecord('OFST', unknown()),
            subrecord('DELE', unknown()),
            req(subrecord('CNAM', zstring('Author'))),
            subrecord('SNAM', zstring('Description')),
            multiArray('Master Files', 'Master File', [
                subrecord('MAST', zstring('Filename')),
                subrecord('DATA', unknown(8))
            ]),
            subrecord('ONAM', array('Overridden Forms', formId('Form'))),
            subrecord('SCRN', bytes('Screenshot')),
            subrecord('INTV', unknown()),
            subrecord('INCC', unknown())
        ]
    });
};