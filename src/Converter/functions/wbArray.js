let {subrecordAndField} = require('../converters'),
    {args, prefixSize, afterSetLine, customCounterLine, newLine} = require('../helpers');

subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.size,
    args.identifier,
    { type: 'identifier', name: 'afterSet' },
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, element, size, afterSet}, converter) => {
    converter.addRequires('array');
    let line = `array(${name}, ${newLine(element)})`;
    line = afterSetLine(afterSet, line, converter);
    return prefixSize(size, line, converter);
});

subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.size,
    args.conflictPriority
], ({name, element, size}, converter) => {
    converter.addRequires('array');
    let line = `array(${name}, ${newLine(element)})`;
    return prefixSize(size, line, converter);
});

// TODO: use labels?
subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.labels,
    args.getCount,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, element, labels, getCount}, converter) => {
    converter.addRequires('array');
    let line = `array(${name}, ${newLine(element)})`;
    return customCounterLine(getCount, line, converter);
});

subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.labels,
    args.conflictPriority,
    args.boolean
], ({name, element, labels, getCount}, converter) => {
    converter.addRequires('array');
    let line = `array(${name}, ${newLine(element)})`;
    return customCounterLine(getCount, line, converter);
});

subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.getCount,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, element, getCount}, converter) => {
    converter.addRequires('array');
    let line = `array(${name}, ${newLine(element)})`;
    return customCounterLine(getCount, line, converter);
});
