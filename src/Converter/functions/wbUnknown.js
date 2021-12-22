let {subrecordAndField} = require('../converters'),
    args = require('../args');

// wbInterface.pas#6680
// wbInterface.pas#6690
subrecordAndField('wbUnknown', [
    args.conflictType,
    args.required,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('unknown');
    return `unknown()`;
});
