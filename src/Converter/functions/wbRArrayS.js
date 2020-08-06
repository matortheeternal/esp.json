let {functionConverter} = require('../converters'),
    {newLine} = require('../helpers'),
    args = require('../args');

// wbInterface.pas#3267
// sorted subrecord array
functionConverter('wbRArrayS', [
    args.name,
    args.member,
    args.priority,
    args.required,
    args.afterLoad,
    args.afterSet,
    args.dontShow,
    args.isSorted,
    args.getCP
], (args, converter) => {
    converter.addRequires('sorted', 'memberArray');
    return `sorted(memberArray(${args.name}, ${newLine(args.member)}))`;
});
