let {functionConverter} = require('../converters'),
    {reqLine, args} = require('../helpers');

functionConverter('wbStringKC', [
    args.sig,
    args.name,
    args.size,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, sig, size, required}, converter) => {
    converter.addRequires('subrecord', 'cstring');
    let sizeArg = size ? ', ' + size : '',
        line = `subrecord('${sig}', cstring(${name}${sizeArg}))`;
    return reqLine(required, line, converter);
});