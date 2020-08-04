let {subrecordAndField, functionConverter} = require('../converters'),
    {args, prefixSize, getCountLine, newLine} = require('../helpers');

// sorted array
subrecordAndField('wbArrayS', [
    args.name,
    args.field,
    args.size,
    args.conflictPriority,
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
    args.getCount,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, element, getCount}, converter) => {
    converter.addRequires('sorted', 'array');
    let line = `sorted(array(${name}, ${newLine(element)}))`;
    return getCountLine(getCount, line, converter);
});
