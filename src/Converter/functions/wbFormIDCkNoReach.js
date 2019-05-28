let {subrecordAndField, functionConverter} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbFormIDCkNoReach', [
    args.name,
    args.signatures,
    args.boolean,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier
], ({name, signatures}, converter) => {
    converter.addRequires('ckFormId');
    return `ckFormId('${name}', ${signatures})`;
});

functionConverter('wbFormIDCkNoReach', [
    args.name,
    args.signatures,
    { type: 'array of signature' },
    args.boolean,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier
], ({name, signatures}, converter) => {
    converter.addRequires('ckFormId');
    return `ckFormId('${name}', ${signatures})`;
});