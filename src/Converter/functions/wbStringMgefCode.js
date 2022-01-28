let {subrecordAndField} = require('../converters'),
    args = require('../args');

// wbInterface.pas#2635
// wbInterface.pas#2645
subrecordAndField('wbStringMgefCode', [
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], (args, converter) => {
    converter.addRequires('mgefCode');
    return `mgefCode(${args.name})`;
});
