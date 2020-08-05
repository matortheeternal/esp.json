let {functionConverter} = require('../converters'),
    {args, afterSetLine, reqLine, newLine} = require('../helpers');

// sorted subrecord array
functionConverter('wbRArrayS', [
    args.name,
    args.member,
    args.conflictPriority,
    args.required,
    args.identifier,
    { type: 'identifier', name: 'afterSet' },
    args.identifier,
    args.identifier,
    args.identifier
], ({name, member, required, afterSet}, converter) => {
    converter.addRequires('sorted', 'memberArray');
    let line = `sorted(memberArray(${name}, ${newLine(member)}))`;
    line = afterSetLine(afterSet, line, converter);
    return reqLine(required, line, converter);
});
