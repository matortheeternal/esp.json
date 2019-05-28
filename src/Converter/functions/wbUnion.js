let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbUnion', [
    args.name,
    args.identifier,
    args.members,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier
], ({name, members}, converter) => {
    converter.addRequires('union');
    return `union('${name}', ${members})`;
});