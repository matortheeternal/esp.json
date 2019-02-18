let { addDef, record, def } = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`KYWD record definition not available for ${game}`);

    addDef('KYWD', record('KYWD', 'Keyword', {
        elements: [
            def('EDID'),
            def('CNAM')
        ]
    }));
};