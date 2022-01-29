const convertFile = require('../src/Converter/convertFile');

const games = ['FO4', 'SSE', 'TES5', 'TES4', 'FO3', 'FNV'];
games.forEach(game => {
    let source = game !== 'SSE' ? game : 'TES5';
    convertFile(`wbDefinitions${source || game}.pas`, game);
});
