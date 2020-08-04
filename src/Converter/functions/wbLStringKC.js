let {functionConverter} = require('../converters'),
    {sizeLine, reqLine, optsLine, args} = require('../helpers');

// Localized string with sort key support
functionConverter('wbLStringKC', [
    args.sig,
    args.name,
    args.size,
    args.conflictPriority,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, sig, size, required}, converter) => {
    converter.addRequires('subrecord', 'localized', 'string');
    let line = `localized(string(${name}))`;
    line = optsLine({keepCase: true}, line, converter);
    line = sizeLine(size, line, converter);
    line = `subrecord('${sig}', ${line})`;
    return reqLine(required, line, converter);
});
