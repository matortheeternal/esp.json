let fs = require('fs'),
    path = require('path'),
    {clearDefs, getDefs} = require('./helpers');

let buildDefs = function(defGame, folderName) {
    let generatorFolder = path.resolve(__dirname, folderName);
    if (!fs.lstatSync(generatorFolder).isDirectory()) return;
    fs.readdirSync(generatorFolder).forEach(file => {
        let filePath = path.resolve(generatorFolder, file);
        if (fs.lstatSync(filePath).isDirectory()) return;
        require(filePath)(defGame);
    });
};

let saveDefs = function(game) {
    let outputPath = path.resolve('data', `${game}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(getDefs()));
};

let saveIndividualDefs = function(game) {
    let defs = getDefs(),
        gamePath = path.resolve('data', game);
    if (!fs.existsSync(gamePath)) fs.mkdirSync(gamePath);
    Object.keys(defs).forEach(key => {
        let filePath = path.resolve(gamePath, `${key}.json`);
        fs.writeFileSync(filePath, JSON.stringify(defs[key], null, 4));
    });
};

let generate = function(game, options = {}) {
    clearDefs();
    let defsFolder = options.buildFrom || game;
    buildDefs(game, defsFolder);
    buildDefs(game, path.join(defsFolder, 'extra'));
    saveDefs(game);
    if (options.saveIndividualDefs) saveIndividualDefs(game);
};

module.exports = { generate };
