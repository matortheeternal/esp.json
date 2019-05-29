let {subrecordAndField, functionConverter} = require('../converters'),
    {args, newLine} = require('../helpers');

subrecordAndField('wbArrayS', [
    args.name,
    args.field,
    args.size,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, element, size}, converter) => {
    converter.addRequires('array');
    let sizeArg = size ? ', ' + size : '';
    return `array(${name}, ${newLine(element)}${sizeArg})`;
});

functionConverter('wbArrayS', [
    args.name,
    args.field,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, element, size}, converter) => {
    converter.addRequires('array');
    let sizeArg = size ? ', ' + size : '';
    return `array(${name}, ${newLine(element)}${sizeArg})`;
});