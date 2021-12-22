let {functionConverter} = require('../converters'),
    {stringify} = require('../helpers'),
    args = require('../args');

// wbInterface.pas#2446
functionConverter('wbRefRecord', [
    args.sig,
    args.name,
    args.recordFlags,
    args.members,
    args.boolean, // allow unordered
    args.addInfo,
    args.conflictType,
    args.required, // why is this a thing?
    args.afterLoad,
    args.afterSet
], ({sig, name, flags, members}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', ${name}, ` + stringify({
        flags,
        members
    }) + ')';
});

// wbInterface.pas#2435
functionConverter('wbRefRecord', [
    args.sig,
    args.name,
    args.members,
    args.boolean, // allow unordered
    args.addInfo,
    args.conflictType,
    args.required, // why is this a thing?
    args.afterLoad,
    args.afterSet
], ({sig, name, members}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', ${name}, ` + stringify({
        members
    }) + ')';
});
