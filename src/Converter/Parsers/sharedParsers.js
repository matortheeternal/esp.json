let {
    addLine, LineExpr, convertStr, strExpr
} = require('../output');

let flagWidth = 20;

let flagParser = {
    name: 'Flag',
    expr: LineExpr(`(?:{(0x[0-9A-F]+)})?\\s*${strExpr},?`),
    process: function(match) {
        let name = match[2] || match[1],
            codeLine = `'${convertStr(name)}',`,
            commentSpace = ' '.repeat(flagWidth - codeLine.length),
            comment = match[2] ? `// ${match[1]}` : '';
        addLine(codeLine + commentSpace + comment);
    }
};

module.exports = { flagParser };