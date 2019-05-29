let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbLenString', [
    args.name,
    args.number,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier
], ({name}, converter) => {
    converter.addRequires('string');
    return `string(${name})`;
});