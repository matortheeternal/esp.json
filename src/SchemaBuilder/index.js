let fs = require('fs'),
    path = require('path');

let read = function(filePath) {
    console.log('Reading', filePath);
    let text = fs.readFileSync(filePath);
    return JSON.parse(text);
};

let forEachPropertyNested = function(obj, callback) {
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        if (callback(key, value, obj)) return;
        if (typeof value !== 'object') return;
        forEachPropertyNested(value, callback);
    });
};

let addDefinition = function(basePath, root, value, id) {
    root.definitions[id] = null;
    let filePath = path.resolve(basePath, value),
        schema = build(filePath, root);
    delete schema['$id'];
    delete schema['$schema'];
    root.definitions[id] = schema;
};

let idFromPath = function(filePath) {
    let filename = filePath.split('/').pop();
    return filename.split('.').shift();
};

let bundle = function(basePath, root, key, value, parent) {
    if (key !== '$ref') return;
    let id = idFromPath(value);
    parent[key] = `#/definitions/${id}`;
    if (root.definitions.hasOwnProperty(id)) return;
    addDefinition(basePath, root, value, id);
};

let build = function(filePath, root) {
    let schema = read(filePath),
        basePath = path.resolve(filePath, '..');
    if (!root) schema.definitions = {};
    forEachPropertyNested(schema, (key, value, parent) => {
        return bundle(basePath, root || schema, key, value, parent);
    });
    return schema;
};

module.exports = { build };
