let {addRequires, functionConverter} = require('../../converter'),
    {args} = require('../../helpers');

functionConverter('wbByteArray', [
    args.name,
    args.size,
    args.identifier,
    args.boolean,
    args.identifier
], ({name, size}) => {
    addRequires('bytes');
    return `bytes('${name}', ${size})`;
});