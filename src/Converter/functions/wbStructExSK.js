let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbStructExSK', [
    args.sig,
    args.sk,
    args.exSk,
    args.name,
    args.fields
], ({sig, sk, exSk, name, fields}, converter) => {
    converter.addRequires('subrecord', 'sortKey', 'struct');
    let structDef = `struct(${name}, ${fields})`,
        sortKeyDef = `sortKey(${sk}, ${structDef})`;
    return `subrecord('${sig}', ${sortKeyDef})`;
});