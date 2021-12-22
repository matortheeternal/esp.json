let {subrecordAndField, functionConverter} = require('../converters'),
    {sizeLine} = require('../helpers'),
    args = require('../args');

let convertString = (args, converter) => {
    converter.addRequires('string');
    return `string(${args.name})`;
};

// wbInterface.pas#2482
// wbInterface.pas#2492
subrecordAndField('wbString', [
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], convertString);

// wbInterface.pas#2511
functionConverter('wbString', [
    args.boolean, // forward
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], convertString);
