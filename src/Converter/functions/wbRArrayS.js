let {functionConverter} = require('../converters'),
    {args, reqLine} = require('../helpers');

functionConverter('wbRArrayS', [
    args.name,
    args.field,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, element, required}, converter) => {
    converter.addRequires('arrayOfSubrecord');
    let line = `arrayOfSubrecord('${name}', ${element})`;
    return reqLine(required, line, converter);
});