let { addDef, struct, float } = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`PosRot definition not available for ${game}`);

    addDef('DATAPosRot', subrecord('DATA',
        struct('Position/Rotation', [
            struct('Position', [
                float('X'),
                float('Y'),
                float('Z')
            ]),
            struct('Rotation', [
                float('X'),
                float('Y'),
                float('Z')
            ])
        ])
    ));
};