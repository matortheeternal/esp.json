let {functionConverter} = require('../converters'),
    {stringify} = require('../helpers'),
    args = require('../args');

// wbInterface.pas#5205
functionConverter('wbRecord', [
    args.sig,
    args.name,
    args.flagsFn,
    args.members,
    args.boolean, // allow unordered
    args.addInfo,
    args.conflictType,
    args.boolean, // required
    args.afterLoad,
    args.identifier // afterSet
], (args, converter) => {
    converter.addRequires('record');
    return `record('${args.sig}', ${args.name}, ` + stringify({
        flags: args.flags,
        members: args.members
    }) + ')';
});

// wbInterface.pas#6191
functionConverter('wbRecord', [
    args.sig,
    args.name,
    args.members,
    args.boolean, // allow unordered
    args.addInfo,
    args.conflictType,
    args.boolean, // required
    args.afterLoad,
    args.identifier, // afterSet
    args.isReference
], (args, converter) => {
    converter.addRequires('record');
    return `record('${args.sig}', ${args.name}, ` + stringify({
        members: args.members
    }) + ')';
});
