let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbByteArray', [
    args.name,
    args.size,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, size}, converter) => {
    converter.addRequires('bytes');
    return `bytes('${name}', ${size || 0})`;
});