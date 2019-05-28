let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

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
    return `array('${name}', ${element}, ${size})`;
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
    return `array('${name}', ${element})`;
});