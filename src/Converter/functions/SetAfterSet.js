let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('SetAfterSet', [
    args.identifier
], (args, converter, opts) => {
    return { afterSet: args.values[0], ...opts };
});