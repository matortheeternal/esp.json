let {subrecordAndField, functionConverter} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbFloat', [
    args.name,
    args.identifier,
    args.required,
    { type: 'mathExpr', name: 'scale' },
    { type: 'mathExpr', name: 'digits' },
    args.identifier,
    args.identifier,
    args.number,
    args.identifier
], ({name}, converter) => {
    converter.addRequires('float');
    return `float('${name}')`;
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
], ({name}, converter) => {
    converter.addRequires('float');
    return `float('${name}')`;
});