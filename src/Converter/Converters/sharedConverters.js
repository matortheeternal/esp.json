let { addLine } = require('../output');
let { LineExpr, convertStr, strExpr } = require('../helpers');

let flagParser = {
    name: 'Flag',
    expr: LineExpr(`(?:{(0x[0-9A-F]+)})?\\s*${strExpr},?`),
    process: function(match) {
        let name = match[2] || match[1];
        addLine(`'${convertStr(name)}',`);
        match[2] && addComment(`// ${match[1]}`);
    }
};

module.exports = { flagParser };