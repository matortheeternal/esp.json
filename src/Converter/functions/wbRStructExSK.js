let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbRStructExSK', [
    args.sk,
    args.exSk,
    args.name,
    args.fields,
    args.signatures
], ({sk, exSk, name, fields}, converter) => {
    converter.addRequires('sortKey', 'multiStruct');
    let structDef = `multiStruct(${name}, ${fields})`;
    return `sortKey(${sk}, ${structDef})`;
});