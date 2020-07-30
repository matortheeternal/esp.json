let {functionConverter} = require('../converters'),
    {reqLine, sizeLine, optsLine, args} = require('../helpers');

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
    converter.addRequires('subrecord', 'string');
    let line = sizeLine(size, `string(${name})`, converter);
    line = optsLine({keepCase: true}, line, converter);
    line = `subrecord('${sig}', ${line})`;
    return reqLine(required, line, converter);
});
