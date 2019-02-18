let {
    addDef, arrayOfSubrecord, subrecord, struct, union,
    ckFormId, enum32, zstring
} = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`Ownership definition not available for ${game}`);

    addDef('PDTOs', arrayOfSubrecord('Topic', [],
        subrecord('PDTO', struct('Topic Data', [
            enum32('Type', ['Topic Ref', 'Topic Subtype']),
            union('Data', 'PDTODecider', [
                ckFormId('Topic', ['DIAL', 'NULL']),
                zstring('Subtype', 4)
            ])
        ]))
    ));
};