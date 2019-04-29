let {addRequires, functionConverter} = require('../../converter'),
    {arr, args} = require('../../helpers');

functionConverter('wbStructSK', [
    args.sig,
    args.sk,
    args.name,
    args.fields,
    args.identifier,
    args.boolean,
    args.identifier,
    args.number
], ({sig, sk, name, fields}) => {
    addRequires('subrecord', 'sortKey', 'struct');
    return `subrecord('${sig}', sortKey(${sk}, struct('${name}', ${arr(fields)})))`;
});