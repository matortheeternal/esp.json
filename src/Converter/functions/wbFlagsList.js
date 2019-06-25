let {functionConverter} = require('../converters'),
    {args, stringify} = require('../helpers');

functionConverter('wbFlagsList', [
    args.enum,
    { type: 'boolean', name: 'deleted' },
    { type: 'boolean', name: 'unknowns' }
], (args, converter) => {
    let flags = args.options;
    if (args.deleted) flags[5] = `'Deleted'`;
    flags[12] = `'Ignored'`;
    if (!args.unknowns) return flags;
    converter.addRequires('flags', 'showUnknown');
    return `showUnknown(flags(${stringify(flags)}))`;
});
