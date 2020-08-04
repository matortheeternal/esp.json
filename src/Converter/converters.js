let ParseError = require('./ParseError'),
    {optsReq} = require('./helpers');

let functionExpr = /^(\w+)\s*\(/;

let functions = {},
    statements = {};

let functionConverter = function(name, args, convert ) {
    if (!functions[name]) functions[name] = [];
    functions[name].push({ args, convert });
};

let subrecordAndField = function(name, args, convert) {
    functionConverter(name, [
        { type: 'signature', name: 'sig' },
        ...args
    ], (args, converter, opts) => {
        converter.addRequires('subrecord');
        let field = convert(args, converter),
            line = `subrecord('${args.sig}', ${field})`;
        return optsReq(args, opts, line, converter);
    });

    functionConverter(name, args, (args, converter, opts) => {
        let line = convert(args, converter);
        return optsReq(args, opts, line, converter);
    });
};

let statementConverter = function(name, converter) {
    statements[name] = converter;
};

let convertStatement = function(converter) {
    let match = null;
    let stKey = Object.keys(statements).find(key => {
        match = statements[key].test(converter);
        return Boolean(match);
    });
    let stConverter = stKey && statements[stKey];
    if (!stConverter) throw new ParseError('Error parsing statement.');
    console.log('Parsing statement', stKey);
    converter.advance(match[0].length);
    converter.next();
    if (!stConverter.convert) return;
    stConverter.convert(converter, match);
};

let parseArguments = function(args, fnArgs, converter) {
    for (let i = args.length; i < fnArgs.length; i++) {
        let arg = fnArgs[i],
            value = converter.parseType(arg.type, arg);
        if (value === undefined) return false;
        //console.log(`Parsed argument ${i}, ${arg.type}: ${value}`);
        args[i] = arg;
        args.values[i] = value;
        if (arg.name) args[arg.name] = value;
        converter.next();
        if (converter.chomp(',')) continue;
        converter.next();
        return converter.chomp(')');
    }
};

let matchParsedArguments = function(args, fnArgs) {
    return args.find((arg, index) => {
        return fnArgs[index].type !== arg.type;
    }) === undefined;
};

let getFunctionName = function(converter) {
    let match = converter.match(functionExpr);
    if (!match) throw new ParseError('Expected function');
    let functionName = match[1];
    if (!functions[functionName]) throw new ParseError('Unknown function.');
    converter.advance(match[0].length);
    return functionName;
};

let getConverters = function(functionName) {
    functionName = functionName.toLowerCase();
    return Object.keys(functions).reduce((a, k) => {
        if (k.toLowerCase() !== functionName) return a;
        return a.concat(functions[k]);
    }, []);
};

let findConverter = function(functionName, args, converter) {
    let fnConverter = getConverters(functionName).find(fn => {
        return matchParsedArguments(args, fn.args) &&
            parseArguments(args, fn.args, converter);
    });
    if (!fnConverter)
        throw new ParseError(`Matching "${functionName}" function converter not found.`);
    return fnConverter;
};

let convertFunction = function(converter, functionName) {
    if (!functionName) functionName = getFunctionName(converter);
    //console.log(`Parsing function ${functionName}`);
    let opts = {},
        args = [];
    args.values = [];
    let fnConverter = findConverter(functionName, args, converter);
    if (converter.chomp('.')) opts = convertFunction(converter);
    converter.chomp(';');
    return fnConverter.convert(args, converter, opts);
};

module.exports = {
    functionConverter, subrecordAndField,
    statementConverter, convertStatement, convertFunction
};
