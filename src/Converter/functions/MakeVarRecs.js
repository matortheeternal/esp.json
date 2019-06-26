let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('MakeVarRecs', [args.enum], ({options}) => options);
