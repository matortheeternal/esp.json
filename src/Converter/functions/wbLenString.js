let {subrecordAndField} = require('../converters'),
    args = require('../args');

subrecordAndField('wbLenString', [
    args.name,
    args.prefix,
    args.priority,
    args.required,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('string');
    return `string(${args.name})`;
});
