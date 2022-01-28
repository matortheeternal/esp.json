let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('SetDefaultEditValue', [
    args.string
], (args, converter, opts) => {
    opts.defaultValue = args.values[0].slice(1, -1);
});
