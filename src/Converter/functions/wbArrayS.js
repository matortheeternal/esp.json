let {subrecordAndField, functionConverter} = require('../converters'),
    {args, sizeLine, newLine} = require('../helpers');

// sorted array
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
    converter.addRequires('sorted', 'array');
    let line = `sorted(array(${name}, ${newLine(element)}))`;
    return sizeLine(size, line, converter);
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
], ({name, element}, converter) => {
    converter.addRequires('sorted', 'array');
    return `sorted(array(${name}, ${newLine(element)}))`;
});
