let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbFlagsList', [
    args.enum,
    args.boolean
], args => args.options);