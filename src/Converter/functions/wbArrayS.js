let {subrecordAndField, functionConverter} = require('../converters'),
    {args, prefixSize, afterSetLine, customCounterLine, newLine} = require('../helpers');

// sorted array
subrecordAndField('wbArrayS', [
    args.name,
    args.field,
    args.size,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    { type: 'identifier', name: 'afterSet' },
    args.identifier,
    args.identifier
], ({name, element, size, afterSet}, converter) => {
    converter.addRequires('sorted', 'array');
    let line = `sorted(array(${name}, ${newLine(element)}))`;
    line = afterSetLine(afterSet, line, converter);
    return prefixSize(size, line, converter);
});

functionConverter('wbArrayS', [
    args.name,
    args.field,
    args.getCount,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    { type: 'identifier', name: 'afterSet' },
    args.identifier,
    args.identifier
], ({name, element, getCount, afterSet}, converter) => {
    converter.addRequires('sorted', 'array');
    let line = `sorted(array(${name}, ${newLine(element)}))`;
    line = afterSetLine(afterSet, line, converter);
    return customCounterLine(getCount, line, converter);
});
