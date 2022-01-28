let {functionConverter} = require('../converters'),
    args = require('../args');

let convertRecursive = (args, converter) => {
    converter.addRequires('recursive');
    return `recursive(${args.name}, ${args.levelsUp})`;
};

// wbInterface.pas#2707
functionConverter('wbRecursive', [
    args.name,
    args.levelsUp,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], convertRecursive);
