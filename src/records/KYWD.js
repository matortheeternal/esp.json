let { addDef, record, subrecord } = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`KYWD record definition not available for ${game}`);

    addDef(record('KYWD', 'Keyword', {
        elements: [
            subrecord('EDID'),
            subrecord('CNAM')
        ]
    }));
};