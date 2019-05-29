let {functionConverter} = require('../converters'),
    {args, reqLine, newLine} = require('../helpers');

functionConverter('wbRArrayS', [
    args.name,
    args.member,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, member, required}, converter) => {
    converter.addRequires('arrayOfSubrecord');
    let line = `arrayOfSubrecord(${name}, ${newLine(member)})`;
    return reqLine(required, line, converter);
});