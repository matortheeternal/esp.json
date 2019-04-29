let path = require('path'),
    fs = require('fs');

let { isTrue } = require('./oldHelpers');

const tab = '    ';

let output;
let depth;

let newOutput = function(filename) {
    depth = 0;
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

let append = function(text, depthChange = 0) {
    let lastIndex = output.lines.length - 1;
    output.lines[lastIndex] += text;
    depth += depthChange;
};

let addLine = function(line, depthChange = 0) {
    if (depthChange < 0) depth += depthChange;
    output.lines.push(tab.repeat(depth) + line);
    if (depthChange > 0) depth += depthChange;
};

let addComment = function(comment, targetWidth = 60) {
    let lastIndex = output.lines.length - 1,
        line = output.lines[lastIndex],
        spaceWidth = Math.max(targetWidth - line.length, 0),
        commentSpace = ' '.repeat(spaceWidth);
    output.lines[lastIndex] += commentSpace + `// ${comment}`;
};

let addLineReq = function(req, line) {
    if (!isTrue(req)) return addLine(`${line},`);
    addRequires('req');
    addLine(`req(${line}),`);
};

let addBlankLine = () => output.lines.push('');

let getDepth = function(line) {
    let d = 0;
    while (line.startsWith(tab)) {
        d++;
        line = line.slice(tab.length);
    }
    return d;
};

let reqPrevious = function() {
    addRequires('req');
    let lastIndex = output.lines.length - 1,
        f = lastIndex - 1;
    for (; f >= 0; f--)
        if (getDepth(output.lines[f]) === depth) break;
    let trimmedLine = output.lines[f].slice(depth * tab.length);
    output.lines[f] = tab.repeat(depth) + `req(${trimmedLine}`;
    let lastLine = output.lines[lastIndex];
    output.lines[lastIndex] = lastLine.slice(0, -1) + '),';
};

module.exports = {
    newOutput, saveOutput, addRequires, append,
    addLine, addComment, addLineReq, addBlankLine, reqPrevious
};