let defs = {};

// meta
let addDef = (id, def) => defs[id] = def;
let getDefs = () => defs;
let clearDefs = () => defs = {};
let forEachDef = (cb, a) => {
    let target = a || Object.values(defs);
    target.forEach(def => {
        cb(def);
        if (def.members) forEachDef(cb, def.members);
        if (def.elements) forEachDef(cb, def.elements);
        if (def.formats) forEachDef(cb, def.formats);
        if (def.member) forEachDef(cb, [def.member]);
        if (def.element) forEachDef(cb, [def.element]);
        if (def.format) forEachDef(cb, [def.format]);
    });
};
let IsSSE = (game, options) => game === 'SSE' ? options[0] : options[1];

// shared
let req = obj => ({ ...obj, required: true });
let def = (id, opts) => ({ id, ...opts });
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
let subrecord = (signature, element) => ({ signature, ...element });

let memberArray = (name, member) =>
    ({ name, type: 'memberArray', member });
let memberStruct = (name, members) =>
    ({ name, type: 'memberStruct', members });
let memberUnion = (name, members) =>
    ({ name, type: 'memberUnion', members });

let struct = (name, elements) =>
    ({ name, type: 'struct', elements });
let array = (name, element) =>
    ({ name, type: 'array', element });
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
let unknown = () => ({ type: 'bytes' });
let empty = name => ({ name, type: 'empty' });

module.exports = {
    addDef, getDefs, clearDefs, forEachDef, IsSSE,
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
