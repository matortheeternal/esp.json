let {subrecordAndField, functionConverter} = require('../converters'),
    {args, prefixSize, newLine} = require('../helpers');

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
    return prefixSize(size, line, converter);
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
