let {addRequires, functionConverter} = require('../converter'),
    {reqLine, args} = require('../helpers');

functionConverter('wbEmpty', [
    args.sig,
    args.name,
    args.identifier,
    args.required,
], ({sig, name, required}) => {
    addRequires('subrecord', 'empty');
    return reqLine(required, `subrecord('${sig}', empty('${name}'))`);
});