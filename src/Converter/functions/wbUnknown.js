let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbUnknown', [
    args.conflictPriority,
    args.required
], (args, converter) => {
    converter.addRequires('unknown');
    return `unknown()`;
});