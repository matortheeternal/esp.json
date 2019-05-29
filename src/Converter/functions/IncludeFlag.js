let {functionConverter} = require('../converters');

functionConverter('IncludeFlag', [
    { type: 'boolExpr' },
    { type: 'boolExpr' }
], (args, converter, opts) => {
    return { includeFlag: args.values[0], ...opts };
});