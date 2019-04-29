let {functionConverter} = require('../converter'),
    {args} = require('../helpers');

let convertFlags = ({flags}) => {
    return JSON.stringify(flags, null, 2);
};

// inherit flags
functionConverter('wbFlags', [
    args.identifier,
    { type: 'function', id: 'wbFlagsList', name: 'flags' }
], convertFlags);

// new flags
functionConverter('wbFlags', [args.flags], convertFlags);