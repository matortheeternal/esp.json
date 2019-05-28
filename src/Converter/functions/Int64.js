let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('Int64', [args.number], args => args.values[0]);