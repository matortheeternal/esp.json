let {
    addDef, multiStruct, subrecord,
    ckFormId, int32
} = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`Ownership definition not available for ${game}`);

    addDef('Ownership', multiStruct('Ownership', [
        subrecord('XOWN', ckFormId('Owner', ['FACT', 'ACHR', 'NPC_'])),
        subrecord('XRNK', int32('Faction rank'))
    ]));
};