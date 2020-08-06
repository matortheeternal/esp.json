let {subrecordAndField, functionConverter} = require('../converters'),
    args = require('../args');

let convertFloat = (args, converter) => {
    converter.addRequires('float');
    return `float(${args.name})`
};

// wbInterface.pas#6837
// wbInterface.pas#6867
subrecordAndField('wbFloat', [
    args.name,
    args.priority,
    args.required,
    args.scale,
    args.digits,
    args.dontShow,
    args.normalizer,
    args.defaultNumber,
    args.getCP
], convertFloat);

// wbInterface.pas#6895
functionConverter('wbFloat', [
    args.name,
    args.priority,
    args.required,
    args.dontShow,
    args.afterSet,
    args.normalizer,
    args.defaultNumber,
    args.getCP
], convertFloat);
