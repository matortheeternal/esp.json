let {addRequires} = require('./converter');

let args = {
    sig: { type: 'signature', name: 'sig' },
    name: { type: 'string', name: 'name' },
    signatures: { type: 'array of signature', name: 'signatures' },
    fields: { type: 'array of field', name: 'fields' },
    members: { type: 'array of member', name: 'members' },
    identifier: { type: 'identifier' },
    required: { type: 'boolean', name: 'required' },
    boolean: { type: 'boolean' },
    number: { type: 'number' },
    size: { type: 'number', name: 'size' },
    sk: { type: 'array of number', name: 'sk' },
    intType: { type: 'intType', name: 'intType' },
    integerFormat: { type: 'integerFormat', name: 'format' },
    flagsFn: { type: 'function', id: 'wbFlags', name: 'flags' },
    flags: { type: 'flags', name: 'flags' },
    enumFn: { type: 'function', id: 'wbEnum', name: 'options' },
    enum: { type: 'enum', name: 'options' }
};

let intFunctions = {
    integer: {
        itU8: 'uint8',
        itU16: 'uint16',
        itU32: 'uint32',
        itS8: 'int8',
        itS16: 'int16',
        itS32: 'int32'
    },
    flags: {
        itU8: 'flags8',
        itU16: 'flags16',
        itU32: 'flags32'
    },
    enum: {
        itU8: 'enum8',
        itU16: 'enum16',
        itU32: 'enum32'
    }
};

let indent = function(str) {
    return `\r\n    ${str.split('\r\n').join('\r\n    ')}\r\n`;
};

let arr = function(a) {
    return `[\r\n    ${a.join(',\r\n\    ')}\r\n]`;
};

let obj = function(a) {
    return `{\r\n    ${a.join(',\r\n    ')}\r\n}`;
};

let reqLine = function(required, line) {
    if (required) addRequires('req');
    return required ? `req(${line})` : line;
};

let resolveIntFn = function(intType, type = 'integer') {
    let intFn = intFunctions[type][intType];
    if (!intFn) throw new Error(`No function found for ${type}, ${intType}`);
    return intFn;
};

module.exports = { args, indent, arr, obj, reqLine, resolveIntFn };