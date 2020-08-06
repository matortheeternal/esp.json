let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('SetDefaultEditValue', [
    args.string
], (args, converter, opts) => {
    opts.defaultEditValue = args.values[0].slice(1, -1);
});
