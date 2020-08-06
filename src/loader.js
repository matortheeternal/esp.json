let path = require('path'),
    fs = require('fs');

let loadFilesFromFolder = function(folderName, callback) {
    let folderPath = path.resolve(__dirname, folderName);
    if (!fs.lstatSync(folderPath).isDirectory()) return;
    fs.readdirSync(folderPath).forEach(filename => {
        let filePath = path.resolve(folderPath, filename);
        if (fs.lstatSync(filePath).isDirectory()) return;
        let file = require(filePath);
        if (callback) callback(filename, file);
    });
};

let loadFilesToDictionary = function(folderName) {
    let dictionary = {};
    loadFilesFromFolder(folderName, (filename, file) => {
        dictionary[path.basename(filename, '.js')] = file;
    });
    return dictionary;
};

module.exports = {loadFilesFromFolder, loadFilesToDictionary};
