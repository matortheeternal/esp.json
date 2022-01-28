let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('Sig2Int', [args.string], args => args.values[0]);
functionConverter('Sig2Int', [args.identifier], args => args.values[0]);
