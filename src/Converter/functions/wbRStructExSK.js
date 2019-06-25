let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbRStructExSK', [
    args.sk,
    args.exSk,
    args.name,
    args.fields,
    args.signatures
], ({sk, exSk, name, fields}, converter) => {
    converter.addRequires('sortKey', 'memberStruct');
    let structDef = `memberStruct(${name}, ${fields})`;
    return `sortKey(${sk}, ${structDef})`;
});
