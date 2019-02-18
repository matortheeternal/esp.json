let { addDef, subrecord, struct, int8, unknown } = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`CNAM subrecord definition not available for ${game}`);

    addDef('CNAM', subrecord('CNAM', struct('Color', [
        int8('Red'),
        int8('Green'),
        int8('Blue'),
        unknown(1)
    ])));
};