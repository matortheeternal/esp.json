let {subrecordAndField} = require('../converters'),
    {args, sizeLine, prefixLine, newLine} = require('../helpers');

let prefixes = {
    '-1': 4,
    '-2': 2,
    '-4': 1
};

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
    let prefix = prefixes[size] || 0,
        line = `array(${name}, ${newLine(element)})`;
    line = sizeLine(size, line, converter);
    return prefixLine(prefix, line, converter);
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
