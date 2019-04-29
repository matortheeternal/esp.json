let {addRequires, functionConverter} = require('../converter'),
    {reqLine, args} = require('../helpers');

functionConverter('wbFormIDCk', [
    args.sig,
    args.name,
    args.signatures,
    args.boolean,
    args.identifier,
    args.required
], ({sig, name, signatures, required}) => {
    addRequires('subrecord', 'ckFormId');
    return reqLine(required, `subrecord('${sig}', ckFormId(` +
        `'${name}', ${signatures}))`);
});