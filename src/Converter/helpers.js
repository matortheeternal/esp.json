let intFunctions = {
    it0: 'int0',
    itU8: 'uint8',
    itU16: 'uint16',
    itU32: 'uint32',
    itS8: 'int8',
    itS16: 'int16',
    itS32: 'int32'
};

const lineBreak = '\n';
const tabSize = 4;
const tab = ' '.repeat(tabSize);

let isNull = value => !value || value === 'null' || value === "'nil'";

let indent = function(str) {
    return tab + str.split(lineBreak).join(lineBreak + tab);
};

let arr = function(a) {
    return '[' + lineBreak +
        a.map(indent).join(',' + lineBreak) + lineBreak +
    ']';
};

let inlineArr = function(a) {
    return `[${a.join(', ')}]`;
};

let mixedArr = function(a, targetLength) {
    let s = '[';
    a.forEach((entry, index) => {
        if (index > 0) s += ',';
        let newLine = index % targetLength === 0;
        s += newLine ? lineBreak : ' ';
        s += newLine ? indent(entry) : entry;
    });
    s += lineBreak + ']';
    return s;
};

let stringify = function(obj) {
    let s = '{' + lineBreak;
    Object.keys(obj).forEach((key, index) => {
        if (index > 0) s += ',' + lineBreak;
        let keyStr = key.includes('-') ? `"${key}": ` : key + ': ';
        s += indent(keyStr + obj[key]);
    });
    s += lineBreak + '}';
    return s;
};

let newLine = function(str) {
    return lineBreak + indent(str) + lineBreak;
};

let sizeLine = function(size, line, converter, bArray) {
    let isVariable = !size && (!bArray || size !== 0);
    if (isVariable || size < 0) return line;
    converter.addRequires('size');
    return `size(${size}, ${line})`;
};

let countLine = function(count, line, converter) {
    let isVariable = !count && count !== 0;
    if (isVariable || count < 0) return line;
    converter.addRequires('count');
    return `count(${count}, ${line})`;
};

let prefixLine = function(prefix, line, converter) {
    if (!prefix) return line;
    converter.addRequires('prefix');
    return `prefix(${prefix}, ${line})`;
};

let paddingLine = function(prefix, line, converter) {
    if (prefix > 0) return line;
    converter.addRequires('padding');
    return `padding(1, ${line})`;
};

let formatLine = function(format, line, converter) {
    if (isNull(format)) return line;
    converter.addRequires('format');
    return `format(${line}, ${format})`;
};

let customCounterLine = function(counterType, line, converter) {
    if (!counterType) return line;
    converter.addRequires('customCounter');
    return `customCounter('${counterType}', ${newLine(line)})`;
};

let elementCounterLine = function(path, line, converter) {
    if (!path) return line;
    converter.addRequires('elementCounter');
    return `elementCounter(${path}, ${newLine(line)})`;
};

let optsLine = function(opts, line, converter) {
    if (Object.keys(opts).length === 0) return line;
    converter.addRequires('opts');
    return `opts(${line}, ${JSON.stringify(opts, null, 4)})`;
};

let reqLine = function(required, line, converter) {
    if (!required) return line;
    converter.addRequires('req');
    return `req(${line})`;
};

let optsReq = function(args, opts, line, converter) {
    line = reqLine(args.required, line, converter);
    return optsLine(opts, line, converter);
};

let resolveIntFn = function(intType) {
    let intFn = intFunctions[intType];
    if (!intFn) throw new Error(`No function found for ${intType}`);
    return intFn;
};

module.exports = {
    isNull, indent, arr, inlineArr, mixedArr, stringify, newLine,
    sizeLine, countLine, prefixLine, paddingLine,
    customCounterLine, elementCounterLine, formatLine,
    optsLine, optsReq, resolveIntFn, lineBreak, tab
};
