let convertFile = require('../src/Converter/convertFile');

let [game, source] = process.argv.slice(2);

convertFile(`wbDefinitions${source || game}.pas`, game);