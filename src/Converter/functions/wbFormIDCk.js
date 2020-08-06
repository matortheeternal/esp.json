let {subrecordAndField} = require('../converters'),
    args = require('../args');

let convertFormIdCk = function(args, converter) {
    converter.addRequires('ckFormId');
    return `ckFormId(${args.name}, ${args.signatures})`;
};

subrecordAndField('wbFormIDCk', [
    args.name,
    args.signatures,
    args.persistent,
    args.priority,
    args.required,
    args.dontShow,
    args.afterSet
], convertFormIdCk);

subrecordAndField('wbFormIDCk', [
    args.name,
    args.signatures,
    args.validFlstRefs,
    args.persistent,
    args.priority,
    args.required,
    args.dontShow,
    args.afterSet
], convertFormIdCk);