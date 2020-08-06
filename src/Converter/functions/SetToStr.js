let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('SetToStr', [
    args.identifier
], (args, converter, opts) => {
    //opts.toStr = args.values[0];
});
