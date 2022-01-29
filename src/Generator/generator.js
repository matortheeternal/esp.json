let fs = require('fs'),
    path = require('path'),
    {exec} = require('child_process'),
    {loadFilesFromFolder} = require('../loader'),
    {clearDefs, getDefs} = require('./helpers');

let buildDefs = function(defGame, folderName) {
    loadFilesFromFolder(`Generator/${folderName}`, (filename, file) => {
        file(defGame);
    });
};

let getSubmoduleStatus = function() {
    return new Promise((resolve, reject) => {
        exec('git submodule status', (error, stdout) => {
            if (error) return reject(error);
            resolve(stdout);
        });
    });
};

let getXEditInfo = async () => {
    let status = await getSubmoduleStatus();
    let [commit, repo, tag] = status.trim().split(' ');
    return { commit: commit.slice(0, 8), repo, tag };
};

let getBuildId = function() {
    let user = process.env.BUILD_AUTHOR || process.env.USER,
        timestamp = Math.floor(new Date() / 1000).toString(16);
    return `${user}-${timestamp}`;
};

let getBuildInfo = async (flags) => ({
    id: getBuildId(),
    flags,
    xedit: await getXEditInfo()
});

let saveFormattedDefs = function(game, gameDefs) {
    let outputPath = path.resolve('data', `${game}.formatted.json`);
    fs.writeFileSync(outputPath, JSON.stringify(gameDefs, null, 4));
};

let saveDefs = async function(game, options) {
    let outputPath = path.resolve('data', `${game}.json`);
    let gameDefs = {
        game: game,
        build: await getBuildInfo(options.buildFlags || []),
        defs: getDefs()
    };
    fs.writeFileSync(outputPath, JSON.stringify(gameDefs));
    if (options.saveFormattedDefs) saveFormattedDefs(game, gameDefs);
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
    buildDefs(game, path.join(defsFolder, 'adjustments'));
    saveDefs(game, options);
    if (options.saveIndividualDefs) saveIndividualDefs(game);
};

module.exports = { generate };
