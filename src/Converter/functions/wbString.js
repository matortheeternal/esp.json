let {subrecordAndField, functionConverter} = require('../converters'),
    {sizeLine, args} = require('../helpers');

subrecordAndField('wbString', [
    args.name,
    args.size,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, size}, converter) => {
    converter.addRequires('string');
    return sizeLine(size, `string(${name})`, converter);
});

functionConverter('wbString', [
    args.boolean,
    args.name,
    args.size
], ({name, size}, converter) => {
    converter.addRequires('string');
    return sizeLine(size, `string(${name})`, converter);
});
