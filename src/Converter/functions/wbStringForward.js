let {functionConverter} = require('../converters'),
    args = require('../args');

// wbInterface.pas#2501
// TODO: What is forward?
functionConverter('wbStringForward', [
    args.sig,
    args.name,
    args.stringSize,
    args.priority,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], (args, converter) => {
    converter.addRequires('subrecord', 'string');
    return `subrecord('${args.sig}', string(${args.name}))`;
});
