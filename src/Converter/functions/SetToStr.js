let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('SetToStr', [
    args.identifier
], (args, converter, opts) => {
    return { toStr: args.values[0], ...opts };
});