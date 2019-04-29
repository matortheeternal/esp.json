let {addRequires, functionConverter} = require('../../converter'),
    {args, resolveIntFn} = require('../../helpers');

// subrecord
functionConverter('wbInteger', [
    args.sig,
    args.name,
    args.intType,
    args.integerFormat,
    args.identifier,
    args.required
], ({sig, name, intType, format, required}) => {
    let intFn = resolveIntFn(intType),
        formatArg = format ? ', ' + format : '',
        field = `${intFn}(${name}${formatArg})`;
    addRequires('subrecord', intFn);
    return reqLine(required, `subrecord('${sig}', ${field})`);
});

// subrecord flags
functionConverter('wbInteger', [
    args.sig,
    args.name,
    args.intType,
    args.flagsFn,
    args.required
], ({sig, name, intType, flags, required}) => {
    let flagsFn = resolveIntFn(intType, 'flags');
    addRequires('subrecord', flagsFn);
    return reqLine(required, `subrecord('${sig}', ${flagsFn}(` +
        `'${name}', ${arr(flags)}))`);
});

// field with inline flags
functionConverter('wbInteger', [
    args.name,
    args.intType,
    args.flagsFn
], ({name, intType, flags}) => {
    let flagsFn = resolveIntFn(intType, 'flags');
    return `${flagsFn}('${name}', ${arr(flags)})`;
});

// field with inline enum
functionConverter('wbInteger', [
    args.name,
    args.intType,
    args.enumFn
], ({name, intType, options}) => {
    let enumFn = resolveIntFn(intType, 'enum');
    return `${enumFn}('${name}', ${arr(options)})`;
});

// field
functionConverter('wbInteger', [
    args.name,
    args.intType,
    args.identifier,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, intType}) => {
    let intFn = resolveIntFn(intType);
    return `${intFn}('${name}')`;
});