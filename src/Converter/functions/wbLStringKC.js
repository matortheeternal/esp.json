let {functionConverter} = require('../converters'),
    {reqLine, args} = require('../helpers');

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
    converter.addRequires('subrecord', 'string');
    let sizeArg = size ? ', ' + size : '',
        line = `subrecord('${sig}', string(${name}${sizeArg}))`;
    return reqLine(required, line, converter);
});