let {functionConverter} = require('../converters'),
    {args, newLine} = require('../helpers');

// subrecord array
functionConverter('wbRArray', [
    { type: 'stringExpr', name: 'name' },
    args.member,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, member}, converter) => {
    converter.addRequires('arrayOfSubrecord');
    return `arrayOfSubrecord(${name}, ${newLine(member)})`;
});
