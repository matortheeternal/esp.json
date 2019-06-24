let {functionConverter} = require('../converters'),
    {sizeLine, reqLine, args} = require('../helpers');

// Localized string with sort key support
functionConverter('wbLStringKC', [
    args.sig,
    args.name,
    args.size,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, sig, size, required}, converter) => {
    converter.addRequires('subrecord', 'localized', 'string');
    let line = sizeLine(size, `localized(string(${name}))`, converter);
    line = `subrecord('${sig}', ${line})`;
    return reqLine(required, line, converter);
});
