let {subrecordAndField} = require('../converters'),
    args = require('../args');

// wbInterface.pas#7800
subrecordAndField('wbFormID', [
    args.name,
    args.conflictType,
    args.required,
    args.dontShow,
    args.getCP
], (args, converter) => {
    converter.addRequires('formId');
    return `formId(${args.name})`;
});
