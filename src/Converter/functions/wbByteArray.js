let {subrecordAndField} = require('../converters'),
    {args, prefixSize} = require('../helpers');

subrecordAndField('wbByteArray', [
    args.name,
    args.size,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, size}, converter) => {
    converter.addRequires('bytes');
    let line = `bytes(${name})`;
    return prefixSize(size, line, converter);
});
