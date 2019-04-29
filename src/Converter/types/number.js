let {typeConverter} = require('../../converter');

let numberExpr = /^-?[0-9]+/;

typeConverter('number', {
    test: context => context.match(numberExpr),
    convert: match => match[0]
});