let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('SetLinksToCallback', [
    args.identifier
], (args, converter, opts) => {
    opts.linksToCallback = args.values[0];
});
