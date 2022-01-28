let {subrecordAndField} = require('../converters'),
    args = require('../args');

// localized string with keep case for sort keys
// wbInterface.pas#2616
// wbInterface.pas#2626
subrecordAndField('wbLStringKC', [
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], (args, converter, opts) => {
    converter.addRequires('localized', 'string');
    opts.transform = 'keepcase';
    return `localized(string(${args.name}))`;
});
