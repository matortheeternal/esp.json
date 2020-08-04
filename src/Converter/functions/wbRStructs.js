let {functionConverter} = require('../converters'),
    {args, reqLine, newLine} = require('../helpers');

functionConverter('wbRStructs', [
    args.name,
    { type: 'string', name: 'structName' },
    args.members,
    args.signatures,
    args.conflictPriority,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, structName, members, required}, converter) => {
    converter.addRequires('memberArray', 'memberStruct');
    let memberStructArg = `memberStruct(${structName}, ${members})`,
        line = `memberArray(${name}, ${newLine(memberStructArg)})`;
    return reqLine(required, line, converter);
});
