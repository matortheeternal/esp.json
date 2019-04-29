let {typeConverter} = require('../converter');

let sigExpr = /^([A-Z]{1}[A-Z0-9]{3})/;

typeConverter('signature', {
    test: context => context.match(sigExpr),
    convert: match => match[1]
});