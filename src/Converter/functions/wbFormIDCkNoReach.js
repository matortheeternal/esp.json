let {subrecordAndField, functionConverter} = require('../converters'),
    args = require('../args');

// TODO: what is NoReach?
let convertFormIdCkNoReach = function(args, converter) {
    converter.addRequires('ckFormId');
    return `ckFormId(${args.name}, ${args.signatures})`;
};

subrecordAndField('wbFormIDCkNoReach', [
    args.name,
    args.signatures,
    args.persistent,
    args.priority,
    args.required,
    args.dontShow,
    args.getCP
], convertFormIdCkNoReach);

functionConverter('wbFormIDCkNoReach', [
    args.name,
    args.signatures,
    args.validFlstRefs,
    args.persistent,
    args.priority,
    args.required,
    args.dontShow,
    args.getCP
], convertFormIdCkNoReach);