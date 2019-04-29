let {addRequires, functionConverter} = require('../../converter'),
    {reqLine, args} = require('../../helpers');

functionConverter('wbLString', [
    args.sig,
    args.name,
    args.number,
    args.identifier,
    args.required,
    args.identifier
], ({sig, name, required}) => {
    addRequires('subrecord', 'lstring');
    return reqLine(required, `subrecord('${sig}', lstring(${name}))`);
});