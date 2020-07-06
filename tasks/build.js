let {generate} = require('../src/Generator/generator');

let [game] = process.argv.slice(2);

generate(game, { generateIndividualDefs: true });
