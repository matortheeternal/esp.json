let {functionConverter} = require('../converters'),
    {args, stringify} = require('../helpers');

functionConverter('wbEnum', [
    args.flags,
    args.enum
], ({flags, options}) => {
    options = Object.assign({}, flags, options || {});
    return stringify(options);
});