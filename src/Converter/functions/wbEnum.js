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

functionConverter('wbEnum', [
    args.flags,
    args.identifier
], (args, converter) => {
    converter.addRequires('enumeration');
    let options = Object.assign(
        {},
        args.flags,
        converter.getData(args.values[1]) || {}
    );
    return `enumeration(${stringify(options)})`;
});
