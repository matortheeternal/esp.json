let {addRequires, functionConverter} = require('../../converter'),
    {arr, args} = require('../../helpers');

functionConverter('wbStruct', [
    args.sig,
    args.name,
    args.fields,
    args.identifier,
    args.required
], ({sig, name, fields, required}) => {
    addRequires('subrecord', 'struct');
    return reqLine(required, `subrecord('${sig}', struct('${name}', ${arr(fields)}))`);
});