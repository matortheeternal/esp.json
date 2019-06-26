let path = require('path'),
    fs = require('fs'),
    Converter = require('./Converter');

let loadFiles = function(folderName) {
    let folderPath = path.resolve(__dirname, folderName),
        files = fs.readdirSync(folderPath);
    files.forEach(filename => {
        require(`./${folderName}/${filename}`);
    });
};

let convertProcedures = function(converter) {
    converter.convertRegions({
        start: /procedure Define\w+;\s+(var.+?)?begin/,
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

// load files
['functions', 'statements', 'types'].forEach(loadFiles);

module.exports = convertFile;