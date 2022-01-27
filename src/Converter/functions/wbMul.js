let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbMul', [
    args.number
], (args, converter) => {
    converter.addRequires('mul');
    return `mul(${args.values[0]})`;
});
