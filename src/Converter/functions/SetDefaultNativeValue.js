let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('SetDefaultNativeValue', [
    args.number
], (args, converter, opts) => {
    return { defaultNativeValue: args.values[0], ...opts };
});