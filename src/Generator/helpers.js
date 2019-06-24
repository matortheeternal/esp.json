let defs = {};

let addDef = (id, def) => defs[id] = def;
let getDefs = () => defs;
let clearDefs = () => defs = {};
let IsSSE = (game, a, b) => game === 'SSE' ? a : b;

// meta
let req = obj => (obj.required = true) && obj;
let def = (def, opts) => ({ def, ...opts });
let opts = (obj, opts) => ({ ...obj, ...opts });
let sortKey = (sortKey, obj) => (obj.sortKey = sortKey) && obj;
let format = (obj, format) => (obj.format = format) && obj;
let div = value => ({ type: 'divide', value });

// data structures
let record = (signature, name, def) => addDef(signature,
    ({ signature, type: 'record', name, def })
);

let subrecord = (signature, def) =>
    ({ signature, type: 'subrecord', def });
let arrayOfSubrecord = (name, subrecord, sortKey) =>
    ({ name, type: 'subrecordArray', subrecord, sortKey });
let arrayOfStruct = (name, entryName, subrecords) =>
    ({ name, type: 'structArray', entryName, subrecords });
let multiStruct = (name, subrecords) =>
    ({ name, type: 'multiStruct', subrecords });
let multiUnion = (name, subrecords) =>
    ({ name, type: 'multiUnion', subrecords });

let struct = (name, fields) =>
    ({ name, type: 'struct', fields });
let array = (name, entryDef, size = 0) =>
    ({ name, entryDef, type: 'array', size });
let union = (name, decider, elements) =>
    ({ name, type: 'union', decider, elements });

// variable length data
let bytes = (name, size = 0) => ({ name, type: 'bytes', size });
let unknown = (size = 0) => ({ name: 'Unknown', type: 'bytes', size });
let string = (name, maxSize = 0) => ({ name, type: 'string', maxSize });
let cstring = (name, maxSize = 0) => ({ name, type: 'cstring', maxSize });

// fixed length data
let float = (name, formatter = '') => ({ name, type: 'float', formatter });
let int0 = name => ({ name, type: 'int0' });
let int8 = name => ({ name, type: 'int8' });
let uint8 = name => ({ name, type: 'uint8' });
let int16 = name => ({ name, type: 'int16' });
let uint16 = name => ({ name, type: 'uint16' });
let int32 = name => ({ name, type: 'int32' });
let uint32 = name => ({ name, type: 'uint32' });
let formId = name => ({ name, type: 'formId' });
let ckFormId = (name, signatures) => ({ name, type: 'formId', signatures });
let empty = name => ({ name, type: 'empty' });

module.exports = {
    addDef, getDefs, clearDefs, IsSSE,
    req, def, opts, sortKey, format, div,
    record, subrecord,
    arrayOfSubrecord, arrayOfStruct, multiStruct, multiUnion,
    struct, array, union,
    bytes, unknown, string, cstring,
    float, int0, int8, uint8, int16, uint16, int32, uint32,
    formId, ckFormId, empty
};
