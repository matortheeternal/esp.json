let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('SetAfterSet', [
    args.identifier
], (args, converter, opts) => {
    opts.afterSet = args.values[0];
});
