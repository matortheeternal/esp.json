let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('OverrideEncoding', [
    args.identifier
], (args, converter, opts) => {
    opts.encoding = args.values[0];
});
