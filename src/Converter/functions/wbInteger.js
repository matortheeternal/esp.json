let {subrecordAndField} = require('../converters'),
    {resolveIntFn} = require('../helpers'),
    args = require('../args');

let wbIntegerConvert = (args, converter) => {
    let intFn = resolveIntFn(args.intType);
    converter.addRequires(intFn);
    return `${intFn}(${args.name})`;
};

// wbInterface.pas#2763
subrecordAndField('wbInteger', [
    args.nameExpr,
    args.intType,
    args.format,
    args.priority,
    args.required,
    args.matchSize,
    args.dontShow,
    args.afterSet,
    args.defaultNumber,
    args.getCP
], wbIntegerConvert);

// wbInterface.pas#2776
subrecordAndField('wbInteger', [
    args.nameExpr,
    args.intType,
    args.format,
    args.priority,
    args.required,
    args.dontShow,
    args.afterSet,
    args.defaultNumber,
    args.getCP
], wbIntegerConvert);

// wbInterface.pas#2787
// wbInterface.pas#2800
subrecordAndField('wbInteger', [
    args.nameExpr,
    args.intType,
    args.format,
    args.identifier, // toInt
    args.priority,
    args.required,
    args.dontShow,
    args.afterSet,
    args.defaultNumber,
    args.getCP
], wbIntegerConvert);
