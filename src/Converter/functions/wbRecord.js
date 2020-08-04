let {functionConverter} = require('../converters'),
    {stringify, args} = require('../helpers');

functionConverter('wbRecord', [
    args.sig,
    args.name,
    { type: 'function', id: 'wbFlags', name: 'flags' },
    args.members,
    args.boolean,
    args.identifier,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.identifier
], ({sig, name, flags, members}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', ${name}, ` + stringify({
        flags,
        members
    }) + ')';
});

functionConverter('wbRecord', [
    args.sig,
    args.name,
    args.members,
    args.boolean,
    args.identifier,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.identifier
], ({sig, name, members}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', ${name}, ` + stringify({
        members
    }) + ')';
});