let {functionConverter} = require('../converters'),
    {args, reqLine, newLine} = require('../helpers');

// sorted subrecord array
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
    converter.addRequires('sorted', 'memberArray');
    let line = `sorted(memberArray(${name}, ${newLine(member)}))`;
    return reqLine(required, line, converter);
});
