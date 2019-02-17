let { addDef, struct, int8, bytes } = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`ByteColors definition not available for ${game}`);

    addDef(struct('ByteColors', [
        int8('Red'),
        int8('Green'),
        int8('Blue'),
        bytes('Unused', 1)
    ]));
};

