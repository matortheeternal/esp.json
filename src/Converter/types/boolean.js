let {typeConverter} = require('../../converter');

let boolExpr = /^true|false/i;

typeConverter('boolean', {
    test: context => context.match(boolExpr),
    convert: match => match[0].toLowerCase()
});