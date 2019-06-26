let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('Sig2Int', [args.string], args => `'${args.values[0]}'`);
