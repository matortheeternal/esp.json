let {generate} = require('../src/Generator/generator');

let [game] = process.argv.slice(2);
console.log(game);

generate(game, { saveIndividualDefs: true, saveFormattedDefs: true });
