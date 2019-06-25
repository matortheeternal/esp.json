let {functionConverter} = require('../converters'),
    {args, stringify} = require('../helpers');

functionConverter('wbFlagsList', [
    args.enum,
    { type: 'boolean', name: 'deleted' },
    { type: 'boolean', name: 'unknowns' }
], ({options, deleted, unknowns}, converter) => {
    if (deleted) options[5] = `'Deleted'`;
    options[12] = `'Ignored'`;
    if (!unknowns) return options;
    converter.addRequires('flags', 'showUnknown');
    return `showUnknown(flags(${stringify(options)}))`;
});
