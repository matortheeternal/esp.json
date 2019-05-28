let {functionConverter} = require('../converters'),
    {obj, args} = require('../helpers');

functionConverter('wbRecord', [
    args.sig,
    args.name,
    { type: 'function', id: 'wbFlags', name: 'flags' },
    args.members,
    args.boolean,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({sig, name, flags, members}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', '${name}', ` + obj([
        `flags: ${flags}`,
        `members: ${members}`
    ]) + ')';
});

functionConverter('wbRecord', [
    args.sig,
    args.name,
    args.members,
    args.boolean,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({sig, name, members}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', '${name}', ` + obj([
        `members: ${members}`
    ]) + ')';
});