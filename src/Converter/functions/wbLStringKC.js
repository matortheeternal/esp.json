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
    converter.addRequires('subrecord', 'lstringkc');
    let line = `subrecord('${sig}', lstringkc(${name}, ${size}))`;
    return reqLine(required, line, converter);
});