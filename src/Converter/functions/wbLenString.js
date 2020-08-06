let {subrecordAndField} = require('../converters'),
    args = require('../args');

subrecordAndField('wbLenString', [
    args.name,
    args.prefix,
    args.priority,
    args.required,
    args.dontShow,
    args.getCP
], (foundArgs, converter) => {
    converter.addRequires('string');
    return `string(${foundArgs.name})`;
});
