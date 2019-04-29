let functions = {},
    types = {};

let functionConverter = function(name, args, convert) {
    if (!functions[name]) functions[name] = [];
    functions[name].push({ args, convert });
};

let typeConverter = function(name, convert) {
    types[name] = convert;
};

let addRequires = function() {
    // TODO
};

module.exports = { functionConverter, typeConverter, addRequires };