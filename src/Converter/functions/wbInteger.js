let {subrecordAndField} = require('../converters'),
    {args, resolveIntFn, formatLine} = require('../helpers');

let wbIntegerConvert = ({name, format, intType}, converter) => {
    let intFn = resolveIntFn(intType),
        nameArg = name.startsWith('IsSSE(') ? name : `${name}`;
    converter.addRequires(intFn);
    return formatLine(format, `${intFn}(${nameArg})`, converter);
};

subrecordAndField('wbInteger', [
    { type: 'stringExpr', name: 'name' },
    args.intType,
    args.integerFormat,
    args.identifier,
    args.boolean,
    args.boolean,
    args.identifier,
    args.identifier
], wbIntegerConvert);

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
