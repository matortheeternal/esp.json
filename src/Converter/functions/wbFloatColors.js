let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbFloatColors', [
    args.name
], (args, converter) => {
    converter.addRequires('def');
    return `def('FloatColors', { name: ${args.name} })`;
});