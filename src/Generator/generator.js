let fs = require('fs'),
    path = require('path'),
    {clearDefs, getDefs} = require('./helpers');

let buildDefs = function(game) {
    let generatorFolder = path.resolve(__dirname, game);
    fs.readdirSync(generatorFolder).forEach(file => {
        let filePath = path.resolve(generatorFolder, file);
        require(filePath)(game);
    });
};

let saveDefs = function(game) {
    let outputPath = path.resolve('data', `${game}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(getDefs()));
};

let saveIndividualDefs = function(game) {
    let defs = getDefs(),
        gamePath = path.resolve('data', game);
    fs.mkdirSync(gamePath);
    Object.keys(defs).forEach(key => {
        let filePath = path.resolve(gamePath, `${key}.json`);
        fs.writeFileSync(filePath, JSON.stringify(defs[key]));
    });
};

let generate = function(game, options = {}) {
    clearDefs();
    buildDefs(game);
    saveDefs(game);
    if (options.saveIndividualDefs) saveIndividualDefs(game);
};

module.exports = { generate };