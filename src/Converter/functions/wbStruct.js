let {subrecordAndField} = require('../converters'),
    args = require('../args');

// wbInterface.pas#3362
// wbInterface.pas#3374
subrecordAndField('wbStruct', [
    args.name,
    args.fields,
    args.conflictType,
    args.required,
    args.dontShow,
    args.optionalFromElement,
    args.afterLoad,
    args.afterSet,
    args.getCP
], (args, converter) => {
    converter.addRequires('struct');
    return `struct(${args.name}, ${args.fields})`;
});
