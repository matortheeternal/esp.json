let {typeConverter} = require('../converter');

let strExpr = /^'((?:[^']+|'')*)'/;

typeConverter('string', {
    test: context => context.match(strExpr),
    convert: match => match[1].replace(/''/g, '\'')
});