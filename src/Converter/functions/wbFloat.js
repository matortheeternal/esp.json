let {subrecordAndField, functionConverter} = require('../converters'),
    {args, scaleLine, reqLine} = require('../helpers');

subrecordAndField('wbFloat', [
    args.name,
    args.conflictPriority,
    args.required,
    { type: 'mathExpr', name: 'scale' },
    { type: 'mathExpr', name: 'digits' },
    args.identifier,
    args.identifier,
    args.number,
    args.identifier
], ({name, scale, required}, converter) => {
    converter.addRequires('float');
    let line = `float(${name})`;
    line = scaleLine(scale, line, converter);
    return reqLine(required, line, converter);
});

functionConverter('wbFloat', [
    args.name,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier,
    args.number,
    args.identifier
], ({name, required}, converter) => {
    converter.addRequires('float');
    let line = `float(${name})`;
    return reqLine(required, line, converter);
});
