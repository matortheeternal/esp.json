let path = require('path'),
    fs = require('fs'),
    {getDefs} = require('helpers');

let load = {
    arrays: ['PDTOs'],
    records: ['ACHR', 'GLOB', 'GMST', 'KYWD', 'TES4'],
    structs: ['ByteColors', 'Ownership', 'PositionRotation'],
    subrecord: ['CNAM', 'EDID', /*'VMAD', 'XESP', 'XRGB', 'XRGD', 'XSCL'*/]
};

Object.keys(load).forEach(folder => {
    load[folder].forEach(file => {
        require(`${folder}/${file}`)('TES5');
    })
});

let defs = getDefs();
// TODO: verify defs
let outputPath = path.resolve(__dirname, 'data', 'TES5.json');
fs.writeFileSync(outputPath, JSON.stringify(defs));
