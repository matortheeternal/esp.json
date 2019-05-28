let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbByteColors', [
    args.name
], ({name}, converter) => {
    converter.addRequires('def');
    return `def('ByteColors', { name: '${name}' })`;
});