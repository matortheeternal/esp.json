let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbLString', [
    args.name,
    args.number,
    args.identifier,
    args.required,
    args.identifier
], ({name}, converter) => {
    converter.addRequires('lstring');
    return `lstring(${name})`;
});