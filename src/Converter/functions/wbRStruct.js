let {functionConverter} = require('../converters'),
    {reqLine, args} = require('../helpers');

functionConverter('wbRStruct', [
    args.name,
    args.members,
    args.signatures,
    args.identifier,
    args.required,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, members, required}, converter) => {
    converter.addRequires('memberStruct');
    return reqLine(required, `memberStruct(${name}, ${members})`, converter);
});
