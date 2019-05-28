let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('OverrideEncoding', [
    args.identifier
], (args, converter, opts) => {
    return { encoding: args.values[0], ...opts };
});