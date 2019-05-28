let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbAmbientColors', [
    args.sig,
    args.name
], ({sig, name}, converter) => {
    converter.addRequires('subrecord', 'def');
    let defArg = `def('wbAmbientColors', { name: '${name}' })`;
    return `subrecord('${sig}', ${defArg})`;
});