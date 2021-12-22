let {functionConverter} = require('../converters'),
    {newLine} = require('../helpers'),
    args = require('../args');

// wbInterface.pas#3498
functionConverter('wbRStructs', [
    args.name,
    args.elementName,
    args.members,
    args.signatures,
    args.conflictType,
    args.required,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('memberArray', 'memberStruct');
    let memberStructArg = `memberStruct(${args.elementName}, ${args.members})`;
    return `memberArray(${args.name}, ${newLine(memberStructArg)})`;
});
