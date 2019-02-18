let path = require('path'),
    fs = require('fs'),
    {getDefs} = require('../src/Generator/helpers');

let TES5 = path.resolve(__dirname, '..', 'src', 'Generator', 'TES5'),
    files = fs.readdirSync(TES5);

files.forEach(file => {
    require(`../src/Generator/TES5/${file}`)('TES5')
});

let defs = getDefs(),
    outputPath = path.resolve(__dirname, '..', 'data', 'TES5.json');
fs.writeFileSync(outputPath, JSON.stringify(defs));
