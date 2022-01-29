const {generate} = require("../src/Generator/generator");

const games = ['FO4', 'SSE', 'TES5', 'TES4', 'FO3', 'FNV'];

let buildAll = async function() {
    for (let game of games)
        await generate(game, { saveIndividualDefs: true, saveFormattedDefs: true });
};

buildAll();
