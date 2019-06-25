let defs = {};

// meta
let addDef = (id, def) => defs[id] = def;
let getDefs = () => defs;
let clearDefs = () => defs = {};
let IsSSE = (game, options) => game === 'SSE' ? options[0] : options[1];

// shared
let req = obj => (obj.required = true) && obj;
let def = (def, opts) => ({ def, ...opts });
let opts = (obj, opts) => ({ ...obj, ...opts });
let sortKey = (sortKey, obj) => (obj.sortKey = sortKey) && obj;

// arrays and strings
let localized = obj => ({ ...obj, localized: true });
let sorted = obj => ({ ...obj, sorted: true });
let size = (size, obj) => ({ ...obj, size});
let prefix = (prefix, obj) => ({ ...obj, prefix });

// number formatting
let format = (obj, format) => (obj.format = format) && obj;
let div = value => ({ type: 'divide', value });
let flags = flags => ({ type: 'flags', flags });
let showUnknown = obj => ({ ...obj, showUnknown: true });
let enumeration = options => ({type: 'enum', options });
let formatUnion = (decider, formats) =>
    ({ type: 'formatUnion', decider, formats, });

// structures
let record = (signature, name, def) => addDef(signature,
    ({ signature, type: 'record', name, def })
);
let subrecord = (signature, def) =>
    ({ signature, type: 'subrecord', def });

let arrayOfSubrecord = (name, subrecord) =>
    ({ name, type: 'subrecordArray', subrecord });
let arrayOfStruct = (name, entryName, subrecords) =>
    ({ name, type: 'structArray', entryName, subrecords });
let multiStruct = (name, subrecords) =>
    ({ name, type: 'multiStruct', subrecords });
let multiUnion = (name, subrecords) =>
    ({ name, type: 'multiUnion', subrecords });

let struct = (name, fields) =>
    ({ name, type: 'struct', fields });
let array = (name, entryDef) =>
    ({ name, entryDef, type: 'array' });
let union = (name, decider, elements) =>
    ({ name, type: 'union', decider, elements });

// base types
let string = (name) => ({ name, type: 'string' });
let bytes = name => ({ name, type: 'bytes' });
let float = name => ({ name, type: 'float' });
let int0 = name => ({ name, type: 'int0' });
let int8 = name => ({ name, type: 'int8' });
let uint8 = name => ({ name, type: 'uint8' });
let int16 = name => ({ name, type: 'int16' });
let uint16 = name => ({ name, type: 'uint16' });
let int32 = name => ({ name, type: 'int32' });
let uint32 = name => ({ name, type: 'uint32' });

// special types
let formId = name => ({ name, type: 'formId' });
let ckFormId = (name, signatures) => ({ name, type: 'formId', signatures });
let unknown = () => ({ name: 'Unknown', type: 'bytes' });
let empty = name => ({ name, type: 'empty' });

module.exports = {
    addDef, getDefs, clearDefs, IsSSE,
    req, def, opts, sortKey, localized,
    sorted, size, prefix,
    format, div, flags, showUnknown, enumeration, formatUnion,
    record, subrecord,
    arrayOfSubrecord, arrayOfStruct, multiStruct, multiUnion,
    struct, array, union,
    bytes, string, float,
    int0, int8, uint8, int16, uint16, int32, uint32,
    formId, ckFormId, unknown, empty
};
