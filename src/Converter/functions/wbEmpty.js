let {functionConverter} = require('../converters'),
    {reqLine, args} = require('../helpers');

functionConverter('wbEmpty', [
    args.sig,
    args.name,
    args.identifier,
    args.required,
], ({required, sig, name}, converter) => {
    converter.addRequires('subrecord', 'empty');
    return reqLine(
        required,
        `subrecord('${sig}', empty('${name}'))`,
        converter
    );
});