let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('AddOverlay', [
    args.identifier
], (args, converter, opts) => {
    opts.overlayCallback = args.values[0];
});
