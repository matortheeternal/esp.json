let {subrecordAndField, functionConverter} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbString', [
    args.name,
    args.size,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, size}, converter) => {
    converter.addRequires('string');
    let sizeArg = size ? ', ' + size : '';
    return `string('${name}'${sizeArg})`;
});

functionConverter('wbString', [
    args.boolean,
    args.name,
    args.size
], ({name, size}, converter) => {
    converter.addRequires('string');
    let sizeArg = size ? ', ' + size : '';
    return `string('${name}'${sizeArg})`;
});