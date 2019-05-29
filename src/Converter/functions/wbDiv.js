let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbDiv', [
    args.number
], (args, converter) => {
    converter.addRequires('div');
    return `div(${args.values[0]})`;
});