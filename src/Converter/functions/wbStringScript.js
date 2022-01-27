let {subrecordAndField} = require('../converters'),
    args = require('../args');

let convertStringScript = (args, converter, opts) => {
    converter.addRequires('string');
    opts.transform = 'script';
    return `string(${args.name})`;
};

// wbInterface.pas#2540
// wbInterface.pas#2550
subrecordAndField('wbStringScript', [
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], convertStringScript);
