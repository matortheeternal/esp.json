const tab = '    ';

let output;
let depth = 0;

let newOutput = function(filename) {
    return output = {
        filename,
        require: [],
        lines: []
    };
};

let saveOutput = function() {
    output.lines.unshift(
        `let {`,
        output.require.reduce((s, r, n) => {
            if (n % 5 === 0) s += n > 0 ? '\n' + tab : tab;
            s += r;
            if (n < output.require.length - 1) s += ', ';
            return s;
        }, ''),
        `} = require('../helpers');`
    );
    let filePath = path.resolve(__dirname, 'Output', output.filename);
    fs.writeFileSync(filePath, output.lines.join('\n'), { encoding: 'utf8' });
    output = undefined;
};

let addRequires = function(...a) {
    a.forEach(identifier => {
        if (output.require.includes(identifier)) return;
        output.require.push(identifier);
    });
};

let addLine = function(line, depthChange = 0) {
    if (depthChange < 0) depth += depthChange;
    output.lines.push(tab.repeat(depth) + line);
    if (depthChange > 0) depth += depthChange;
};

let addLineReq = function(req, line) {
    req ? addLine(`req(${line}),`) : addLine(`${line},`);
};

let addBlankLine = () => output.lines.push('');

let LineExpr = expr => new RegExp(`^\\s*${expr}`);
let convertStr = str => str.replace(/''/g, "\'");
let processAllowedSigs = str => {
    let sigStrs = str.split(',').map(s => `'${s.trim()}'`);
    return `[${sigStrs.join(', ')}]`;
};

let sigExpr = `([A-Z]{4})`;
let strExpr = `'([^']+|'')*'`;
let sigArrayExpr = `\\[([^\\]]+)\\]`;
let uintExpr = `itU(8|16|24|32|64)`;
let intExpr = `itS(8|16|24|32|64)`;

module.exports = {
    newOutput, saveOutput, addRequires,
    addLine, addLineReq, addBlankLine,
    LineExpr, convertStr, processAllowedSigs,
    sigExpr, strExpr, sigArrayExpr, uintExpr, intExpr
};