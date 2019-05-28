let {subrecordAndField} = require('../converters'),
    {args, resolveIntFn} = require('../helpers');

let wbIntegerConvert = ({name, format, intType}, converter) => {
    let intFn = resolveIntFn(intType),
        hasFormat = format && format !== 'null',
        nameArg = name.startsWith('IsSSE(') ? name : `'${name}'`;
    converter.addRequires(intFn);
    let line = `${intFn}(${nameArg})`;
    if (hasFormat) {
        converter.addRequires('format');
        return `format(${line}, ${format})`;
    }
    return line;
};

subrecordAndField('wbInteger', [
    { type: 'stringExpr', name: 'name' },
    args.intType,
    args.integerFormat,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.number
], wbIntegerConvert);

subrecordAndField('wbInteger', [
    { type: 'stringExpr', name: 'name' },
    args.intType,
    args.integerFormat,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], wbIntegerConvert);