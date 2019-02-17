let { addDef, subrecord, zstring } = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`EDID subrecord definition not available for ${game}`);

    addDef(subrecord('EDID', zstring('Editor ID')));
};