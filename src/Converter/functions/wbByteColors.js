let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbByteColors', [
    args.name
], (args, converter) => {
    converter.addRequires('def');
    return `def('ByteColors', { name: ${args.name} })`;
});