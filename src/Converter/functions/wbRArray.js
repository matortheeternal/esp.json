let {functionConverter} = require('../converters'),
    {newLine} = require('../helpers'),
    args = require('../args');

// wbInterface.pas#3176
// subrecord array
functionConverter('wbRArray', [
    args.nameExpr,
    args.member,
    args.conflictType,
    args.required,
    args.afterLoad,
    args.afterSet,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('memberArray');
    return `memberArray(${args.name}, ${newLine(args.member)})`;
});
