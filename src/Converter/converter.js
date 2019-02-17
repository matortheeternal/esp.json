let fs = require('fs'),
    recordParser = require('./Parsers/recordParser');

let fileParsers = [recordParser],
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

let convertAny = function(parsers, code) {
    let parser = parsers.find(parser => parser.expr.test(code));
    if (!parser) return code;
    //console.log(`Converting ${parser.name}`);
    code = convert(parser, code);
    return convertAny(parsers, code);
};

let convertEnd = function(parser, code) {
    if (!parser.end.expr.test(code))
        throw new Error(`Failed to convert ${parser.name},\n${codeSnippet()}`);
    return convert(parser.end, code);
};

let convert = function(parser, code) {
    let match = code.match(parser.expr);
    if (!match) return;
    pos += match[0].length;
    code = code.slice(match[0].length);
    parser.process(match);
    if (parser.then) code = convertAny(parser.then, code);
    if (parser.end) code = convertEnd(parser, code);
    return code;
};

let convertFileCode = function(filename, code) {
    let parser = fileParsers.find(parser => parser.expr.test(code));
    if (!parser)
        throw new Error(`No parser found for:\n${codeSnippet()}`);
    console.log(`Converting ${parser.name}`);
    code = convert(parser, code);
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