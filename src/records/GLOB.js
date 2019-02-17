let {
    addDef, record,
    subrecord, int8, float
} = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`GLOB record definition not available for ${game}`);

    addDef(record('GLOB', 'Global', {
        flags: {
            6: 'Constant',  // 0x00000040
        },
        elements: [
            subrecord('EDID'),
            subrecord('FNAM', int8('Type')),
            subrecord('FLTV', float('Value'))
        ]
    }));
};