let {subrecordAndField} = require('../converters'),
    args = require('../args');

// wbInterface.pas#3521
subrecordAndField('wbEmpty', [
    args.name,
    args.conflictType,
    args.required,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('empty');
    return `empty(${args.name})`;
});
