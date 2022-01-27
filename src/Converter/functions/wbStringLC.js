let {subrecordAndField} = require('../converters'),
    args = require('../args');

subrecordAndField('wbStringLC', [
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], (args, converter, opts) => {
    converter.addRequires('string');
    opts.transform = 'lowercase';
    return  `string(${args.name})`;
});
