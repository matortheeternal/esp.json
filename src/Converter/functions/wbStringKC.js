let {subrecordAndField} = require('../converters'),
    args = require('../args');

subrecordAndField('wbStringKC', [
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], (args, converter, opts) => {
    converter.addRequires('string');
    opts.transform = 'keepcase';
    return  `string(${args.name})`;
});
