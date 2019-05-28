let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbEnum', [
    args.flags,
    args.enum
], ({flags, options}) => {
    options = Object.assign({}, flags, options || {});
    return JSON.stringify(options, null, 4);
});