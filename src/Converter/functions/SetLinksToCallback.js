let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('SetLinksToCallback', [
    args.identifier
], (args, converter, opts) => {
    return { linksToCallback: args.values[0], ...opts };
});