let path = require('path'),
    fs = require('fs'),
    recordConverter = require('./Converters/recordConverter'),
    variableConverter = require('./Converters/variableConverter'),
    {commentConverter} = require('./Converters/sharedConverters');

let fileConverters = [recordConverter, variableConverter, commentConverter],
    pos = 0,
    fileCode;

let chompWhitespace = function() {
    let match = fileCode.slice(pos).match(/\s+/);
    if (match) pos += match[0].length;
};

let codeSnippet = function() {
    chompWhitespace();
    let lines = fileCode.split('\n'),
        searchPos = 0,
        lineNumber = lines.findIndex(line => {
            searchPos += line.length + 1; // +1 for newline
            return searchPos >= pos;
        }),
        line = lines[lineNumber],
        lineStartPos = searchPos - (line.length + 1), // +1 for newline
        errorPos = pos - lineStartPos,
        caret = ' '.repeat(errorPos) + '^';
    return `Line ${lineNumber + 1}:\n${line}\n${caret}`;
};

let convertAny = function(converters, code) {
    let converter = converters.find(converter => converter.expr.test(code));
    if (!converter) return code;
    //console.log(`Converting ${converter.name}`);
    code = convert(converter, code);
    return convertAny(converters, code);
};

let convertEnd = function(converter, code) {
    if (!converter.end.expr.test(code))
        throw new Error(`Failed to convert ${converter.name},\n${codeSnippet()}`);
    return convert(converter.end, code);
};

let convert = function(converter, code) {
    let match = code.match(converter.expr);
    if (!match) return;
    pos += match[0].length;
    code = code.slice(match[0].length);
    converter.process(match);
    if (converter.then) code = convertAny(converter.then, code);
    if (converter.end) code = convertEnd(converter, code);
    return code;
};

let convertFileCode = function(filename, code) {
    let converter = fileConverters.find(converter => converter.expr.test(code));
    if (!converter)
        throw new Error(`No converter found for:\n${codeSnippet()}`);
    console.log(`Converting ${converter.name}`);
    code = convert(converter, code);
    if (code === '')
        return console.log(`${filename} converted successfully`);
    convertFileCode(filename, code);
};

let convertFile = function(filename) {
    let filePath = path.resolve(__dirname, 'Input', filename);
    console.log('Reading ' + filePath);
    fileCode = fs.readFileSync(filePath, 'utf8');
    // console.log(`--- Read ${fileCode.length} characters ---\n`, fileCode);
    if (!fileCode)
        throw new Error(`Failed to read file ${filePath}`);
    convertFileCode(filename, fileCode);
};

module.exports = { convertFile };