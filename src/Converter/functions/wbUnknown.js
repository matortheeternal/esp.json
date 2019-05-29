let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbUnknown', [
    args.identifier,
    args.required
], (args, converter) => {
    converter.addRequires('unknown');
    return `unknown()`;
});