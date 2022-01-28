let {functionConverter} = require('../converters'),
    {newLine} = require('../helpers'),
    args = require('../args');

// wbInterface.pas#3498
functionConverter('wbStructs', [
    args.sig,
    args.name,
    args.elementName,
    args.members,
    args.conflictType,
    args.required,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('subrecord', 'array', 'struct');
    let structArg = `struct(${args.elementName}, ${args.members})`;
    return `subrecord(${args.sig}, array(${args.name}, ${newLine(structArg)}))`;
});
