let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbFormIDCk', [
    args.name,
    args.signatures,
    args.boolean,
    args.conflictPriority,
    args.required,
    args.identifier,
    args.identifier
], ({sig, name, signatures}, converter) => {
    converter.addRequires('ckFormId');
    return `ckFormId(${name}, ${signatures})`;
});