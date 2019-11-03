let path = require('path'),
    fs = require('fs'),
    Converter = require('./Converter');

let convertProcedures = function(converter) {
    converter.convertRegions({
        start: /procedure Define\w+;[\s\S]+?^begin/m,
        end: /^end;/
    });
};

let convertFile = function(filename, game) {
    let filePath = path.resolve(__dirname, '..', '..', 'TES5Edit', filename),
        converter = new Converter(filePath, game);
    try {
        let outputFolder = path.resolve(__dirname, '..', 'Generator', game);
        if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);
        converter.setOutputFolder(outputFolder);
        convertProcedures(converter);
    } catch (x) {
        if (x.name === 'ParseError')
            console.error(converter.getCodeSnippet());
        console.error(x.stack);
    }
};

let loadFiles = function(folderName, files) {
    files.forEach(filename => {
        require(`./${folderName}/${filename}`);
    });
};

let loadFilesFromFolder = function(folderName) {
    let folderPath = path.resolve(__dirname, folderName),
        files = fs.readdirSync(folderPath);
    loadFiles(folderName, files);
};

module.exports = convertFile;

// load function and type converters
['functions', 'types'].forEach(loadFilesFromFolder);

// load statement converters
require('./statements/wbRecord');
require('./statements/wbRefRecord');
require('./statements/ReferenceRecord');
require('./statements/loadList');
require('./statements/ifGameMode');
require('./statements/ifSimpleRecords');
require('./statements/elseBegin');
require('./statements/MakeVarRecs');
require('./statements/CombineVarRecs');
require('./statements/assignment');
require('./statements/begin');
require('./statements/try');
require('./statements/unknown');
