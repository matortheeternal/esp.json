let {
    addDef, record,
    req, def, subrecord, union,
    lstring, int32, float, enum32
} = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`GMST record definition not available for ${game}`);

    addDef('GMST', record('GMST', 'Game Setting', {
        elements: [
            req(def('EDID')),
            req(subrecord('DATA', union('Value', 'GMSTUnionDecider', [
                lstring('Name'),
                int32('Int'),
                float('Float'),
                enum32('Bool', ['False', 'True'])
            ])))
        ]
    }));
};