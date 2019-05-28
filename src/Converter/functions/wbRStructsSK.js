let {functionConverter} = require('../converters'),
    {args, reqLine} = require('../helpers');

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
    converter.addRequires('arrayOfMultiStruct', 'sortKey', 'multiStruct');
    let multiStructArg = `multiStruct(${structName}, ${members})`,
        skArg = `sortKey(${sk}, ${multiStructArg})`,
        line = `arrayOfMultiStruct('${name}', ${skArg})`;
    return reqLine(required, line, converter);
});