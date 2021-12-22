let {subrecordAndField, functionConverter} = require('../converters'),
    {newLine} = require('../helpers'),
    args = require('../args');

let convertSortedArray = function(args, converter) {
    converter.addRequires('sorted', 'array');
    return `sorted(array(${args.name}, ${newLine(args.element)}))`;
};

// wbInterface.pas#7256
subrecordAndField('wbArrayS', [
    args.name,
    args.field,
    args.count,
    args.conflictType,
    args.required,
    args.afterLoad,
    args.afterSet,
    args.dontShow,
    args.getCP
], convertSortedArray);

// wbInterface.pas#7300
functionConverter('wbArrayS', [
    args.name,
    args.field,
    args.countCallback,
    args.conflictType,
    args.required,
    args.afterLoad,
    args.afterSet,
    args.dontShow,
    args.getCP
], convertSortedArray);
