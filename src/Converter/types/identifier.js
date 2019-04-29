let {typeConverter} = require('../../converter');

let idExpr = /^[a-z][a-z0-9]*/i;

typeConverter('identifier', {
    test: context => context.match(idExpr),
    convert: match => match[0]
});