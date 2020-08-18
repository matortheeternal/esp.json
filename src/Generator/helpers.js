let defs = {};
let metaDefs = {};
let groupOrder = [];

let separatePropsByType = (s, a, obj) => {
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        let target = typeof value === 'object' ? a : s;
        target[key] = value;
    });
}

let merge = (obj1, obj2) => {
    let s = {};
    let a = {};
    separatePropsByType(s, a, obj1);
    separatePropsByType(s, a, obj2);
    return Object.assign(s, a);
};

// meta
let addDef = (id, def) => defs[id] = def;
let getDefs = () => defs;
let addMetaDef = (id, def) => metaDefs[id] = def;
let getMetaDefs = () => metaDefs;
let setGroupOrder = (order) => groupOrder = order;
let getGroupOrder = () => groupOrder;
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
let req = obj => merge(obj, {required: true});
let def = (id, opts) => ({id, ...opts});
let opts = (obj, opts) => merge(obj, opts);
let sortKey = (sortKey, obj) => merge(obj, {sortKey});
let inherit = (inheritFrom, obj) => merge(obj, {inheritFrom});

// arrays and strings
let localized = obj => merge(obj, {localized: true});
let sorted = obj => merge(obj, {sorted: true});
let size = (size, obj) => merge(obj, {size});
let count = (count, obj) => merge(obj, {count});
let prefix = (prefix, obj) => merge(obj, {prefix});
let padding = (padding, obj) => merge(obj, {padding});
let labels = (obj, labels) => merge(obj, {count: labels.length, labels});
let counter = (type, options = {}) => ({type, ...options});
let elementCounter = (path, obj) => merge({
    counter: counter("elementCounter", {path})
}, obj);
let customCounter = (type, obj) => merge({
    counter: counter(type)
}, obj);

// number formatting
let format = (obj, format) => merge(obj, {format});
let div = value => ({ type: 'divide', value });
let scale = (scale, obj) => merge(obj, {scale});
let flags = flags => ({ type: 'flags', flags });
let showUnknown = obj => merge(obj, {showUnknown: true});
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
let ctdaFunctions = ctdaFunctions => addDef('CTDAFunctions', {
    type: 'ctdaFunctions', ctdaFunctions
});
let ctdaFunction = (index, name) => ({ type: 'ctdaFunction', index, name});

module.exports = {
    addDef, getDefs, clearDefs, forEachDef, IsSSE,
    addMetaDef, getMetaDefs, getGroupOrder, setGroupOrder,
    req, def, opts, sortKey, inherit,
    localized, sorted, size, count, prefix, padding, labels,
    elementCounter, customCounter,
    format, div, scale, flags, showUnknown, enumeration, formatUnion,
    record, subrecord,
    memberArray, memberStruct, memberUnion,
    struct, array, union,
    bytes, string, float,
    int0, int8, uint8, int16, uint16, int32, uint32,
    formId, ckFormId, unknown, empty, ctdaFunctions, ctdaFunction
};
