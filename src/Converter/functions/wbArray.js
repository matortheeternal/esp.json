let {subrecordAndField} = require('../converters'),
    {args, prefixSize, getCountLine, newLine} = require('../helpers');

subrecordAndField('wbArray', [
    args.name,
    args.field,
    args.size,
    args.identifier,
    args.identifier,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, element, size}, converter) => {
    converter.addRequires('array');
    let line = `array(${name}, ${newLine(element)})`;
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
    return getCountLine(getCount, line, converter);
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
    return getCountLine(getCount, line, converter);
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
    return getCountLine(getCount, line, converter);
});
