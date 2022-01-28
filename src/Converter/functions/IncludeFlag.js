let {functionConverter} = require('../converters');

let flags = {
    dfNotAlignable: 'notAlignable',
    dfZeroSortKey: 'zeroSortKey',
    dfInternalEditOnly: 'protected',
    dfCollapsed: 'collapsed',
    dfNoReport: 'noReport',
    dfTranslatable: 'translatable',
    dfAllowAnyMember: 'allowAnyMember'
};

let truthyExprs = [
    'not wbAllowMasterFilesEdit'
];

functionConverter('IncludeFlag', [
    { type: 'boolExpr' },
    { type: 'boolExpr' }
], (args, converter, opts) => {
    let dataFlagName = args.values[0];
    let key = dataFlagName && flags[dataFlagName];
    let apply = !args.values[1] || truthyExprs.includes(args.values[1]);
    if (!key || !apply) return;
    if (!opts.defFlags) opts.defFlags = [];
    opts.defFlags.push(key);
});
