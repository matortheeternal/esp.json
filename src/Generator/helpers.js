let defs = {};

// meta
let addDef = (id, def) => defs[id] = def;
let deleteDef = id => delete defs[id];
let getDefs = () => defs;
let clearDefs = () => defs = {};
let IsSSE = (game, options) => game === 'SSE' ? options[0] : options[1];

// shared
let req = obj => ({ ...obj, required: true });
let def = (def, opts) => ({ def, ...opts });
let opts = (obj, opts) => ({ ...obj, ...opts });
let sortKey = (sortKey, obj) => ({ ...obj, sortKey });
let inherit = (inheritFrom, obj) => ({ ...obj, inheritFrom});

// arrays and strings
let localized = obj => ({ ...obj, localized: true });
let sorted = obj => ({ ...obj, sorted: true });
let size = (size, obj) => ({ ...obj, size});
let prefix = (prefix, obj) => ({ ...obj, prefix });

// number formatting
let format = (obj, format) => ({ ...obj, format });
let div = value => ({ type: 'divide', value });
let scale = (scale, obj) => ({ ...obj, scale });
let flags = flags => ({ type: 'flags', flags });
let showUnknown = obj => ({ ...obj, showUnknown: true });
let enumeration = options => ({type: 'enum', options });
let formatUnion = (decider, formats) =>
    ({ type: 'formatUnion', decider, formats, });

// structures
let record = (signature, name, def) => addDef(signature,
    { signature, type: 'record', name, ...def }
);
let subrecord = (signature, field) =>
    ({ signature, type: 'subrecord', field });

let memberArray = (name, member) =>
    ({ name, type: 'memberArray', member });
let memberStruct = (name, members) =>
    ({ name, type: 'memberStruct', members });
let memberUnion = (name, members) =>
    ({ name, type: 'memberUnion', members });

let struct = (name, fields) =>
    ({ name, type: 'struct', fields });
let array = (name, field) =>
    ({ name, type: 'array', field });
let union = (name, decider, fields) =>
    ({ name, type: 'union', decider, fields });

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
let unknown = () => ({ type: 'bytes' });
let empty = name => ({ name, type: 'empty' });

module.exports = {
    addDef, deleteDef, getDefs, clearDefs, IsSSE,
    req, def, opts, sortKey, inherit,
    localized, sorted, size, prefix,
    format, div, scale, flags, showUnknown, enumeration, formatUnion,
    record, subrecord,
    memberArray, memberStruct, memberUnion,
    struct, array, union,
    bytes, string, float,
    int0, int8, uint8, int16, uint16, int32, uint32,
    formId, ckFormId, unknown, empty
};
