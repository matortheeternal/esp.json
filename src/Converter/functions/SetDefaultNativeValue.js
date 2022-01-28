let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('SetDefaultNativeValue', [
    args.number
], (args, converter, opts) => {
    opts.defaultData = args.values[0];
});
