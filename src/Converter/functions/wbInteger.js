let {subrecordAndField, functionConverter} = require('../converters'),
    {args, resolveIntFn} = require('../helpers');

functionConverter('wbInteger', [
    { type: 'stringExpr', name: 'name' },
    args.intType,
    args.integerFormat,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.number
], ({name, format, intType}, converter) => {
    let intFn = resolveIntFn(intType),
        formatArg = format ? `, ` + format : '';
    converter.addRequires(intFn);
    return `${intFn}('${name}'${formatArg})`;
});

subrecordAndField('wbInteger', [
    { type: 'stringExpr', name: 'name' },
    args.intType,
    args.integerFormat,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, format, intType}, converter) => {
    let intFn = resolveIntFn(intType),
        formatArg = format ? `, ` + format : '';
    converter.addRequires(intFn);
    return `${intFn}('${name}'${formatArg})`;
});