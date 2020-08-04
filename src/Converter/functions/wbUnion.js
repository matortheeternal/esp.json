let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbUnion', [
    args.name,
    args.decider,
    args.members,
    args.conflictPriority,
    args.required,
    args.identifier,
    args.identifier
], ({name, decider, members}, converter) => {
    converter.addRequires('union');
    return `union(${name}, '${decider}', ${members})`;
});
