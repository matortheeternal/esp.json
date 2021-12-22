let {subrecordAndField} = require('../converters'),
    args = require('../args');

let convertUnion = function(args, converter) {
    let {name, decider, members} = args;
    converter.addRequires('union');
    return `union(${name}, '${decider}', ${members})`;
};

// wbInterface.pas#6596
// wbInterface.pas#6609
subrecordAndField('wbUnion', [
    args.name,
    args.decider,
    args.members,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], convertUnion);
