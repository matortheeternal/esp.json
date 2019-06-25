let {functionConverter} = require('../converters'),
    {args, reqLine, newLine} = require('../helpers');

functionConverter('wbRStructsSK', [
    args.name,
    { type: 'string', name: 'structName' },
    args.sk,
    args.members,
    args.signatures,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, structName, sk, members, required}, converter) => {
    converter.addRequires('memberArray', 'sortKey', 'memberStruct');
    let memberStructArg = `memberStruct(${structName}, ${members})`,
        skArg = `sortKey(${sk}, ${memberStructArg})`,
        line = `memberArray(${name}, ${newLine(skArg)})`;
    return reqLine(required, line, converter);
});
