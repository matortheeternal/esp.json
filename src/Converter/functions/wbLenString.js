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
    converter.addRequires('prefixLength', 'string');
    return `prefixLength(${size}, string(${name}))`;
});
