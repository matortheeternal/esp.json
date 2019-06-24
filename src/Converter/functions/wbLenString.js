let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbLenString', [
    args.name,
    args.size,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier
], ({name, size}, converter) => {
    converter.addRequires('prefix', 'string');
    return `prefix(${size || 4}, string(${name}))`;
});
