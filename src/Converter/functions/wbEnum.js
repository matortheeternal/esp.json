let {functionConverter} = require('../converters'),
    {args, stringify} = require('../helpers');

functionConverter('wbEnum', [
    args.flags,
    args.enum
], ({flags, options}, converter) => {
    converter.addRequires('enumeration');
    options = Object.assign({}, flags, options || {});
    return `enumeration(${stringify(options)})`;
});
