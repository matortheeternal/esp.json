let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbFloatColors', [
    args.name
], ({name}, converter) => {
    converter.addRequires('def');
    return `def('FloatColors', { name: ${name} })`;
});