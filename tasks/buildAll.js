const {generate} = require("../src/Generator/generator");

const games = ['FO4', 'SSE', 'TES5', 'TES4', 'FO3', 'FNV', 'SF'];

let timestamp = new Date(),
    options = { saveIndividualDefs: true, saveFormattedDefs: true, timestamp };

let buildAll = async function() {
    for (let game of games)
        await generate(game, options);
};

buildAll();
