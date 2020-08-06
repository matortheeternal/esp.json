let {functionConverter} = require('../converters'),
    {stringify} = require('../helpers'),
    args = require('../args');

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
    let options = converter.getData(args.values[1]);
    options = Object.assign({}, args.flags, options || {});
    return `enumeration(${stringify(options)})`;
});
