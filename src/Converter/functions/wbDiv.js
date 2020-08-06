let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbDiv', [
    args.number
], (args, converter) => {
    converter.addRequires('div');
    return `div(${args.values[0]})`;
});