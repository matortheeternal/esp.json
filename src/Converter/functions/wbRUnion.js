let {functionConverter} = require('../converters'),
    args = require('../args');

// wbInterface.pas#7605
functionConverter('wbRUnion', [
    args.name,
    args.members,
    args.signatures,
    args.priority,
    args.required,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('memberUnion');
    return `memberUnion(${args.name}, ${args.members})`;
});
