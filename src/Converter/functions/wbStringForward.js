let {functionConverter} = require('../converters'),
    {sizeLine, args} = require('../helpers');

functionConverter('wbStringForward', [
    args.sig,
    args.name,
    args.size,
    args.conflictPriority,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier
], ({sig, name, size}, converter) => {
    converter.addRequires('subrecord', 'string');
    let line = sizeLine(size, `string(${name})`, converter);
    return `subrecord('${sig}', ${line})`;
});
