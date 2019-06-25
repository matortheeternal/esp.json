let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

let setUnknowns = function(flags) {
    for (let i = 0; i < 32; i++) {
        if (flags.hasOwnProperty(i)) continue;
        flags[i] = `'Unknown ${i}'`;
    }
};

functionConverter('wbFlagsList', [
    args.enum,
    { type: 'boolean', name: 'deleted' },
    { type: 'boolean', name: 'unknowns' }
], args => {
    let flags = args.options;
    if (args.deleted) flags[5] = `'Deleted'`;
    flags[12] = `'Ignored'`;
    if (args.unknowns) setUnknowns(flags);
    return flags;
});
