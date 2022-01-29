const {generate} = require("../src/Generator/generator");

const games = ['FO4', 'SSE', 'TES5', 'TES4', 'FO3', 'FNV'];
games.forEach(game => {
    generate(game, { saveIndividualDefs: true, saveFormattedDefs: true });
});
