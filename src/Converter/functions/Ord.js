let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('Ord', [args.string], args => {
    let str = args.values[0];
    return str.charCodeAt(0);
});