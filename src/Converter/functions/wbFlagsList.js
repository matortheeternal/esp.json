let {functionConverter} = require('../../converter'),
    {args} = require('../../helpers');

functionConverter('wbFlagsList', [args.enum], ({options}) => options);