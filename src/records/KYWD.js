let { generateRecordDef, getDef } = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`KYWD record definition not available for ${game}`);

    generateRecordDef('KYWD', game, {
        name: 'Keyword',
        elements: [
            subrecord('EDID'),
            subrecord('CNAM')
        ]
    });
};