let {functionConverter} = require('../converters'),
    {newLine} = require('../helpers'),
    args = require('../args');

functionConverter('wbRStructsSK', [
    args.name,
    args.elementName,
    args.sk,
    args.members,
    args.signatures,
    args.priority,
    args.required,
    args.afterLoad,
    args.afterSet,
    args.dontShow,
    args.getCP
], (args, converter) => {
    let {name, elementName, sk, members} = args;
    converter.addRequires('memberArray', 'sortKey', 'memberStruct');
    let memberStructArg = `memberStruct(${elementName}, ${members})`,
        skArg = `sortKey(${sk}, ${memberStructArg})`;
    return `memberArray(${name}, ${newLine(skArg)})`;
});
