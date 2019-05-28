let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbStringForward', [
    args.sig,
    args.name,
    args.size,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier
], ({sig, name, size}, converter) => {
    converter.addRequires('subrecord', 'string');
    let sizeArg = size ? ', ' + size : '';
    return `subrecord('${sig}', string('${name}'${sizeArg}))`;
});