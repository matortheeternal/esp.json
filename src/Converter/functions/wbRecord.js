let {addRequires, functionConverter} = require('../converter'),
    {obj, arr, args} = require('../helpers');

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
], ({sig, name, flags, members}) => {
    addRequires('record');
    return `record('${sig}', '${name}', ` + obj([
        `flags: ${flags}`,
        `members: ${arr(members)}`
    ]);
});