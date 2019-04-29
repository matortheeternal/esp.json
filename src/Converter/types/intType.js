let {typeConverter} = require('../../converter');

let intTypeExpr = /^it[US](?:8|16|24|32|64)/;

typeConverter('intType', {
    test: context => context.match(intTypeExpr),
    convert: match => match[0]
});