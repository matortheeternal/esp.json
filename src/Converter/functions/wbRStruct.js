let {functionConverter} = require('../converters'),
    args = require('../args');

// wbInterface.pas#3430
functionConverter('wbRStruct', [
    args.name,
    args.members,
    args.signatures,
    args.conflictType,
    args.required,
    args.dontShow,
    args.allowUnordered,
    args.afterLoad,
    args.afterSet,
    args.getCP
], (args, converter) => {
    converter.addRequires('memberStruct');
    return `memberStruct(${args.name}, ${args.members})`;
});
