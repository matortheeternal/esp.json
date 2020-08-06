let {subrecordAndField} = require('../converters'),
    args = require('../args');

let convertByteArray = function(args, converter) {
    converter.addRequires('bytes');
    return `bytes(${args.name || 'Unknown'})`;
};

subrecordAndField('wbByteArray', [
    args.name,
    args.size,
    args.priority,
    args.required,
    args.dontShow,
    args.getCP
], convertByteArray);
