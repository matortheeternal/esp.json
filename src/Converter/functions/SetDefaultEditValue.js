let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('SetDefaultEditValue', [
    args.string
], (args, converter, opts) => {
    return { defaultEditValue: args.values[0], ...opts };
});