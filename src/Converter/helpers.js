let args = {
    sig: { type: 'signature', name: 'sig' },
    name: { type: 'string', name: 'name' },
    labels: { type: 'array of string', name: 'labels' },
    signatures: { type: 'array of signature', name: 'signatures' },
    moreSignatures: { type: 'array of signature', name: 'moreSignatures' },
    field: { type: 'field', name: 'element' },
    member: { type: 'member', name: 'member' },
    fields: { type: 'array of field', name: 'fields' },
    members: { type: 'array of member', name: 'members' },
    arrayOfFlags: { type: 'array of flags', name: 'flags' },
    identifier: { type: 'identifier' },
    conflictPriority: { type: 'conflictPriority', name: 'conflictPriority' },
    decider: { type: 'identifier', name: 'decider' },
    getCount: { type: 'identifier', name: 'getCount' },
    required: { type: 'boolean', name: 'required' },
    boolean: { type: 'boolean' },
    string: { type: 'string' },
    number: { type: 'number' },
    size: { type: 'number', name: 'size' },
    prefix: { type: 'number', name: 'prefix' },
    sk: { type: 'array of number', name: 'sk' },
    elementMap: { type: 'array of number', name: 'elementMap' },
    exSk: { type: 'array of number', name: 'exSk' },
    intType: { type: 'intType', name: 'intType' },
    integerFormat: { type: 'integerFormat', name: 'format' },
    flagsFn: { type: 'function', id: 'wbFlags', name: 'flags' },
    flags: { type: 'flags', name: 'flags' },
    enumFn: { type: 'function', id: 'wbEnum', name: 'options' },
    enum: { type: 'enum', name: 'options' }
};

let prefixes = {
    '-1': 4,
    '-2': 2,
    '-4': 1
};

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

let prefixLine = function(prefix, line, converter) {
    if (!prefix) return line;
    converter.addRequires('prefix');
    return `prefix(${prefix}, ${line})`;
};

let prefixSize = function(size, line, converter, bArray = false) {
    let prefix = prefixes[size] || 0;
    line = sizeLine(size, line, converter, bArray);
    return prefixLine(prefix, line, converter);
};

let paddingLine = function(prefix, line, converter) {
    if (prefix > 0) return line;
    converter.addRequires('padding');
    return `padding(1, ${line})`;
};

let formatLine = function(format, line, converter) {
    if (!format || format === 'null' || format === "'nil'")
        return line;
    converter.addRequires('format');
    return `format(${line}, ${format})`;
};

let scaleLine = function(scale, line, converter) {
    if (!scale || scale.str === '1') return line;
    if (scale.type === 'identifier')
        return formatLine(`'${scale.str}'`, line, converter);
    converter.addRequires('scale');
    return `scale(${scale}, ${line})`;
};

let getCountLine = function(getCount, line, converter) {
    if (!getCount) return line;
    converter.addRequires('getCount');
    return `getCount('${getCount}', ${line})`;
};

let reqLine = function(required, line, converter) {
    if (!required) return line;
    converter.addRequires('req');
    return `req(${line})`;
};

let optsLine = function(opts, line, converter) {
    if (Object.keys(opts).length === 0) return line;
    converter.addRequires('opts');
    return `opts(${line}, ${JSON.stringify(opts, null, 4)})`;
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
    args, indent, arr, inlineArr, mixedArr, stringify, newLine,
    sizeLine, prefixLine, prefixSize, paddingLine, scaleLine,
    getCountLine, formatLine, reqLine, optsLine, optsReq,
    resolveIntFn, lineBreak, tab
};
