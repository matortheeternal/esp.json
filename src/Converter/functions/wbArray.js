let {subrecordAndField} = require('../converters'),
    {args, newLine} = require('../helpers');

subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.size,
    args.identifier,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, element, size}, converter) => {
    converter.addRequires('array');
    let sizeArg = size ? ', ' + size : '';
    return `array(${name}, ${newLine(element)}${sizeArg})`;
});

// TODO: use labels?
subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.labels,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, element, labels}, converter) => {
    converter.addRequires('array');
    return `array(${name}, ${newLine(element)})`;
});