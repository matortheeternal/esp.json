let defs = {};

let addDef = (id, def) => defs[id] = def;
let getDefs = () => defs;

// meta
let req = obj => (obj.required = true) && obj;
let def = def => ({ def });
let namedDef = (name, def) => ({ name, def });
let sortKey = (sortKey, obj) => (obj.sortKey = sortKey) && obj;

// data structures
let record = (signature, name, def) =>
    ({ signature, type: 'record', name, def });
let subrecord = (signature, def) =>
    ({ signature, type: 'subrecord', def });
let arrayOfSubrecord = (name, sortKey, subrecord) =>
    ({ name, type: 'sarray', subrecord, sortKey });
let multiArray = (name, entryName, subrecords) =>
    ({ name, type: 'marray', entryName, subrecords });
let multiStruct = (name, subrecords) =>
    ({ name, type: 'mstruct', subrecords });

let struct = (name, fields) =>
    ({ name, type: 'struct', fields });
let array = (name, entryDef, size = 0) =>
    ({ name, entryDef, type: 'array', size });
let union = (name, decider, elements) =>
    ({ name, type: 'union', decider, elements });

// variable length data
let bytes = (name, size = 0) => ({ name, type: 'bytes', size });
let unknown = (size = 0) => ({ name: 'Unknown', type: 'bytes', size });
let zstring = (name, maxSize = 0) => ({ name, type: 'zstring', maxSize });
let lstring = (name, maxSize = 0) => ({ name, type: 'lstring', maxSize });

// fixed length data
let float = (name, formatter = '') => ({ name, type: 'float', formatter });
let int8 = name => ({ name, type: 'int8' });
let uint8 = name => ({ name, type: 'uint8' });
let flags8 = (name, flags) => ({ name, type: 'flags8', flags });
let flags16 = (name, flags) => ({ name, type: 'flags16', flags });
let int32 = name => ({ name, type: 'int32' });
let flags32 = (name, flags) => ({ name, type: 'flags32', flags });
let enum32 = (name, options) => ({ name, type: 'enum32', options });
let formId = name => ({ name, type: 'formId' });
let ckFormId = (name, signatures) => ({ name, type: 'formId', signatures });
let empty = name => ({ name, type: 'empty' });

module.exports = {
    addDef, getDefs, req, def, namedDef, sortKey,
    record, subrecord, arrayOfSubrecord, multiArray, multiStruct,
    struct, array, union,
    bytes, unknown, zstring, lstring,
    float, int8, uint8, flags8, flags16, int32, flags32,
    enum32, formId, ckFormId, empty
};