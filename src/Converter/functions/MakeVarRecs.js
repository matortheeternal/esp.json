let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('MakeVarRecs', [args.enum], ({options}) => options);
